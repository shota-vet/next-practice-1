"use client";

import styles from "./Header.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // cleanup処理
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
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
        <div className={`${styles.headerNav} ${isOpen ? styles.isShow : ""}`}>
          <nav className={styles.globalNav}>
            <ul className={styles.globalNavList}>
              <li className={styles.globalNavItem}>
                <Link className={styles.globalNavLink} href="news.html">
                  news
                </Link>
              </li>
              <li className={styles.globalNavItem}>
                <Link className={styles.globalNavLink} href="service.html">
                  service
                </Link>
              </li>
              <li className={styles.globalNavItem}>
                <Link className={styles.globalNavLink} href="works.html">
                  works
                </Link>
              </li>
              <li className={styles.globalNavItem}>
                <Link className={styles.globalNavLink} href="company.html">
                  company
                </Link>
              </li>
              <li className={styles.globalNavItem}>
                <Link className={styles.globalNavLink} href="recruit.html">
                  recruit
                </Link>
              </li>
              <li className={styles.globalNavItem}>
                <Link className={styles.globalNavLink} href="contact.html">
                  contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* ハンバーガーメニュー用のボタン */}
        <button
          type="button"
          className={`${styles.menuButton} ${isOpen ? styles.isActive : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <span className={styles.menuButtonLine}></span>
        </button>
      </div>
    </header>
  );
}

// "use client"; Nextではサーバーコンポーネントとブラウザコンポーネントで分けていてhooksはブラウザcで動く
// Server Component サーバー  HTML生成・DB取得
// Client Component ブラウザ  useState / useEffect / イベント
// Reactは「全部ブラウザで動く」
// Nextは「必要な部分だけブラウザで動かす」

// client必要がどうかは動的かどうかだけではない
// データが変わる  DB記事・API取得  ❌ 不要
// ユーザー操作で変わる クリック・スクロール　onClick　useStatevuseEffect,window,document,local,Storage,scroll  ⭕ 必要　ブラウザAPIを触るとき
