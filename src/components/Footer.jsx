import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterLink,
    FooterLinkGroup,
    FooterTitle,
} from "flowbite-react";
import { Instagram, Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export function Footers() {
    return (
        <>
            <Footer className="relative w-full mt-auto">
                <div className="w-full bg-primary px-4 sm:px-6 lg:px-20">
                    <div className="flex flex-col lg:flex-row w-full gap-8 sm:gap-16 lg:gap-32 py-8">
                        <div className="w-full lg:w-auto lg:max-w-xs">
                            <FooterBrand
                                src="/images/logo_1.png"
                                alt="Med.Brain Logo"
                                name="Med.Brain"
                                className="w-32 h-full object-cover"
                            />
                            <p className="mt-4 text-white max-w-xs">Didukung oleh CNN (Convolutional Neural Network), Med.Brain memprediksi dan mengklasifikasikan stroke dari citra MRI secara efisien dan akurat.</p>
                            <div className="flex gap-4 mt-4">
                                <a href="#" className="text-white hover:text-gray-300">
                                    <Instagram size={18} className="sm:size-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <Facebook size={18} className="sm:size-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <Twitter size={18} className="sm:size-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <Linkedin size={18} className="sm:size-6" />
                                </a>
                                <a href="#" className="text-white hover:text-gray-300">
                                    <Mail size={18} className="sm:size-6" />
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16 lg:gap-16 w-full lg:w-[720px] mt-6 lg:mt-0">
                            <div>
                                <FooterTitle title="Tentang Kami" className="text-white text-sm sm:text-base" />
                                <FooterLinkGroup col className="text-white text-xs sm:text-sm">
                                    <FooterLink href="#">Tentang Med.Brain</FooterLink>
                                    <FooterLink href="#">Cara Kerja</FooterLink>
                                    <FooterLink href="#">Teknologi</FooterLink>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Layanan" className="text-white text-sm sm:text-base" />
                                <FooterLinkGroup col className="text-white text-xs sm:text-sm">
                                    <FooterLink href="#">Deteksi Stroke</FooterLink>
                                </FooterLinkGroup>
                            </div>
                            <div>
                                <FooterTitle title="Kontak" className="text-white text-sm sm:text-base" />
                                <FooterLinkGroup col className="text-white text-xs sm:text-sm">
                                    <FooterLink href="#">Email Kami</FooterLink>
                                    <FooterLink href="#">Bantuan</FooterLink>
                                    <FooterLink href="#">Kebijakan Privasi</FooterLink>
                                    <FooterLink href="#">Syarat & Ketentuan</FooterLink>
                                </FooterLinkGroup>
                            </div>
                        </div>
                    </div>
                    <FooterDivider />
                    <div className="mt-[-20px] mb-3 text-center">
                        <FooterCopyright href="#" by="Med.Brain" year={new Date().getFullYear()} className="text-white text-xs sm:text-sm" />
                    </div>
                </div>
            </Footer>
        </>
    );
}
