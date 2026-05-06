'use client';
import { useState } from 'react';
import { Link, useRoute } from 'wouter';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Blog() {
  const [route, params] = useRoute('/blog/:slug');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch all articles
  const { data: articles, isLoading: articlesLoading } = trpc.blog.getAll.useQuery();

  // Fetch single article if viewing detail
  const { data: article, isLoading: articleLoading } = trpc.blog.getBySlug.useQuery(
    { slug: params?.slug || '' },
    { enabled: !!params?.slug }
  );

  if (params?.slug && articleLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-96 w-full mb-8" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-full mb-2" />
          <Skeleton className="h-6 w-3/4" />
        </div>
      </div>
    );
  }

  if (params?.slug && article) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <Link href="/blog" className="text-primary hover:underline mb-6 inline-block">
            ← Retour au blog
          </Link>

          <article className="max-w-3xl mx-auto">
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span>{article.author}</span>
                <span>•</span>
                <span>{new Date(article.publishedAt || '').toLocaleDateString('fr-FR')}</span>
                <span>•</span>
                <span className="text-primary">{article.category}</span>
              </div>
            </header>

            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-96 object-cover rounded-lg mb-8"
              />
            )}

            <div className="prose prose-invert max-w-none mb-8">
              {article.content.split('\n').map((line, idx) => {
                if (line.startsWith('# ')) {
                  return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{line.substring(2)}</h2>;
                }
                if (line.startsWith('## ')) {
                  return <h3 key={idx} className="text-xl font-bold mt-6 mb-3">{line.substring(3)}</h3>;
                }
                if (line.startsWith('### ')) {
                  return <h4 key={idx} className="text-lg font-semibold mt-4 mb-2">{line.substring(4)}</h4>;
                }
                if (line.startsWith('- ')) {
                  return <li key={idx} className="ml-6 mb-2">{line.substring(2)}</li>;
                }
                if (line.startsWith('| ')) {
                  return <div key={idx} className="overflow-x-auto mb-4">{line}</div>;
                }
                if (line === '') {
                  return <br key={idx} />;
                }
                return <p key={idx} className="mb-4 leading-relaxed">{line}</p>;
              })}
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-bold mb-4">Articles similaires</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {articles
                  ?.filter(a => a.category === article.category && a.id !== article.id)
                  .slice(0, 2)
                  .map(relatedArticle => (
                    <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`} className="group">
                        <Card className="h-full hover:border-primary transition-colors">
                          <CardHeader>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {relatedArticle.title}
                            </CardTitle>
                            <CardDescription>{relatedArticle.excerpt}</CardDescription>
                          </CardHeader>
                        </Card>
                    </Link>
                  ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Découvrez les dernières tendances des congrès, les meilleures pratiques pour maximiser votre ROI, et comment créer des expériences inoubliables pour vos participants.
          </p>
        </div>

        {/* Category Filter */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex gap-2 flex-wrap">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(null)}
            >
              Tous les articles
            </Button>
            <Button
              variant={selectedCategory === 'engagement' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('engagement')}
            >
              Engagement
            </Button>
            <Button
              variant={selectedCategory === 'roi' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('roi')}
            >
              ROI
            </Button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="max-w-3xl mx-auto">
          {articlesLoading ? (
            <div className="grid gap-6">
              {[1, 2, 3].map(i => (
                <Skeleton key={i} className="h-64 w-full" />
              ))}
            </div>
          ) : articles && articles.length > 0 ? (
            <div className="grid gap-6">
              {articles
                .filter(a => selectedCategory === null || a.category === selectedCategory)
                .map(article => (
                  <Link key={article.id} href={`/blog/${article.slug}`} className="group">
                      <Card className="h-full hover:border-primary transition-colors overflow-hidden">
                        {article.imageUrl && (
                          <div className="h-48 overflow-hidden">
                            <img
                              src={article.imageUrl}
                              alt={article.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                            />
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-semibold text-primary uppercase">
                              {article.category === 'engagement' ? 'Engagement' : 'ROI'}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {new Date(article.publishedAt || '').toLocaleDateString('fr-FR')}
                            </span>
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {article.title}
                          </CardTitle>
                          <CardDescription className="line-clamp-2">
                            {article.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
                            Lire l'article →
                          </Button>
                        </CardContent>
                      </Card>
                  </Link>
                ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Aucun article trouvé.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
