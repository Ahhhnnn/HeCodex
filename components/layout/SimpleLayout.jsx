import { Container } from '@/components/layout/Container'

export function SimpleLayout({
  title,
  intro,
  children,
}) {
  return (
    <Container className="mt-8">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-400 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
