import { ProductsCreatePages } from '@/pages/products/product-create'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/_products/product-create')({
  component: () => <ProductsCreatePages/>
})
