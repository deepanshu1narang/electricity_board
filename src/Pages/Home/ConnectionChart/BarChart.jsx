import { Box, Group, Radio, Button } from '@mantine/core';
import { useStyles } from './style';

import { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { baseUrl, getHeader } from '../../../Utils/apiConnection';
import { MonthPickerInput } from '@mantine/dates';
import SkeletonTable from '../../../Utils/SkeletonTable';
function BarChart() {
    const { classes, theme } = useStyles(useStyles);
    const [dashboardData, setDashboardData] = useState({ datasets: [], labels: ['January', 'February', 'March', 'April', 'May'] });
    let firstDate = new Date(2021, 5, 28);
    firstDate.setDate(firstDate.getDate() - 140)
    const [dateRange, setDateRange] = useState([firstDate, new Date(2021, 5, 28)]);
    const [status, setStatus] = useState('Approved');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Monthly Connection Request',
            },
        },
    };
    const monthDiff = (d1, d2) => {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    function getMonthsBetweenDates(startDate, endDate) {

        let months = [];

        let currentDate = new Date(startDate);
        while (currentDate <= endDate) {

            let year = currentDate.getFullYear();
            let month = currentDate.getMonth() + 1; // Month is 0-indexed, so add 1
            let monthName = currentDate.toLocaleDateString('en-US', { month: 'long' }); // Get m

            if (!months.some(m => m.year === year && m.month === month)) {
                months.push(`${monthName}, ${year}`);
            }

            currentDate.setMonth(currentDate.getMonth() + 1);
        }

        return months;
    }
    async function fetchDashboardData() {
        let body = {}
        if (!status) return setError('Please select Connection Status');
        body.status = status;
        if (!dateRange || !dateRange[0] || !dateRange[0])
            return setError('Please select Date Range');

        const startDate = new Date(dateRange[0]);
        const endDate = new Date(dateRange[1]);
        const monthDifference = monthDiff(startDate, endDate);
        if (monthDifference > 12) return setError('Date range must be less than a year');
        body.startMonth = startDate.getMonth();
        body.startYear = startDate.getFullYear()

        body.endMonth = endDate.getMonth();
        body.endYear = endDate.getFullYear()
        setError('');
        setIsLoading(true);
        const apiResp = await fetch(`${baseUrl}/user/dashboard/`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: getHeader()
        });
        if (apiResp.ok) {
            function bgColor(label) {
                let color = "";
                if (label === "Pending") {
                    color = "pending";
                }
                else if (label === "Approved") {
                    color = "primary"
                }
                else if (label === "Connection Released") {
                    color = "secondary"
                }
                else if (label === "Rejected") {
                    color = "rejected"
                }
                return theme.colors[color][0];
            }
            let dashboardData = await apiResp.json();
            setIsLoading(false);
            setDashboardData({
                labels: getMonthsBetweenDates(startDate, endDate),
                datasets: [{
                    label: dashboardData.label,
                    data: dashboardData.data.map((val) => val.count),
                    backgroundColor: bgColor(dashboardData.label),
                }]
            });

        }
    }

    useEffect(() => {
        fetchDashboardData()
    }, [status, dateRange]);
    return (
        <Box className={classes.wrapper}>
            <Box className={classes.dashboardWrapper}>
                {isLoading && <SkeletonTable numbers={5} />}
                {!isLoading && <Bar options={options} data={dashboardData} />}
            </Box>

            <Box className={classes.filterWrapper}>
                <Box className={classes.filter}>
                    <h3 > Filter Dashboard</h3>

                    <Group position="center" mb="xl">

                        <MonthPickerInput
                            type="range"
                            label="Pick Month range"
                            placeholder="Pick Month range"
                            value={dateRange} onChange={setDateRange}
                            mx="auto"
                            miw="300px"

                        />
                    </Group>

                    <Radio.Group
                        className={classes.radioStatus}
                        value={status}
                        onChange={setStatus}
                        name="status"
                        label="Select Status"
                        description="Select connection status"
                    >
                        <Group mt="xs" position='center'>
                            <Radio value="Approved" label="Approved" />
                            <Radio value="Pending" label="Pending" />
                            <Radio value="Connection Released" label="Connection Released" />
                            <Radio value="Rejected" label="Rejected" />
                        </Group>
                    </Radio.Group>
                    {/* </Group> */}
                    {error && <Box className={classes.error}> {error}</Box>}

                </Box>
            </Box>
        </Box>
    );
}

export default BarChart;