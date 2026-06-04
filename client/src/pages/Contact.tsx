import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-[#0A2540] via-[#003087] to-[#0A2540]">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6 text-white">
              Demandez une démonstration personnalisée
            </h1>
            <p className="text-center text-gray-200 text-xl max-w-2xl mx-auto">
              Découvrez comment Pulse Congress peut simplifier l'organisation de votre prochain congrès.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-gray-50">
          <div className="container max-w-2xl">
            <div className="bg-white rounded-xl p-8 shadow-md">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="flex justify-center mb-6">
                    <CheckCircle2 size={64} className="text-[#00C4B4]" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-[#0A2540]">Merci pour votre demande !</h3>
                  <p className="text-gray-700 mb-2">
                    Nous avons bien reçu votre message.
                  </p>
                  <p className="text-gray-600">
                    Notre équipe vous contactera dans les 24 heures ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0A2540]">Nom *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[#00C4B4]/20"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0A2540]">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[#00C4B4]/20"
                      placeholder="votre@email.com"
                    />
                  </div>

                  {/* Organisation */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0A2540]">Organisation *</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[#00C4B4]/20"
                      placeholder="Votre organisation"
                    />
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0A2540]">Téléphone (optionnel)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[#00C4B4]/20"
                      placeholder="+33 (0)X XX XX XX XX"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[#0A2540]">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#00C4B4] focus:ring-2 focus:ring-[#00C4B4]/20"
                      placeholder="Décrivez votre projet et vos besoins..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#00C4B4] hover:bg-[#00C4B4]/90 text-[#0A2540] font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition"
                  >
                    <Send size={20} />
                    Demander une démonstration
                  </button>

                  {/* Reassurance Message */}
                  <div className="bg-[#00C4B4]/10 border-l-4 border-[#00C4B4] p-4 rounded">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold text-[#00C4B4]">✓ Réponse sous 24h ouvrées</span>
                    </p>
                  </div>

                  <p className="text-xs text-gray-600">
                    * Champs obligatoires. Nous respectons votre vie privée et ne partagerons jamais vos données.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
