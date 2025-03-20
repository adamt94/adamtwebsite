import { motion } from "framer-motion";
import profileImage from "../../images/profile-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Overview() {
  const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", bounce: 0.4, duration: 1.5 },
    },
  };
  return (
    <motion.div
      transition={{ staggerChildren: 0.2 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      className="grid  sm:grid-cols-2 items-center justify-items-center"
    >
      <div id="about" className=" w-full sm:w-2/3 text-left">
        <motion.h1
          variants={textAnimate}
          className="display-large font-bol on-surface-text"
        >
          Hi, I'm Adam
        </motion.h1>
        <motion.p
          className="title-large on-surface-variant-text"
          variants={textAnimate}
        >
          Software engineer bulding interesting things for the web. Currently
          working at <span className="primary-text">PrettyLittleThing.</span>
        </motion.p>
        <a href="https://github.com/adamt94" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub as IconDefinition}
            size={"2x"}
            className="secondary-text py-3 px-1"
          />
        </a>
      </div>
      <div className="hidden sm:block">
        <motion.div className="image-transition" variants={textAnimate}>
          <img
            src={profileImage}
            width={400}
            className="border-4 border-secondary rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
