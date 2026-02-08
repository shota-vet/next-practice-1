import styles from "./News.module.css";

export default function News() {
  return (
    <section className={styles.news}>
      {/* news = セクション（背景・上下余白の担当） */}
      <div className={styles.newsInner}>
        {/* newsInner = 中身の幅と配置の担当 */}
        <div className={styles.newsHeading}>
          <h2 className={styles.newsTitle}>NEWS</h2>
          <p className={styles.newsSub}>お知らせ</p>
        </div>
        <ul className={styles.newsList}>
          <li className={styles.newsItem}>
            <time className={styles.newsDate} dateTime="2030-02-01">
              2030.02.01
            </time>
            <span className={styles.newsLabel}>お知らせ</span>
            <p className={styles.newsText}>
              Webデザインニュースサイト「ウェブマガジン」に取材いただきました
            </p>
          </li>

          <li className={styles.newsItem}>
            <time className={styles.newsDate} dateTime="2030-01-25">
              2030.01.25
            </time>
            <span className={styles.newsLabel}>制作実績</span>
            <p className={styles.newsText}>
              Smoothiest様のWebサイトを制作いたしました
            </p>
          </li>

          <li className={styles.newsItem}>
            <time className={styles.newsDate} dateTime="2030-01-20">
              2030.01.20
            </time>
            <span className={styles.newsLabel}>採用</span>
            <p className={styles.newsText}>Webデザイナーを1名募集中です！</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
