import {
  FaClock,
  FaHome,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import './contact.style.css';

function Contact() {
  /* données pour la colonne Modalités */
  const modalites = [
    {
      icon: <FaClock size={20} />,
      title: 'Disponibilité',
      text: 'Temps plein',
    },
    {
      icon: <FaHome size={20} />,
      title: 'Type de Travail',
      text: 'Télétravail ou hybride',
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Mobilité',
      text: 'Québec, QC',
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Disponibilité et Contact</h2>

      <div className="contact-grid">
        {/* ───────── COLONNE GAUCHE ───────── */}
        <div className="modalites-col">
          <h3 className="col-heading">Modalités de Travail</h3>

          <ul className="modalite-list">
            {modalites.map(({ icon, title, text }) => (
              <li key={title} className="modalite-item">
                <span className="mod-icon">{icon}</span>
                <div>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ───────── COLONNE DROITE ───────── */}
        <div className="pitch-col">
          <h3 className="col-heading">Pourquoi me choisir?</h3>

          <p>
            En tant que développeur Full-Stack, j'apporte une vision complète
            du processus de développement. Ma polyvalence technique et ma
            capacité à m'adapter rapidement aux nouvelles technologies me
            permettent de contribuer efficacement à des projets variés.
          </p>
          <p>
            Je suis particulièrement intéressé par les défis techniques
            impliquant des applications en temps réel, l'optimisation de
            performances et l'architecture de solutions évolutives. Mon
            approche méthodique et mon souci du détail garantissent des
            livrables de qualité.
          </p>
          <p>
            Je serais ravi d'échanger sur la façon dont mes compétences
            pourraient contribuer au succès de vos projets.
          </p>

          {/* ───────── MOYENS DE CONTACT ───────── */}
          <div className="contact-methods">
            <a href="mailto:verskurtis@live.fr" className="contact-btn">
              <FaEnvelope size={18} /> Email
            </a>
            <a
              href="https://linkedin.com/in/tonProfil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaLinkedin size={18} /> LinkedIn
            </a>
            <a
              href="https://github.com/tonUser"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn"
            >
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
