import type { ComponentProps, FC } from 'react'

const Moon: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3a6 6 0 0 0 9 9a9 9 0 1 1-9-9"
    ></path>
  </svg>
)

export default Moon
