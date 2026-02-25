import Button from "../Button/Button";
import styles from "./Recruit.module.css";

export default function Recruit() {
  return (
    <section className={styles.recruit}>
      <div className={styles.recruitInner}>
        <h2 className={styles.recruitTitle}>RECRUIT</h2>
        <p className={styles.recruitSub}>採用情報</p>
        <p className={styles.recruitText}>私たちと一緒に働きませんか?</p>
        <Button />
      </div>
      <div className={styles.recruitImageWrap}>
        <img
          className={styles.recruitImage}
          src="/img/recruit.jpg"
          alt="採用情報"
        />
      </div>
    </section>
  );
}
