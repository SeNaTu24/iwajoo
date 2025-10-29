import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProgramsSection from "@/components/ProgramsSection";
import CommunityEventsSection from "@/components/CommunityEventsSection";
import OpportunitiesSection from "@/components/OpportunitiesSection";
import ImpactSection from "@/components/ImpactSection";
import ResourcesSection from "@/components/ResourcesSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <HeroSection />
                <div id="about">
                    <AboutSection />
                </div>
                <div id="initiatives">
                    <ProgramsSection />
                    <CommunityEventsSection />
                </div>
                <div id="gallery">
                    <ImpactSection />
                </div>
                <div id="careers">
                    <OpportunitiesSection />
                </div>
                <div id="resources">
                    <ResourcesSection />
                </div>
                <div id="contact">
                    <ContactSection />
                </div>
            </main>
            <Footer />
            <ChatWidget />
        </div>
    );
}
