import { type RouteConfig, index, route, prefix } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  
  ...prefix('sandbox', [
    route('typography', './routes/sandbox/typography.page.tsx'),
    route('colors', './routes/sandbox/colors.page.tsx'),
    route('form', './routes/sandbox/form.page.tsx'),
    route('searchable-select-form', './routes/sandbox/searchable-select-form.page.tsx'),
    route('text-button', './routes/sandbox/text-button.page.tsx'),
    route('button', './routes/sandbox/button.page.tsx'),
    route('breadcrumb', './routes/sandbox/breadcrumb.page.tsx'),
    route('icon-button', './routes/sandbox/icon-button.page.tsx'),
    route('toast-rq', './routes/sandbox/toast-rq.page.tsx'),
    route('modal', './routes/sandbox/modal.page.tsx'),
    route('dialog', './routes/sandbox/dialog.page.tsx'),
    route('table', './routes/sandbox/table.page.tsx'),
    route('tooltip', './routes/sandbox/tooltip.page.tsx'),
    route('mac-cards', './routes/sandbox/mac-cards.page.tsx'),
    route('popover', './routes/sandbox/popover.page.tsx'),
    route('banner', './routes/sandbox/banner.page.tsx'),
    route('alert', './routes/sandbox/alert.page.tsx'),
    route('typography-alert', './routes/sandbox/typography-alert.page.tsx'),
    route('tag', './routes/sandbox/tag.page.tsx'),
    route('card', './routes/sandbox/card.page.tsx'),
    route('development-card', './routes/sandbox/development-card.page.tsx'),
    route('statistics-card', './routes/sandbox/statistics-card.page.tsx')
  ])
] satisfies RouteConfig
