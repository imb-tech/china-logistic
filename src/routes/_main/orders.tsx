import { OrdersPages } from '@/pages/orders'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/orders')({
  component: () => <OrdersPages/>
})
