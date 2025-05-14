import { SellersPages } from '@/pages/sellers'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/sellers')({
  component: () => <SellersPages/>
})
