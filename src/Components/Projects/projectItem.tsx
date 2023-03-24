import React from "react";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faUser, faLink } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

type Date = {
  day: string;
  month: string;
};
type Icon = {
  fa: string;
  name: string;
  key: string;
};
interface Project {
  title: string;
  link: string;
  user: string;
  content: string;
  icons: Array<Icon>;
  date: Date;
}

export default function ProjectItem({
  title,
  link,
  user,
  content,
  icons,
  date,
}: Project) {
  return (
    <div className={styles.contentBoard}>
      <div className={styles.dateboard}>
        <div className={styles.date}>
          <div className={styles.text}>
            <p className={styles.day}>{date.day}</p>
            <p className={styles.month}>{date.month}</p>
          </div>
          <div className={styles.dateicon}>
            <FontAwesomeIcon icon={faCalendar as IconDefinition} size="2x" />
          </div>
        </div>
        <div className={styles.profile}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faUser as IconDefinition} size="2x" />{" "}
              <span>{user}</span>
            </li>
            {icons.map((icon) => (
              <li>
                <FontAwesomeIcon
                  icon={{ prefix: icon.key, iconName: icon.fa } as IconProp}
                  size="2x"
                />{" "}
                <span>{icon.fa}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <div className={styles.title}>
            <h2>{title}</h2>
            <div className="sublineleft" />
          </div>
          <a href={link}>
            <FontAwesomeIcon icon={faLink as IconDefinition} size="1x" /> {link}
          </a>
        </div>
        <div
          className={styles.details}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
    </div>
  );
}
