import { router, publicProcedure } from '../_core/trpc';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { ENV } from '../_core/env';

const contactInput = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  organization: z.string().trim().max(200).optional().default(''),
  phone: z.string().trim().max(60).optional().default(''),
  message: z.string().trim().min(1).max(5000),
  // Honeypot anti-bot : champ caché, doit rester vide. Rempli = robot.
  website: z.string().max(0).optional().default(''),
});

export const contactRouter = router({
  send: publicProcedure.input(contactInput).mutation(async ({ input }) => {
    // Piège à bots : si le honeypot est rempli, on fait comme si tout allait bien (on ignore).
    if (input.website && input.website.length > 0) {
      return { ok: true } as const;
    }

    const subject = `Nouveau contact site — ${input.name}${input.organization ? ` (${input.organization})` : ''}`;
    const text = [
      `Nom : ${input.name}`,
      `Email : ${input.email}`,
      input.organization ? `Organisation : ${input.organization}` : null,
      input.phone ? `Téléphone : ${input.phone}` : null,
      '',
      'Message :',
      input.message,
    ].filter(Boolean).join('\n');

    // SMTP non configuré (dev) : on journalise et on renvoie OK pour ne pas casser l'UX.
    if (!ENV.smtpHost || !ENV.smtpUser || !ENV.smtpPass) {
      console.warn('[contact] SMTP non configuré — message NON envoyé (journalisé seulement) :\n' + text);
      return { ok: true, delivered: false } as const;
    }

    const transporter = nodemailer.createTransport({
      host: ENV.smtpHost,
      port: ENV.smtpPort,
      secure: ENV.smtpPort === 465,
      auth: { user: ENV.smtpUser, pass: ENV.smtpPass },
    });

    await transporter.sendMail({
      from: ENV.contactFrom || ENV.smtpUser,
      to: ENV.contactTo,
      replyTo: input.email,
      subject,
      text,
    });

    return { ok: true, delivered: true } as const;
  }),
});
