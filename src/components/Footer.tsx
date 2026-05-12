import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';
import {
    MapPin,
    Mail,
    Phone,
} from 'lucide-react';
import logoImg from '../assets/images/CIH_logo.png';
import { cloudinaryAssets } from '../lib/cloudinaryAssets';
import { OptimizedImage } from '../lib/cloudinary';

type SocialLink = {
    name: string;
    href: string;
    icon: (props: { className?: string }) => ReactElement;
};

const FacebookIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.92 3.77-3.92 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.62.77-1.62 1.56v1.9h2.76l-.44 2.91h-2.32V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M13.9 10.47 21.35 2h-1.76l-6.47 7.35L7.96 2H2l7.81 11.12L2 22h1.76l6.83-7.76L16.04 22H22l-8.1-11.53Zm-2.42 2.75-.79-1.1L4.4 3.3h2.72l5.08 7.12.79 1.1 6.6 9.25h-2.72l-5.39-7.55Z" />
    </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M6.94 8.98H3.76V20h3.18V8.98ZM5.35 4C4.33 4 3.5 4.82 3.5 5.82s.83 1.82 1.85 1.82 1.85-.82 1.85-1.82S6.37 4 5.35 4Zm15.15 9.68c0-3.23-1.72-4.73-4.02-4.73a3.47 3.47 0 0 0-3.13 1.72h-.04V8.98h-3.05V20h3.18v-5.45c0-1.44.27-2.84 2.06-2.84 1.76 0 1.78 1.65 1.78 2.93V20h3.18l.04-6.32Z" />
    </svg>
);

const Footer = () => {
    const socialLinks: SocialLink[] = [
        { name: 'Facebook', href: 'https://www.facebook.com/CircularIHub/?_rdc=2&_rdr', icon: FacebookIcon },
        { name: 'X', href: 'https://x.com/Circular_IHub', icon: XIcon },
        { name: 'Instagram', href: 'https://www.instagram.com/circularinnovationhub', icon: InstagramIcon },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/company/circularinnovationhub/posts/?feedView=all', icon: LinkedinIcon },
    ];

    return (
        <footer className="bg-[#3d7118] text-green-100/80">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-[0.85fr_0.6fr_0.8fr_1fr] lg:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-5">
                        <div>
                            <OptimizedImage
                                publicId={cloudinaryAssets.logo}
                                fallbackSrc={logoImg}
                                alt="CIH Logo"
                                className="h-20 w-20 object-contain sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                                width={256}
                                height={256}
                                resizeMode="contain"
                                loading="lazy"
                            />
                            <p className="mt-4 max-w-sm text-xs leading-relaxed text-white-100/60 sm:text-sm">
                                Inspiring and enabling the transition to a sustainable world through circular economy excellence.
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-5 uppercase tracking-wider text-xs">Quick Links</h4>
                        <ul className="space-y-3 text-xs sm:text-sm">
                            <li><Link to="/about" className="hover:text-[#e1ac00] transition-colors">About Us</Link></li>
                            <li><Link to="/entrepreneurs" className="hover:text-[#e1ac00] transition-colors">Entrepreneurs</Link></li>
                            <li><Link to="/corporates" className="hover:text-[#e1ac00] transition-colors">Corporates</Link></li>
                            <li><Link to="/advisory" className="hover:text-[#e1ac00] transition-colors">Advisory Services</Link></li>
                            <li><Link to="/co-working" className="hover:text-[#e1ac00] transition-colors">Co-working</Link></li>
                            <li><Link to="/bpo" className="hover:text-[#e1ac00] transition-colors">BPO</Link></li>
                        </ul>
                    </div>

                    <address className="not-italic text-xs leading-relaxed sm:text-sm">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">USA</h4>
                        <div className="flex items-start gap-2 sm:gap-3">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e1ac00] sm:h-5 sm:w-5" />
                            <span>
                                <strong className="block font-semibold text-white">Circular Innovation Hub Corp.</strong>
                                1209 Orange St.<br />
                                Wilmington De 19801
                            </span>
                        </div>
                    </address>

                    <address className="not-italic text-xs leading-relaxed sm:text-sm">
                        <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-white">Kenya</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-2 sm:gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#e1ac00] sm:h-5 sm:w-5" />
                                <span>
                                    <strong className="block font-semibold text-white">Circular Innovation Hub</strong>
                                    233, Owashika Road, Lavington, Nairobi.
                                </span>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#e1ac00] sm:h-5 sm:w-5" />
                                <a href="mailto:info@circularinnovationhub.com" className="break-all hover:text-[#e1ac00] transition-colors">
                                    info@circularinnovationhub.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 sm:gap-3">
                                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#e1ac00] sm:h-5 sm:w-5" />
                                <a href="tel:+254712746922" className="hover:text-[#e1ac00] transition-colors">
                                    +254712746922
                                </a>
                            </li>
                        </ul>
                    </address>
                </div>

                <p className="mt-12 text-center text-xs text-green-100/40">
                    Circular Innovation Hub<br />
                    © 2026 All rights reserved.
                </p>

                <div className="mt-6 flex justify-center border-t border-white/10 pt-8">
                    <nav aria-label="Social links" className="flex items-center justify-center gap-3">
                        {socialLinks.map((social) => {
                            const Icon = social.icon;

                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:border-[#e1ac00] hover:bg-[#e1ac00] hover:text-[#3d7118]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
