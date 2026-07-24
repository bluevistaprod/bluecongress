import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Reveal, DEMO_PATH } from '@/components/Reveal';
import { trpc } from '@/lib/trpc';

const EMPTY = { name: '', email: '', organization: '', phone: '', message: '', website: '' };
const inputCls =
  'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[#00C4B4]/20 transition';

export default function Contact() {
  const [form, setForm] = useState(EMPTY);
  const mutation = trpc.contact.send.useMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(form, { onSuccess: () => setForm(EMPTY) });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#071A2F] text-white">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="absolute inset-0 -z-10 v2-aurora opacity-40" />
          <div className="absolute -z-10 top-[-20%] left-1/2 -translate-x-1/2 w-[44rem] h-[44rem] rounded-full bg-[#00C4B4]/15 blur-[130px]" />
          <div className="container">
            <Reveal>
              <h1 className="font-display text-4xl md:text-6xl font-bold text-center mb-6 leading-[1.05]">
                Une question ? Écrivez-nous
              </h1>
              <p className="text-center text-slate-300 text-lg max-w-2xl mx-auto">
                Dites-nous en quelques mots votre projet ou votre besoin — notre équipe vous répond sous 24 h ouvrées.
                Vous préférez une démo en direct ?{' '}
                <Link href={DEMO_PATH} className="text-[#00E5C8] hover:underline">Réservez un créneau</Link>.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FORMULAIRE */}
        <section className="py-16 md:py-24">
          <div className="container max-w-2xl">
            <Reveal>
              <div className="rounded-3xl p-8 md:p-10 bg-white/[0.04] border border-white/10">
                {mutation.isSuccess ? (
                  <div className="text-center py-10">
                    <CheckCircle2 size={64} className="text-[#00E5C8] mx-auto mb-6" />
                    <h3 className="font-display text-2xl font-bold mb-3">Merci pour votre message !</h3>
                    <p className="text-slate-300">Nous avons bien reçu votre demande — réponse sous 24 h ouvrées.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Honeypot anti-bot (caché) */}
                    <input
                      type="text" name="website" tabIndex={-1} autoComplete="off"
                      value={form.website} onChange={handleChange}
                      className="hidden" aria-hidden="true"
                    />

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-200">Nom *</label>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputCls} placeholder="Votre nom" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-200">Email *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder="vous@organisation.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-200">Organisation</label>
                      <input type="text" name="organization" value={form.organization} onChange={handleChange} className={inputCls} placeholder="Votre organisation" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-200">Téléphone (optionnel)</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={inputCls} placeholder="+33 (0)X XX XX XX XX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-slate-200">Message *</label>
                      <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className={inputCls} placeholder="Décrivez votre projet et vos besoins…" />
                    </div>

                    {mutation.isError && (
                      <div className="flex items-start gap-3 rounded-xl p-4 bg-red-500/10 border border-red-500/30">
                        <AlertCircle size={20} className="text-red-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-200">Une erreur est survenue à l'envoi. Réessayez, ou réservez directement une démo.</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={mutation.isPending}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#00E5C8] text-[#0A2540] font-semibold py-3.5 px-6 rounded-xl hover:shadow-[0_8px_30px_rgba(0,229,200,0.45)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      <Send size={18} />
                      {mutation.isPending ? 'Envoi en cours…' : 'Envoyer le message'}
                    </button>

                    <div className="rounded-xl p-4 bg-[#00C4B4]/10 border border-[#00C4B4]/20">
                      <p className="text-sm text-slate-200"><span className="font-semibold text-[#00E5C8]">✓ Réponse sous 24 h ouvrées</span></p>
                    </div>
                    <p className="text-xs text-slate-500">* Champs obligatoires. Nous respectons votre vie privée et ne partagerons jamais vos données.</p>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA démo */}
        <section className="pb-24">
          <div className="container text-center">
            <Reveal>
              <Link href={DEMO_PATH} className="group inline-flex items-center gap-2 text-[#00E5C8] font-semibold hover:gap-3 transition-all">
                Ou réservez directement une démonstration
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
