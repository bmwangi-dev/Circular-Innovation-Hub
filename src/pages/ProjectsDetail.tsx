import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle,
  Handshake,
  MapPin,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { OptimizedImage } from "../lib/cloudinary";
import SEO from "../components/SEO";
import { organizationSchema, webPageSchema } from "../lib/schema";

interface ProjectDetail {
  id: string;
  slug: string;
  name: string;
  category: string;
  date: string;
  location?: string;
  heroImage: string;
  galleryImages?: string[];
  summary: string;
  fullDescription: string;
  impactStats?: { label: string; value: string; icon: any }[];
  keyHighlights: string[];
  partners?: { name: string; logo?: string }[];
  nextSteps?: string;
}

const projectsDetailData: Record<string, ProjectDetail> = {
  "mentorship-coaching-program": {
    id: "1",
    slug: "mentorship-coaching-program",
    name: "Mentorship And Coaching Program",
    category: "Training",
    date: "2025",
    location: "Nairobi, Kenya",
    heroImage:
      "https://cdn.prod.website-files.com/635673d6c8505112db680f36/6891fe5f4b0df4907fec586f_IMG-20250805-WA0051-p-1080.jpg",
    summary:
      "A transformative mentorship and coaching initiative launched in Q1 2025 to empower entrepreneurs with practical guidance, business skills, and growth opportunities.",
    fullDescription: `The Mentorship and Coaching Program was a 13-week in-person initiative designed to strengthen businesses through expert-led workshops, practical training in financial literacy and business modeling, and collaborative peer engagement that fostered long-term professional connections.`,
    impactStats: [
      { label: "Mentees", value: "48", icon: Users },
      { label: "Mentor Hours", value: "240+", icon: Users },
      { label: "Funding Secured", value: "$85K", icon: Target },
    ],
    keyHighlights: [
      "Weekly workshops on business modelling and financial planning",
      "Peer‑learning cohorts across 5 African countries",
    ],
    nextSteps:
      "Applications for the next cohort open in Q3 2025. Sign up for our newsletter to be notified.",
  },
  "circular-table": {
    id: "2",
    slug: "circular-table",
    name: "Circular Table",
    category: "Event",
    date: "2024",
    location: "Nairobi, Kenya",
    heroImage:
      "https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e336892aabedfae90fd89_Circular%20Table%203-p-800.jpg",
    summary:
      "The Circular Table connects entrepreneurs and innovators in waste management, circular economy and sustainability.",
    fullDescription: `The Circular Table is a dynamic networking and knowledge sharing event series that brings together waste management entrepreneurs, circular economy pioneers, and sustainability experts. Each session features a panel discussion, interactive breakout rooms, and a marketplace where participants showcase their solutions.
`,
    impactStats: [
      { label: "Attendees", value: "150+", icon: Users },
      { label: "Business Matches", value: "30+", icon: Handshake },
      { label: "New Projects", value: "3", icon: Sparkles },
    ],
    keyHighlights: [
      "Keynote from leading circular economy experts",
      "Pitch session for waste innovators",
      "Live circular design workshop",
    ],
  },
  "grant-writing-workshop": {
    id: "3",
    slug: "grant-writing-workshop",
    name: "Grant Application, Proposal Writing & Tendering Workshop",
    category: "Workshop",
    date: "2024",
    location: "Virtual / Nairobi",
    heroImage:
      "https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e333c92b89e39c3c434d1_Grant%20Application%202-p-1080.jpg",
    summary:
      "A full day workshop helping entrepreneurs gain practical proposal and tendering skills.",
    fullDescription: `This intensive workshop was co‑designed with procurement experts and grant specialists. Participants learned how to structure winning proposals, identify relevant funding opportunities, and avoid common pitfalls in government and corporate tenders.

Post‑workshop surveys showed that 80% of attendees felt more confident in applying for grants, and six organisations have since secured grants or contracts using the tools provided.`,
    impactStats: [
      { label: "Participants", value: "64", icon: Users },
      { label: "Funding Won (post‑workshop)", value: "$120K", icon: Target },
      { label: "Satisfaction Rate", value: "92%", icon: CheckCircle },
    ],
    keyHighlights: [
      "Live editing of real proposals",
      "Templates for grant budgets and logical frameworks",
      "in-person office hours with grant reviewers",
    ],
  },
  "barcode-training-program": {
    id: "4",
    slug: "barcode-training-program",
    name: "Barcode Training Program",
    category: "Training",
    date: "2024",
    location: "Nairobi, Kenya",
    heroImage:
      "https://cdn.prod.website-files.com/635673d6c8505112db680f36/688e334c8666671121420e8a_Barcode%20Training%20Program-p-800.jpg",
    summary:
      "In partnership with GS1 Kenya, equipping entrepreneurs with barcode and traceability skills.",
    fullDescription: `The Barcode Training Program was a two‑day hands‑on course that taught entrepreneurs how to implement GS1 standards for product identification, traceability, and supply chain efficiency. Participants left with a clear roadmap to getting their products retail ready and compliant with local and international markets.

Over 40 entrepreneurs from agribusiness, manufacturing, and retail sectors participated. Eight businesses have since registered for GS1 barcodes and are now selling through major supermarket chains.`,
    impactStats: [
      { label: "Entrepreneurs Trained", value: "40+", icon: Users },
      { label: "New Barcodes Issued", value: "250+", icon: Target },
      {
        label: "Market Access Gained",
        value: "8 businesses",
        icon: ArrowRight,
      },
    ],
    keyHighlights: [
      "Certification from GS1 Kenya",
      "Practical exercises using real products",
      "Post‑training support hotline",
    ],
  },
  "upcycling-textile-waste-entrepreneurship": {
    id: "5",
    slug: "upcycling-textile-waste-entrepreneurship",
    name: "Upcycling Second-Hand Textile Waste",
    category: "Training",
    date: "2025-2026",
    location: "Nairobi, Kenya",
    heroImage: "/upcycling.jpg",
    summary:
      "A 15-month project training 120 youth and women in textile upcycling, green entrepreneurship, and circular economy business models across three cohorts in Nairobi.",
    fullDescription: `This 15-month project transforms discarded second-hand textiles into economic opportunity by training 120 youth and women across three cohorts and six training groups in textile upcycling and green entrepreneurship. Managed by Susan Magu (PM) and Joan Amondi (PO), the project runs from August 2025 to October 2026 and addresses Kenya's textile waste crisis through a circular economy lens.

The Needs Assessment employed a mixed-methods approach — focus group discussions, key informant interviews, and desk reviews — across five work streams: stakeholder mapping, skills gap assessment, textile waste mapping, market analysis, and policy review. Findings directly shaped the dual-focused curriculum that integrates hands-on technical skills (sewing, redesign, machine operation) with business development support (financial management, circular business planning).

A Digital Repository Platform (DRP) serves as both a learning hub hosting training curricula and video tutorials, and an online marketplace connecting entrepreneurs to local and international buyers. The Training and Incubation Centre in Mihango, Utawala houses specialised machinery — 10 sewing machines, button hole, leather, and overlock machines — and provides a collaborative workspace for all beneficiaries.

Community mobilisers were instrumental in achieving the 60% women participation target, overcoming barriers through hyper-local recruitment. The project also established Kenya's policy context for circular textiles, aligning with the Kenya National Circular Economy Roadmap, the Sustainable Waste Management Act (EPR), and Vision 2030.`,
    impactStats: [
      { label: "Participants Trained", value: "120", icon: Users },
      { label: "Training Groups", value: "6", icon: Target },
      { label: "Women Target", value: "60%", icon: Users },
    ],
    keyHighlights: [
      "Dual-focused curriculum: technical upcycling skills + business development training",
      "Digital Repository Platform — learning hub and e-commerce marketplace in one",
      "Training and Incubation Centre in Mihango with 10 specialised sewing machines",
      "Community mobiliser network driving 60% women participation across all cohorts",
      "Aligned with Kenya's National Circular Economy Roadmap and EPR policy framework",
    ],
    partners: [
      { name: "EIF" },
      { name: "DOT" },
      { name: "Mastercard Foundation" },
    ],
    nextSteps:
      "Fashion pop-ups and community workshops are ongoing. Contact us to partner on scaling the circular textile model.",
  },
};

