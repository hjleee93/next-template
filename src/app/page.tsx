'use client'
import { useCounterStore } from "@/providers/counter-store-provider";

export default function Home() {
  const { count, increment, decrement, init} =  useCounterStore((state) => state)
  return (
    <div className="flex flex-col items-center">
     <h3>Count: { count }</h3>
     <button className="outline mt-3 p-2 cursor-pointer" onClick={increment}> plus+ </button><br/>
     <button className="outline mt-3 p-2 cursor-pointer" onClick={decrement}> minus- </button><br/>
     <button className="outline mt-3 p-2 cursor-pointer" onClick={init}> init </button>
    </div>
  );
}
