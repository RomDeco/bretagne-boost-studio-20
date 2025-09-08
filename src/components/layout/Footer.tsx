import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-brand-noir text-white bg-zinc-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-lemon font-bold text-xl">F</span>
              </div>
              <div>
                <h3 className="font-lemon font-bold text-xl">Foulgraph</h3>
                <p className="text-gray-300 text-sm">Signalétique Bretagne</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre expert en création graphique, enseignes et signalétique sur mesure en Bretagne. 
              De la conception à la pose, nous donnons vie à votre identité visuelle.
            </p>
            <Button variant="cta" size="lg" className="bg-lime-500 hover:bg-lime-400 text-zinc-900">
              Demander un devis
            </Button>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="font-lemon font-bold text-xl text-brand-vert text-lime-500">Nos Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link to="/creation-graphique" className="hover:text-brand-rose transition-smooth">
                  Création graphique
                </Link>
              </li>
              <li>
                <Link to="/enseignes" className="hover:text-brand-rose transition-smooth">
                  Enseignes lumineuses
                </Link>
              </li>
              <li>
                <Link to="/signaletique" className="hover:text-brand-rose transition-smooth">
                  Signalétique intérieure
                </Link>
              </li>
              <li>
                <Link to="/signaletique" className="hover:text-brand-rose transition-smooth">
                  Covering véhicules
                </Link>
              </li>
              <li>
                <Link to="/signaletique" className="hover:text-brand-rose transition-smooth">
                  Vitrophanie
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-lemon font-bold text-xl text-brand-turquoise text-lime-500">Contact</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-vert" />
                <span>02 96 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-vert" />
                <span>contact@foulgraph.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-vert mt-1" />
                <div>
                  <p>Zone d'activité</p>
                  <p>22000 Saint-Brieuc</p>
                  <p>Bretagne, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zones d'intervention */}
          <div className="space-y-6">
            <h3 className="font-lemon font-bold text-xl text-brand-rose text-lime-500">Zones d'intervention</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Rennes et agglomération</li>
              <li>Saint-Brieuc et Côtes-d'Armor</li>
              <li>Centre Bretagne</li>
              <li>Loudéac et environs</li>
              <li>Toute la Bretagne</li>
            </ul>
            
            <div className="pt-4">
              <h4 className="font-semibold text-white mb-3">Suivez-nous</h4>
              <div className="flex space-x-4 bg-zinc-900">
                <a href="#" className="text-gray-300 hover:text-brand-rose transition-smooth">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-brand-vert transition-smooth">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-brand-turquoise transition-smooth">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Foulgraph. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/legal" className="text-gray-400 hover:text-white transition-smooth">
                Mentions légales
              </Link>
              <Link to="/legal" className="text-gray-400 hover:text-white transition-smooth">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;