import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function Admin() {
  const { data: user } = trpc.auth.me.useQuery();
  const [activeTab, setActiveTab] = useState<'prices' | 'features'>('prices');
  const [editingPackId, setEditingPackId] = useState<string | null>(null);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { data: packs, isLoading, refetch } = trpc.offers.getAll.useQuery(undefined, {
    enabled: user?.role === 'admin',
  });

  const updatePriceMutation = trpc.offers.updatePrice.useMutation({
    onSuccess: () => {
      setMessage({ type: 'success', text: 'Prix mis à jour avec succès!' });
      refetch();
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Erreur lors de la mise à jour du prix' });
    },
  });

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <AlertCircle size={48} className="mx-auto mb-4 text-red-500" />
            <h1 className="text-2xl font-bold mb-2">Accès Refusé</h1>
            <p className="text-muted-foreground">Vous n'avez pas les permissions pour accéder à cette page.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleUpdatePrice = (packId: string) => {
    const newPrice = prices[packId];
    if (newPrice && newPrice > 0) {
      updatePriceMutation.mutate({ packId, newPrice });
      setEditingPackId(null);
      setPrices((prev) => ({ ...prev, [packId]: 0 }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="section-padding bg-gradient-to-br from-background via-card to-background">
          <div className="container">
            <h1 className="text-5xl font-bold mb-6">Backoffice Admin</h1>
            <p className="text-muted-foreground text-lg">Gérez les offres, les prix et les fonctionnalités</p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container">
            {message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  message.type === 'success' ? 'bg-green-500/10 text-green-700' : 'bg-red-500/10 text-red-700'
                }`}
              >
                {message.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                <span>{message.text}</span>
              </div>
            )}

            {/* Tabs */}
            <div className="flex gap-4 mb-8 border-b border-border">
              <button
                onClick={() => setActiveTab('prices')}
                className={`px-4 py-2 font-semibold transition ${
                  activeTab === 'prices' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
                }`}
              >
                Gestion des Prix
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-4 py-2 font-semibold transition ${
                  activeTab === 'features' ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
                }`}
              >
                Gestion des Fonctionnalités
              </button>
            </div>

            {/* Prices Tab */}
            {activeTab === 'prices' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Mise à Jour des Prix</h2>
                {isLoading ? (
                  <div className="text-center text-muted-foreground">Chargement...</div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {packs?.map((pack) => (
                      <div key={pack.id} className="bg-card rounded-lg p-6 border border-border">
                        <h3 className="text-xl font-bold mb-4">{pack.name}</h3>
                        <div className="mb-4">
                          <label className="block text-sm font-semibold mb-2">Prix actuel (HT)</label>
                          <p className="text-3xl font-bold text-primary">{pack.price}€</p>
                        </div>

                        {editingPackId === pack.id ? (
                          <div className="space-y-3">
                            <Input
                              type="number"
                              placeholder="Nouveau prix"
                              value={prices[pack.id] || ''}
                              onChange={(e) => setPrices((prev) => ({ ...prev, [pack.id]: parseFloat(e.target.value) }))}
                              min="0"
                              step="10"
                            />
                            <div className="flex gap-2">
                              <Button
                                onClick={() => handleUpdatePrice(pack.id)}
                                className="flex-1"
                                disabled={updatePriceMutation.isPending}
                              >
                                {updatePriceMutation.isPending ? 'Mise à jour...' : 'Confirmer'}
                              </Button>
                              <Button
                                onClick={() => {
                                  setEditingPackId(null);
                                  setPrices((prev) => ({ ...prev, [pack.id]: 0 }));
                                }}
                                variant="outline"
                                className="flex-1"
                              >
                                Annuler
                              </Button>
                            </div>
                          </div>
                        ) : (
                          <Button onClick={() => setEditingPackId(pack.id)} variant="outline" className="w-full">
                            Modifier le Prix
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Gestion des Fonctionnalités</h2>
                <div className="bg-card rounded-lg p-6 border border-border">
                  <p className="text-muted-foreground">
                    La gestion des fonctionnalités est disponible via l'API tRPC. Pour modifier les fonctionnalités, veuillez contacter l'équipe technique.
                  </p>
                </div>
              </div>
            )}

            {/* Info Box */}
            <div className="mt-12 bg-primary/10 rounded-lg p-6 border border-primary/20">
              <h3 className="font-bold mb-2">💡 Comment ça fonctionne ?</h3>
              <p className="text-sm text-muted-foreground">
                Les modifications de prix et de fonctionnalités sont mises à jour en temps réel sur toutes les pages du site (page d'accueil, page
                Nos Offres, etc.). Aucune publication supplémentaire n'est nécessaire.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
