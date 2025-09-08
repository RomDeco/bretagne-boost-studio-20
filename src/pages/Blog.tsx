import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, User, Tag, Clock } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Comment Choisir la Meilleure Enseigne pour Votre Commerce ?",
      slug: "choisir-enseigne-commerce-bretagne",
      excerpt: "Guide complet pour sélectionner l'enseigne parfaite : LED, néon, caisson lumineux... Tous nos conseils d'experts pour maximiser votre visibilité.",
      image: "/api/placeholder/400/250",
      category: "Enseignes",
      author: "Équipe Foulgraph",
      date: "15 Mars 2024",
      readTime: "8 min",
      featured: true
    },
    {
      id: 2,
      title: "Covering Véhicule : Prix, Durée et Conseils d'Expert",
      slug: "covering-vehicule-prix-duree-conseils",
      excerpt: "Tout savoir sur le covering de véhicules professionnels : coûts, matériaux, durée de vie et retour sur investissement pour votre entreprise.",
      image: "/api/placeholder/400/250",
      category: "Covering",
      author: "Pierre Graphique",
      date: "8 Mars 2024",
      readTime: "10 min",
      featured: true
    },
    {
      id: 3,
      title: "Signalétique Intérieure : Optimiser l'Expérience Client",
      slug: "signaletique-interieure-experience-client",
      excerpt: "L'importance d'une signalétique intérieure bien pensée pour guider vos clients et améliorer leur parcours dans vos locaux professionnels.",
      image: "/api/placeholder/400/250",
      category: "Signalétique",
      author: "Marie Design",
      date: "1 Mars 2024",
      readTime: "6 min",
      featured: true
    },
    {
      id: 4,
      title: "Créer un Logo Mémorable : Les Règles d'Or",
      slug: "creer-logo-memorable-regles-or",
      excerpt: "Les principes fondamentaux pour concevoir un logo efficace qui marquera les esprits et renforcera votre identité de marque.",
      image: "/api/placeholder/400/250",
      category: "Graphisme",
      author: "Thomas Créatif",
      date: "22 Février 2024",
      readTime: "7 min",
      featured: false
    },
    {
      id: 5,
      title: "LED vs Néon : Quelle Technologie Choisir en 2024 ?",
      slug: "led-vs-neon-technologie-choisir-2024",
      excerpt: "Comparatif détaillé entre éclairage LED et néon pour vos enseignes : consommation, durabilité, coût et esthétique.",
      image: "/api/placeholder/400/250",
      category: "Enseignes",
      author: "Équipe Foulgraph",
      date: "15 Février 2024", 
      readTime: "9 min",
      featured: false
    },
    {
      id: 6,
      title: "Vitrophanie : Transformer Vos Vitrines en Atout Marketing",
      slug: "vitrophanie-transformer-vitrines-marketing",
      excerpt: "Comment utiliser la vitrophanie pour promouvoir vos offres, protéger l'intimité et créer une ambiance unique dans vos locaux.",
      image: "/api/placeholder/400/250",
      category: "Signalétique",
      author: "Sophie Marketing",
      date: "8 Février 2024",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = [
    { name: "Tous", count: articles.length },
    { name: "Enseignes", count: articles.filter(a => a.category === "Enseignes").length },
    { name: "Graphisme", count: articles.filter(a => a.category === "Graphisme").length },
    { name: "Covering", count: articles.filter(a => a.category === "Covering").length },
    { name: "Signalétique", count: articles.filter(a => a.category === "Signalétique").length }
  ];

  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text mb-6">
            Blog<br />
            <span className="text-brand-vert">Conseils & Actualités</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos conseils d'experts en signalétique, graphisme et communication visuelle. 
            Guides pratiques pour optimiser votre image de marque en Bretagne.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "hero" : "outline"}
                className="transition-smooth"
              >
                <Tag className="w-4 h-4 mr-2" />
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Articles à la Une</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nos derniers conseils pour votre communication visuelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={article.id} className={`card-hover bg-white border-0 shadow-brand overflow-hidden ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className={`w-full object-cover ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === 'Enseignes' ? 'bg-brand-vert text-white' :
                      article.category === 'Graphisme' ? 'bg-brand-rose text-white' :
                      article.category === 'Covering' ? 'bg-brand-turquoise text-white' :
                      'bg-brand-noir text-white'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                  <h3 className={`font-lemon font-bold text-foreground mb-3 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full hover:bg-brand-rose hover:text-white transition-smooth">
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Articles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Autres Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="card-hover bg-gradient-card border-0 shadow-brand overflow-hidden group">
                <div className="relative">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      article.category === 'Enseignes' ? 'bg-brand-vert text-white' :
                      article.category === 'Graphisme' ? 'bg-brand-rose text-white' :
                      article.category === 'Covering' ? 'bg-brand-turquoise text-white' :
                      'bg-brand-noir text-white'
                    }`}>
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-lemon font-bold text-xl text-foreground mb-3">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-start px-0 text-brand-rose hover:text-brand-rose/80">
                    Lire la suite
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-brand-noir text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lemon font-bold text-4xl mb-6">
            Restez Informé
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Recevez nos derniers conseils et actualités directement dans votre boîte mail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="vert" size="lg">
              S'abonner
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;