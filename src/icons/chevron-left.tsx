import type { ComponentProps, FC } from 'react'

const ChevronLeft: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.3em"
    height="1.3em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15 18l-6-6l6-6"
    />
  </svg>
)

export default ChevronLeft
