import {
    Briefcase,
    CheckCircle,
    GraduationCap,
    Handshake,
    Lightbulb,
    Rocket,
    type LucideIcon,
} from 'lucide-react';

interface TimelineStep {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    desktopPosition: string;
    connectorPosition: string;
}

interface JourneyTimelineProps {
    highlightedStage?: number;
}

const steps: TimelineStep[] = [
    {
        id: 1,
        title: "Join Startup Hub",
        description: "Founders enter the startup track and gain access to the CIH community, circular economy resources, events, and early venture guidance.",
        icon: Rocket,
        desktopPosition: "left-1/2 -top-13 -translate-x-1/2 -translate-y-8",
        connectorPosition: "left-1/2 -bottom-6 -translate-x-1/2",
    },
    {
        id: 2,
        title: "Digital Literacy & Business Coaching",
        description: "Training builds confidence with digital tools, business modeling, financial literacy, operations, and the foundations of running a venture.",
        icon: GraduationCap,
        desktopPosition: "right-5 top-[21%]",
        connectorPosition: "-bottom-2 -left-2",
    },
    {
        id: 3,
        title: "Innovators' Lab",
        description: "Entrepreneurs move into hands-on product building, prototyping, customer validation, and practical circular solution development.",
        icon: Lightbulb,
        desktopPosition: "right-[8%] bottom-0",
        connectorPosition: "-top-2 -left-2",
    },
    {
        id: 4,
        title: "Investor Readiness & Workshops",
        description: "Founders sharpen pitch materials, financial storytelling, fundraising strategy, and workshop-based readiness for market and capital conversations.",
        icon: Briefcase,
        desktopPosition: "left-[7%] bottom-0",
        connectorPosition: "-top-1 -right-2",
    },
    {
        id: 5,
        title: "Mentorship Stage",
        description: "The final stage strengthens SOPs, teams, products, compliance, and fundraising readiness through focused venture-building guidance.",
        icon: Handshake,
        desktopPosition: "left-5 top-[21%]",
        connectorPosition: "-bottom-2 -right-2",
    },
];

