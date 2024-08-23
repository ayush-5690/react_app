import { BarChart, PieChart } from '@mui/x-charts'
import React from 'react'

function Chart() {
  return (
    <div>
    <BarChart
     tooltip={{ trigger: 'item' }}
      series={[
        { data: [35, 44, 24, 4] },
        { data: [51, 6, 49, 30] },
        { data: [15, 25, 30, 50] },
        { data: [60, 50, 15, 25] },
      ]}
      height={290}
      xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
    <PieChart
  series={[
    {
      data: [
        { id: 0, value: 100, label: 'wdwdwdwd A' },
        { id: 1, value: 15, label: 'series B' },
        { id: 2, value: 20, label: 'series C' },
      ],
    },
  ]}
  width={400}
  height={500}
  margin={{ top: 10, bottom: 30, left: 40 }}
/>
    </div>
  )
}

export default Chart
