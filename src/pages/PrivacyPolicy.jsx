import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const sections = [
  {
    title: "Information you provide",
    paragraphs: [
      "When you contact kardengey through the website, you may choose to provide details such as your name, email address, company or brand, phone number, requested service, approximate budget and project message. We use this information to respond to your enquiry and discuss the services you request.",
      "Please do not submit sensitive personal information through the contact form.",
    ],
  },
  {
    title: "Analytics",
    paragraphs: [
      "We use Google Analytics to understand how visitors discover and use the website, such as which pages are visited and general traffic patterns. Analytics may use cookies or similar technologies and may process information such as online identifiers, device/browser information and usage events.",
    ],
  },
  {
    title: "Advertising and cookies",
    paragraphs: [
      "This website uses Google AdSense code and may display Google advertising if the site is approved and ads are enabled. Google and its advertising partners may use cookies or similar technologies to serve, measure and personalise ads, subject to your settings, applicable consent requirements and Google's policies. Advertising may not appear on every visit.",
      "You can manage cookie preferences through any consent message shown on this website and manage ad personalisation through your Google account and Google's ad settings. Blocking cookies in your browser may affect some website or advertising functionality.",
    ],
  },
  {
    title: "How information is used",
    paragraphs: [
      "Information may be used to reply to enquiries, provide requested services, maintain and secure the website, understand site performance, and support advertising and measurement where enabled. We do not sell the personal information you submit through our contact form.",
    ],
  },
  {
    title: "Third-party services",
    paragraphs: [
      "The website may rely on third-party services, including Google Analytics, Google AdSense, website hosting and contact-form delivery providers. Those providers process information according to their own terms and privacy policies. We do not control the privacy practices of third-party websites or services.",
    ],
  },
  {
    title: "Data retention and security",
    paragraphs: [
      "We keep enquiry information for as long as reasonably necessary to respond, maintain business records, resolve issues and meet applicable obligations. We take reasonable steps to protect information, but no internet transmission or storage system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "Your choices and questions",
    paragraphs: [
      "You may contact us to ask about personal information you have submitted or request that we correct or delete it, subject to any applicable legal or legitimate record-keeping requirements. You can also control cookies through your browser and use Google's available privacy and advertising controls.",
    ],
  },
  {
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as the website, services or applicable requirements change. The latest version will be published on this page with its updated date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how kardengey handles contact enquiries, analytics, cookies and advertising technologies on its website."
        canonical="https://kardengey.com/privacy-policy"
      />
      <main className="min-h-screen bg-[#050505] px-[6vw] pb-24 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            to="/"
            className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 transition-colors hover:text-white"
          >
            ← kardengey
          </Link>

          <p className="mt-16 text-[10px] uppercase tracking-[0.4em] text-blue-500">
            Website information
          </p>
          <h1 className="mt-6 text-[clamp(3rem,8vw,6.5rem)] font-black uppercase leading-[0.88] tracking-[-0.07em]">
            Privacy
            <br />
            <span className="text-neutral-600">Policy.</span>
          </h1>
          <p className="mt-8 text-sm text-neutral-500">Last updated: 28 October 2026</p>
          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-400 md:text-lg">
            This policy explains how kardengey handles information when you visit
            kardengey.com, contact us, or interact with analytics and advertising
            technologies on the website.
          </p>

          <div className="mt-14 border-t border-white/10">
            {sections.map((section, index) => (
              <section key={section.title} className="border-b border-white/10 py-8 md:py-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-xl font-bold tracking-tight text-white md:text-2xl">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-4 max-w-3xl text-sm leading-7 text-neutral-400 md:text-base md:leading-8">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <section className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="text-lg font-bold text-white">Contact</h2>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              For privacy questions, email{" "}
              <a className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-blue-500" href="mailto:kardengey@gmail.com">
                kardengey@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
