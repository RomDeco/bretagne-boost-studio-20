import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Filter, Eye, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("tous");

  const filters = [
    { id: "tous", label: "Tous les projets" },
    { id: "graphisme", label: "Graphisme" },
    { id: "enseignes", label: "Enseignes" },
    { id: "covering", label: "Covering" },
    { id: "signaletique", label: "Signalétique" }
  ];

  const projects = [
    {
      id: 1,
      title: "Logo & Charte Restaurant Breizh",
      category: "graphisme",
      location: "Rennes",
      description: "Identité visuelle complète pour restaurant traditionnel breton",
      image: "/api/placeholder/400/300",
      tags: ["Logo", "Charte graphique", "Menu"]
    },
    {
      id: 2,
      title: "Enseigne LED Pharmacie Centrale",
      category: "enseignes",
      location: "Saint-Brieuc", 
      description: "Enseigne lumineuse double face avec croix LED",
      image: "/api/placeholder/400/300",
      tags: ["LED", "Double face", "Pharmacie"]
    },
    {
      id: 3,
      title: "Covering Flotte Véhicules BTP",
      category: "covering",
      location: "Loudéac",
      description: "Habillage complet de 8 véhicules utilitaires",
      image: "/api/placeholder/400/300",
      tags: ["Covering", "Flotte", "BTP"]
    },
    {
      id: 4,
      title: "Signalétique Hôtel 3 étoiles",
      category: "signaletique",
      location: "Rennes",
      description: "Signalétique intérieure et extérieure complète",
      image: "/api/placeholder/400/300",
      tags: ["Hôtel", "Intérieur", "Extérieur"]
    },
    {
      id: 5,
      title: "Identité Startup Tech",
      category: "graphisme", 
      location: "Rennes",
      description: "Logo, site web et supports de communication",
      image: "/api/placeholder/400/300",
      tags: ["Startup", "Digital", "Innovation"]
    },
    {
      id: 6,
      title: "Totem Publicitaire Zone Commerciale",
      category: "enseignes",
      location: "Saint-Brieuc",
      description: "Totem LED 6 mètres multi-enseignes",
      image: "/api/placeholder/400/300",
      tags: ["Totem", "Multi-enseignes", "Zone commerciale"]
    }
  ];

  const filteredProjects = activeFilter === "tous" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text mb-6">
            Portfolio<br />
            <span className="text-brand-vert">Nos Réalisations</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos créations graphiques, enseignes lumineuses et projets de signalétique 
            réalisés pour nos clients en Bretagne.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "hero" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className="transition-smooth"
              >
                <Filter className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="card-hover bg-white border-0 shadow-brand overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-brand-noir/60 opacity-0 group-hover:opacity-100 transition-smooth flex items-center justify-center">
                    <div className="flex space-x-4">
                      <Button size="sm" variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.category === 'graphisme' ? 'bg-brand-rose/10 text-brand-rose' :
                        project.category === 'enseignes' ? 'bg-brand-vert/10 text-brand-vert' :
                        project.category === 'covering' ? 'bg-brand-turquoise/10 text-brand-turquoise' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {filters.find(f => f.id === project.category)?.label}
                      </span>
                      <span className="text-sm text-muted-foreground">{project.location}</span>
                    </div>
                    <h3 className="font-lemon font-bold text-lg text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-noir text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-lemon font-bold text-4xl text-brand-rose mb-2">150+</div>
              <div className="text-gray-300">Logos créés</div>
            </div>
            <div>
              <div className="font-lemon font-bold text-4xl text-brand-vert mb-2">80+</div>
              <div className="text-gray-300">Enseignes posées</div>
            </div>
            <div>
              <div className="font-lemon font-bold text-4xl text-brand-turquoise mb-2">200+</div>
              <div className="text-gray-300">Véhicules covés</div>
            </div>
            <div>
              <div className="font-lemon font-bold text-4xl text-yellow-400 mb-2">95%</div>
              <div className="text-gray-300">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title mb-6">Votre Projet Sera le Prochain ?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Parlons de votre projet ! Devis personnalisé gratuit sous 24h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Demander un devis
            </Button>
            <Button variant="outline" size="xl">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;