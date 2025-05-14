import { Applications } from '@/pages/applications'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/applications')({
  component: () => <Applications/>
})
