import { SettingsPages } from '@/pages/settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/settings')({
  component: () => <SettingsPages/>
})
