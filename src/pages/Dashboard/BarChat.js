
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts';
import { Row } from 'react-bootstrap';
const pdata = [
    {
        name: 'jan',
        Sales: 13,
        Orders: 10
    },
    {
        name: 'Feb',
        Sales: 15,
        Orders: 12
    },
    {
        name: 'March',
        Sales: 5,
        Orders: 10
    },
    {
        name: 'APi',
        Sales: 10,
        Orders: 5
    },
    {
        name: 'May',
        Sales: 9,
        Orders: 4
    },
    {
        name: 'Jun',
        Sales: 10,
        Orders: 8
    },
];

function BarChat() {
    return (

        <Row>
            <div className="col-md-6 col-lg-6 py-5 ">
                <h5>Sales Chart</h5>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                        width={500}
                        height={500}
                        data={pdata}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Sales" fill="#8884d8" />
                        <Bar dataKey="Orders" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

            </div>

            <div className="col-md-6 col-lg-6 py-5 ">
                <h5>Sales Chart</h5>

                <ResponsiveContainer width="100%" aspect={3}>
                    <AreaChart
                        width={500}
                        height={500}
                        data={pdata}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="doughnut" dataKey="Sales" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>


        </Row>
    );
}

export default BarChat;
