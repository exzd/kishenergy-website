"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { getArticleSchema } from "@/lib/schema";
import { BlogPost } from "@/lib/blogData";
import styles from "../blog.module.css";

interface ArticleClientProps {
  post: BlogPost;
}

export const ArticleClient: React.FC<ArticleClientProps> = ({ post }) => {
  const { t, language } = useLanguage();

  const articleSchema = getArticleSchema({
    title: post.title[language],
    description: post.desc[language],
    image: "https://kishenergy.ir/og-image.jpg",
    datePublished: post.date,
    authorName: "Kish Energy Engineering Board",
    slug: post.slug,
  });

  return (
    <div className={styles.articlePage}>
      {/* Inject Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className={`${styles.articleContainer} container`}>
        <Link href="/blog" className={styles.backLink}>
          ← {language === "en" ? "Back to Blog" : "بازگشت به وبلاگ"}
        </Link>

        <article>
          <header className={styles.articleHeader}>
            <div className={styles.articleMeta}>
              <span>{post.category[language]}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime[language]}</span>
            </div>
            <h1 className={styles.articleTitle}>{post.title[language]}</h1>
          </header>

          <div
            className={styles.articleBody}
            dangerouslySetInnerHTML={{ __html: post.content[language].html }}
          />
        </article>
      </div>
    </div>
  );
};
export default ArticleClient;
