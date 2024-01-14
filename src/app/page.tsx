import { DarkMode } from '@/components/dark-mode'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <DarkMode />
     <Button>
      Hola Nextjs
     </Button>
    </main>
  )
}
