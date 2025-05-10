import {
    FaGraduationCap,
    FaBookOpen,
    FaDesktop,
  } from 'react-icons/fa';
  import './formationLangues.style.css';
  
  function FormationLangues() {
    /* Étapes de formation (frise) */
    const cursus = [
      {
        icon: <FaGraduationCap size={20} />,
        title: 'AEC en Informatique de Gestion',
        subtitle: 'Institut Teccart, Montréal (01/2021 - 09/2023)',
      },
      {
        icon: <FaBookOpen size={20} />,
        title: 'Formation Continue',
        subtitle:
          'Certifications et cours en ligne (Node.js, React, SQL)',
      },
      {
        icon: <FaDesktop size={20} />,
        title: 'Projets Autodidactes',
        subtitle: 'Développement de compétences par la pratique',
      },
    ];
  
    /* Cartes de langues */
    const langues = [
      {
        titre: 'Français',
        items: [
          'Langue maternelle',
          'Excellente maîtrise à l’écrit et à l’oral',
        ],
      },
      {
        titre: 'Anglais',
        items: [
          'Niveau courant',
          'Communication professionnelle fluide',
          'Documentation technique',
        ],
      },
    ];
  
    return (
      <section id="formation" className="form-section">
        <h2 className="form-title">Formation et Langues</h2>
  
        <div className="form-grid">
          {/* ——— COLONNE GAUCHE : Formation ——— */}
          <div>
            <h3 className="col-heading">Formation</h3>
  
            <ul>
              {cursus.map(({ icon, title, subtitle }) => (
                <li key={title} className="timeline-item">
                  <span className="tl-icon">{icon}</span>
                  <div className="tl-content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
  
          {/* ——— COLONNE DROITE : Langues ——— */}
          <div className="langues-col">
            <h3 className="col-heading">Compétences Linguistiques</h3>
  
            {langues.map(({ titre, items }) => (
              <div key={titre} className="lang-card">
                <h4>{titre}</h4>
                <ul>
                  {items.map((txt) => (
                    <li key={txt}>{txt}</li>
                  ))}
                </ul>
              </div>
            ))}
  
            <p className="lang-note">
              Ma maîtrise de ces deux langues me permet de travailler
              efficacement dans des environnements internationaux et de
              communiquer clairement avec des équipes multilingues.
            </p>
          </div>
        </div>
      </section>
    );
  }
  
  export default FormationLangues;
  