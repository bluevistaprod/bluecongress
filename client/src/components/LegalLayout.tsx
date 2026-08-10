import type { ReactNode } from 'react';
import { Link } from 'wouter';
import Header from './Header';
import Footer from './Footer';
import { Reveal } from './Reveal';
import { LEGAL } from '@/lib/legal';

/**
 * Coquille commune aux trois pages légales (mentions, confidentialité, CGV).
 *
 * Elles n'ont pas à vendre : lecture confortable, hiérarchie claire, pas d'animation
 * qui retarde l'accès au texte. Un seul endroit pour la typographie de ces pages.
 */

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl md:text-2xl font-bold text-[#00E5C8] mb-4">{title}</h2>
      <div className="space-y-4 text-slate-300 leading-relaxed">{children}</div>
    </section>
  );
}

export default function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-32 pb-10 md:pt-40 md:pb-14">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-30" />
          <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-[#00C4B4]/10 blur-[130px]" />
          <div className="container max-w-3xl">
            <Reveal>
              <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-[1.1]">{title}</h1>
              <p className="text-slate-500 text-sm">Dernière mise à jour : {LEGAL.miseAJour}</p>
              {intro && <div className="mt-6 text-slate-300 leading-relaxed">{intro}</div>}
            </Reveal>
          </div>
        </section>

        <section className="pb-20 md:pb-28">
          <div className="container max-w-3xl">
            <div className="rounded-3xl p-7 md:p-10 bg-white/[0.03] border border-white/10">{children}</div>

            <p className="mt-8 text-sm text-slate-500">
              Une question sur ce document ?{' '}
              <Link href={LEGAL.contactPath} className="text-[#00E5C8] hover:underline">
                Écrivez-nous
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
