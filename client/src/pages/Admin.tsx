import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AlertCircle, CheckCircle2, Plus, Trash2 } from 'lucide-react';

export default function Admin() {
  const { data: user } = trpc.auth.me.useQuery();
  const [activeTab, setActiveTab] = useState<'prices' | 'features'>('prices');
  const [editingPackId, setEditingPackId] = useState<string | null>(null);
  const [editingFeatureId, setEditingFeatureId] = useState<string | null>(null);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [featureEdits, setFeatureEdits] = useState<Record<string, any>>({});
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

  const updateFeatureMutation = trpc.offers.updateFeature.useMutation({
    onSuccess: () => {
      setMessage({ type: 'success', text: 'Fonctionnalité mise à jour avec succès!' });
      refetch();
      setEditingFeatureId(null);
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Erreur lors de la mise à jour de la fonctionnalité' });
    },
  });

  const removeFeatureMutation = trpc.offers.removeFeature.useMutation({
    onSuccess: () => {
      setMessage({ type: 'success', text: 'Fonctionnalité supprimée avec succès!' });
      refetch();
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Erreur lors de la suppression de la fonctionnalité' });
    },
  });

  const addFeatureMutation = trpc.offers.addFeature.useMutation({
    onSuccess: () => {
      setMessage({ type: 'success', text: 'Fonctionnalité ajoutée avec succès!' });
      refetch();
      setTimeout(() => setMessage(null), 3000);
    },
    onError: () => {
      setMessage({ type: 'error', text: 'Erreur lors de l\'ajout de la fonctionnalité' });
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

  const handleUpdateFeature = (packId: string, featureId: string) => {
    const edits = featureEdits[`${packId}-${featureId}`];
    if (edits) {
      updateFeatureMutation.mutate({
        packId,
        featureId,
        updates: edits,
      });
    }
  };

  const handleRemoveFeature = (packId: string, featureId: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette fonctionnalité ?')) {
      removeFeatureMutation.mutate({ packId, featureId });
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
                {isLoading ? (
                  <div className="text-center text-muted-foreground">Chargement...</div>
                ) : (
                  <div className="space-y-8">
                    {packs?.map((pack) => (
                      <div key={pack.id} className="bg-card rounded-lg p-6 border border-border">
                        <h3 className="text-2xl font-bold mb-6">{pack.name}</h3>
                        <div className="space-y-4">
                          {pack.features.map((feature) => (
                            <div key={feature.id} className="bg-background rounded-lg p-4 border border-border">
                              {editingFeatureId === `${pack.id}-${feature.id}` ? (
                                <div className="space-y-3">
                                  <div>
                                    <label className="block text-sm font-semibold mb-2">Nom</label>
                                    <Input
                                      value={featureEdits[`${pack.id}-${feature.id}`]?.name || feature.name}
                                      onChange={(e) =>
                                        setFeatureEdits((prev) => ({
                                          ...prev,
                                          [`${pack.id}-${feature.id}`]: {
                                            ...prev[`${pack.id}-${feature.id}`],
                                            name: e.target.value,
                                          },
                                        }))
                                      }
                                    />
                                  </div>
                                  <div>
                                    <label className="block text-sm font-semibold mb-2">Description</label>
                                    <textarea
                                      value={featureEdits[`${pack.id}-${feature.id}`]?.description || feature.description}
                                      onChange={(e) =>
                                        setFeatureEdits((prev) => ({
                                          ...prev,
                                          [`${pack.id}-${feature.id}`]: {
                                            ...prev[`${pack.id}-${feature.id}`],
                                            description: e.target.value,
                                          },
                                        }))
                                      }
                                      className="w-full p-2 border border-border rounded-md bg-background"
                                      rows={2}
                                    />
                                  </div>
                                  <label className="flex items-center gap-2">
                                    <input
                                      type="checkbox"
                                      checked={featureEdits[`${pack.id}-${feature.id}`]?.included ?? feature.included}
                                      onChange={(e) =>
                                        setFeatureEdits((prev) => ({
                                          ...prev,
                                          [`${pack.id}-${feature.id}`]: {
                                            ...prev[`${pack.id}-${feature.id}`],
                                            included: e.target.checked,
                                          },
                                        }))
                                      }
                                    />
                                    <span className="text-sm font-semibold">Incluse dans ce pack</span>
                                  </label>
                                  <div className="flex gap-2">
                                    <Button
                                      onClick={() => handleUpdateFeature(pack.id, feature.id)}
                                      className="flex-1"
                                      disabled={updateFeatureMutation.isPending}
                                    >
                                      {updateFeatureMutation.isPending ? 'Mise à jour...' : 'Confirmer'}
                                    </Button>
                                    <Button
                                      onClick={() => setEditingFeatureId(null)}
                                      variant="outline"
                                      className="flex-1"
                                    >
                                      Annuler
                                    </Button>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h4 className="font-bold mb-1">{feature.name}</h4>
                                    <p className="text-sm text-muted-foreground mb-2">{feature.description}</p>
                                    <span className={`text-xs px-2 py-1 rounded ${feature.included ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                      {feature.included ? 'Incluse' : 'Non incluse'}
                                    </span>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      onClick={() => setEditingFeatureId(`${pack.id}-${feature.id}`)}
                                      variant="outline"
                                      size="sm"
                                    >
                                      Modifier
                                    </Button>
                                    <Button
                                      onClick={() => handleRemoveFeature(pack.id, feature.id)}
                                      variant="outline"
                                      size="sm"
                                      className="text-red-600"
                                      disabled={removeFeatureMutation.isPending}
                                    >
                                      <Trash2 size={16} />
                                    </Button>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
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
