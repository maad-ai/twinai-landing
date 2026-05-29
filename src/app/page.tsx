import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Explainer } from '@/components/sections/Explainer';
import { InteractiveDemo } from '@/components/sections/InteractiveDemo';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { ForCreators } from '@/components/sections/ForCreators';
import { ForFans } from '@/components/sections/ForFans';
import { Pricing } from '@/components/sections/Pricing';
import { Waitlist } from '@/components/sections/Waitlist';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import {
  getWebApplicationSchema,
  getOrganizationSchema,
  getFAQSchema,
} from '@/lib/schema';

export default function Home() {
  const webAppSchema = getWebApplicationSchema();
  const orgSchema = getOrganizationSchema();
  const faqSchema = getFAQSchema();

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main id="main-content">
        <Hero />
        <Explainer />
        <InteractiveDemo />
        <HowItWorks />
        <ForCreators />
        <ForFans />
        <Pricing />
        <Waitlist />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
