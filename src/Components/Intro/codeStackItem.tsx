import styles from "./index.module.scss";

type CodeStackItemProps = {
  icon?: JSX.Element;
  name: string;
  value: string;
};

export default function codeStackItem({
  icon,
  name,
  value,
}: CodeStackItemProps) {
  return (
    <div className={styles.codeStackItem}>
      <div className={styles.leftContainer}>
        <p className={styles.name}>{name}</p>

        <p className={styles.value}>{value}</p>
        <div className={styles.icon}>{icon}</div>
      </div>
    </div>
  );
}
