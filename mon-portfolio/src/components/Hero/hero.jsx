import './hero.style.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Salut, moi c’est KJ 👋</h1>
        <h2 className="hero-subtitle">Développeur Full-Stack Web & Cloud</h2>
        <p className="hero-description">
          Passionné par la création d’applications modernes, performantes et évolutives avec <strong>React</strong>, <strong>Node.js</strong> et <strong>Supabase</strong>.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary" aria-label="Voir mes projets">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary" aria-label="Me contacter">Me contacter</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
