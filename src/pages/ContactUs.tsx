import { useState } from "react";
import SEO from "../components/SEO";
import { organizationSchema, webPageSchema, localBusinessSchema } from "../lib/schema";
import {
    ArrowRight,
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle,
    GraduationCap,
    LifeBuoy,
    BriefcaseBusiness
} from "lucide-react";

const inquiryOptions = [
    {
        id: "admissions",
        title: "Admissions",
        desc: "Programs, intake dates, eligibility & applications",
        icon: GraduationCap
    },
    {
        id: "general",
        title: "General Inquiry",
        desc: "Partnerships, collaborations & information",
        icon: BriefcaseBusiness
    },
    {
        id: "support",
        title: "Support",
        desc: "Technical help or assistance",
        icon: LifeBuoy
    }
];

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        category: "admissions",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setIsSubmitted(true);

        setTimeout(() => setIsSubmitted(false), 5000);

        setFormData({
            name: "",
            email: "",
            category: "admissions",
            subject: "",
            message: ""
        });
    };

    return (
        <>
        <SEO
            title="Contact Us"
            description="Get in touch with Circular Innovation Hub. Located in Nairobi, Kenya and Wilmington, Delaware, USA. Call +254712746922 or email info@circularinnovationhub.com."
            path="/contactUs"
            breadcrumbs={[{ name: "Home", url: "/" }, { name: "Contact Us", url: "/contactUs" }]}
            jsonLd={[
                organizationSchema(),
                localBusinessSchema(),
                webPageSchema("Contact Us - Circular Innovation Hub", "Get in touch with CIH.", "/contactUs"),
            ]}
        />
        <div className="min-h-screen bg-white overflow-x-hidden">
            {/* HERO */}
            <section className="relative bg-gradient-to-br from-white via-green-50/30 to-yellow-50/20 pt-28 pb-16 lg:pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3d7118]">
                            Contact Us
                        </span>
                    </div>

                    <h1 className="mt-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        We're Here to <span className="text-[#3d7118]">Help</span>
                    </h1>

                    <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg leading-8">
                        Reach out for admissions, partnerships, support, or any
                        general questions.
                    </p>
                </div>
            </section>

            {/* MAIN */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* FORM */}
                        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Send a Message
                            </h2>

                            {/* Category options */}
                            <div className="grid gap-3 sm:grid-cols-3 mb-6">
                                {inquiryOptions.map((item) => {
                                    const Icon = item.icon;
                                    const active = formData.category === item.id;

                                    return (
                                        <label
                                            key={item.id}
                                            className={`cursor-pointer rounded-2xl border-2 p-4 transition-all ${active
                                                ? "border-[#3d7118] bg-green-50"
                                                : "border-gray-200 hover:border-green-200"
                                                }`}
                                        >
                                            <input
                                                type="radio"
                                                name="category"
                                                value={item.id}
                                                checked={active}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            <Icon className="h-5 w-5 text-[#3d7118]" />
                                            <p className="mt-3 font-semibold text-sm text-gray-900">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-gray-500 mt-1">
                                                {item.desc}
                                            </p>
                                        </label>
                                    );
                                })}
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#3d7118]"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#3d7118]"
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#3d7118]"
                                />

                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="How can we help?"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-[#3d7118]"
                                />

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-gradient-to-r from-[#3d7118] to-[#5a9e2a] py-3.5 font-bold text-white flex items-center justify-center gap-2"
                                >
                                    Send Message
                                    <Send className="h-4 w-4" />
                                </button>

                                {isSubmitted && (
                                    <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-sm text-[#3d7118] flex items-center gap-2">
                                        <CheckCircle className="h-5 w-5" />
                                        Message sent successfully.
                                    </div>
                                )}
                            </form>
                        </div>

                        {/* CONTACT INFO */}
                        <div className="space-y-6">
                            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                    Contact Details
                                </h2>

                                <div className="space-y-5">
                                    <div className="flex gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-[#3d7118] text-white flex items-center justify-center">
                                            <Phone className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                Admissions Line
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="tel:+254712746922" className="hover:text-[#3d7118] transition-colors">
                                                    +254 712 746922
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-[#e1ac00] text-white flex items-center justify-center">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-900">
                                                Email
                                            </p>
                                            <p className="text-gray-600">
                                                <a href="mailto:info@circularinnovationhub.com" className="hover:text-[#3d7118] transition-colors">
                                                    info@circularinnovationhub.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="h-12 w-12 rounded-xl bg-[#3d7118] text-white flex items-center justify-center">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="font-semibold text-gray-900">Kenya Office</p>
                                                <p className="text-gray-600 text-sm">
                                                    233 Owashika Road, Lavington,<br />
                                                    Nairobi, Kenya
                                                </p>
                                            </div>
                                            <div>
                                                <p className="font-semibold text-gray-900">USA Office</p>
                                                <p className="text-gray-600 text-sm">
                                                    Circular Innovation Hub Corp<br />
                                                    1209 Orange St, Wilmington,<br />
                                                    DE 19801, United States
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl bg-green-50 border-2 border-[#3d7118] p-8 text-gray-900">
                                <h3 className="text-2xl font-bold">
                                    Need Admissions Help?
                                </h3>
                                <p className="mt-3 text-gray-900">
                                    Our team can guide you through courses,
                                    applications, deadlines and choosing the
                                    right path.
                                </p>

                                <button
                                    onClick={() =>
                                        document
                                            .querySelector("form")
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#3d7118] to-[#5a9e2a] px-5 py-3 font-bold text-white"
                                >
                                    Contact Admissions
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="py-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm mb-4">
                            <MapPin className="h-4 w-4 text-[#3d7118]" />
                            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#3d7118]">
                                Find Us
                            </span>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Our Locations</h2>
                        <p className="mt-2 text-gray-600">
                            We operate across two continents — visit us in Nairobi or Wilmington.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2">
                        {/* Kenya */}
                        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50">
                                <div className="h-8 w-8 rounded-lg bg-[#3d7118] text-white flex items-center justify-center shrink-0">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">Kenya Office</p>
                                    <p className="text-xs text-gray-500">233 Owashika Rd, Lavington, Nairobi</p>
                                </div>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8187967399263!2d36.76112727590381!3d-1.2825274356239482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b1ccd2a3aab%3A0xcf4919beeb3f5df4!2sCircular%20Innovation%20Hub%20(CIH)!5e0!3m2!1sen!2ske!4v1777818812818!5m2!1sen!2ske"
                                width="100%"
                                height="380"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Circular Innovation Hub — Nairobi, Kenya"
                            />
                        </div>

                        {/* USA */}
                        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
                            <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gray-50">
                                <div className="h-8 w-8 rounded-lg bg-[#e1ac00] text-white flex items-center justify-center shrink-0">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 text-sm">USA Office</p>
                                    <p className="text-xs text-gray-500">1209 Orange St, Wilmington, DE 19801</p>
                                </div>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.0!2d-75.5486956!3d39.7447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd5349f6e6b3%3A0x9b3e1e2b9c2a1e4a!2s1209+Orange+St%2C+Wilmington%2C+DE+19801!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                                width="100%"
                                height="380"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Circular Innovation Hub Corp. — Wilmington, Delaware"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
};

export default ContactPage;