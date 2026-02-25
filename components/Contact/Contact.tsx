import Button from "../Button/Button";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.contactInner}>
        <div className={styles.contactHeading}>
          <h2>CONTACT</h2>
          <p>お問い合わせ</p>
        </div>
        <div className={styles.contactBody}>
          <p>Webサイトの制作のご依頼や見積もりなど、お気軽にご相談ください。</p>
        </div>
        <Button />
      </div>
    </section>
  );
}
