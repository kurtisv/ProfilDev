import {
  FaProjectDiagram,
  FaServer,
  FaBolt,
  FaShieldAlt,
} from 'react-icons/fa';
import './experience.style.css';

function Experience() {
  /* 4 grands blocs pour le freelance */
  const freelanceTasks = [
    {
      icon: <FaProjectDiagram size={22} />,
      title: "Développement d'Applications",
      text: "Création et optimisation d'applications web interactives en Node.js et React.js",
    },
    {
      icon: <FaServer size={22} />,
      title: 'Conception d’API',
      text: "Développement d'API RESTful avec intégration de bases de données MySQL et Supabase",
    },
    {
      icon: <FaBolt size={22} />,
      title: 'Applications Temps Réel',
      text: 'Implémentation de WebSockets pour des interactions fluides et instantanées',
    },
    {
      icon: <FaShieldAlt size={22} />,
      title: 'Maintenance et Sécurité',
      text: 'Amélioration continue du code pour garantir sécurité et scalabilité',
    },
  ];

  return (
    <section id="experience" className="exp-section">
      {/* décor à gauche (facultatif) */}
      <div className="exp-illustration" aria-hidden="true" />

      {/* contenu principal */}
      <div className="exp-content">
        <h2 className="exp-title">Expériences Professionnelles</h2>

        {/* Freelance */}
        <h3 className="exp-job">
          Développeur Full-Stack Web <span>(Freelance – Projets personnels)</span>
        </h3>

        <ul className="exp-list">
          {freelanceTasks.map(({ icon, title, text }) => (
            <li key={title} className="exp-item">
              <span className="hexagon">{icon}</span>
              <div>
                <h4>{title}</h4>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Bell Canada */}
        <h3 className="exp-job">
          Technicien de Service à la Clientèle – Bell Canada
          <span> (02/2024 – Actuel)</span>
        </h3>
        <ul className="exp-bullets">
          <li>
            Installation et maintenance de solutions télécom et gestion des
            incidents
          </li>
          <li>
            Assistance technique auprès des clients et optimisation des
            infrastructures réseau
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
