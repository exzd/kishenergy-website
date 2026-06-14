"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getFAQPageSchema } from "@/lib/schema";
import styles from "./faq.module.css";

export default function FAQ() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqList = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
    },
    {
      q: t("faq.q5"),
      a: t("faq.a5"),
    },
  ];

  // Convert for schema
  const schemaList = faqList.map((faq) => ({
    question: faq.q,
    answer: faq.a,
  }));

  return (
    <div className={styles.faqPage}>
      {/* Inject FAQ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(schemaList)) }}
      />

      {/* Hero */}
      <section className={styles.faqHero}>
        <div className="container">
          <h1 className={styles.title}>{t("faq.title")}</h1>
          <p className={styles.subtitle}>{t("faq.subtitle")}</p>
        </div>
      </section>

      {/* Accordion list */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.faqContainer}>
            {faqList.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div key={index} className={styles.accordion}>
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`${styles.header} ${isOpen ? styles.headerActive : ""}`}
                  >
                    <span>{faq.q}</span>
                    <span className={styles.icon}>{isOpen ? "✕" : "＋"}</span>
                  </button>
                  <div className={`${styles.body} ${isOpen ? styles.bodyActive : ""}`}>
                    <p className={styles.content}>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
