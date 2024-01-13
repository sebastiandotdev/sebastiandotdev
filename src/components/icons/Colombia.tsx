import { component$ } from '@builder.io/qwik'

export const Colombia = component$(() => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 30 20'
        id='colombia-flag'
      >
        <path d='M0 0h30v20H0z'></path>
        <path fill='#fcd116' d='M1 1h28v9H1z'></path>
        <path fill='#ce1126' d='M1 15h28v4H1z'></path>
        <path fill='#003893' d='M1 10h28v5H1z'></path>
      </svg>
    </>
  )
})
