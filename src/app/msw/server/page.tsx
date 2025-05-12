
export default async function Home() {

  const response = await fetch('http://localhost:4001/products')
  const data = await response.json()

  return (
    <div className="flex flex-col items-center">

     <h3>MSW - server</h3>
      <div>data: {JSON.stringify(data)}</div>
    </div>
  );
}
