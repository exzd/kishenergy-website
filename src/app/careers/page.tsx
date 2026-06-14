"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./careers.module.css";

export default function Careers() {
  const { t } = useLanguage();

  const jobs = [
    {
      id: 1,
      title: t("careers.pos1Title"),
      dept: t("careers.pos1Dept"),
      loc: t("careers.pos1Loc"),
    },
    {
      id: 2,
      title: t("careers.pos2Title"),
      dept: t("careers.pos2Dept"),
      loc: t("careers.pos2Loc"),
    },
  ];

  return (
    <div className={styles.careersPage}>
      {/* Hero */}
      <section className={styles.careersHero}>
        <div className="container">
          <h1 className={styles.title}>{t("careers.title")}</h1>
          <p className={styles.subtitle}>{t("careers.subtitle")}</p>
        </div>
      </section>

      {/* Culture */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.cultureWrapper}>
            <h2 className={styles.cultureTitle}>{t("careers.introTitle")}</h2>
            <p className={styles.cultureDesc}>{t("careers.introDesc")}</p>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className={`${styles.section} ${styles.bgSecondary}`}>
        <div className="container">
          <SectionHeading title={t("careers.positionsTitle")} />
          <div className={styles.jobList}>
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.jobInfo}>
                    <h3 className={styles.jobTitle}>{job.title}</h3>
                    <div className={styles.jobMeta}>
                      <span>{job.dept}</span>
                      <span>•</span>
                      <span>{job.loc}</span>
                    </div>
                  </div>
                  <a href="mailto:careers@kishenergy.ir">
                    <button className={styles.applyBtn}>Apply Now</button>
                  </a>
                </div>
              ))
            ) : (
              <p className={styles.noJobs}>{t("careers.noPositions")}</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
