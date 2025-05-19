import { Product } from "@/app/products/page";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useProductQuery = () => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.data.length > 0 ? lastPage.data[lastPage.data.length - 1].id : null,
  });
}


async function getProducts() {
	const res = await fetch(`http://localhost:4000/api/products`, {
		cache: 'force-cache',
    credentials: 'include'
    
	});
	const data: Product[] = await res.json();

	return { data };
}