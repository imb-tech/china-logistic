import { SellerDetailsPages } from '@/pages/sellers/seller-detail'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/_seller/$id')({
  component: () => <SellerDetailsPages/>
})
