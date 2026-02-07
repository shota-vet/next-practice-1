import styles from "./Header.module.css";

import { useState, useEffect } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerLogo}>
        <h1 className={styles.logo}>
          <a href="." className={styles.logoLink}>
            <img
              className={styles.logoImg}
              src="/img/logo.svg"
              alt="PON DESIGN"
            />
          </a>
        </h1>
      </div>
      <div className={styles.headerNav}>
        <nav className={styles.globalNav}>
          <ul className={styles.globalNavList}>
            <li className={styles.globalNavItem}>
              <a className={styles.globalNavLink} href="news.html">
                news
              </a>
            </li>
            <li className={styles.globalNavItem}>
              <a className={styles.globalNavLink} href="service.html">
                service
              </a>
            </li>
            <li className={styles.globalNavItem}>
              <a className={styles.globalNavLink} href="works.html">
                works
              </a>
            </li>
            <li className={styles.globalNavItem}>
              <a className={styles.globalNavLink} href="company.html">
                company
              </a>
            </li>
            <li className={styles.globalNavItem}>
              <a className={styles.globalNavLink} href="recruit.html">
                recruit
              </a>
            </li>
            <li className={styles.globalNavItem}>
              <a className={styles.globalNavLink} href="contact.html">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* ハンバーガーメニュー用のボタン */}
      <button type="button" className={styles.menuButton}>
        <span className={styles.menuButtonLine}></span>
      </button>
    </header>
  );
}
