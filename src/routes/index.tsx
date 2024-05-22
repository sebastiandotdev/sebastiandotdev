import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Header />
      <main class="container pt-44">
        <h1>Hello world!</h1>
        <p>
          Visit
          {' '}
          <a href="https://start.solidjs.com" target="_blank">
            start.solidjs.com
          </a>
          {' '}
          to learn how to build SolidStart apps.
        </p>
      </main>
    </>
  )
}
