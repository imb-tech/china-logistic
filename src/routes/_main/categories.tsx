import { CategoriesPages } from '@/pages/categories'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_main/categories')({
  component: () => <CategoriesPages/>,
})
