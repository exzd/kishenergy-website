"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { blogPosts } from "@/lib/blogData";
import styles from "./blog.module.css";

export default function Blog() {
  const { t, language } = useLanguage();

  return (
    <div className={styles.blogPage}>
      {/* Hero */}
      <section className={styles.blogHero}>
        <div className="container">
          <h1 className={styles.title}>{t("nav.blog")}</h1>
          <p className={styles.subtitle}>{t("about.subtitle")}</p>
        </div>
      </section>

      {/* Grid List */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {blogPosts.map((post) => (
              <div key={post.slug} className={styles.card}>
                <div className={styles.cardVisual}>{post.icon}</div>
                <div className={styles.cardContent}>
                  <div className={styles.cardMeta}>
                    <span>{post.category[language]}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className={styles.cardTitle}>{post.title[language]}</h3>
                  <p className={styles.cardDesc}>{post.desc[language]}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                    {t("common.readMore")} <span>➔</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
