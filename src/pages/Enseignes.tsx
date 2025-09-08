import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Lightbulb, Flag, Square, CheckCircle, Star } from "lucide-react";
import heroImage from "@/assets/hero-enseigne.jpg";

const Enseignes = () => {
  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Enseignes LED",
      description: "Enseignes lumineuses LED haute qualité, économiques et durables",
      price: "À partir de 800€",
      features: ["Éclairage LED", "Faible consommation", "Longue durée de vie", "Étanchéité IP65"]
    },
    {
      icon: <Square className="w-8 h-8" />,
      title: "Caissons Lumineux",
      description: "Caissons double face pour une visibilité maximale",
      price: "À partir de 1200€",
      features: ["Double face", "Éclairage uniforme", "Structure aluminium", "Installation incluse"]
    },
    {
      icon: <Flag className="w-8 h-8" />,
      title: "Drapeaux & Totems",
      description: "Signalétique extérieure mobile et fixe",
      price: "À partir de 350€",
      features: ["Impression HD", "Résistant aux UV", "Structure robuste", "Montage facile"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Enseigne Néon",
      description: "Néons LED flexibles pour un effet rétro moderne",
      price: "À partir de 450€",
      features: ["Néon LED flexible", "Couleurs variées", "Effet continu", "Contrôle RGB"]
    }
  ];

  const advantages = [
    "Conception 3D avant fabrication",
    "Matériaux premium certifiés",
    "Installation par nos équipes",
    "Maintenance et SAV inclus",
    "Garantie 3 ans sur les LED",
    "Devis gratuit sous 24h"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-6">
              Enseignes Lumineuses<br />
              <span className="text-brand-vert">LED & Néon</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Illuminez votre commerce avec nos enseignes LED haute qualité. Conception, fabrication 
              et pose d'enseignes lumineuses sur mesure en Bretagne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl">
                Devis enseigne gratuit
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Nos réalisations
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="font-lemon font-bold text-3xl text-foreground mb-6">
              Enseignes Saint-Brieuc et Signalétique Rennes
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Spécialiste des <strong>enseignes Saint-Brieuc</strong> et de la <strong>signalétique Rennes</strong>, 
              Foulgraph conçoit et installe vos enseignes lumineuses sur mesure. Nos <strong>enseignes lumineuses Saint-Brieuc</strong> 
              utilisent la technologie LED dernière génération pour une visibilité optimale et une consommation réduite.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Que vous recherchiez un <strong>totem publicitaire extérieur Rennes</strong> ou des enseignes LED pour votre commerce, 
              notre équipe d'experts vous accompagne de la conception à l'installation. Nous intervenons sur tout le territoire breton 
              pour vos projets de signalétique lumineuse professionnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Types d'Enseignes</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solutions lumineuses adaptées à tous types de commerces et budgets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-brand">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-brand-vert rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-lemon font-bold text-xl text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-3">{service.description}</p>
                      <div className="text-2xl font-bold text-brand-vert">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-vert" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="vert" className="w-full">
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi Choisir Foulgraph ?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              L'expertise technique et la qualité au service de votre visibilité
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-card rounded-lg">
                <CheckCircle className="w-6 h-6 text-brand-vert flex-shrink-0" />
                <span className="text-foreground font-medium">{advantage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">De l'Étude à l'Installation</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Étude technique", desc: "Analyse du support, contraintes urbanistiques et faisabilité" },
              { step: "2", title: "Conception 3D", desc: "Modélisation 3D pour visualiser le rendu final" },
              { step: "3", title: "Fabrication", desc: "Production en atelier avec matériaux professionnels" },
              { step: "4", title: "Installation", desc: "Pose par nos équipes certifiées et mise en service" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-vert flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
                  <span className="font-lemon font-bold text-2xl text-white">{step.step}</span>
                </div>
                <h3 className="font-lemon font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-hero text-white shadow-float max-w-4xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-300 fill-current" />
                ))}
              </div>
              <p className="text-xl mb-8 italic leading-relaxed">
                "Notre nouvelle enseigne LED a transformé la visibilité de notre restaurant. 
                Installation parfaite et éclairage magnifique qui attire l'œil même de loin !"
              </p>
              <div className="border-t border-white/20 pt-6">
                <div className="font-bold text-lg">Restaurant Les Délices</div>
                <div className="text-white/90">Saint-Brieuc - Côtes d'Armor</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-noir text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lemon font-bold text-4xl mb-6">
            Illuminez Votre Commerce
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Étude personnalisée gratuite. Nos experts vous conseillent sur la meilleure solution d'éclairage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="vert" size="xl">
              Devis enseigne gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white hover:text-brand-noir">
              Voir nos enseignes
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enseignes;