import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.circularinnovationhub.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/cih_logo_vec.png`;
const TWITTER_HANDLE = "@Circular_IHub";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  path?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({
  title,
  description,
  canonical,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noIndex = false,
  breadcrumbs,
  jsonLd,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | Circular Innovation Hub`;

  const schemas: Record<string, unknown>[] = [];

  if (jsonLd) {
    const items = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
    schemas.push(...items);
  }

  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.url}`,
      })),
    });
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical || url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Circular Innovation Hub" />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={TWITTER_HANDLE} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
