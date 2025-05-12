import { setupWorker } from 'msw/browser'
import { productsHandlers } from './handler/products'

export const worker = setupWorker(...productsHandlers)
