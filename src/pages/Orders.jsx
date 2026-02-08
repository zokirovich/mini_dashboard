import { useFetch } from '../hooks/useFetch'

function Orders() {
  const {data, loading, error} = useFetch("http://localhost:3000/orders")
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  return (
<div className="bg-white rounded-xl shadow-lg p-6">
  <h1 className="text-2xl font-semibold text-gray-800 mb-6">
     Orders List  
  </h1>
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Customer</th>
          <th className="p-3 text-left">Total</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((order) => (
            <tr
              key={order.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="p-3 text-gray-700 font-medium">
                #{order.id}
              </td>
              <td className="p-3 text-gray-800">
                {order.customer}
              </td>
              <td className="p-3 text-gray-500">  
                ${order.total}
              </td>
              <td className="p-3 text-gray-500">  
                {new Date(order.date).toLocaleDateString()}
              </td>
              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      order.status === "completed"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {order.status}
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

export default Orders