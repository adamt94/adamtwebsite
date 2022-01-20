import React from 'react';
import styles from './index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faUser, faLink } from '@fortawesome/free-solid-svg-icons';
import { faChrome, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';

export default function ProjectItem() {
    return (

        <div className={styles.contentBoard}>
            <div className={styles.dateboard}>
                <div className={styles.date}>
                    <div className={styles.text}>
                        <p className={styles.day}>
                            20th
                        </p>
                        <p className={styles.month}>
                            jan
                        </p>
                    </div>
                    <div className={styles.dateicon}><FontAwesomeIcon icon={faCalendar} size="2x" /></div>

                </div>
                <div className={styles.profile}>
                    <ul>
                        <li><FontAwesomeIcon icon={faUser} size="2x" /> <span>Adam Thompson</span></li>
                        <li><FontAwesomeIcon icon={faChrome} size="2x" />  <span>Browser</span></li>
                        <li><FontAwesomeIcon icon={faGithub} size="2x" /><span>GitHub</span></li>
                        <li><FontAwesomeIcon icon={faReact} size="2x" /><span>React</span></li>
                    </ul>
                </div>

            </div >
            <div className={styles.content}>
                <div className={styles.heading}><h2>v-share</h2> <a href="www.v-share.tv"><FontAwesomeIcon icon={faLink} size="1x" /> www.v-share.tv</a></div>
                <div className="sublineleft"></div>
            </div>

        </div>
    );
}
