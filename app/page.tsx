import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ArchitectureSection } from "@/components/architecture-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { InteractiveTerminal } from "@/components/interactive-terminal"
import { ExperienceSection } from "@/components/experience-section"
import { CertificationsSection } from "@/components/certifications-section"
import { AchievementsSection } from "@/components/achievements-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#07090e]">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ArchitectureSection />
      <SkillsSection />
      <ProjectsSection />
      <InteractiveTerminal />
      <ExperienceSection />
      <CertificationsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
