import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Palette, FileText, CreditCard, Users, CheckCircle, Star } from "lucide-react";
import graphiqueImage from "@/assets/creation-graphique.jpg";
const CreationGraphique = () => {
  const services = [{
    icon: <Palette className="w-8 h-8" />,
    title: "Logos & Identité Visuelle",
    description: "Création de logos uniques et chartes graphiques complètes",
    price: "À partir de 350€",
    features: ["Logo vectoriel", "Déclinaisons couleurs", "Guide d'utilisation", "Fichiers HD"]
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: "Support Print",
    description: "Flyers, brochures, affiches et supports de communication",
    price: "À partir de 150€",
    features: ["Design sur mesure", "Prêt à imprimer", "Formats multiples", "Révisions incluses"]
  }, {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Cartes de Visite",
    description: "Cartes de visite professionnelles et mémorables",
    price: "À partir de 80€",
    features: ["Design original", "Papiers premium", "Finitions spéciales", "Livraison incluse"]
  }, {
    icon: <Users className="w-8 h-8" />,
    title: "Identité Complète",
    description: "Pack complet pour votre entreprise",
    price: "À partir de 800€",
    features: ["Logo + charte", "Papeterie complète", "Supports digitaux", "Suivi 1 an"]
  }];
  const process = [{
    step: "1",
    title: "Brief créatif",
    description: "Analyse de vos besoins, secteur d'activité et concurrence. Définition de votre identité de marque."
  }, {
    step: "2",
    title: "Recherches & concepts",
    description: "Exploration créative et proposition de 3 pistes graphiques différentes."
  }, {
    step: "3",
    title: "Développement",
    description: "Affinement du concept choisi avec vos retours et ajustements."
  }, {
    step: "4",
    title: "Finalisation",
    description: "Livraison des fichiers finaux dans tous les formats nécessaires."
  }];
  return <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-cover bg-center" style={{
      backgroundImage: `url(${graphiqueImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="hero-text mb-6 text-zinc-50">
              Création Graphique<br />
              <span className="text-brand-rose">Sur Mesure</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Donnez une identité visuelle forte à votre entreprise. Logos, chartes graphiques, 
              supports de communication - tout est créé sur mesure pour vous démarquer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="text-zinc-900 bg-lime-500 hover:bg-lime-400">
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 text-white border-white/30 hover:bg-white/20">
                Voir le portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="font-lemon font-bold text-3xl mb-6 text-lime-600">
              Studio de Création Graphique en Bretagne
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong>Foulgraph</strong>, votre <strong>studio graphisme Rennes</strong> et <strong>graphiste Saint-Brieuc</strong>, 
              accompagne les entreprises bretonnes dans la création de leur identité visuelle. Spécialisés dans la 
              <strong> création graphique Bretagne</strong>, nous concevons des <strong>logos</strong>, 
              <strong>chartes graphiques</strong> et supports de communication qui marquent les esprits.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Notre expertise en <strong>design visuel PME Bretagne</strong> nous permet de comprendre les enjeux 
              locaux et de créer des identités visuelles qui résonnent avec votre marché. De la 
              <strong> conception flyers et cartes de visite Loudéac</strong> aux projets d'envergure, 
              nous adaptons notre approche créative à vos besoins et votre budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title text-lime-600">Nos Services Graphiques</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              De l'identité visuelle aux supports de communication, tout est créé sur mesure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => <Card key={index} className="card-hover bg-white border-0 shadow-brand">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-brand-rose rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-lemon font-bold text-xl mb-2 text-lime-600">{service.title}</h3>
                      <p className="text-muted-foreground mb-3">{service.description}</p>
                      <div className="text-2xl font-bold text-brand-rose">{service.price}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-brand-vert" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button variant="outline" className="w-full hover:bg-brand-rose transition-smooth text-zinc-900 bg-lime-500 hover:bg-lime-400">
                    En savoir plus
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title bg-lime-500">Notre Processus Créatif</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une méthodologie éprouvée pour des créations qui vous ressemblent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => <div key={index} className="text-center group bg-lime-500 rounded-none">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center shadow-float group-hover:scale-110 transition-bounce">
                  <span className="font-lemon font-bold text-2xl text-white">{step.step}</span>
                </div>
                <h3 className="font-lemon font-bold text-xl mb-3 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Clients Satisfaits</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-0 shadow-brand">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Logo et charte graphique parfaits pour notre startup. L'équipe a su capter notre vision et la transformer en identité forte."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">Thomas Leblanc</div>
                  <div className="text-sm text-brand-rose">TechStart Rennes</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white border-0 shadow-brand">
              <CardContent className="p-8 text-lime-500">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "Supports de communication au top ! Flyers, cartes de visite, tout est cohérent et professionnel."
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold">Claire Morin</div>
                  <div className="text-sm text-brand-rose">Cabinet Conseil Saint-Brieuc</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-noir text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-lemon font-bold text-4xl mb-6">
            Donnons Vie à Votre Identité Visuelle
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Devis personnalisé sous 24h. Première consultation gratuite pour analyser vos besoins.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Demander un devis graphisme
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl" className="bg-transparent text-white border-white hover:bg-white hover:text-brand-noir">
              Voir nos créations
            </Button>
          </div>
        </div>
      </section>
    </Layout>;
};
export default CreationGraphique;