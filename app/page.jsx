import FirstSectionReplace from "@/components/Sections/FirstSectionReplace"
import SecondSection from "@/components/Sections/SecondSection"
import ThirdSection from "@/components/Sections/ThirdSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <FirstSection /> */}
      <FirstSectionReplace />
      <SecondSection />
      <ThirdSection />
    </main>
  )
}
