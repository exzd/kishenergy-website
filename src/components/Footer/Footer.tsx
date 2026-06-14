"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.grid} container`}>
        {/* Col 1: Brand */}
        <div className={styles.col}>
          <div className={styles.logo}>
            <span>KISH</span>
            <span className={styles.logoGold}>ENERGY</span>
          </div>
          <p className={styles.desc}>{t("home.heroSubtitle")}</p>
        </div>

        {/* Col 2: Navigation */}
        <div className={styles.col}>
          <h4 className={styles.heading}>{t("nav.services")}</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/services#trading" className={styles.link}>
                {t("nav.energyTrading")}
              </Link>
            </li>
            <li>
              <Link href="/services#epc" className={styles.link}>
                {t("nav.epc")}
              </Link>
            </li>
            <li>
              <Link href="/services#supply" className={styles.link}>
                {t("nav.equipmentSupply")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.heading}>{t("nav.about")}</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/about" className={styles.link}>
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className={styles.link}>
                {t("nav.projects")}
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.link}>
                {t("nav.blog")}
              </Link>
            </li>
            <li>
              <Link href="/careers" className={styles.link}>
                {t("nav.careers")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact */}
        <div className={styles.col}>
          <h4 className={styles.heading}>{t("common.getInTouch")}</h4>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>✉</span>
            <span>{t("contact.email")}</span>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>☎</span>
            <div>
              <div>{t("contact.hqPhone")} (Kish)</div>
              <div>{t("contact.tehranPhone")} (Tehran)</div>
            </div>
          </div>
          <div className={styles.contactItem}>
            <span className={styles.contactIcon}>📍</span>
            <span>{t("contact.hqAddress")}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`${styles.bottom} container`}>
        <div className={styles.copyright}>
          © {currentYear} Kish Energy (kishenergy.ir). All rights reserved.
        </div>
        <div className={styles.socials}>
          {/* sameAs validation targets */}
          <a
            href="https://linkedin.com/company/kishenergy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            LinkedIn
          </a>
          <a href="/sitemap.xml" className={styles.socialLink}>
            Sitemap
          </a>
          <a href="/llms.txt" className={styles.socialLink}>
            LLM crawling (llms.txt)
          </a>
        </div>
      </div>
    </footer>
  );
};
