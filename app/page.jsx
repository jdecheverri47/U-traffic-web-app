import FirstSectionReplace from "@/components/Sections/FirstSectionReplace"
import SecondSection from "@/components/Sections/SecondSection"
import ThirdSection from "@/components/Sections/ThirdSection"
import TollsSection from "@/components/Sections/TollsSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <FirstSection /> */}
      <FirstSectionReplace />
      <SecondSection />
      <TollsSection />
      <ThirdSection />
    </main>
  )
}
