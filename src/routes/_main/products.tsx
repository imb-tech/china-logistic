import { ProductsPages } from '@/pages/products'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/products')({
  component: () => <ProductsPages/>
})