const JourneyTimeline = ({ highlightedStage = 5 }: JourneyTimelineProps) => {
    return (
        <div className="relative w-full">
            <div className="hidden lg:block">
                <div className="relative mx-auto min-h-[920px] max-w-7xl">
                    <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[26px] border-green-50 shadow-inner"></div>
                    <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#3d7118]/25"></div>
                    <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e1ac00]/10"></div>

                    <div className="absolute left-1/2 top-1/2 z-20 flex h-64 w-64 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white p-8 text-center shadow-2xl ring-1 ring-green-100">
                        <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-900">
                            Startup to <span className="text-[#3d7118]">Mentorship</span>
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-gray-500">
                            Each step builds the capabilities needed for stronger, investment-ready circular ventures.
                        </p>
                    </div>

                    {steps.map((step) => {
                        const isHighlighted = step.id === highlightedStage;
                        const isPast = step.id < highlightedStage;
                        const isFuture = step.id > highlightedStage;

                        return (
                            <div
                                key={step.id}
                                className={`absolute w-[310px] ${isHighlighted ? "z-40" : "z-30"} ${step.desktopPosition}`}
                            >
                                <div
                                    className={`relative min-h-[228px] rounded-[1.75rem] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${isHighlighted
                                        ? "border-[#e1ac00] bg-white shadow-2xl shadow-yellow-100 ring-4 ring-[#e1ac00]/20"
                                        : isPast
                                            ? "border-green-100 bg-gradient-to-br from-green-50/95 via-white to-yellow-50/70 shadow-lg shadow-green-100/70"
                                            : "border-green-100 bg-white shadow-lg shadow-green-100/50"
                                        }`}
                                >
                                    <div
                                        className={`absolute ${step.connectorPosition} h-4 w-4 rounded-full border-4 border-white shadow-md ${isHighlighted
                                            ? "bg-[#e1ac00]"
                                            : isPast
                                                ? "bg-[#3d7118]"
                                                : "bg-green-200"
                                            }`}
                                    ></div>

                                    <div className={`absolute -top-7 left-6 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ${isHighlighted
                                        ? "bg-gradient-to-br from-[#3d7118] to-[#e1ac00] text-white shadow-yellow-200"
                                        : "bg-gradient-to-br from-[#3d7118]/90 to-[#e1ac00]/80 text-white shadow-green-100"
                                        }`}>
                                        {isPast ? <CheckCircle className="h-8 w-8" /> : <step.icon className="h-8 w-8" />}
                                    </div>

                                    <div className="pt-8">
                                        <div className="mb-3 flex items-center gap-2">
                                            <span className={`text-3xl font-black ${isHighlighted ? "text-[#e1ac00]" : "text-[#3d7118]/55"}`}>
                                                {String(step.id).padStart(2, "0")}
                                            </span>
                                            <span className={`text-xs font-bold uppercase tracking-wider ${isHighlighted ? "text-[#3d7118]" : "text-[#3d7118]/60"}`}>
                                                Step
                                            </span>
                                            {isHighlighted && (
                                                <span className="ml-auto rounded-full bg-[#e1ac00]/15 px-3 py-1 text-xs font-bold text-[#3d7118]">
                                                    Active stage
                                                </span>
                                            )}
                                            {isPast && (
                                                <span className="ml-auto rounded-full bg-[#3d7118]/10 px-3 py-1 text-xs font-bold text-[#3d7118]">
                                                    Completed
                                                </span>
                                            )}
                                        </div>
                                        <h4 className={`text-xl font-bold leading-snug ${isHighlighted || isPast ? "text-[#3d7118]" : "text-gray-700"}`}>
                                            {step.title}
                                        </h4>
                                        <p className={`mt-3 text-sm leading-relaxed ${isFuture ? "text-gray-500" : "text-gray-600"}`}>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="hidden md:block lg:hidden">
                <div className="relative mx-auto max-w-4xl px-8">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#3d7118]/30 via-[#e1ac00]/30 to-[#3d7118]/30"></div>

                    {steps.map((step, index) => {
                        const isHighlighted = step.id === highlightedStage;
                        const isPast = step.id < highlightedStage;
                        const isLeft = index % 2 === 0;

                        return (
                            <div key={step.id} className={`relative mb-16 flex items-center last:mb-0 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                                <div className="absolute left-1/2 z-10 -translate-x-1/2">
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${isHighlighted
                                        ? "scale-110 bg-gradient-to-br from-[#3d7118] to-[#e1ac00] text-white shadow-lg shadow-[#e1ac00]/30 ring-4 ring-[#e1ac00]/20"
                                        : "bg-gradient-to-br from-[#3d7118]/90 to-[#e1ac00]/80 text-white shadow-lg shadow-green-100"
                                        }`}>
                                        {isPast ? <CheckCircle className="h-7 w-7" /> : <step.icon className="h-7 w-7" />}
                                    </div>
                                </div>

                                <div className={`w-5/12 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                                    <div className={`rounded-2xl border p-6 shadow-md transition-all duration-300 ${isHighlighted
                                        ? "border-[#e1ac00] bg-white shadow-[#e1ac00]/20"
                                        : "border-green-100 bg-gradient-to-br from-green-50/90 to-yellow-50/60 shadow-green-100/60"
                                        }`}>
                                        <div className={`mb-2 flex items-center gap-3 ${isLeft ? "justify-end" : "justify-start"}`}>
                                            <span className={`text-sm font-bold ${isHighlighted ? "text-[#e1ac00]" : "text-[#3d7118]/70"}`}>
                                                {String(step.id).padStart(2, "0")}
                                            </span>
                                            <span className="text-xs uppercase tracking-wider text-[#3d7118]/50">Step</span>
                                            {isHighlighted && (
                                                <span className="rounded-full bg-[#e1ac00]/10 px-2 py-0.5 text-xs font-semibold text-[#e1ac00]">
                                                    Active
                                                </span>
                                            )}
                                        </div>
                                        <h3 className={`mb-2 text-lg font-bold ${isHighlighted ? "text-[#3d7118]" : "text-[#3d7118]/85"}`}>
                                            {step.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-gray-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="md:hidden">
                <div className="relative mx-auto max-w-lg px-4">
                    <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3d7118]/30 via-[#e1ac00]/30 to-[#3d7118]/30"></div>

                    {steps.map((step) => {
                        const isHighlighted = step.id === highlightedStage;
                        const isPast = step.id < highlightedStage;

                        return (
                            <div key={step.id} className="relative mb-10 flex gap-6 last:mb-0">
                                <div className="relative z-10 shrink-0">
                                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 ${isHighlighted
                                        ? "scale-110 bg-gradient-to-br from-[#3d7118] to-[#e1ac00] text-white shadow-lg shadow-[#e1ac00]/30 ring-4 ring-[#e1ac00]/20"
                                        : "bg-gradient-to-br from-[#3d7118]/90 to-[#e1ac00]/80 text-white shadow-lg shadow-green-100"
                                        }`}>
                                        {isPast ? <CheckCircle className="h-7 w-7" /> : <step.icon className="h-7 w-7" />}
                                    </div>
                                </div>

                                <div className={`flex-1 rounded-2xl border p-5 shadow-md transition-all duration-300 ${isHighlighted
                                    ? "border-[#e1ac00] bg-white shadow-[#e1ac00]/20"
                                    : "border-green-100 bg-gradient-to-br from-green-50/90 to-yellow-50/60 shadow-green-100/60"
                                    }`}>
                                    <div className="mb-2 flex items-center gap-2">
                                        <span className={`text-xs font-bold ${isHighlighted ? "text-[#e1ac00]" : "text-[#3d7118]/70"}`}>
                                            STEP {String(step.id).padStart(2, "0")}
                                        </span>
                                        {isHighlighted && (
                                            <span className="rounded-full bg-[#e1ac00]/10 px-2 py-0.5 text-xs font-semibold text-[#e1ac00]">
                                                Active
                                            </span>
                                        )}
                                    </div>
                                    <h3 className={`mb-2 text-lg font-bold ${isHighlighted ? "text-[#3d7118]" : "text-[#3d7118]/85"}`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-gray-600">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default JourneyTimeline;
