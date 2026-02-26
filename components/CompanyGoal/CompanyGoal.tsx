import styles from "./CompanyGoal.module.css";
import Button from "../Button/Button";
import classNames from "classnames";
type Props = {
  headingTitle: string;
  headingSubTitle?: string;
  className?: string;
};
export default function CompanyGoal({
  headingTitle,
  headingSubTitle,
  className,
}: Props) {
  return (
    <section className={classNames(styles.companyGoal, className)}>
      <div className={styles.companyGoalInner}>
        <div className={styles.companyGoalHeading}>
          <h2 className={styles.companyGoalTitle}>{headingTitle}</h2>
          <p className={styles.companyGoalSubTitle}>{headingSubTitle}</p>
        </div>
        <div className={styles.messageHeading}>
          <span className={styles.message}>
            サイトのゴール = 夢を叶えること
          </span>
        </div>
        <p className={styles.text}>
          お客様の夢を叶えること。
          <br />
          それがWebサイトのゴールであり、私たちが目指すことです。
          <br />
          だからこそちゃんと成果を出すサイトを全力で作りします。
          <br />
          お客様の笑顔を見たい。
          <br />
          夢を実現する手助けをさせてください。
        </p>
        <Button />
      </div>
    </section>
  );
}
