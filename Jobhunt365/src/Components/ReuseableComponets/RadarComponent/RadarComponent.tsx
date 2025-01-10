import React from 'react'
import { Radar, RadarChart, PolarAngleAxis } from 'recharts'

const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150,
  },
  {
    subject: 'Chinese',
    A: 98,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150,
  },
]

export default function RadarChartComponent() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={50}
      width={200}
      height={200}
      data={data}
      style={{ backgroundColor: '#fff' }}
    >
      {/* <PolarGrid stroke="#111" /> */}
      <PolarAngleAxis dataKey='subject' fill='#111' stroke='#fff' />
      {/* <PolarRadiusAxis /> */}
      <Radar
        name='Mike'
        dataKey='A'
        stroke='#8884d8'
        fill='#8884d8'
        fillOpacity={0.6}
      />
    </RadarChart>
  )
}
