"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { SectionHeading } from "@/components/SectionHeading/SectionHeading";
import { AnimatedCounter } from "@/components/AnimatedCounter/AnimatedCounter";
import styles from "./page.module.css";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className={styles.homeWrapper}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={`${styles.container} container`}>
          <div className={styles.heroContent}>
            <span className={styles.heroTagline}>{t("nav.tagline")}</span>
            <h1 className={styles.heroTitle}>{t("home.heroTitle")}</h1>
            <p className={styles.heroSubtitle}>{t("home.heroSubtitle")}</p>
            <div className={styles.heroBtns}>
              <Link href="/services" className={styles.btnPrimary}>
                {t("home.ctaPrimary")}
              </Link>
              <Link href="/contact" className={styles.btnSecondary}>
                {t("home.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <div className="container">
          <SectionHeading
            title={t("home.servicesTitle")}
            subtitle={t("home.servicesSubtitle")}
          />
          <div className={styles.servicesGrid}>
            {/* Trading */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🌐</div>
              <h3 className={styles.serviceTitle}>{t("home.tradingTitle")}</h3>
              <p className={styles.serviceDesc}>{t("home.tradingDesc")}</p>
              <Link href="/services#trading" className={styles.serviceLink}>
                {t("common.learnMore")} <span>➔</span>
              </Link>
            </div>

            {/* EPC */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🏗️</div>
              <h3 className={styles.serviceTitle}>{t("home.epcTitle")}</h3>
              <p className={styles.serviceDesc}>{t("home.epcDesc")}</p>
              <Link href="/services#epc" className={styles.serviceLink}>
                {t("common.learnMore")} <span>➔</span>
              </Link>
            </div>

            {/* Supply */}
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔌</div>
              <h3 className={styles.serviceTitle}>{t("home.supplyTitle")}</h3>
              <p className={styles.serviceDesc}>{t("home.supplyDesc")}</p>
              <Link href="/services#supply" className={styles.serviceLink}>
                {t("common.learnMore")} <span>➔</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={15} suffix="+" />
              </span>
              <span className={styles.statLabel}>{t("home.stats1Label")}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={45} suffix="+" />
              </span>
              <span className={styles.statLabel}>{t("home.stats2Label")}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={30} suffix="+" />
              </span>
              <span className={styles.statLabel}>{t("home.stats3Label")}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>
                <AnimatedCounter end={120} suffix="M+" />
              </span>
              <span className={styles.statLabel}>{t("home.stats4Label")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyUsSection}>
        <div className="container">
          <SectionHeading
            title={t("home.whyUsTitle")}
            subtitle={t("home.whyUsSubtitle")}
          />
          <div className={styles.whyUsGrid}>
            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIcon}>🛡️</div>
              <div className={styles.whyUsContent}>
                <h4 className={styles.whyUsCardTitle}>{t("home.whyUsItem1Title")}</h4>
                <p className={styles.whyUsCardDesc}>{t("home.whyUsItem1Desc")}</p>
              </div>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIcon}>⚙️</div>
              <div className={styles.whyUsContent}>
                <h4 className={styles.whyUsCardTitle}>{t("home.whyUsItem2Title")}</h4>
                <p className={styles.whyUsCardDesc}>{t("home.whyUsItem2Desc")}</p>
              </div>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIcon}>🌍</div>
              <div className={styles.whyUsContent}>
                <h4 className={styles.whyUsCardTitle}>{t("home.whyUsItem3Title")}</h4>
                <p className={styles.whyUsCardDesc}>{t("home.whyUsItem3Desc")}</p>
              </div>
            </div>

            <div className={styles.whyUsCard}>
              <div className={styles.whyUsIcon}>🏝️</div>
              <div className={styles.whyUsContent}>
                <h4 className={styles.whyUsCardTitle}>{t("home.whyUsItem4Title")}</h4>
                <p className={styles.whyUsCardDesc}>{t("home.whyUsItem4Desc")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <div className={`${styles.ctaWrapper} container`}>
          <h2 className={styles.ctaTitle}>{t("home.ctaTitle")}</h2>
          <p className={styles.ctaBody}>{t("home.ctaBody")}</p>
          <Link href="/contact" className={styles.btnPrimary}>
            {t("home.ctaBtn")}
          </Link>
        </div>
      </section>
    </div>
  );
}
