"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language } from "@/lib/i18n/translations";

type TranslationValue = string | { [key: string]: TranslationValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const storedLang = localStorage.getItem("kishenergy-lang") as Language;
    if (storedLang === "en" || storedLang === "fa") {
      setLanguageState(storedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("kishenergy-lang", lang);
  };

  const isRTL = language === "fa";

  const t = (path: string): string => {
    const keys = path.split(".");
    let current: any = translations[language];

    for (const key of keys) {
      if (current && typeof current === "object" && key in current) {
        current = current[key];
      } else {
        // Fallback to English if key not found in active language
        let enFallback: any = translations["en"];
        for (const fallbackKey of keys) {
          if (enFallback && typeof enFallback === "object" && fallbackKey in enFallback) {
            enFallback = enFallback[fallbackKey];
          } else {
            return path; // Return key path if not found anywhere
          }
        }
        return typeof enFallback === "string" ? enFallback : path;
      }
    }

    return typeof current === "string" ? current : path;
  };

  useEffect(() => {
    // Set HTML lang and dir attributes dynamically on client side
    document.documentElement.lang = language;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
