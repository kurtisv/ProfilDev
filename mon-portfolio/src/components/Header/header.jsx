import './header.style.css';

function Header() {
  return (
    <section id="header">
      <h1>Mon Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#about">Profil</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Me joindre</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;