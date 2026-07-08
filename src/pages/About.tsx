import { Link } from "react-router-dom";
import {
  ArrowRight,
  Recycle,
  Users,
  Award,
  Globe,
  Target,
  CheckCircle,
  Eye,
} from "lucide-react";
import { cloudinaryAssets } from "../lib/cloudinaryAssets";
import { OptimizedImage } from "../lib/cloudinary";
import SEO from "../components/SEO";
import { organizationSchema, webPageSchema } from "../lib/schema";

const AboutPage = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Circular Innovation Hub — our mission to drive Africa's circular economy transition through the three pillars of People, Planet, and Sustainability."
        path="/about"
        breadcrumbs={[{ name: "Home", url: "/" }, { name: "About", url: "/about" }]}
        jsonLd={[
          organizationSchema(),
          webPageSchema("About Circular Innovation Hub", "Learn about Circular Innovation Hub — our mission to drive Africa's circular economy transition.", "/about"),
        ]}
      />
      <div className="min-h-screen bg-white overflow-x-hidden">
      {/* HERO SECTION - About Us */}
      <section className="relative h-[85vh] flex items-center overflow-hidden pt-28 lg:pt-14">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/training-3.webp"
            alt="About Us"
            className="h-full w-full object-cover object-[50%_55%] scale-105"
            fetchPriority="high"
            width={1920}
            height={1080}
          />

          {/* Elegant Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Soft Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/2 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-32">
            <div className="max-w-4xl space-y-8">
              {/* Minimal Label with Accent Line */}
              <div className="flex items-center gap-4 animate-fade-in">
                <div className="w-12 h-[2px] bg-[#e1ac00]"></div>
                <span className="text-sm tracking-[0.3em] uppercase text-[#e1ac00] font-bold">
                  About Us
                </span>
              </div>

              {/* Heading with Brand Accents */}
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] animate-slide-up">
                Building Africa’s <span className="text-[#e1ac00]">future</span>{" "}
                through{" "}
                <span className="bg-gradient-to-r from-[#3d7118] via-green-400 to-[#e1ac00] bg-clip-text text-transparent">
                  circular innovation
                </span>
                .
              </h1>

              {/* Supporting Text */}
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 max-w-3xl animate-slide-up delay-100 font-medium">
                We bring together{" "}
                <span className="text-white font-bold">innovators</span>,
                entrepreneurs, and industry leaders to transform bold ideas into{" "}
                <span className="text-[#e1ac00] font-bold text-shadow-sm">
                  sustainable impact
                </span>{" "}
                across Africa.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full z-10 translate-y-[1px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto scale-y-[1.01] origin-bottom"
          >
            <path
              fill="#f9fafb"
              fillOpacity="1"
              d="M0,256L48,261.3C96,267,192,277,288,266.7C384,256,480,224,576,213.3C672,203,768,213,864,229.3C960,245,1056,267,1152,261.3C1248,256,1344,224,1392,208L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* OUR PILLARS SECTION */}
      <section className="relative pt-12 pb-24 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(61,113,24,0.1)_0%,transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">
                Pillars
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              All our work is founded on 3 essential tenets:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "People",
                desc: "Community development and engagement for a circular economy.",
                color: "from-[#3d7118] to-[#3d7118]",
              },
              {
                icon: Globe,
                title: "Planet",
                desc: "Promoting the overall well being of the environment by reducing waste, regenerating nature and circulating products and materials at their highest value.",
                color: "from-[#e1ac00] to-[#e1ac00]",
              },
              {
                icon: Recycle,
                title: "Sustainability",
                desc: "Creating new products and sustainable business models for startups and companies with job creation for African youth and women as a by product.",
                color: "from-[#3d7118] to-[#e1ac00]",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center hover-lift"
              >
                <div
                  className={`w-24 h-24 mx-auto bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <item.icon className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="relative group animate-slide-in-left">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] to-[#3d7118] rounded-3xl opacity-0 transition-opacity duration-500 blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-[#3d7118] to-[#3d7118] rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our{" "}
                  <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">
                    Mission
                  </span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To be a global leader in sustainable development solutions
                  that address the root causes of poverty and inequality, while
                  promoting social inclusion and environmental sustainability.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#3d7118]">
                  <CheckCircle className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Impact-driven since 2020
                  </span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="relative group animate-slide-in-right">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e1ac00] to-[#e1ac00] rounded-3xl opacity-0 transition-opacity duration-500 blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover-lift">
                <div className="w-16 h-16 bg-gradient-to-br from-[#e1ac00] to-[#e1ac00] rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Our{" "}
                  <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">
                    Vision
                  </span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  A world where circular economy principles drive prosperity,
                  protect our planet, and empower communities across Africa and
                  beyond.
                </p>
                <div className="mt-6 flex items-center gap-2 text-[#e1ac00]">
                  <Globe className="h-5 w-5" />
                  <span className="text-sm font-medium">
                    Global reach, local impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIRCULARITY CONCEPT SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-green-50/30 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#e1ac00] rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#3d7118] rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The concept of{" "}
              <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">
                circularity
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00] rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed animate-slide-in-left">
              <p>
                The current take-make-waste economic model has resulted in
                climate change, biodiversity loss and pollution. In the 2021
                Circularity Gap report, 70% of greenhouse gas emissions were
                associated with material handling and use. To tackle climate
                change and other negative consequences of the linear model we
                need to close the loop and move to a circular economy.
              </p>
              <p>
                Circularity is a simple concept. It means that a product is
                created with its own end-of-life taken into account. In a
                circular economy, once the user is finished with the product, it
                goes back into the supply chain instead of the landfill.
              </p>
              <p className="text-xl font-bold text-gray-900">
                The motto of the circularity movement in a nutshell, is:{" "}
                <span className="bg-gradient-to-r from-[#3d7118] to-[#e1ac00] bg-clip-text text-transparent">
                  Waste not, Want not!
                </span>
              </p>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3d7118]/20 to-[#e1ac00]/20 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl border border-green-100 p-4 shadow-xl hover-lift">
                <OptimizedImage
                  publicId={cloudinaryAssets.circularityConcept}
                  fallbackSrc="/conecptofcircularity.png"
                  alt="Circular economy concept diagram"
                  className="w-full h-auto rounded-xl object-contain"
                  loading="lazy"
                  width={900}
                  height={700}
                  resizeMode="contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#3d7118] via-[#3d7118] to-[#e1ac00]"></div>
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%201440%20320%22%3E%3Cpath%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%20d=%22M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z%22%3E%3C/path%3E%3C/svg%3E')] bg-cover bg-no-repeat opacity-10"></div>

            <div className="relative py-20 px-8 text-center">
              <Award className="h-16 w-16 text-[#e1ac00] mx-auto mb-6 animate-bounce-slow" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Community
              </h2>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Be part of the circular economy movement. Whether you're an
                entrepreneur, corporate, or investor, there's a place for you.
              </p>

              <Link
                to="/contactUs"
                className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 font-bold text-[#3d7118] shadow-xl transition hover:-translate-y-1"
              >
                Get in touch
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default AboutPage;
