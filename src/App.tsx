import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import CreationGraphique from "./pages/CreationGraphique";
import Enseignes from "./pages/Enseignes";
import Signaletique from "./pages/Signaletique";
import Portfolio from "./pages/Portfolio";
import AvisClients from "./pages/AvisClients";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import NotFound from "./pages/NotFound";
import { HashRouter, Routes, Route } from "react-router-dom";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/creation-graphique" element={<CreationGraphique />} />
          <Route path="/enseignes" element={<Enseignes />} />
          <Route path="/signaletique" element={<Signaletique />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/avis-clients" element={<AvisClients />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);


export default App;
