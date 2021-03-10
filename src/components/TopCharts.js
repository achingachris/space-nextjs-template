import { useEffect } from 'react'
import Chart from 'chart.js'

const TopCharts = () => {
  useEffect(() => {
    const ctx = document.getElementById('myAreaChart')
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: 'Revenue Collected',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'Red',
              'Blue',
              'Yellow',
              'Green',
              'Purple',
              'Orange',
            ],
            borderColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            borderWidth: 1,
          },
        ],
      },
    })
  })
  useEffect(() => {
    const ctx = document.getElementById('myBarChart')
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'Red',
              'Blue',
              'Yellow',
              'Green',
              'Purple',
              'Orange',
            ],
            borderColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            borderWidth: 1,
          },
        ],
      },
    })
  })
  return (
    <div class='row'>
      <div class='col-xl-6'>
        <div class='card mb-4'>
          <div class='card-header'>
            <i class='fas fa-chart-area mr-1'></i>
            Area Chart Example
          </div>
          <div class='card-body'>
            <canvas id='myAreaChart' width='100%' height='40'></canvas>
          </div>
        </div>
      </div>
      <div class='col-xl-6'>
        <div class='card mb-4'>
          <div class='card-header'>
            <i class='fas fa-chart-bar mr-1'></i>
            Bar Chart Example
          </div>
          <div class='card-body'>
            <canvas id='myBarChart' width='100%' height='40'></canvas>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCharts
