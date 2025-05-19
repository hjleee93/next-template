import { Product } from "@/app/products/page";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProductQuery = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) => getProducts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.length > 0 ? lastPage.data[lastPage.data.length - 1].id : null,
  });
}


async function getProducts(pageParam: number) {
	const res = await fetch(`http://localhost:4000/api/products`, {
		cache: 'force-cache',
    credentials: 'include'
    
	});
	const data: Product[] = await res.json();

	return { data };
}