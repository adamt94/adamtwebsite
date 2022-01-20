import React from 'react';
import styles from './index.module.scss';
import ProjectItem from './projectItem';

export default function Projects() {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div className="subline" />
            <ProjectItem />

        </div>
    );
}
