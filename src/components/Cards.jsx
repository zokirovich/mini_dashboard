import { useFetch } from '../hooks/useFetch'

function Cards() {
  const { data, loading, error } = useFetch('http://localhost:3000/stats');

  if (loading) {
    return <p className="text-gray-500 text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center mt-10">Error: {error}</p>;
  }

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-300 text-gray-700 p-6 rounded-md shadow-md transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-xl"
          >
            <div
              // className={`w-10 h-10 flex items-center justify-center rounded-full mb-4 ${item.bgColor}`}
            >
              <i className={`text-3xl ${item.icon}`}></i>
            </div>
            
            <h3 className="text-gray-700 font-semibold text-lg">{item.title}</h3>

            <p className="text-2xl font-bold text-gray-900 mt-1">{item.value}</p>
            
            <p
              className={`mt-2 text-sm font-medium ${
                item.change > 0 ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {item.change > 0 ? `+${item.change}%` : `${item.change}%`} this week
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 col-span-full text-center">No data available</p>
      )}
    </div>
  );
}

export default Cards;
