import Footer from '@/components/footer'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div class="h-[40rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <div class="mt-20 p-4 max-w-7xl mx-auto relative w-full pt-20 md:pt-0">
            <h1 class="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">Sebastián García</h1>
            <p class="mt-4 font-normal text-base max-w-lg text-center mx-auto">+2 years of enthusiastic experience in open source and infrastructure</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
