import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  ...prefix('auth', [
    layout('layouts/auth.layout.tsx', [
      route('ingreso', 'routes/auth/login.page.tsx'),
      route('registro', 'routes/auth/register.page.tsx'),
      route('test', 'routes/auth/test.page.tsx'),
    ]),
  ]),
  ...prefix('chat', [
    layout('layouts/admin.layout.tsx', [
      index('routes/chat/no-chat-selected.page.tsx'),
      route('client-chat', 'routes/chat/client-chat.page.tsx'),
    ]),
  ]),
] satisfies RouteConfig
