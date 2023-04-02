<template>
    <div class="dashboard">
      <!-- <h1>Dashboard page</h1>-->
        <v-container fluid >
            <v-row no-gutters >
                <v-col>
                    <v-card class="pa-2 ma-2" outlined tile>
                        <Bar :chartData="chartData" :chartOptions="chartOptions" />
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-2 ma-2" outlined tile>
                        <LineChart :chartData="chartData" :chartOptions="chartOptions" />
                    </v-card>
                </v-col>
            </v-row>
            <v-row no-gutters style="height: 150px;">
                <v-col>
                    <v-card class="pa-2 ma-2" outlined tile>
                        <Doughnut :chartData="chartData"  />
                        
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="pa-2 ma-2" outlined tile>
                        <Radar :chartData="chartDataRadar"  />
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
  </template>
<script>
//import BarChart from '../components/BarChart.vue'
import { Bar, Doughnut, Line as LineChart, Radar } from 'vue-chartjs'
//import { Chart as ChartJS, RedialLinerScale, Title, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'  
import 'chart.js/auto';

//ChartJS.register(Title, Tooltip, ArcElement, Legend, BarElement, RedialLinerScale, CategoryScale, LinearScale, PointElement, LineElement)

export default {
  name: 'App',
  components: { Bar, Doughnut, LineChart, Radar },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March'],
        datasets: [
          {
            label: 'Timeline',
            //backgroundColor: '#f87979',
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
            ],
            data: [40, 20, 12]
          }
        ]
      },
      chartDataRadar: {
        labels: [
          'Eating',
          'Drinking',
          'Sleeping',
          'Designing',
          'Coding',
          'Cycling',
          'Running'
        ],
        datasets: [
          {
            label: 'My First dataset',
            backgroundColor: 'rgba(179,181,198,0.2)',
            borderColor: 'rgba(179,181,198,1)',
            pointBackgroundColor: 'rgba(179,181,198,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(179,181,198,1)',
            data: [65, 59, 90, 81, 56, 55, 40]
          },
          {
            label: 'My Second dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            pointBackgroundColor: 'rgba(255,99,132,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255,99,132,1)',
            data: [28, 48, 40, 19, 96, 27, 100]
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            display: false
        },
        plugins: {
            legend: {
                display: false
            }
        }
      }
    }
  }
}
</script>