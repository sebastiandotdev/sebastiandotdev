import { type ComponentProps, type ParentComponent, splitProps } from 'solid-js'
import { cn } from '@/utils/cn'

export function Card(props: ComponentProps<'div'>) {
  const [local, rest] = splitProps(props, ['class'])
  return (
    <div
      class={cn('rounded-xl border text-card-foreground shadow', local.class)}
      {...rest}
    />
  )
}

export function CardHeader(props: ComponentProps<'div'>) {
  const [local, rest] = splitProps(props, ['class', 'classList'])
  return <div class={cn('flex flex-col space-y-1.5 p-6', local.class)} {...rest} />
}

export const CardTitle: ParentComponent<ComponentProps<'h1'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'classList'])
  return <h1 class={cn('font-semibold leading-none tracking-tight', local.class)} {...rest} />
}

export const CardDescription: ParentComponent<ComponentProps<'h3'>> = (props) => {
  const [local, rest] = splitProps(props, ['class', 'classList'])
  return <h3 class={cn('text-sm text-muted-foreground', local.class)} {...rest} />
}

export function CardContent(props: ComponentProps<'div'>) {
  const [local, rest] = splitProps(props, ['class', 'classList'])
  return <div class={cn('p-6 pt-0', local.class)} {...rest} />
}

export function CardFooter(props: ComponentProps<'div'>) {
  const [local, rest] = splitProps(props, ['class', 'classList'])
  return <div class={cn('flex items-center p-6 pt-0', local.class)} {...rest} />
}
