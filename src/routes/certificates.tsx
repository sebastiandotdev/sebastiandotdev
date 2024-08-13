import Container from '@/components/ui/container'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Certificates() {
  return (
    <>
      <Header />
      <Container>
        <h2 class="text-4xl md:text-7xl font-bold text-center dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 dark:bg-opacity-50">Certifacates</h2>
        <article class="w-full py-12 md:py-24 lg:py-32">
          <div class="container grid gap-12 px-4 md:px-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              <div class="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950">
                <div class="flex items-center justify-center h-16 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-10 h-10 text-primary"
                  >
                    <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
                    <circle cx="12" cy="8" r="6" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">AWS Certified Developer</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Our programmers are certified in designing and developing cloud-based applications on AWS.
                </p>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950">
                <div class="flex items-center justify-center h-16 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-10 h-10 text-primary"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Certified Scrum Master</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Our programmers are trained in Agile methodologies and can effect
                </p>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950">
                <div class="flex items-center justify-center h-16 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-10 h-10 text-primary"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    <rect width="20" height="14" x="2" y="6" rx="2" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Microsoft Certified Azure Develo</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Our programmers are skilled </p>
              </div>
              <div class="bg-white rounded-lg shadow-lg p-6 dark:bg-gray-950">
                <div class="flex items-center justify-center h-16 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-10 h-10 text-primary"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 class="text-lg font-bold mb-2">Microsoft Certified Azure Develo</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">Our programmers are skilled </p>
              </div>
            </div>
          </div>
        </article>
      </Container>
      <Footer />
    </>

  )
}
