import { useFetch } from '../hooks/useFetch'

function Products() {
  const {data, loading, error} = useFetch("http://localhost:3000/products")
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  return (
<div className="bg-white rounded-xl shadow-lg p-6">
  <h1 className="text-2xl font-semibold text-gray-800 mb-6">
     Products List
  </h1>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Price</th>
          <th className="p-3 text-left">Category</th>
          <th className="p-3 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((product) => (
            <tr
              key={product.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="p-3 text-gray-700 font-medium">
                #{product.id}
              </td>
              <td className="p-3 text-gray-800">
                {product.name}
              </td>
              <td className="p-3 text-gray-500">  
                ${product.price}
              </td>
              <td className="p-3">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
                  {product.category}
                </span>
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      product.status === "available"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                > 
                  {product.status}
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>
  )
} 


export default Products