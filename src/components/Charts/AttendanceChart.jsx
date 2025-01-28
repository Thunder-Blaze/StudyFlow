import PropTypes from 'prop-types'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Register required Chart.js modules
ChartJS.register(ArcElement, Tooltip, Legend)

const AttendanceChart = ({ absent, present }) => {
    // Data for Present and Absent
    const data = {
        labels: ['Present', 'Absent'],
        datasets: [
            {
                data: [`${present}`, `${absent}`],
                backgroundColor: ['#4CAF50', '#FF5252'], // Colors for Present and Absent
                borderWidth: 0,
            },
        ],
    }

    // Options for the chart
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const value = tooltipItem.raw
                        const total = tooltipItem.dataset.data.reduce(
                            (a, b) => a + b,
                            0
                        )
                        const percentage = ((value / total) * 100).toFixed(1)
                        return `${tooltipItem.label}: ${value} (${percentage}%)`
                    },
                },
            },
        },
    }

    return (
        <div style={{ width: '150px', height: '150px' }}>
            <Doughnut data={data} options={options} />
        </div>
    )
}

AttendanceChart.propTypes = {
    absent: PropTypes.number.isRequired,
    present: PropTypes.number.isRequired,
}

export default AttendanceChart
