import type { ComponentProps, FC } from 'react'

const Terminal: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="m7 11l2-2l-2-2m4 6h4"></path>
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
    </g>
  </svg>
)

export default Terminal
