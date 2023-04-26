import { motion } from "framer-motion";
import styles from "./index.module.scss";

type CodeStackItemProps = {
  icon?: JSX.Element;
  name: string;
  value: string;
};

const textAnimate = {
  offscreen: { y: 20, opacity: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.2, duration: 3 },
  },
};

export default function codeStackItem({
  icon,
  name,
  value,
}: CodeStackItemProps) {
  return (
    <motion.div
      transition={{ staggerChildren: 0.4 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      className={styles.codeStackItem}
    >
      <div className={styles.leftContainer}>
        <motion.p variants={textAnimate} className={styles.name}>
          {name}
        </motion.p>

        <motion.p variants={textAnimate} className={styles.value}>
          {value}
        </motion.p>
        <motion.div variants={textAnimate} className={styles.icon}>
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}
