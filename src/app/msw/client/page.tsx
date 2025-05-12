'use client'

import { useQuery } from "@tanstack/react-query";

export default function Home() {

  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('http://localhost:4001/products').then(res => res.json())
  })

  return (
    <div className="flex flex-col items-center">

      <h3>MSW - server</h3>
      <div>data: {JSON.stringify(data)}</div>

    </div>
  );
}
