"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./about.module.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className={styles.aboutPage}>
      {/* Hero */}
      <section className={styles.aboutHero}>
        <div className="container">
          <h1 className={styles.title}>{t("about.title")}</h1>
          <p className={styles.subtitle}>{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Story */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className="section-heading" style={{ textAlign: "left", marginBottom: "1.5rem" }}>
                {t("about.storyTitle")}
              </h2>
              <p>{t("about.storyP1")}</p>
              <p>{t("about.storyP2")}</p>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.visualTagline}>KISH ENERGY</div>
              <div className={styles.visualSub}>{t("nav.tagline")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={`${styles.section} ${styles.mvSection}`}>
        <div className="container">
          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>🎯</div>
              <h3 className={styles.mvTitle}>{t("about.missionTitle")}</h3>
              <p className={styles.mvDesc}>{t("about.mission")}</p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIcon}>👁️</div>
              <h3 className={styles.mvTitle}>Vision</h3>
              <p className={styles.mvDesc}>{t("about.vision")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={styles.section}>
        <div className="container">
          <SectionHeading title={t("about.valuesTitle")} />
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>{t("about.value1Title")}</h4>
              <p className={styles.valueDesc}>{t("about.value1Desc")}</p>
            </div>
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>{t("about.value2Title")}</h4>
              <p className={styles.valueDesc}>{t("about.value2Desc")}</p>
            </div>
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>{t("about.value3Title")}</h4>
              <p className={styles.valueDesc}>{t("about.value3Desc")}</p>
            </div>
            <div className={styles.valueCard}>
              <h4 className={styles.valueTitle}>{t("about.value4Title")}</h4>
              <p className={styles.valueDesc}>{t("about.value4Desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
