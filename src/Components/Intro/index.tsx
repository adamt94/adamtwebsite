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

export default function Intro() {
  return (
    <section id="about" className={styles.about}>
      <Overview />
      <div className={styles.tech}>
        <div className={styles.codeItems}>
          <CodeStackItem
            icon={
              <FontAwesomeIcon
                icon={faWindowMaximize as IconDefinition}
                size={"xs"}
              />
            }
            name={"Web Frameworks"}
            value={"React, Remix, Next, GraphQl, Redux, Node, flutter web"}
          />
          <CodeStackItem
            icon={
              <FontAwesomeIcon icon={faCode as IconDefinition} size={"xs"} />
            }
            name={"Languages"}
            value={"Javascript, Typescript, Dart, Sass, HTML5"}
          />
          <CodeStackItem
            icon={
              <FontAwesomeIcon
                icon={faPencilAlt as IconDefinition}
                size={"xs"}
              />
            }
            name={"UI & Design Tools"}
            value={
              "Chakra, Tailwind, StoryBook, Styled Components, MUI, Figma, Illustrator"
            }
          />
        </div>
        <div className={styles.codeItems}>
          <CodeStackItem
            icon={
              <FontAwesomeIcon icon={faCloud as IconDefinition} size={"xs"} />
            }
            name={"Cloud"}
            value={"Amzon Web Services, Google Cloud, Vercel"}
          />
          <CodeStackItem
            icon={
              <FontAwesomeIcon
                icon={faDatabase as IconDefinition}
                size={"xs"}
              />
            }
            name={"Databases"}
            value={"MongoDb, Postgres, Redis, DynamoDb, MySql, bigQuery"}
          />

          <CodeStackItem
            icon={
              <FontAwesomeIcon icon={faCogs as IconDefinition} size={"xs"} />
            }
            name={"Testing"}
            value={"Jest, Enzyme, React Testing Library, Cypress"}
          />
          <CodeStackItem
            icon={
              <FontAwesomeIcon
                icon={faTerminal as IconDefinition}
                size={"xs"}
              />
            }
            name={"CI/CD"}
            value={"Github Actions, Jenkins, Gitlab CI, Aws CodePipeline"}
          />
        </div>
      </div>
    </section>
  );
}
