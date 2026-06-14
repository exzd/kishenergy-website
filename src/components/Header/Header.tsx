"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const pathname = usePathname() || "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fa" : "en");
    handleLinkClick();
  };

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/projects", label: t("nav.projects") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/faq", label: t("nav.faq") },
    { href: "/careers", label: t("nav.careers") },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.container} container`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span>KISH</span>
          <span className={styles.logoGold}>ENERGY</span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <Link
                  href={link.href}
                  className={`${styles.navLink} ${
                    isActive(link.href) ? styles.activeLink : ""
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className={styles.actions}>
          <button onClick={toggleLanguage} className={styles.langToggle}>
            {language === "en" ? "فارسی" : "English"}
          </button>
          <Link href="/contact">
            <button className={styles.ctaBtn}>{t("nav.contact")}</button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`${styles.mobileOverlay} ${
            isMenuOpen ? styles.mobileOverlayActive : ""
          }`}
        >
          <ul className={styles.mobileMenu}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`${styles.mobileNavLink} ${
                    isActive(link.href) ? styles.mobileActiveLink : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className={styles.mobileActions}>
            <button onClick={toggleLanguage} className={styles.langToggle}>
              {language === "en" ? "فارسی" : "English"}
            </button>
            <Link href="/contact" onClick={handleLinkClick}>
              <button className={styles.ctaBtn}>{t("nav.contact")}</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
