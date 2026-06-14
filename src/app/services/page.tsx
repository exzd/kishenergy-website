"use client";

import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getServiceSchema } from "@/lib/schema";
import styles from "./services.module.css";

export default function Services() {
  const { t } = useLanguage();

  const tradingSchema = getServiceSchema(t("services.tradingHeader"), t("services.tradingBody"));
  const epcSchema = getServiceSchema(t("services.epcHeader"), t("services.epcBody"));
  const supplySchema = getServiceSchema(t("services.supplyHeader"), t("services.supplyBody"));

  return (
    <div className={styles.servicesPage}>
      {/* Inject Schema markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([tradingSchema, epcSchema, supplySchema]),
        }}
      />

      {/* Hero */}
      <section className={styles.servicesHero}>
        <div className="container">
          <h1 className={styles.title}>{t("services.title")}</h1>
          <p className={styles.subtitle}>{t("services.subtitle")}</p>
        </div>
      </section>

      {/* Energy Trading */}
      <section id="trading" className={styles.section}>
        <div className="container">
          <div className={styles.serviceWrapper}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceTagline}>01 / {t("nav.energyTrading")}</span>
                <h2 className={styles.serviceTitle}>{t("services.tradingHeader")}</h2>
              </div>
              <p className={styles.serviceBody}>{t("services.tradingBody")}</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.tradingItem1")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.tradingItem2")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.tradingItem3")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.tradingItem4")}
                </li>
              </ul>
            </div>
            <div className={styles.visualSide}>
              <div className={styles.visualIcon}>🌐</div>
              <h3 className={styles.visualTitle}>{t("home.tradingTitle")}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* EPC Projects */}
      <section id="epc" className={`${styles.section} ${styles.even}`}>
        <div className="container">
          <div className={styles.serviceWrapper} style={{ direction: "rtl" }}>
            <div className={styles.serviceContent} style={{ direction: "ltr" }}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceTagline}>02 / {t("nav.epc")}</span>
                <h2 className={styles.serviceTitle}>{t("services.epcHeader")}</h2>
              </div>
              <p className={styles.serviceBody}>{t("services.epcBody")}</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.epcItem1")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.epcItem2")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.epcItem3")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.epcItem4")}
                </li>
              </ul>
            </div>
            <div className={styles.visualSide} style={{ direction: "ltr" }}>
              <div className={styles.visualIcon}>🏗️</div>
              <h3 className={styles.visualTitle}>{t("home.epcTitle")}</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Supply */}
      <section id="supply" className={styles.section}>
        <div className="container">
          <div className={styles.serviceWrapper}>
            <div className={styles.serviceContent}>
              <div className={styles.serviceHeader}>
                <span className={styles.serviceTagline}>03 / {t("nav.equipmentSupply")}</span>
                <h2 className={styles.serviceTitle}>{t("services.supplyHeader")}</h2>
              </div>
              <p className={styles.serviceBody}>{t("services.supplyBody")}</p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.supplyItem1")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.supplyItem2")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.supplyItem3")}
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listIcon}>✓</span>
                  {t("services.supplyItem4")}
                </li>
              </ul>
            </div>
            <div className={styles.visualSide}>
              <div className={styles.visualIcon}>🔌</div>
              <h3 className={styles.visualTitle}>{t("home.supplyTitle")}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
