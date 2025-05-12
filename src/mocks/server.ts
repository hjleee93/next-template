import { setupServer } from 'msw/node'
import { productsHandlers } from './handler/products'

export const server = setupServer(...productsHandlers)
