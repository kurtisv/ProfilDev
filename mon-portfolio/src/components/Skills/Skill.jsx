import './skill.style.css';

function Skill() {
  /** Tableau des catégories + items  */
  const categories = [
    {
      title: 'Développement Backend',
      items: ['Node.js', 'Express.js', 'API REST', 'WebSockets'],
    },
    {
      title: 'Développement Frontend',
      items: ['React.js', 'HTML5/CSS3', 'JavaScript (ES6+)', 'Responsive Design'],
    },
    {
      title: 'Bases de données',
      items: ['MySQL', 'Supabase', 'MongoDB', 'Conception de schémas'],
    },
    {
      title: 'Optimisation',
      items: ['Requêtes SQL', 'Systèmes de cache', 'Performance API'],
    },
    {
      title: 'Déploiement',
      items: ['Docker', 'Vercel', 'Netlify'],
    },
    {
      title: 'Outils et DevOps',
      items: ['Git/GitHub', 'CI/CD', 'Debugging', 'WebRTC (notions)'],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Compétences Techniques</h2>

      <div className="skills-grid">
        {categories.map((cat) => (
          <div key={cat.title} className="skill-card">
            <h3>{cat.title}</h3>
            <ul>
              {cat.items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
