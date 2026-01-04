import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Manifesto from "./pages/Manifesto";
import Servicos from "./pages/Servicos";
import Jornada from "./pages/Jornada";
import TodaJornada from "./pages/TodaJornada";
import Historia from "./pages/Historia";
import Espaco from "./pages/Espaco";
import Comunidade from "./pages/Comunidade";
import Contato from "./pages/Contato";
import Agendar from "./pages/Agendar";
import IceMindExperience from "./pages/IceMindExperience";
import NossaHistoria from "./pages/NossaHistoria";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/jornada" element={<Jornada />} />
          <Route path="/toda-jornada" element={<TodaJornada />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/espaco" element={<Espaco />} />
          <Route path="/comunidade" element={<Comunidade />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/agendar" element={<Agendar />} />
          <Route path="/ice-mind-experience" element={<IceMindExperience />} />
          <Route path="/nossa-historia" element={<NossaHistoria />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
