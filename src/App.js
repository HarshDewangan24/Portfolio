import React from 'react';
import './App.css';
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Home from "./components/home/Home.jsx";
import About from "./components/about/About.jsx";
import Services from "./components/services/Services.jsx";
import Resume from "./components/resume/Resume.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Pricing from "./components/pricing/Pricing.jsx";
import Testimonial from "./components/testimonial/Testimonial.jsx";
import Blog from "./components/blog/Blog.jsx";
import Contact from "./components/contact/Contact.jsx";

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Resume />
        <Portfolio />
        <Pricing />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
