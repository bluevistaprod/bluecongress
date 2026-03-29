import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    eventType: '',
    participants: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        phone: '',
        company: '',
        eventType: '',
        participants: '',
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
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold text-center mb-6">Contactez-Nous</h1>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Parlons de votre prochain événement. Notre équipe est prête à vous aider.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold mb-8">Informations de Contact</h2>
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-muted-foreground">contact@bluevista.fr</p>
                      <p className="text-muted-foreground">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-secondary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Téléphone</h3>
                      <p className="text-muted-foreground">+33 (0)X XX XX XX XX</p>
                      <p className="text-muted-foreground">Lun-Ven 9h-18h</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-accent" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Adresse</h3>
                      <p className="text-muted-foreground">Bluevista Production</p>
                      <p className="text-muted-foreground">France</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h3 className="font-semibold mb-4">Horaires</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>Lundi - Vendredi: 9h00 - 18h00</li>
                    <li>Samedi - Dimanche: Fermé</li>
                    <li>Jours fériés: Fermé</li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-card rounded-xl p-8 border border-border">
                  <h2 className="text-2xl font-bold mb-6">Envoyez-Nous un Message</h2>
                  
                  {submitted ? (
                    <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center">
                      <div className="text-4xl mb-4">✓</div>
                      <h3 className="text-xl font-bold mb-2 text-accent">Message Envoyé !</h3>
                      <p className="text-muted-foreground">
                        Merci pour votre message. Notre équipe vous contactera dans les 24 heures.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Nom *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Votre nom"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Téléphone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="+33 (0)X XX XX XX XX"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Entreprise</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Votre entreprise"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold mb-2">Type d'Événement</label>
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Sélectionnez un type</option>
                            <option value="medical">Congrès Médical</option>
                            <option value="scientific">Congrès Scientifique</option>
                            <option value="corporate">Événement Corporate</option>
                            <option value="seminar">Séminaire</option>
                            <option value="other">Autre</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold mb-2">Nombre de Participants</label>
                          <select
                            name="participants"
                            value={formData.participants}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          >
                            <option value="">Sélectionnez une plage</option>
                            <option value="50-100">50 - 100</option>
                            <option value="100-300">100 - 300</option>
                            <option value="300-500">300 - 500</option>
                            <option value="500-1000">500 - 1000</option>
                            <option value="1000+">1000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2">Message *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                          placeholder="Décrivez votre projet et vos besoins..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full flex items-center justify-center gap-2"
                      >
                        <Send size={20} />
                        Envoyer le Message
                      </button>

                      <p className="text-xs text-muted-foreground">
                        * Champs obligatoires. Nous respectons votre vie privée et ne partagerons jamais vos données.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-6">Vous Préférez un Appel Téléphonique ?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Notre équipe est disponible pour discuter directement de votre projet et répondre à toutes vos questions.
            </p>
            <a href="tel:+33XXXXXXXXXX" className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition">
              Appelez-Nous Maintenant
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
