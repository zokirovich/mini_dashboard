import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts"
import { useFetch } from '../hooks/useFetch'

function Chart() {

    const { data, loading, error } = useFetch('http://localhost:3000/chart')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p> 
    if(!data || data.length === 0) return <p>No data available</p>
    console.log(data);

    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div style={{ width: "100%", height: 300 }}>
                <ResponsiveContainer>
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#2563EB" strokeWidth={2} />
                        <Line type="monotone" dataKey="revenue" stroke="#64748B" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default Chart