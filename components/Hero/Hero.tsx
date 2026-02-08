import styles from "./Hero.module.css";

type Props = {
  title: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "large" | "small";
};
// 画像の大きさをvarientキーでクラス切り替え

export default function Hero(props: Props) {
  const sizeClass = props.variant === "small" ? styles.small : styles.large; //三項演算子（ternary operator）
  return (
    <section className={`${styles.hero} ${sizeClass}`}>
      <div className={styles.center}>
        <h1>{props.title}</h1>

        <p>{props.subtitle}</p>
        {/* 条件付きレンダリング */}
        {props.buttonText && (
          <button className={styles.button}>{props.buttonText}</button>
        )}
      </div>
    </section>
  );
}
