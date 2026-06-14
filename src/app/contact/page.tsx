"use client";

import React, { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getLocalBusinessSchema } from "@/lib/schema";
import styles from "./contact.module.css";

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact form submission
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.contactPage}>
      {/* Inject Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
      />

      {/* Hero */}
      <section className={styles.contactHero}>
        <div className="container">
          <h1 className={styles.title}>{t("contact.title")}</h1>
          <p className={styles.subtitle}>{t("contact.subtitle")}</p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.grid}>
            {/* Info Cards */}
            <div className={styles.infoCol}>
              {/* HQ */}
              <div className={styles.officeCard}>
                <h3 className={styles.officeTitle}>{t("contact.hqTitle")}</h3>
                <div className={styles.officeDetail}>
                  <span className={styles.icon}>📍</span>
                  <span>{t("contact.hqAddress")}</span>
                </div>
                <div className={styles.officeDetail}>
                  <span className={styles.icon}>☎</span>
                  <span>{t("contact.hqPhone")}</span>
                </div>
                <div className={styles.officeDetail}>
                  <span className={styles.icon}>✉</span>
                  <span>{t("contact.email")}</span>
                </div>
              </div>

              {/* Tehran Office */}
              <div className={styles.officeCard}>
                <h3 className={styles.officeTitle}>{t("contact.tehranTitle")}</h3>
                <div className={styles.officeDetail}>
                  <span className={styles.icon}>📍</span>
                  <span>{t("contact.tehranAddress")}</span>
                </div>
                <div className={styles.officeDetail}>
                  <span className={styles.icon}>☎</span>
                  <span>{t("contact.tehranPhone")}</span>
                </div>
                <div className={styles.officeDetail}>
                  <span className={styles.icon}>✉</span>
                  <span>{t("contact.email")}</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.successMessage}>
                  {t("contact.successMsg")}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      {t("contact.formName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      {t("contact.formEmail")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>
                      {t("contact.formSubject")}
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>
                      {t("contact.formMessage")}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    {t("contact.formBtn")}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
