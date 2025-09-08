import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: ["02 96 XX XX XX", "Appel gratuit depuis un fixe"],
      color: "brand-rose"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@foulgraph.fr", "Réponse sous 24h"],
      color: "brand-vert"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adresse",
      details: ["Zone d'activité", "22000 Saint-Brieuc", "Bretagne, France"],
      color: "brand-turquoise"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Horaires",
      details: ["Lun-Ven : 8h-18h", "Sam : 9h-12h", "Dim : Fermé"],
      color: "brand-noir"
    }
  ];

  const services = [
    "Création graphique", "Enseignes lumineuses", "Covering véhicules", 
    "Signalétique intérieure", "Signalétique extérieure", "Vitrophanie", "Autre"
  ];

  const zones = [
    "Rennes et agglomération", "Saint-Brieuc et Côtes-d'Armor", 
    "Centre Bretagne", "Loudéac et environs", "Autre secteur Bretagne"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text mb-6">
            Contactez-nous<br />
            <span className="text-brand-vert">Devis Gratuit</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une question ? Un projet ? Contactez nos experts en signalétique et graphisme. 
            Devis personnalisé gratuit sous 24h en Bretagne.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-hover bg-white border-0 shadow-brand text-center">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${info.color} flex items-center justify-center text-white`}>
                    {info.icon}
                  </div>
                  <h3 className="font-lemon font-bold text-xl text-foreground mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className={`${idx === 0 ? 'font-medium text-foreground' : 'text-sm text-muted-foreground'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-title mb-8">Demande de Devis</h2>
              <Card className="shadow-brand border-0">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstname">Prénom *</Label>
                        <Input id="firstname" placeholder="Votre prénom" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastname">Nom *</Label>
                        <Input id="lastname" placeholder="Votre nom" className="mt-2" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Entreprise</Label>
                      <Input id="company" placeholder="Nom de votre entreprise" className="mt-2" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="votre@email.fr" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Téléphone</Label>
                        <Input id="phone" placeholder="02 XX XX XX XX" className="mt-2" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Service souhaité *</Label>
                      <select id="service" className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background">
                        <option>Sélectionnez un service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="zone">Zone d'intervention</Label>
                      <select id="zone" className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background">
                        <option>Sélectionnez votre secteur</option>
                        {zones.map((zone, index) => (
                          <option key={index} value={zone}>{zone}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="budget">Budget indicatif</Label>
                      <select id="budget" className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background">
                        <option>Sélectionnez votre budget</option>
                        <option>Moins de 500€</option>
                        <option>500€ - 1000€</option>
                        <option>1000€ - 2500€</option>
                        <option>2500€ - 5000€</option>
                        <option>Plus de 5000€</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Décrivez votre projet *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez votre projet en détail : objectifs, contraintes, délais..."
                        className="mt-2 min-h-[120px]" 
                      />
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="consent" className="rounded" />
                      <Label htmlFor="consent" className="text-sm text-muted-foreground">
                        J'accepte d'être contacté par Foulgraph concernant ma demande
                      </Label>
                    </div>
                    
                    <Button variant="cta" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Envoyer ma demande
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="section-title mb-8">Notre Atelier</h2>
                <Card className="shadow-brand border-0">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-section rounded-t-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-brand-turquoise mx-auto mb-4" />
                        <p className="text-lg font-medium text-foreground">Carte interactive</p>
                        <p className="text-muted-foreground">Zone d'activité, Saint-Brieuc</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-lemon font-bold text-xl mb-4">Foulgraph Atelier</h3>
                      <div className="space-y-3 text-muted-foreground">
                        <div className="flex items-center space-x-3">
                          <MapPin className="w-4 h-4 text-brand-turquoise" />
                          <span>Zone d'activité, 22000 Saint-Brieuc</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-brand-turquoise" />
                          <span>02 96 XX XX XX</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-brand-turquoise" />
                          <span>Lun-Ven 8h-18h, Sam 9h-12h</span>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-6">
                        Itinéraire Google Maps
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Contact */}
              <Card className="bg-gradient-hero text-white shadow-float border-0">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-lemon font-bold text-2xl mb-4">Besoin d'une Réponse Rapide ?</h3>
                  <p className="mb-6 text-white/90">
                    Appelez-nous directement pour un conseil immédiat ou un rendez-vous en atelier.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" size="lg" className="bg-white text-brand-rose border-white hover:bg-white/90">
                      <Phone className="w-5 h-5 mr-2" />
                      02 96 XX XX XX
                    </Button>
                    <Button variant="secondary" size="lg" className="bg-white text-brand-noir hover:bg-white/90">
                      Prendre RDV
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Questions Fréquentes</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: "Quel est le délai pour un devis ?",
                a: "Nous vous envoyons un devis personnalisé sous 24h ouvrées après réception de votre demande."
              },
              {
                q: "Intervenez-vous dans toute la Bretagne ?",
                a: "Oui, nous intervenons dans toute la Bretagne avec un focus sur Rennes, Saint-Brieuc et le Centre Bretagne."
              },
              {
                q: "Proposez-vous un service de maintenance ?",
                a: "Oui, nous assurons la maintenance et le SAV de toutes nos réalisations avec garantie constructeur."
              },
              {
                q: "Puis-je voir des exemples de réalisations ?",
                a: "Bien sûr ! Consultez notre portfolio ou visitez notre atelier pour voir nos créations en cours."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-white border-0 shadow-brand">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;