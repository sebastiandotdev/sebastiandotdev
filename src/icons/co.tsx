import { SVGProps } from 'react'

export default function CircleFlagsCo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <mask id="circleFlagsCo0">
        <circle cx="256" cy="256" r="256" fill="#fff"></circle>
      </mask>
      <g mask="url(#circleFlagsCo0)">
        <path fill="#d80027" d="m0 384l255.8-29.7L512 384v128H0z"></path>
        <path fill="#0052b4" d="m0 256l259.5-31L512 256v128H0z"></path>
        <path fill="#ffda44" d="M0 0h512v256H0z"></path>
      </g>
    </svg>
  )
}
