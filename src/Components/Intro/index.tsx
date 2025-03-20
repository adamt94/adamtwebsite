import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CodeStackItem from "./codeStackItem";
import styles from "./index.module.scss";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faCode,
  faPencilAlt,
  faCloud,
  faDatabase,
  faCogs,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import Overview from "./Overview";
import { motion, useInView } from "framer-motion";

const stackData = [
  {
    icon: (
      <FontAwesomeIcon icon={faWindowMaximize as IconDefinition} size={"xs"} />
    ),
    name: "Web Frameworks",
    value: "React, Remix, NextJs, GraphQl, Node, React Native, flutter",
  },
  {
    icon: <FontAwesomeIcon icon={faCode as IconDefinition} size={"xs"} />,
    name: "Languages",
    value: "Javascript, Typescript, Dart, Sass, HTML5",
  },
  {
    name: "UI & Design Tools",
    value:
      "ShadeCn, Tailwind, StoryBook, Redux, Zustand, Styled Components, MUI, Chakra, Figma, Illustrator",
  },
  {
    icon: <FontAwesomeIcon icon={faCloud as IconDefinition} size={"xs"} />,
    name: "Cloud",
    value: "Amzon Web Services, Google Cloud, Vercel",
  },
  {
    icon: <FontAwesomeIcon icon={faDatabase as IconDefinition} size={"xs"} />,
    name: "Databases",
    value: "MongoDB, Firebase, Postgres, MySQL",
  },
  {
    icon: <FontAwesomeIcon icon={faCogs as IconDefinition} size={"xs"} />,
    name: "Testing",
    value: "Jest, React Testing Library, Cypress",
  },
  {
    icon: <FontAwesomeIcon icon={faTerminal as IconDefinition} size={"xs"} />,
    name: "CI/CD",
    value: "Docker, Kubernetes, Jenkins, CircleCI, TravisCI, Github Actions",
  },
];

export default function Intro() {
  const textAnimate = {
    offscreen: { y: 20, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.2, duration: 1.5 },
    },
  };
  return (
    <section id="about" className={styles.about}>
      <Overview />
      <motion.div
        transition={{ staggerChildren: 0.2 }}
        initial={"offscreen"}
        whileInView={"onscreen"}
        className=" mt-64"
      >
        <motion.div variants={textAnimate} className={styles.codeItems}>
          {stackData.map((item, index) => {
            if (index < 3)
              return (
                <CodeStackItem
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  value={item.value}
                />
              );
          })}
        </motion.div>
        <motion.div variants={textAnimate} className={styles.codeItems}>
          {stackData.map((item, index) => {
            if (index >= 3)
              return (
                <CodeStackItem
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  value={item.value}
                />
              );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}
