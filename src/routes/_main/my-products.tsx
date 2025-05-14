import { MyProductsPages } from '@/pages/my-products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/my-products')({
  component: () => <MyProductsPages/>
})
