// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import DarkModeToggle from "./components/layout/DarkModeToggle";
import CustomCursor from "./components/layout/CustomCursor";
import Preloader from "./components/layout/Preloader";
import BackToTop from "./components/layout/BackToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Certificates from "./pages/Certificates";
import GitHubAccounts from "./pages/GitHubAccounts";
import LovableWPA from "./pages/LovableWPA";
import EmailCollection from "./pages/EmailCollection";
import SocialMedia from "./pages/SocialMedia";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500); // fake preloader
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <>
      <DarkModeToggle />
      <CustomCursor />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/github-accounts" element={<GitHubAccounts />} />
          <Route path="/lovable-wpa" element={<LovableWPA />} />
          <Route path="/email-collection" element={<EmailCollection />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
