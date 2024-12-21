import React from 'react';
import '../styling.css/Project.css';

export const ProjectCard = ({ title, image }) => {
  return (

    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