function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsDetailData[slug];
}

const categoryColors: Record<string, string> = {
  Training: "bg-[#3d7118]/10 text-[#3d7118] border border-[#3d7118]/20",
  Event: "bg-[#e1ac00]/10 text-[#8a6600] border border-[#e1ac00]/25",
  Workshop: "bg-blue-50 text-blue-700 border border-blue-200",
};

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      const found = getProjectBySlug(slug);
      setProject(found ?? null);
      setLoading(false);
    }
  }, [slug]);

  // Show loading state while checking for project
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#3d7118] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading project...</p>
        </div>
      </div>
    );
  }

  // Show 404 if project not found
  if (!project) {
    return (
      <>
        <SEO title="Project Not Found" description="The requested project could not be found." path="/projects/404" noIndex />
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-center max-w-md px-4">
            <h1 className="text-6xl font-bold text-[#3d7118] mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Project Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find the project you're looking for.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#3d7118] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2a4f0f] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEO
        title={project.name}
        description={project.summary}
        path={`/projects/${project.slug}`}
        ogImage={project.heroImage}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Projects", url: "/projects" },
          { name: project.name, url: `/projects/${project.slug}` },
        ]}
        jsonLd={[
          organizationSchema(),
          webPageSchema(project.name, project.summary, `/projects/${project.slug}`),
        ]}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
      {/* ── BREADCRUMB NAV ── */}
      <div className="pt-28 lg:pt-32 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-sm text-gray-400">
          <Link
            to="/projects"
            className="hover:text-[#3d7118] transition-colors inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Projects
          </Link>
          <span>/</span>
          <span className="text-gray-700 font-medium truncate max-w-xs">
            {project.name}
          </span>
        </div>
      </div>

      {/* ── HERO ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-0">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[project.category] ?? "bg-gray-100 text-gray-600"}`}
          >
            {project.category}
          </span>
          <span className="flex items-center gap-1.5 text-xs text-gray-400">
            <Calendar className="h-3.5 w-3.5" />
            {project.date}
          </span>
          {project.location && (
            <span className="flex items-center gap-1.5 text-xs text-gray-400">
              <MapPin className="h-3.5 w-3.5" />
              {project.location}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-950 tracking-tight leading-[1.1] max-w-3xl mb-5">
          {project.name}
        </h1>

        {/* Summary */}
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-8">
          {project.summary}
        </p>

        {/* Impact stats strip */}
        {project.impactStats && project.impactStats.length > 0 && (
          <div className="grid grid-cols-3 divide-x divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden mb-10">
            {project.impactStats.map((stat, idx) => (
              <div key={idx} className="px-6 py-5 bg-gray-50/60">
                <p className="text-2xl md:text-3xl font-bold text-[#3d7118]">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── HERO IMAGE ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="rounded-3xl overflow-hidden aspect-[16/7] w-full">
          <OptimizedImage
            publicId={project.heroImage}
            fallbackSrc={project.heroImage}
            alt={project.name}
            className="w-full h-full object-cover"
            width={1200}
            height={525}
            deliveryType="fetch"
          />
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16">
          {/* Left — article body */}
          <div className="space-y-10">
            {/* About */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#3d7118] mb-4">
                About this project
              </h2>
              <div className="space-y-4">
                {project.fullDescription.split("\n\n").map((para, idx) => (
                  <p
                    key={idx}
                    className="text-gray-600 leading-[1.8] text-[15px]"
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            {project.keyHighlights?.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#3d7118] mb-4">
                  Key highlights
                </h2>
                <ul className="space-y-3">
                  {project.keyHighlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-[#3d7118]/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="h-3 w-3 text-[#3d7118]" />
                      </div>
                      <span className="text-[15px] text-gray-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Partners */}
            {project.partners && project.partners.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#3d7118] mb-4">
                  Partners & Collaborators
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.partners.map((partner, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 bg-white"
                    >
                      {partner.name}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right — sticky sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 self-start">
            {/* Project info card */}
            <div className="rounded-2xl border border-gray-100 divide-y divide-gray-100 overflow-hidden">
              <div className="px-5 py-4 bg-gray-50">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-gray-400">
                  Project info
                </p>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">Category</span>
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] ?? "bg-gray-100 text-gray-600"}`}
                >
                  {project.category}
                </span>
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <span className="text-xs text-gray-400">Year</span>
                <span className="text-sm font-semibold text-gray-800">
                  {project.date}
                </span>
              </div>
              {project.location && (
                <div className="px-5 py-4 flex items-center justify-between gap-4">
                  <span className="text-xs text-gray-400 shrink-0">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-gray-800 text-right">
                    {project.location}
                  </span>
                </div>
              )}
            </div>

            {/* CTA card */}
            <div className="rounded-2xl bg-[#0e1a06] p-6 text-white">
              <div className="w-10 h-10 rounded-xl bg-[#e1ac00]/15 flex items-center justify-center mb-4">
                <Handshake className="h-5 w-5 text-[#e1ac00]" />
              </div>
              <h4 className="font-bold text-base mb-2">Get involved</h4>
              <p className="text-sm text-white/55 leading-relaxed mb-5">
                {project.nextSteps ??
                  "Partner with us to scale impact like this project."}
              </p>
              <Link
                to="/contactUs"
                className="block w-full text-center bg-white text-[#3d7118] py-2.5 rounded-xl font-semibold text-sm hover:bg-green-50 transition-colors"
              >
                Contact us
              </Link>
            </div>

            {/* Back link */}
            <Link
              to="/projects"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#3d7118] transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to all projects
            </Link>
          </aside>
        </div>
      </section>

      {/* ── FOOTER CTA ── */}
      <section className="border-t border-gray-100 bg-gray-50/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#3d7118] mb-1">
              More from CIH
            </p>
            <h3 className="text-xl font-bold text-gray-900">
              Explore all projects
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              See how we're driving circular economy innovation across Africa.
            </p>
          </div>
          <Link
            to="/projects"
            className="shrink-0 inline-flex items-center gap-2 bg-[#3d7118] text-white px-6 py-3 rounded-full text-sm font-bold shadow-sm hover:bg-[#2a4f0f] transition-colors"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
};

export default ProjectDetailPage;
