import { motion } from "framer-motion";
import profileImage from "../../images/profile-image.jpg";

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
