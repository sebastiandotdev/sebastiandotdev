import Background from '@/components/background'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <div class="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <svg class="animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 -top-40 left-0 md:left-60 md:-top-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3787 2842" fill="none">
            <g filter="url(#filter)"><ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="white" fill-opacity="0.21" /></g>
            <defs>
              <filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
              </filter>
            </defs>
          </svg>
          <div class="mt-20 p-4 max-w-7xl mx-auto relative w-full pt-20 md:pt-0">
            <h1 class="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Sebastian Garcia</h1>
            <p class="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">+2 years of enthusiastic experience in open source and infrastructure</p>
          </div>
        </div>
        <Background />
      </div>
    </>
  )
}
