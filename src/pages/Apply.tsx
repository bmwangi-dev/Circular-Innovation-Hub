import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SEO from "../components/SEO";
import { organizationSchema, webPageSchema } from "../lib/schema";
import {
    ArrowRight,
    BriefcaseBusiness,
    CheckCircle2,
    Code2,
    GraduationCap,
    Leaf,
    UserRound,
    type LucideIcon
} from "lucide-react";

interface CourseOption {
    id: string;
    title: string;
    subtitle: string;
    icon: LucideIcon;
    schedule: string;
    duration: string;
    mode: string;
    outcome: string;
}

const cohort = {
    code: "ECE-CIH01",
    name: "Entrepreneurship of Circular Economy",
    facilitator: "CFSK Institute of ICT"
};

const courseOptions: CourseOption[] = [
    {
        id: "frontend",
        title: "Frontend Development",
        subtitle: "Build responsive websites and web apps",
        icon: Code2,
        schedule: "Morning sessions | 9:00 AM - 1:00 PM",
        duration: "4 weeks intensive",
        mode: "Hybrid learning",
        outcome: "Finish with a responsive web project and practical frontend confidence."
    },
    {
        id: "business",
        title: "Business Development",
        subtitle: "Grow circular ventures with sharper strategy",
        icon: BriefcaseBusiness,
        schedule: "Morning sessions | 9:00 AM - 1:00 PM",
            duration: "Foundational + advanced",
        mode: "Hybrid workshops",
        outcome: "Leave with a clearer circular business model, financial plan, and pitch direction."
    }
];

const discoverySources = ["Social media", "Referral", "CIH event", "CFSK Institute of ICT", "School or organization", "Other"];
const applicantTypes = ["Student", "Secondary school graduate", "Entrepreneur", "Professional", "Organization team"];
const experienceLevels = ["Beginner", "Some experience", "Intermediate", "Advanced"];

const inputCls = "w-full rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none transition-all focus:border-[#3d7118] focus:ring-2 focus:ring-[#3d7118]/20";

