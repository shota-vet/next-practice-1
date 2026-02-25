import Hero from "@/components/Hero/Hero";
import News from "@/components/News/News";
import Service from "@/components/Service/Service";
import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import WorksSlider from "@/components/WorksSlider/WorksSlider";
import CompanyGoal from "@/components/CompanyGoal/CompanyGoal";
import Recruit from "@/components/Recruit/Recruit";

export default function HomePage() {
  return (
    <main>
      <Hero
        title="WEB DESIGN SPECIALIST"
        subtitle="お客様の課題を解決するWebサイトを制作"
        buttonText="CONTACT"
        variant="large"
      />
      <News />

      <Service />
      <Button />

      <section className={styles.works}>
        <div className={styles.worksInner}>
          {/* 左：スライダー */}
          <div className={styles.worksMedia} aria-label="制作実績スライダー">
            <WorksSlider />
            {/* ページネーション（ドット） */}
            <div
              className={styles.sliderPagination}
              aria-label="スライド位置"
            />
          </div>
          <div className={styles.worksContent}>
            <div className={styles.worksHeading}>
              <h2 className={styles.worksTitle}>WORKS</h2>
              <p className={styles.worksSubtitle}>制作実績</p>
            </div>
            <div className={styles.worksBody}>
              <p className={styles.worksText}>
                様々なジャンルのWebサイト制作が可能です。
                <br />
                ご購入やお申込み数の増加などを実現します！
              </p>
            </div>
            <div className={styles.worksLink}>
              <Button />
            </div>
          </div>
        </div>
      </section>

      <CompanyGoal headingTitle="COMPANY" headingSubTitle="私たちについて" />
      <Recruit />
    </main>
  );
}
