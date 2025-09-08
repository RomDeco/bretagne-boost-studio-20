import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Car, Building, Eye, Navigation, CheckCircle, Star } from "lucide-react";
import coveringImage from "@/assets/covering-vehicule.jpg";

const Signaletique = () => {
  const services = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Covering Véhicules",
      description: "Habillage complet ou partiel de vos véhicules professionnels",
      price: "À partir de 800€",
      features: ["Design personnalisé", "Adhésifs haute qualité", "Pose professionnelle", "Garantie 5 ans"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vitrophanie",
      description: "Adhésifs pour vitres, décoration et marquage de vitrines",
      price: "À partir de 150€", 
      features: ["Adhésifs micro-perforés", "Vision une face", "Résistant UV", "Pose sans bulles"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Signalétique Intérieure",
      description: "Panneaux directionnels, plaques de porte, marquage au sol",
      price: "À partir de 80€",
      features: ["Matériaux durables", "Fixations invisibles", "Design cohérent", "Normes PMR"]
    },
    {
      icon: <Navigation className="w-8 h-8" />,
      title: "Signalétique Extérieure",
      description: "Panneaux d'accueil, fléchage, signalétique de sécurité",
      price: "À partir de 200€",
      features: ["Résistant intempéries", "Fixation sécurisée", "Réflectorisation", "Maintenance incluse"]
    }
  ];

  const materials = [
    { name: "Adhésifs Cast Premium", desc: "Longue durée, conformables" },
    { name: "PVC Expansé", desc: "Léger, résistant, économique" },
    { name: "Dibond Aluminium", desc: "Haut de gamme, aspect moderne" },
    { name: "Plexiglas", desc: "Transparent, élégant, durable" }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${coveringImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-6">
              Signalétique<br />
              <span className="text-brand-turquoise">Intérieure & Extérieure</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Covering véhicules, vitrophanie, panneaux directionnels - nous créons toute votre 
              signalétique sur mesure pour guider et informer vos clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl">
                Devis signalétique
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
              Covering Véhicule et Signalétique Bretagne
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Expert en <strong>marquage véhicule Bretagne</strong> et <strong>covering voiture professionnel Bretagne</strong>, 
              Foulgraph transforme vos véhicules en supports publicitaires mobiles. Notre service de 
              <strong> signalétique intérieure entreprise Rennes</strong> vous accompagne également dans l'aménagement 
              de vos espaces professionnels.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              De la <strong>vitrophanie magasin Saint-Brieuc</strong> aux projets de covering complet, nous utilisons 
              des matériaux premium et des techniques de pose professionnelles. Notre expertise couvre tout type de 
              signalétique : directionnelle, informative, publicitaire et de sécurité.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Services Signalétique</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Solutions complètes pour votre communication visuelle et directionnelle
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-brand">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-brand-turquoise rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-lemon font-bold text-xl text-foreground mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-3">{service.description}</p>
                      <div className="text-2xl font-bold text-brand-turquoise">{service.price}</div>
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
                  
                  <Button variant="turquoise" className="w-full">
                    Demander un devis
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Matériaux Premium</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nous sélectionnons les meilleurs matériaux pour une durabilité optimale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="card-hover bg-gradient-card border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-lemon font-bold text-lg mb-3 text-foreground">{material.name}</h3>
                  <p className="text-muted-foreground text-sm">{material.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Covering Process */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Processus Covering Véhicule</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Relevé véhicule", desc: "Prise de mesures précises et état des lieux" },
              { step: "2", title: "Création design", desc: "Conception graphique adaptée aux formes" },
              { step: "3", title: "Préparation", desc: "Nettoyage et dégraissage complet du véhicule" },
              { step: "4", title: "Application", desc: "Pose professionnelle avec finition parfaite" }
            ].map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-brand-turquoise flex items-center justify-center shadow-float group-hover:scale-110 transition-bounce">
                  <span className="font-lemon font-bold text-2xl text-white">{step.step}</span>
                </div>
                <h3 className="font-lemon font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
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
                "Covering de nos 5 véhicules utilitaires réalisé par Foulgraph. Résultat exceptionnel, 
                nos véhicules sont devenus de vrais supports publicitaires roulants !"
              </p>
              <div className="border-t border-white/20 pt-6">
                <div className="font-bold text-lg">Entreprise BâtiPlus</div>
                <div className="text-white/90">Rennes - Ille-et-Vilaine</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-noir text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lemon font-bold text-4xl mb-6">
            Transformez Votre Signalétique
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Devis personnalisé gratuit. Conseil expert pour optimiser votre communication visuelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="turquoise" size="xl">
              Devis signalétique gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white hover:text-brand-noir">
              Portfolio signalétique
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signaletique;