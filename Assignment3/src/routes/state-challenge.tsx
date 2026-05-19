import { createFileRoute } from '@tanstack/react-router'
import { ShoppingCart } from '../features/shoppingCart/components/ShoppingCart'

export const Route = createFileRoute('/state-challenge')({
  component: ShoppingCart,
})

