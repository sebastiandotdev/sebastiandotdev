import type { RouteSectionProps } from '@solidjs/router'
import { ColorModeProvider, ColorModeScript } from '@kobalte/core'
import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import './app.css'

function Component(props: RouteSectionProps<unknown>) {
  return (
    <MetaProvider>
      <Title>Sebastian Garcia | Portfolio</Title>
      <Suspense>
        <ColorModeScript />
        <ColorModeProvider>{props.children}</ColorModeProvider>
      </Suspense>
    </MetaProvider>
  )
}

export default function App() {
  return (
    <Router root={props => <Component {...props} />}>
      <FileRoutes />
    </Router>
  )
}
