import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Palette, Lightbulb, Car, Star, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
          {/* Subtle geometric elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-accent-rose/20"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent-vert/20 rotate-45"></div>
            <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-accent-turquoise/20"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-left space-y-16 animate-fade-in">
              <div className="space-y-8">
                <div className="eyebrow">
                  Foulgraph — Studio Créatif Bretagne
                </div>
                
                <h1 className="hero-text max-w-5xl">
                  Nous créons des 
                  <br />
                  identités qui
                  <br />
                  <span className="text-accent-rose">mar</span>quent
                </h1>
                
                <p className="body-large max-w-3xl animate-fade-in delay-200">
                  Design graphique, enseignes et signalétique sur mesure. 
                  <br />
                  Nous transformons vos idées en expériences visuelles mémorables.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 animate-fade-in delay-400">
                <Button asChild size="lg" className="bg-foreground hover:bg-foreground/90 text-background font-lemon px-12 py-6 text-lg rounded-none">
                  <Link to="/contact">
                    Démarrer un projet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="hover:bg-muted font-lemon px-12 py-6 text-lg">
                  <Link to="/portfolio" className="flex items-center">
                    Voir nos réalisations
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="mb-24 animate-fade-in">
              <div className="max-w-4xl">
                <div className="eyebrow text-background/60 mb-8">
                  Nos Expertises
                </div>
                <h2 className="section-title mb-8">
                  <span className="text-accent-rose">Design</span> graphique,
                  <br />
                  <span className="text-accent-vert">enseignes</span> & 
                  <span className="text-accent-turquoise"> signalétique</span>
                </h2>
                <p className="body-large text-background/80 max-w-3xl">
                  Trois expertises complémentaires pour créer des identités visuelles 
                  cohérentes et impactantes, de la conception à la réalisation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-7xl mx-auto">
              {[
                {
                  number: "01",
                  title: "Design\nGraphique",
                  description: "Identité visuelle complète, logos distinctifs, chartes graphiques, supports print & digital.",
                  services: ["Logos & Identité", "Charte graphique", "Print & Digital", "Packaging"],
                  link: "/creation-graphique",
                  accentColor: "text-accent-rose"
                },
                {
                  number: "02", 
                  title: "Enseignes\nLumineuses",
                  description: "Conception et fabrication d'enseignes LED, totems, drapeaux pour maximiser votre visibilité.",
                  services: ["Enseignes LED", "Totems", "Drapeaux", "Éclairage"],
                  link: "/enseignes",
                  accentColor: "text-accent-vert"
                },
                {
                  number: "03",
                  title: "Signalétique\n& Covering",
                  description: "Covering véhicules, signalétique directionnelle, vitrophanie pour marquer votre territoire.",
                  services: ["Covering auto", "Signalétique", "Vitrophanie", "Marquage sol"],
                  link: "/signaletique",
                  accentColor: "text-accent-turquoise"
                }
              ].map((service, index) => (
                <div key={index} className={`group cursor-pointer animate-fade-in delay-${index * 200 + 200}`}>
                  <div className="border-t border-background/20 pt-8">
                    <div className={`text-6xl font-lemon font-black mb-6 ${service.accentColor} opacity-60`}>
                      {service.number}
                    </div>
                    <h3 className="subsection-title mb-6 text-background whitespace-pre-line group-hover:text-background/80 transition-smooth">
                      {service.title}
                    </h3>
                    <p className="body-text mb-8 text-background/70">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.services.map((item, i) => (
                        <li key={i} className="text-sm text-background/60 font-lato">
                          — {item}
                        </li>
                      ))}
                    </ul>
                    <Button asChild variant="ghost" className="text-background/70 hover:text-background hover:bg-background/10 font-lemon p-0 h-auto">
                      <Link to={service.link} className="inline-flex items-center">
                        En savoir plus
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-32 bg-muted">
          <div className="container mx-auto px-4">
            <div className="mb-24 animate-fade-in">
              <div className="max-w-4xl">
                <div className="eyebrow mb-8">
                  Portfolio Sélectionné
                </div>
                <h2 className="section-title mb-8">
                  Projets qui 
                  <span className="text-accent-rose"> mar</span>quent
                </h2>
                <p className="body-large max-w-3xl">
                  Une sélection de nos réalisations les plus significatives, 
                  témoins de notre approche créative et de notre savoir-faire technique.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
              {[
                {
                  title: "Brasserie Armorique",
                  subtitle: "Identité visuelle complète",
                  category: "Branding & Signalétique",
                  description: "Création d'une identité forte alliant tradition bretonne et modernité, déclinée sur tous supports.",
                  year: "2024"
                },
                {
                  title: "Réseau SPAR Bretagne",
                  subtitle: "Programme enseignes",
                  category: "Enseignes LED",
                  description: "Modernisation de 25 enseignes avec technologie LED, optimisation énergétique et impact visuel.",
                  year: "2023"
                },
                {
                  title: "Flotte Logistique BZH",
                  subtitle: "Covering véhicules",
                  category: "Signalétique Mobile",
                  description: "Habillage complet de 50 véhicules, création d'un impact mobile fort sur tout le territoire breton.",
                  year: "2024"
                },
                {
                  title: "Centre Commercial Alma",
                  subtitle: "Signalétique directionnelle",
                  category: "Wayfinding",
                  description: "Système complet de signalétique intérieure, UX spatiale optimisée pour 120 boutiques.",
                  year: "2023"
                }
              ].map((project, index) => (
                <div key={index} className={`group cursor-pointer animate-fade-in delay-${index * 150 + 200}`}>
                  <div className="bg-background rounded-lg overflow-hidden shadow-subtle hover:shadow-medium transition-all duration-500 group-hover:-translate-y-1">
                    <div className="aspect-[16/10] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                      <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-500"></div>
                      <div className="absolute bottom-4 right-4 text-xs font-lemon font-bold text-muted-foreground/50">
                        {project.year}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="eyebrow mb-3">{project.category}</div>
                      <h3 className="subsection-title mb-2 group-hover:text-accent-rose transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-lg font-lemon text-muted-foreground mb-4">
                        {project.subtitle}
                      </p>
                      <p className="body-text">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center animate-fade-in delay-800">
              <Button asChild variant="outline" size="lg" className="border-foreground/20 hover:bg-foreground hover:text-background font-lemon px-12 py-6 rounded-none">
                <Link to="/portfolio">
                  Explorer tous nos projets
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-32 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="section-title mb-8">
                Ils nous font con<span className="text-accent-vert">fi</span>ance
              </h2>
              <p className="body-large mx-auto max-w-2xl">
                Plus de 200 entreprises bretonnes nous ont choisis
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Marie Dubois",
                  company: "Restaurant Le Jardin",
                  text: "Foulgraph a créé notre identité complète. Un travail remarquable et un suivi impeccable.",
                  rating: 5
                },
                {
                  name: "Jean-Luc Morin",
                  company: "Garage Moderne",
                  text: "Notre enseigne LED attire tous les regards. Merci pour ce travail de qualité !",
                  rating: 5
                },
                {
                  name: "Sophie Bernard",
                  company: "Boulangerie Bernard",
                  text: "Le covering de nos véhicules est parfait. Très professionnel et créatif.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className={`text-center animate-fade-in delay-${index * 200 + 200}`}>
                  <div className="flex items-center justify-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="body-large italic mb-6 text-muted-foreground">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="font-lemon font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="eyebrow text-background/60 mb-8">
                    Démarrons Ensemble
                  </div>
                  <h2 className="section-title mb-8">
                    Votre projet 
                    <br />
                    nous <span className="text-accent-turquoise">inspire</span>
                  </h2>
                  <p className="body-large text-background/80 mb-12">
                    Chaque projet est unique. Parlons-en pour créer ensemble 
                    quelque chose d'exceptionnel qui vous ressemble.
                  </p>
                  
                  <div className="space-y-6">
                    <Button asChild size="lg" className="bg-background hover:bg-background/90 text-foreground font-lemon px-12 py-6 text-lg rounded-none w-full sm:w-auto">
                      <Link to="/contact">
                        Démarrer un projet
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    
                    <div className="flex flex-col sm:flex-row gap-6 text-background/70 text-lg">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5" />
                        <span className="font-lato">02 96 XX XX XX</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5" />
                        <span className="font-lato">Bretagne, France</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:text-right">
                  <div className="inline-block">
                    <div className="display-large text-background/10 font-lemon leading-none">
                      Fou<span className="text-accent-rose/20">l</span>graph
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;