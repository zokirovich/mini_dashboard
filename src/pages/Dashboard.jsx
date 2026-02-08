import Cards from '../components/Cards'
import Chart from '../components/Chart'
// import {useFetch} from '../hooks/useFetch'

function Dashboard() {
   return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Dashboard </h1>
      <Cards />
      <Chart />
    </div>
  )
}

export default Dashboard