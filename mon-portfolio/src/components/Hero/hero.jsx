import './hero.style.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      
<div className="hero-content">
  <h1>Kurtis Verres</h1>
  <h2>Développeur Web </h2>
  <p>
  Passionné par la création d’applications modernes, performantes et évolutives.
  </p>

  {/* ——— BOUTONS ——— */}
  <div className="hero-actions">
    <a
      href="#projects"
      className="btn btn-primary"
      aria-label="Voir mes projets"
    >
      Mes projets
    </a>
    <a
      href="#contact"
      className="btn btn-secondary"
      aria-label="Me contacter"
    >
      Me contacter
    </a>
  </div>
</div>

    </section>
  );
}

export default Hero;