export default function ApplyPage() {
    const [searchParams] = useSearchParams();
    const initial = searchParams.get("course");
    const valid = courseOptions.some(c => c.id === initial) ? String(initial) : "frontend";
    const [selectedCourseId, setSelectedCourseId] = useState(valid);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        applicantType: "",
        experienceLevel: "",
        discoverySource: "",
        motivation: "",
        availabilityConfirmed: "Yes"
    });

    const selectedCourse = useMemo(
        () => courseOptions.find(c => c.id === selectedCourseId) || courseOptions[0],
        [selectedCourseId]
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <>
        <SEO
            title="Apply to CIH Academy"
            description="Apply to the Circular Innovation Hub Academy. Choose between Frontend Development and Business Development courses. Start your journey in circular economy entrepreneurship."
            path="/apply"
            noIndex
            breadcrumbs={[{ name: "Home", url: "/" }, { name: "Academy", url: "/academy" }, { name: "Apply", url: "/apply" }]}
            jsonLd={[
                organizationSchema(),
                webPageSchema("Apply - Circular Innovation Hub Academy", "Apply to CIH Academy programs.", "/apply"),
            ]}
        />
        <div className="min-h-screen bg-white">
            <section className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-yellow-50/20 pt-16 pb-16 lg:pt-24 lg:pb-20">
                {/* Subtle background accents */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#3d7118]/8 blur-3xl" />
                    <div className="absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-[#e1ac00]/10 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Main grid: balanced 2-column with equal visual weight */}
                    <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">

                        {/* LEFT COLUMN – Content & Selected Course */}
                        <div className="flex flex-col">
                            {/* Headline – better hierarchy and spacing */}
                            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem] leading-[1.1]">
                                Apply to the{" "}
                                <span className="bg-gradient-to-r from-[#3d7118] to-[#5a9e2a] bg-clip-text text-transparent">
                                    CIH Academy
                                </span>
                            </h1>

                            {/* Subheadline */}
                            <p className="mt-4 max-w-lg text-base leading-7 text-gray-600 sm:text-lg">
                                Join <span className="font-medium text-gray-800">{cohort.name}</span>, facilitated by{" "}
                                <span className="font-medium text-gray-800">{cohort.facilitator}</span>.
                                Choose a learning pathway that aligns with your future.
                            </p>

                            {/* Quick info pills – centered on mobile */}
                            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-start">
                                <div className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm sm:w-auto sm:justify-start">
                                    <Leaf className="h-4 w-4 text-[#3d7118] shrink-0" />

                                    <div className="text-center sm:text-left">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                                            Schedule
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900">
                                            Morning Sessions
                                        </p>
                                    </div>
                                </div>

                                <div className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 shadow-sm sm:w-auto sm:justify-start">
                                    <GraduationCap className="h-4 w-4 text-[#e1ac00] shrink-0" />

                                    <div className="text-center sm:text-left">
                                        <p className="text-[10px] uppercase tracking-wider text-gray-500 font-medium">
                                            Mode
                                        </p>
                                        <p className="text-sm font-semibold text-gray-900">
                                            Hybrid Learning
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Selected Course Card – redesigned for better visual hierarchy */}
                            <div className="mt-8 rounded-2xl bg-[#0d1f0a] p-6 text-white shadow-2xl ring-1 ring-white/10 relative overflow-hidden">
                                {/* Subtle accent line */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#3d7118] via-[#e1ac00] to-[#3d7118]" />

                                <div className="flex items-center gap-2 mb-4">
                                    <div className="h-1.5 w-1.5 rounded-full bg-[#e1ac00]" />
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e1ac00]">
                                        Selected Path
                                    </p>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e1ac00] to-[#c99600] text-[#0d1f0a] shadow-lg">
                                        <selectedCourse.icon className="h-5 w-5" />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <h2 className="text-lg font-bold leading-tight text-white">
                                            {selectedCourse.title}
                                        </h2>
                                        <p className="mt-1 text-sm text-green-100/70 leading-relaxed">
                                            {selectedCourse.outcome}
                                        </p>
                                    </div>
                                </div>

                                {/* Course meta – clean grid */}
                                <div className="mt-5 grid grid-cols-2 gap-3">
                                    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                                        <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium">Schedule</p>
                                        <p className="mt-1 text-sm font-medium text-white/90">{selectedCourse.schedule}</p>
                                    </div>
                                    <div className="rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                                        <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium">Duration</p>
                                        <p className="mt-1 text-sm font-medium text-white/90">{selectedCourse.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN – Bottom Aligned Course Selection */}
                        <div className="flex flex-col justify-end h-full lg:min-h-[620px]">

                            {/* Push content downward */}
                            <div className="mt-auto">

                                {/* Section header */}
                                <div className="mb-5">
                                    {/* Top standalone intake title */}
                                    <h2 className="text-center md:text-left text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-[3.25rem]">
                                        <span className="bg-gradient-to-r from-[#3d7118] to-[#5a9e2a] bg-clip-text text-transparent">
                                            ECE-CIH01 2026
                                        </span>
                                    </h2>

                                    {/* Path header */}
                                    <div className="mt-4 flex flex-col items-center gap-3 md:flex-row md:justify-between">
                                        <div className="hidden md:block" />

                                        <div className="flex flex-col items-center gap-2 sm:flex-row">
                                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-700 text-center">
                                                Choose Your Path
                                            </h3>

                                            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold text-gray-500">
                                                {courseOptions.length} Options
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Cards */}
                                <div className="space-y-3">
                                    {courseOptions.map((course) => {
                                        const active = selectedCourseId === course.id;

                                        return (
                                            <button
                                                key={course.id}
                                                type="button"
                                                onClick={() => setSelectedCourseId(course.id)}
                                                className={`group relative w-full rounded-xl border-2 px-5 py-4 text-left transition-all duration-200 ${active
                                                    ? "border-[#3d7118] bg-white shadow-lg shadow-green-900/5"
                                                    : "border-gray-200 bg-white hover:border-green-300 hover:shadow-md hover:shadow-gray-200/50"
                                                    }`}
                                            >
                                                {active && (
                                                    <div className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#3d7118]" />
                                                )}

                                                <div className="flex items-center gap-4 pl-1">
                                                    <div
                                                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${active
                                                            ? "bg-[#3d7118] text-white shadow-md"
                                                            : "bg-gray-100 text-[#3d7118] group-hover:bg-green-50"
                                                            }`}
                                                    >
                                                        <course.icon className="h-5 w-5" />
                                                    </div>

                                                    <div className="min-w-0 flex-1">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <h4
                                                                className={`text-sm font-bold transition-colors ${active
                                                                    ? "text-[#3d7118]"
                                                                    : "text-gray-900 group-hover:text-gray-800"
                                                                    }`}
                                                            >
                                                                {course.title}
                                                            </h4>

                                                            {active && (
                                                                <span className="flex items-center gap-1 rounded-full bg-green-50 px-2.5 py-1 text-[11px] font-bold text-[#3d7118] border border-green-200">
                                                                    <CheckCircle2 className="h-3 w-3" />
                                                                    Selected
                                                                </span>
                                                            )}
                                                        </div>

                                                        <p className="mt-0.5 text-sm text-gray-500 leading-snug">
                                                            {course.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                <p className="mt-4 text-center text-xs text-gray-400">
                                    Click a card above to select your preferred learning track
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-12 bg-gray-50/50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-xl shadow-gray-200/50">
                        {/* Form header */}
                        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                            {/* Left side */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">Application Form</h2>
                                <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-[#3d7118] to-[#e1ac00]" />
                                <p className="mt-3 text-sm text-gray-500">
                                    Complete the form below to apply for the {selectedCourse.title} track.
                                </p>
                            </div>

                            {/* Right side - Desktop only */}
                            <div className="hidden lg:flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50/70 px-4 py-4 min-w-[340px] max-w-[380px] shadow-sm">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#3d7118] text-white shadow-sm">
                                    <selectedCourse.icon className="h-5 w-5" />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3d7118]">
                                        Selected Course
                                    </p>

                                    <h3 className="mt-1 text-sm font-bold text-gray-900 leading-snug">
                                        {selectedCourse.title}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                                        {selectedCourse.subtitle}
                                    </p>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-gray-600 border border-gray-200">
                                            {selectedCourse.duration}
                                        </span>

                                        <span className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-gray-600 border border-gray-200">
                                            {selectedCourse.mode}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="p-4 text-[#3d7118]" />

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 flex items-center gap-2">
                                    <UserRound className="h-4 w-4 text-[#3d7118]" />
                                    Personal Information
                                </h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Phone Number <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                            placeholder="+254 7XX XXX XXX"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Organization / School
                                        </label>
                                        <input
                                            type="text"
                                            name="organization"
                                            value={formData.organization}
                                            onChange={handleChange}
                                            className={inputCls}
                                            placeholder="Optional"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-100" />

                            {/* Background */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 flex items-center gap-2">
                                    <GraduationCap className="h-4 w-4 text-[#3d7118]" />
                                    Your Background
                                </h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Who best describes you? <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="applicantType"
                                            value={formData.applicantType}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                        >
                                            <option value="">Select an option</option>
                                            {applicantTypes.map(opt => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            Experience Level <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="experienceLevel"
                                            value={formData.experienceLevel}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                        >
                                            <option value="">Select your level</option>
                                            {experienceLevels.map(opt => (
                                                <option key={opt} value={opt}>
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-100" />

                            {/* Motivation */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 flex items-center gap-2">
                                    <Leaf className="h-4 w-4 text-[#3d7118]" />
                                    Why Join?
                                </h3>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                        Why are you applying? <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        name="motivation"
                                        value={formData.motivation}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        className={inputCls + " resize-none"}
                                        placeholder="What do you hope to learn, build, or improve after joining this program?"
                                    />
                                </div>
                            </div>

                            {/* Divider */}
                            <div className="h-px bg-gray-100" />

                            {/* Availability */}
                            <div className="space-y-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800 flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-[#3d7118]" />
                                    Availability & Discovery
                                </h3>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-3">
                                            Can you commit to the schedule? <span className="text-red-500">*</span>
                                        </label>
                                        <div className="flex gap-2">
                                            {["Yes", "Maybe", "No"].map(opt => (
                                                <label
                                                    key={opt}
                                                    className={`flex-1 cursor-pointer rounded-lg border-2 py-2.5 text-center text-sm font-semibold transition-all ${formData.availabilityConfirmed === opt
                                                        ? "border-[#3d7118] bg-green-50 text-[#3d7118] shadow-sm"
                                                        : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        className="sr-only"
                                                        name="availabilityConfirmed"
                                                        value={opt}
                                                        checked={formData.availabilityConfirmed === opt}
                                                        onChange={handleChange}
                                                    />
                                                    {opt}
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                                            How did you hear about us? <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="discoverySource"
                                            value={formData.discoverySource}
                                            onChange={handleChange}
                                            required
                                            className={inputCls}
                                        >
                                            <option value="">Select a source</option>
                                            {discoverySources.map(src => (
                                                <option key={src} value={src}>
                                                    {src}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Submit */}
                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-gradient-to-r from-[#3d7118] to-[#5a9e2a] py-3.5 font-bold text-white text-base shadow-lg shadow-green-900/20 hover:shadow-xl hover:shadow-green-900/30 transition-all duration-200 active:scale-[0.98]"
                                >
                                    Submit Application
                                </button>
                            </div>

                            {/* Success message */}
                            {isSubmitted && (
                                <div className="rounded-xl border border-green-200 bg-green-50 p-5 text-center animate-in fade-in slide-in-from-bottom-2">
                                    <CheckCircle2 className="mx-auto h-8 w-8 text-[#3d7118]" />
                                    <h4 className="mt-2 font-bold text-[#3d7118]">
                                        Application Submitted!
                                    </h4>
                                    <p className="text-sm text-green-700 mt-1">
                                        We've received your application for the {selectedCourse.title} track.
                                        You'll hear from us soon.
                                    </p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </section>

            {/* Help footer */}
            <div className="py-10 text-center border-t border-gray-100 bg-white">
                <p className="text-sm text-gray-600">Need help choosing a course?</p>

                {/* Added spacing + stacked on mobile / inline on desktop */}
                <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
                    <Link
                        to="/academy"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3d7118] hover:underline underline-offset-4"
                    >
                        Review academy details <ArrowRight className="h-4 w-4" />
                    </Link>

                    <Link
                        to="/contactUs"
                        className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3d7118] hover:underline underline-offset-4"
                    >
                        Contact admissions office <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}