import { createEffect, createSignal, onCleanup } from 'solid-js'
import { Button } from './ui/button'

function UpHome() {
  const [visible, setVisible] = createSignal(false)

  const handleVisibleTop = () => {
    const Y = window.scrollY
    if (Y > 300)
      setVisible(true)
    else
      setVisible(false)
  }

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  createEffect(() => {
    window.addEventListener('scroll', handleVisibleTop)
    onCleanup(() => window.removeEventListener('scroll', handleVisibleTop))
  })

  return (
    <>
      {visible() && (
        <Button
          variant="outline"
          class="fixed right-6 bottom-4 transition-all flex justify-center items-center hover:cursor-pointer z-20 animate-bounce duration-1000"
          onClick={handleTop}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none">
            <path d="M18 15C18 15 13.5811 9.00001 12 9C10.4188 8.99999 6 15 6 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </Button>
      )}
    </>
  )
}

export default UpHome
