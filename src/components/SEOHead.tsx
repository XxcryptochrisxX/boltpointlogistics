import { useEffect } from 'react';
import { LOCAL_BUSINESS_SCHEMA } from '../data';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath: string;
  schema?: object;
}

export default function SEOHead({ title, description, canonicalPath, schema }: SEOHeadProps) {
  const fullTitle = `${title} | Boltpoint Logistics Courier`;
  const siteUrl = 'https://boltpointlogistics.com'; // Fallback static URL
  const absoluteUrl = `${siteUrl}${canonicalPath.startsWith('/') ? canonicalPath : '/' + canonicalPath}`;

  useEffect(() => {
    // 1. Update document title
    document.title = fullTitle;

    // 2. Helper to find or create meta tag
    const updateMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const isProperty = selector.includes('property=');
        if (isProperty) {
          element.setAttribute('property', selector.split('"')[1]);
        } else {
          element.setAttribute('name', selector.split('"')[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // 3. Update primary SEO meta tags
    updateMetaTag('meta[name="description"]', 'content', description);
    
    // 4. Update Open Graph details (Social Networks)
    updateMetaTag('meta[property="og:title"]', 'content', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', absoluteUrl);
    updateMetaTag('meta[property="og:type"]', 'content', 'website');
    updateMetaTag('meta[property="og:image"]', 'content', 'https://boltpointlogistics.com/logo.png');

    // 5. Update Twitter Cards
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', 'https://boltpointlogistics.com/logo.png');

    // 6. Update Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', absoluteUrl);

    // 7. Dynamic JSON-LD injection
    const existingSchemaScript = document.getElementById('jsonld-schema-boltpoint');
    if (existingSchemaScript) {
      existingSchemaScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'jsonld-schema-boltpoint';
    script.type = 'application/ld+json';
    
    const activeSchema = schema || LOCAL_BUSINESS_SCHEMA;
    script.innerHTML = JSON.stringify(activeSchema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToClean = document.getElementById('jsonld-schema-boltpoint');
      if (scriptToClean) {
        scriptToClean.remove();
      }
    };
  }, [fullTitle, description, absoluteUrl, schema]);

  return null; // Side effect only component
}
