import './projects.style.css';

/* ——— Données des projets ——— */
const projects = [
  {
    title: 'Gassaver',
    img: (''), // mets le bon chemin ou import
    paragraphs: [
      `Plateforme d'optimisation de consommation de carburant intégrant
       React.js, Supabase et Mapbox API.`,
      `Cette application permet aux utilisateurs de suivre et d'optimiser leur
       consommation d'essence en fonction de leurs trajets et habitudes de conduite.`,
    ],
  },
  {
    title: 'Dashboard CRM',
    img: (''),
    paragraphs: [
      `Outil de gestion client avec React.js, Supabase et Google API.`,
      `Interface intuitive permettant de centraliser les informations clients,
       suivre les interactions et générer des rapports personnalisés.`,
    ],
  },
  {
    title: 'Plateforme Immobilière',
    img: (''),
    paragraphs: [
      `Application de localisation de biens immobiliers développée avec
       React.js, Supabase et Google API.`,
      `Permet de visualiser les propriétés sur une carte interactive avec
       filtres avancés et informations détaillées.`,
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">Projets Marquants</h2>

      {projects.map(({ title, img, paragraphs }) => (
        <article key={title} className="project-card">
          <img src={img} alt={title} className="project-img" />

          <div className="project-content">
            <h3>{title}</h3>
            {paragraphs.map((txt, i) => (
              <p key={i}>
                {/* mettre en gras les techno (React, Supabase…) */}
                {txt.replace(
                  /(React\.js|Supabase|Mapbox API|Google API)/g,
                  '**$1**'
                )}
              </p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}

export default Projects;
