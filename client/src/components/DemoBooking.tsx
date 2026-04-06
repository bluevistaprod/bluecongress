import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Check } from 'lucide-react';
import { trpc } from '@/lib/trpc';

interface TimeSlot {
  time: string;
  available: boolean;
}

interface DemoBookingProps {
  onSubmit?: (data: BookingData) => void;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  company: string;
  date: string;
  time: string;
  packType: 'essential' | 'premium';
  message: string;
}

const TIME_SLOTS: TimeSlot[] = [
  { time: '09:00', available: true },
  { time: '10:00', available: true },
  { time: '11:00', available: false },
  { time: '14:00', available: true },
  { time: '15:00', available: true },
  { time: '16:00', available: true },
];

export default function DemoBooking({ onSubmit }: DemoBookingProps) {
  const { data: offers, isLoading } = trpc.offers.getAll.useQuery();
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    packType: 'essential',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  
  const essentialOffer = offers?.find(o => o.id === 'essential');
  const premiumOffer = offers?.find(o => o.id === 'premium');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo booking submitted:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        date: '',
        time: '',
        packType: 'essential',
        message: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  // Get next 7 days
  const getNextDays = () => {
    const days = [];
    for (let i = 1; i <= 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const nextDays = getNextDays();

  return (
    <div className="bg-card rounded-xl p-8 border border-border">
      <h2 className="text-3xl font-bold mb-2">Réservez Votre Démo Personnalisée</h2>
      <p className="text-muted-foreground mb-8">
        Découvrez comment notre application peut transformer votre congrès. Choisissez un créneau qui vous convient.
      </p>

      {submitted ? (
        <div className="bg-accent/10 border-2 border-accent rounded-lg p-8 text-center">
          <div className="text-5xl mb-4 flex justify-center">
            <Check className="text-accent" size={48} />
          </div>
          <h3 className="text-2xl font-bold mb-2 text-accent">Démo Réservée !</h3>
          <p className="text-muted-foreground">
            Merci ! Notre équipe vous contactera dans les 24 heures pour confirmer votre rendez-vous.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <User size={20} className="text-primary" />
              Vos Informations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <div>
                <label className="block text-sm font-semibold mb-2">Téléphone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
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
          </div>

          {/* Pack Selection */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quel Pack Vous Intéresse ?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {isLoading ? (
                <p className="text-muted-foreground">Chargement des offres...</p>
              ) : (
                <>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" style={{borderColor: formData.packType === 'essential' ? 'var(--color-primary)' : 'var(--color-border)'}}>
                    <input
                      type="radio"
                      name="packType"
                      value="essential"
                      checked={formData.packType === 'essential'}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">{essentialOffer?.name || 'Pack Essentiel'}</p>
                      <p className="text-sm text-muted-foreground">{essentialOffer?.price}€ HT</p>
                    </div>
                  </label>
                  <label className="flex items-center p-4 border-2 rounded-lg cursor-pointer transition" style={{borderColor: formData.packType === 'premium' ? 'var(--color-primary)' : 'var(--color-border)'}}>
                    <input
                      type="radio"
                      name="packType"
                      value="premium"
                      checked={formData.packType === 'premium'}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <div className="ml-4">
                      <p className="font-semibold">{premiumOffer?.name || 'Pack Premium/Médical'}</p>
                      <p className="text-sm text-muted-foreground">{premiumOffer?.price}€ HT</p>
                    </div>
                  </label>
                </>
              )}
            </div>
          </div>

          {/* Date and Time Selection */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-primary" />
              Choisissez une Date et une Heure
            </h3>
            
            {/* Date Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-3">Date *</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {nextDays.map((date, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      date: date.toISOString().split('T')[0]
                    }))}
                    className={`p-3 rounded-lg border-2 transition font-semibold ${
                      formData.date === date.toISOString().split('T')[0]
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    <div className="text-xs text-muted-foreground">
                      {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                    </div>
                    <div>
                      {date.getDate()}/{date.getMonth() + 1}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-semibold mb-3 flex items-center gap-2">
                <Clock size={16} />
                Heure *
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    disabled={!slot.available}
                    onClick={() => setFormData(prev => ({
                      ...prev,
                      time: slot.time
                    }))}
                    className={`p-3 rounded-lg border-2 transition font-semibold ${
                      !slot.available
                        ? 'border-border bg-muted text-muted-foreground cursor-not-allowed opacity-50'
                        : formData.time === slot.time
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">Message Supplémentaire</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Parlez-nous de votre projet, vos besoins spécifiques, etc."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Réserver Ma Démo
          </button>

          <p className="text-xs text-muted-foreground text-center">
            * Champs obligatoires. Nous respectons votre vie privée et ne partagerons jamais vos données.
          </p>
        </form>
      )}
    </div>
  );
}
