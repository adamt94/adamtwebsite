import React from 'react';
import styles from './index.module.scss';
import ProjectItem from './projectItem';
import data from './data.json';

export default function Projects() {

    const projects = data.projects;
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="subline" />
            {projects.map(project => <ProjectItem {...project} />)}


        </div>
    );
}
