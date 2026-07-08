const SITE_URL = "https://www.circularinnovationhub.com";
const BUSINESS_NAME = "Circular Innovation Hub";
const BUSINESS_DESCRIPTION =
  "Inspiring and enabling the transition to a sustainable world through circular economy excellence. We offer advisory, co-working, BPO, startup hub, mentorship, and academy services.";
const LOGO_URL = `${SITE_URL}/cih_logo_vec.png`;
const SOCIAL_LINKS = [
  "https://www.facebook.com/CircularIHub/",
  "https://x.com/Circular_IHub",
  "https://www.instagram.com/circularinnovationhub",
  "https://www.linkedin.com/company/circularinnovationhub/posts/",
];
const ADDRESS_KENYA = {
  street: "233, Owashika Road, Lavington",
  city: "Nairobi",
  country: "Kenya",
};
const ADDRESS_USA = {
  street: "1209 Orange St.",
  city: "Wilmington",
  state: "DE",
  postalCode: "19801",
  country: "US",
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    description: BUSINESS_DESCRIPTION,
    sameAs: SOCIAL_LINKS,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: ADDRESS_KENYA.street,
        addressLocality: ADDRESS_KENYA.city,
        addressCountry: ADDRESS_KENYA.country,
      },
      {
        "@type": "PostalAddress",
        streetAddress: ADDRESS_USA.street,
        addressLocality: ADDRESS_USA.city,
        addressRegion: ADDRESS_USA.state,
        postalCode: ADDRESS_USA.postalCode,
        addressCountry: ADDRESS_USA.country,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+254-712-746-922",
        contactType: "customer service",
        email: "info@circularinnovationhub.com",
        areaServed: ["KE", "US"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    description: BUSINESS_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: BUSINESS_NAME,
    image: LOGO_URL,
    url: SITE_URL,
    telephone: "+254-712-746-922",
    email: "info@circularinnovationhub.com",
    description: BUSINESS_DESCRIPTION,
    sameAs: SOCIAL_LINKS,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${ADDRESS_KENYA.street}; ${ADDRESS_USA.street}, ${ADDRESS_USA.city}, ${ADDRESS_USA.state} ${ADDRESS_USA.postalCode}`,
      addressLocality: ADDRESS_KENYA.city,
      addressCountry: ADDRESS_KENYA.country,
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function webPageSchema(
  title: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}${url}#webpage`,
    url: `${SITE_URL}${url}`,
    name: title,
    description: description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en",
  };
}

export function faqSchema(questions: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };
}

export function courseSchema(
  name: string,
  description: string,
  url: string,
  providerName: string = BUSINESS_NAME,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: providerName,
      sameAs: SITE_URL,
    },
  };
}
