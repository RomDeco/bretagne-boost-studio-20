import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileText, Eye, Lock } from "lucide-react";

const Legal = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="hero-text mb-6">
            Mentions Légales<br />
            <span className="text-brand-vert">& Confidentialité</span>
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Informations légales et politique de confidentialité de Foulgraph
          </p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#mentions" className="flex items-center space-x-2 px-4 py-2 bg-brand-rose text-white rounded-lg hover:bg-brand-rose/90 transition-smooth">
              <FileText className="w-4 h-4" />
              <span>Mentions légales</span>
            </a>
            <a href="#confidentialite" className="flex items-center space-x-2 px-4 py-2 bg-brand-vert text-white rounded-lg hover:bg-brand-vert/90 transition-smooth">
              <Shield className="w-4 h-4" />
              <span>Confidentialité</span>
            </a>
            <a href="#cookies" className="flex items-center space-x-2 px-4 py-2 bg-brand-turquoise text-white rounded-lg hover:bg-brand-turquoise/90 transition-smooth">
              <Eye className="w-4 h-4" />
              <span>Cookies</span>
            </a>
          </div>
        </div>
      </section>

      <div className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4 max-w-4xl">
          
          {/* Mentions Légales */}
          <Card id="mentions" className="mb-12 bg-white border-0 shadow-brand">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-brand-rose rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-lemon font-bold text-3xl text-foreground">Mentions Légales</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Éditeur du site</h3>
                <div className="mb-6 text-muted-foreground leading-relaxed">
                  <p><strong>Raison sociale :</strong> Foulgraph SARL</p>
                  <p><strong>Adresse :</strong> Zone d'activité, 22000 Saint-Brieuc, France</p>
                  <p><strong>Téléphone :</strong> 02 96 XX XX XX</p>
                  <p><strong>Email :</strong> contact@foulgraph.fr</p>
                  <p><strong>SIRET :</strong> XXX XXX XXX XXXXX</p>
                  <p><strong>TVA intracommunautaire :</strong> FR XX XXX XXX XXX</p>
                  <p><strong>Capital social :</strong> 10 000 €</p>
                </div>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Directeur de publication</h3>
                <p className="mb-6 text-muted-foreground">M. [Nom du dirigeant], Gérant</p>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Hébergement</h3>
                <div className="mb-6 text-muted-foreground">
                  <p><strong>Hébergeur :</strong> Lovable</p>
                  <p><strong>Site web :</strong> lovable.dev</p>
                </div>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Propriété intellectuelle</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Le présent site et tous les éléments qui le composent sont protégés par le droit de la propriété intellectuelle. 
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                  quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Foulgraph.
                </p>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Responsabilité</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Les informations contenues sur ce site sont aussi précises que possible et le site est mis à jour à différentes périodes. 
                  Toutefois, il ne peut être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Politique de Confidentialité */}
          <Card id="confidentialite" className="mb-12 bg-white border-0 shadow-brand">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-brand-vert rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-lemon font-bold text-3xl text-foreground">Politique de Confidentialité</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Collecte des données</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Nous collectons uniquement les données personnelles que vous nous fournissez volontairement via nos formulaires de contact. 
                  Ces données comprennent : nom, prénom, email, téléphone, entreprise et détails de votre projet.
                </p>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Utilisation des données</h3>
                <div className="mb-6 text-muted-foreground leading-relaxed">
                  <p>Vos données personnelles sont utilisées pour :</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Répondre à vos demandes de devis et d'information</li>
                    <li>Vous contacter dans le cadre de nos services</li>
                    <li>Améliorer nos services et notre site web</li>
                    <li>Vous envoyer notre newsletter (avec votre accord)</li>
                  </ul>
                </div>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Conservation des données</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Vos données sont conservées pendant 3 ans maximum après votre dernière interaction avec nous. 
                  Les données de facturation sont conservées 10 ans conformément aux obligations légales.
                </p>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Vos droits</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Conformément au RGPD, vous disposez des droits suivants :
                </p>
                <div className="mb-6 text-muted-foreground">
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Droit d'accès à vos données personnelles</li>
                    <li>Droit de rectification des données inexactes</li>
                    <li>Droit à l'effacement de vos données</li>
                    <li>Droit à la limitation du traitement</li>
                    <li>Droit à la portabilité des données</li>
                    <li>Droit d'opposition au traitement</li>
                  </ul>
                </div>
                <p className="text-muted-foreground">
                  Pour exercer ces droits, contactez-nous à : contact@foulgraph.fr
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Politique des Cookies */}
          <Card id="cookies" className="bg-white border-0 shadow-brand">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-brand-turquoise rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-lemon font-bold text-3xl text-foreground">Politique des Cookies</h2>
              </div>

              <div className="prose prose-lg max-w-none">
                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Qu'est-ce qu'un cookie ?</h3>
                <p className="mb-6 text-muted-foreground leading-relaxed">
                  Un cookie est un petit fichier texte stocké sur votre ordinateur lors de la visite d'un site web. 
                  Il permet de mémoriser des informations sur votre visite et d'améliorer votre expérience de navigation.
                </p>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Types de cookies utilisés</h3>
                <div className="mb-6 text-muted-foreground">
                  <div className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Cookies techniques (obligatoires)</h4>
                      <p>Nécessaires au fonctionnement du site : navigation, sécurité, préférences linguistiques.</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Cookies analytiques (optionnels)</h4>
                      <p>Google Analytics pour comprendre l'utilisation du site et améliorer nos services.</p>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Cookies marketing (optionnels)</h4>
                      <p>Publicités ciblées et mesure de l'efficacité de nos campagnes publicitaires.</p>
                    </div>
                  </div>
                </div>

                <h3 className="font-lemon font-bold text-xl text-foreground mb-4">Gestion des cookies</h3>
                <p className="mb-4 text-muted-foreground leading-relaxed">
                  Vous pouvez gérer vos préférences de cookies à tout moment :
                </p>
                <div className="text-muted-foreground">
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Via le bandeau de cookies affiché lors de votre première visite</li>
                    <li>Dans les paramètres de votre navigateur</li>
                    <li>En nous contactant directement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="mt-12 bg-gradient-hero text-white border-0 shadow-float">
            <CardContent className="p-8 text-center">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="font-lemon font-bold text-2xl mb-4">Questions sur vos données ?</h3>
              <p className="mb-6 text-white/90">
                Notre équipe est à votre disposition pour répondre à toutes vos questions concernant 
                le traitement de vos données personnelles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@foulgraph.fr" 
                  className="px-6 py-3 bg-white text-brand-rose rounded-lg font-medium hover:bg-white/90 transition-smooth"
                >
                  contact@foulgraph.fr
                </a>
                <a 
                  href="tel:0296xxxxxx" 
                  className="px-6 py-3 bg-white/20 text-white border border-white/30 rounded-lg font-medium hover:bg-white/30 transition-smooth"
                >
                  02 96 XX XX XX
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Legal;