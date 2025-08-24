// components/Work.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Project One",
    description: "A modern web application with clean interface",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "Project Two",
    description: "E-commerce platform with payment integration",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#"
  },
  {
    title: "Project Three",
    description: "Mobile-responsive dashboard with analytics",
    tags: ["TypeScript", "D3.js", "Firebase"],
    link: "#"
  }
];

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="section-header">
        <h2>Selected Work</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>
            </div>
            <a href={project.link} className="project-link">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;