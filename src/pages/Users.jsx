import { useFetch } from '../hooks/useFetch'

function Users() {
  const {data, loading, error} = useFetch("http://localhost:3000/users")

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>  

  return (
<div className="bg-white rounded-xl shadow-lg p-6">
  <h1 className="text-2xl font-semibold text-gray-800 mb-6">
     Users List
  </h1>

  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">First Name</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Role</th>
          <th className="p-3 text-left">Status</th>
        </tr>
      </thead>

      <tbody>
        {data &&
          data.map((user) => (
            <tr
              key={user.id}
              className="border-b last:border-none hover:bg-gray-50 transition"
            >
              <td className="p-3 text-gray-700 font-medium">
                #{user.id}
              </td>

              <td className="p-3 text-gray-800">
                {user.name}
              </td>

              <td className="p-3 text-gray-500">
                {user.email}
              </td>

              <td className="p-3">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600">
                  {user.role}
                </span>
              </td>

              <td className="p-3">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium
                    ${
                      user.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {user.status}
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

export default Users