/**
 * Three Pillars. Marketing Website
 * A product of buildingit. © 2026 buildingit. All rights reserved.
 * Style: Obsidian Monolith. pure black, silver/white, frosted glass, cinematic motion.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Modules from "./pages/Modules";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Roadmap from "./pages/Roadmap";
import Compare from "./pages/Compare";
import Contact from "./pages/Contact";
import Updates from "@/pages/Updates";
import Insights from "@/pages/Insights";
import InsightArticle from "@/pages/InsightArticle";
import { Privacy, Terms } from "./pages/Legal";
import Security from "./pages/Security";
import FaqHub from "./pages/Faq";
import Migrate from "./pages/Migrate";
import Investors from "./pages/Investors";
import ModuleCategoryPage from "./pages/ModuleCategory";
import Personal from "./pages/Personal";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/modules"} component={Modules} />
        <Route path={"/modules/:slug"} component={ModuleCategoryPage} />
        <Route path={"/personal"} component={Personal} />
        <Route path={"/pricing"} component={Pricing} />
        <Route path={"/about"} component={About} />
        <Route path={"/roadmap"} component={Roadmap} />
        <Route path={"/compare"} component={Compare} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/updates"} component={Updates} />
        <Route path={"/insights"} component={Insights} />
        <Route path={"/insights/:slug"} component={InsightArticle} />
        <Route path={"/security"} component={Security} />
        <Route path={"/faq"} component={FaqHub} />
        <Route path={"/migrate"} component={Migrate} />
        <Route path={"/investors"} component={Investors} />
        <Route path={"/privacy"} component={Privacy} />
        <Route path={"/terms"} component={Terms} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
