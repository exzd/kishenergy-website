/**
 * JSON-LD Schema Generators for Kish Energy (kishenergy.ir)
 * These structured data schemas help search engines and LLMs understand
 * entities, business locations, offered services, and FAQ structures.
 */

export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kish Energy",
    "alternateName": "کیش انرژی",
    "url": "https://kishenergy.ir",
    "logo": "https://kishenergy.ir/logo.png",
    "description": "Kish Energy is an Iran-based company specializing in energy trading and brokerage, Engineering, Procurement, and Construction (EPC) projects, and industrial equipment supply.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 305, Energy Tower, Sanaei Blvd",
      "addressLocality": "Kish Island",
      "addressRegion": "Hormozgan",
      "addressCountry": "IR"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+98-76-4442-0000",
        "contactType": "customer service",
        "areaServed": "IR",
        "availableLanguage": ["English", "Persian"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+98-21-8888-0000",
        "contactType": "sales",
        "areaServed": "Global",
        "availableLanguage": ["English", "Persian"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/kishenergy",
      "https://github.com/exzd/kishenergy-website"
    ]
  };
};

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Kish Energy HQ",
    "image": "https://kishenergy.ir/office.jpg",
    "telephone": "+98-76-4442-0000",
    "email": "info@kishenergy.ir",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit 305, Energy Tower, Sanaei Blvd",
      "addressLocality": "Kish Island",
      "addressRegion": "Hormozgan",
      "addressCountry": "IR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.5333,
      "longitude": 54.0167
    },
    "url": "https://kishenergy.ir",
    "priceRange": "$$$$"
  };
};

export const getServiceSchema = (
  name: string,
  description: string,
  providerName: string = "Kish Energy"
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": providerName,
      "url": "https://kishenergy.ir"
    },
    "description": description,
    "areaServed": "Global"
  };
};

export const getFAQPageSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const getBreadcrumbSchema = (items: { name: string; item: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.item
    }))
  };
};

export const getArticleSchema = (article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  slug: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified || article.datePublished,
    "author": {
      "@type": "Person",
      "name": article.authorName
    },
    "publisher": {
      "@type": "Organization",
      "name": "Kish Energy",
      "logo": {
        "@type": "ImageObject",
        "url": "https://kishenergy.ir/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kishenergy.ir/blog/${article.slug}`
    }
  };
};
