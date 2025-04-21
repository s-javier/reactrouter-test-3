/**
 * TODO: Update this component to use your client-side framework's link
 * component. We've provided examples of how to do this for Next.js, Remix, and
 * Inertia.js in the Catalyst documentation:
 *
 * https://catalyst.tailwindui.com/docs#client-side-router-integration
 */

import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'
import { Link as ReactRouterLink, type LinkProps as ReactRouterLinkProps } from 'react-router'

type AnchorProps = React.ComponentPropsWithoutRef<'a'>

type CustomLinkProps =
  | ({ to: ReactRouterLinkProps['to']; href?: never } & Omit<ReactRouterLinkProps, 'to'>)
  | ({ href: string; to?: never } & Omit<AnchorProps, 'href'>)

export const Link = forwardRef<HTMLAnchorElement, CustomLinkProps>(function Link(props, ref) {
  const isReactRouterLink = 'to' in props

  if (isReactRouterLink) {
    // Si es un React Router Link, usamos ReactRouterLink
    const { to, ...rest } = props as ReactRouterLinkProps
    return (
      <Headless.DataInteractive>
        <ReactRouterLink to={to} ref={ref} {...rest} />
      </Headless.DataInteractive>
    )
  }

  // Si es un enlace estándar, usamos <a>
  const { href, ...rest } = props as AnchorProps
  return (
    <Headless.DataInteractive>
      <a href={href} ref={ref} {...rest} />
    </Headless.DataInteractive>
  )
})
