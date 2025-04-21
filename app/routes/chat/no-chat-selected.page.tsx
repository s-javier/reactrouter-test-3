import type { Route } from './+types/no-chat-selected.page'

export async function loader() {
  return {
    msg: 'Hola',
  }
}

export default function NoChatSelectedPage({ loaderData }: Route.ComponentProps) {
  console.log(loaderData)

  return (
    <>
      <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
        No chat selected
      </h1>
      <hr
        role="presentation"
        className="mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"
      ></hr>
    </>
  )
}
