import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, MapPin, Calendar, Quote, ThumbsUp } from "lucide-react";

const AvisClients = () => {
  const reviews = [
    {
      id: 1,
      name: "Marie Dubois",
      company: "Restaurant Le Petit Breton",
      location: "Rennes",
      rating: 5,
      date: "Il y a 2 semaines",
      text: "Foulgraph a transformé notre vitrine ! L'enseigne lumineuse attire bien plus de clients le soir. Équipe professionnelle, délais respectés, je recommande vivement !",
      service: "Enseigne LED",
      avatar: "🥘"
    },
    {
      id: 2, 
      name: "Pierre Martin",
      company: "Garage Auto+",
      location: "Saint-Brieuc",
      rating: 5,
      date: "Il y a 1 mois",
      text: "Covering de nos 3 véhicules parfait ! Design moderne et pose impeccable. Nos clients nous reconnaissent maintenant de loin. Excellent travail !",
      service: "Covering véhicules",
      avatar: "🚗"
    },
    {
      id: 3,
      name: "Sophie Moreau", 
      company: "Cabinet d'Architecture",
      location: "Loudéac",
      rating: 5,
      date: "Il y a 3 semaines",
      text: "Identité visuelle complète créée par Foulgraph. Logo, charte graphique, cartes de visite... Tout est cohérent et reflète parfaitement notre image.",
      service: "Création graphique",
      avatar: "🏗️"
    },
    {
      id: 4,
      name: "Thomas Leblanc",
      company: "Boulangerie des Halles",
      location: "Rennes",
      rating: 5,
      date: "Il y a 1 semaine",
      text: "Nouvelle signalétique intérieure et vitrophanie. Ambiance complètement transformée ! Les clients trouvent plus facilement les produits.",
      service: "Signalétique",
      avatar: "🥖"
    },
    {
      id: 5,
      name: "Claire Rousseau",
      company: "TechStart Bretagne",
      location: "Rennes",
      rating: 5,
      date: "Il y a 2 mois",
      text: "Startup en création, nous cherchions une identité forte. Foulgraph a su capter notre vision et créer une image moderne qui nous démarque !",
      service: "Identité complète",
      avatar: "💻"
    },
    {
      id: 6,
      name: "Michel Gourmand",
      company: "Pharmacie Centrale",
      location: "Saint-Brieuc", 
      rating: 5,
      date: "Il y a 3 semaines",
      text: "Enseigne lumineuse avec croix LED installée rapidement. Très visible, consommation réduite. Service après-vente au top !",
      service: "Enseigne pharmacie",
      avatar: "💊"
    }
  ];

  const stats = [
    { icon: "⭐", number: "4.9/5", label: "Note moyenne" },
    { icon: "👥", number: "500+", label: "Clients satisfaits" },
    { icon: "📍", number: "100%", label: "En Bretagne" },
    { icon: "🏆", number: "15 ans", label: "D'expérience" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text mb-6">
            Avis Clients<br />
            <span className="text-brand-vert">Ils Nous Font Confiance</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de nos clients sur nos services de création graphique, 
            enseignes et signalétique en Bretagne.
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-300 fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold">4.9/5</span>
            <span className="text-white/80">sur Google</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="font-lemon font-bold text-3xl text-brand-rose mb-1">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Témoignages Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Retours authentiques de nos clients en Bretagne
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.id} className="card-hover bg-white border-0 shadow-brand">
                <CardContent className="p-8 relative">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-rose/20" />
                  
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-2xl">
                      {review.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-foreground">{review.name}</div>
                      <div className="text-sm text-brand-rose font-medium">{review.company}</div>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {review.location}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {review.date}
                    </span>
                  </div>

                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed italic">
                    "{review.text}"
                  </p>

                  {/* Service Tag */}
                  <div className="border-t pt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-brand-vert/10 text-brand-vert">
                      <ThumbsUp className="w-3 h-3 mr-1" />
                      {review.service}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Integration */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-8">Plus d'Avis sur Google</h2>
          <Card className="max-w-2xl mx-auto bg-gradient-card border-0 shadow-brand">
            <CardContent className="p-8">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">G</span>
                </div>
                <div>
                  <div className="font-lemon font-bold text-2xl text-foreground">Google Business</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="font-bold">4.9</span>
                    <span className="text-muted-foreground">(47 avis)</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Découvrez tous nos avis clients vérifiés sur notre page Google Business.
              </p>
              <Button variant="outline" size="lg">
                Voir tous les avis Google
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Leave Review CTA */}
      <section className="py-20 bg-brand-noir text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lemon font-bold text-4xl mb-6">
            Vous Êtes Client Foulgraph ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Partagez votre expérience et aidez d'autres entreprises à nous découvrir !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="vert" size="xl">
              Laisser un avis Google
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white hover:text-brand-noir">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AvisClients;