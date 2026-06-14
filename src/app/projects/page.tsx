"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import styles from "./projects.module.css";

type ProjectCategory = "all" | "trading" | "epc" | "supply";

export default function Projects() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectCategory>("all");

  const projectList = [
    {
      id: 1,
      category: "epc" as const,
      title: t("projects.project1Title"),
      desc: t("projects.project1Desc"),
      icon: "🏗️",
    },
    {
      id: 2,
      category: "trading" as const,
      title: t("projects.project2Title"),
      desc: t("projects.project2Desc"),
      icon: "🌐",
    },
    {
      id: 3,
      category: "supply" as const,
      title: t("projects.project3Title"),
      desc: t("projects.project3Desc"),
      icon: "🔌",
    },
    {
      id: 4,
      category: "epc" as const,
      title: t("projects.project4Title"),
      desc: t("projects.project4Desc"),
      icon: "🛢️",
    },
    {
      id: 5,
      category: "supply" as const,
      title: t("projects.project5Title"),
      desc: t("projects.project5Desc"),
      icon: "⚓",
    },
    {
      id: 6,
      category: "trading" as const,
      title: t("projects.project6Title"),
      desc: t("projects.project6Desc"),
      icon: "🚢",
    },
  ];

  const filteredProjects =
    filter === "all" ? projectList : projectList.filter((p) => p.category === filter);

  return (
    <div className={styles.projectsPage}>
      {/* Hero */}
      <section className={styles.projectsHero}>
        <div className="container">
          <h1 className={styles.title}>{t("projects.title")}</h1>
          <p className={styles.subtitle}>{t("projects.subtitle")}</p>
        </div>
      </section>

      {/* Grid List */}
      <section className={styles.section}>
        <div className="container">
          {/* Filters */}
          <div className={styles.filterWrapper}>
            <button
              onClick={() => setFilter("all")}
              className={`${styles.filterBtn} ${filter === "all" ? styles.filterBtnActive : ""}`}
            >
              {t("common.all")}
            </button>
            <button
              onClick={() => setFilter("trading")}
              className={`${styles.filterBtn} ${filter === "trading" ? styles.filterBtnActive : ""}`}
            >
              {t("nav.energyTrading")}
            </button>
            <button
              onClick={() => setFilter("epc")}
              className={`${styles.filterBtn} ${filter === "epc" ? styles.filterBtnActive : ""}`}
            >
              {t("nav.epc")}
            </button>
            <button
              onClick={() => setFilter("supply")}
              className={`${styles.filterBtn} ${filter === "supply" ? styles.filterBtnActive : ""}`}
            >
              {t("nav.equipmentSupply")}
            </button>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {filteredProjects.map((project) => (
              <div key={project.id} className={styles.card}>
                <div className={styles.cardVisual}>
                  <div className={styles.cardIcon}>{project.icon}</div>
                  <span className={styles.cardTag}>{project.category}</span>
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDesc}>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
