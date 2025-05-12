import { http, HttpResponse } from 'msw'

export const productsHandlers = [
  http.get('http://localhost:4001/products', () => {
    return HttpResponse.json({
      products: [
        {
          id: 1,
          name: 'Product 1',
          price: 100
        }
      ]
    })
  })
]


