import { FaCode, FaDatabase, FaRocket } from 'react-icons/fa';
import './about.style.css';               // ➜ adapte le chemin si tu utilises index.css

function About() {
  return (
    <section id="about" className="about">
      <h2 className="about-title">Profil Professionnel</h2>

      <p className="about-lead">
        Développeur Full-Stack passionné par les technologies web et cloud, je possède une expertise en
        <strong> Node.js, React, API REST </strong>
        et bases de données
        (<strong>MySQL, Supabase, MongoDB</strong>).
        Mon parcours m'a permis de travailler sur plusieurs projets
        de développement d'applications <strong>en temps réel</strong> et
        <strong> d'optimisation de données</strong>.
      </p>

      <p className="about-lead">
        Je suis motivé à rejoindre une équipe dynamique où je pourrai mettre mes compétences à profit
        pour créer des solutions performantes et évolutives. Ma capacité à travailler sur l'ensemble
        de la pile technologique me permet d'avoir une vision globale des projets et d'assurer une
        cohérence entre le frontend et le backend.
      </p>

      <div className="about-features">
        {/* Feature 1 */}
        <div className="feature">
          <span className="icon-wrapper">
            <FaCode size={24} />
          </span>
          <div>
            <h3>Développement complet</h3>
            <p>Maîtrise de l'ensemble du cycle de développement d'applications web</p>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature">
          <span className="icon-wrapper">
            <FaDatabase size={24} />
          </span>
          <div>
            <h3>Gestion de données</h3>
            <p>Expertise en conception et optimisation de bases de données</p>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature">
          <span className="icon-wrapper">
            <FaRocket size={24} />
          </span>
          <div>
            <h3>Performance</h3>
            <p>Focus sur l'optimisation et la scalabilité des applications</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
