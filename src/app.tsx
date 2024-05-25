import type { RouteSectionProps } from '@solidjs/router'
import { MetaProvider, Title } from '@solidjs/meta'
import { Router } from '@solidjs/router'
import { FileRoutes } from '@solidjs/start/router'
import { Suspense } from 'solid-js'
import { ColorModeProvider, ColorModeScript } from '@kobalte/core'
import './app.css'

function Component(props: RouteSectionProps<unknown>) {
  return (
    <MetaProvider>
      <Title>Sebastian Garcia</Title>
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
