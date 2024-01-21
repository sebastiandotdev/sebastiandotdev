import type { ComponentProps, FC } from 'react'

type SVGProps = FC<ComponentProps<'svg'>>

export const Colombia: SVGProps = (props) => {
  return (
    <>
      <svg
        width='800px'
        height='800px'
        viewBox='0 -4 28 28'
        fill='none'
        {...props}
      >
        <g clipPath='url(#clip0_503_4477)'>
          <rect width='28' height='20' rx='2' fill='white' />
          <mask
            id='mask0_503_4477'
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='28'
            height='20'
          >
            <rect width='28' height='20' rx='2' fill='white' />
          </mask>
          <g mask='url(#mask0_503_4477)'>
            <g filter='url(#filter0_d_503_4477)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 14.6667H28V9.33334H0V14.6667Z'
                fill='#0748AE'
              />
            </g>
            <g filter='url(#filter1_d_503_4477)'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M0 20H28V14.6667H0V20Z'
                fill='#DE2035'
              />
            </g>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M0 9.33333H28V0H0V9.33333Z'
              fill='#FFD935'
            />
          </g>
        </g>
        <defs>
          <filter
            id='filter0_d_503_4477'
            x='0'
            y='9.33334'
            width='28'
            height='5.33334'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_503_4477'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_503_4477'
              result='shape'
            />
          </filter>
          <filter
            id='filter1_d_503_4477'
            x='0'
            y='14.6667'
            width='28'
            height='5.33334'
            filterUnits='userSpaceOnUse'
            colorInterpolationFilters='sRGB'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
            />
            <feBlend
              mode='normal'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_503_4477'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_503_4477'
              result='shape'
            />
          </filter>
          <clipPath id='clip0_503_4477'>
            <rect width='28' height='20' rx='2' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </>
  )
}
