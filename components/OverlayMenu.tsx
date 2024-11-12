import { css } from '@/styled-system/css'
import { Center } from '@/styled-system/jsx'

export default function OverlayMenu() {
  return (
    <Center padding="4">
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '50%',
          maxWidth: 1024,
          minWidth: 300,
          padding: '10px 20px',
          backdropFilter: 'blur(8px)',
          borderRadius: '30px',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        })}
      >
        <h1>Sebastian Garcia</h1>
      </div>
    </Center>
  )
}
