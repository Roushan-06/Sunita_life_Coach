import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import BookSession from "./components/BookSession";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";
import YoutubeCTA from "./components/YoutubeCTA";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          50
        );
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="sunita-theme">
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <ScrollToHash />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Services />
                  <Gallery />
                  <Testimonials />
                  <Blog />
                </>
              }
            />

            <Route path="/book" element={<BookSession />} />
            <Route path="/blog/:id" element={<BlogPost />} />
          </Routes>

          <YoutubeCTA />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
