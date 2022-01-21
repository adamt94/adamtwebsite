import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCalendar, IconName } from '@fortawesome/free-regular-svg-icons';
import { faUser, faLink } from '@fortawesome/free-solid-svg-icons';

type Date = {
    day: string,
    month: string
}
type Icon = {
    fa: string,
    name: string,
}
interface Project {
    title: string,
    link: string
    user: string,
    content: object,
    icons: Array<Icon>,
    date: Date

}

export default function ProjectItem({ title, link, user, content, icons, date }: Project) {
    return (

        <div className={styles.contentBoard}>
            <div className={styles.dateboard}>
                <div className={styles.date}>
                    <div className={styles.text}>
                        <p className={styles.day}>
                            {date.day}
                        </p>
                        <p className={styles.month}>
                            {date.month}
                        </p>
                    </div>
                    <div className={styles.dateicon}><FontAwesomeIcon icon={faCalendar} size="2x" /></div>

                </div>
                <div className={styles.profile}>
                    <ul>
                        <li><FontAwesomeIcon icon={faUser} size="2x" /> <span>{user}</span></li>
                        {icons.map(icon => <li><FontAwesomeIcon icon={['fab', icon.fa as IconName]} size="2x" />  <span>{icon.name}</span></li>)}
                    </ul>
                </div>

            </div >
            <div className={styles.content}>
                <div className={styles.heading}><h2>{title}</h2> <a href={link}><FontAwesomeIcon icon={faLink} size="1x" /> {link}</a></div>
                <div className="sublineleft"></div>
            </div>

        </div>
    );
}
