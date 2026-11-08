import SEO from "../components/SEO";
import Contact from "../components/contact/Contact";

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Kardengey | Start a Project Enquiry"
        description="Contact Kardengey about website development, SEO, performance marketing, branding and digital growth projects. Send a project enquiry or reach us directly by email or WhatsApp."
        canonical="https://kardengey.com/contact"
      />
      <main className="min-h-screen bg-[#050505] pt-20">
        <Contact />
      </main>
    </>
  );
}
