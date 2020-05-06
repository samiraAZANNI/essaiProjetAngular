import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { DashboardService } from 'src/app/services/dashboard.service';
import { Key } from 'protractor';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  public canvas : any;
  public ctx;
  public datasets: any;
  public data: any;
  public data1: any;
  public data2: any;
  public myChartData;
  public clicked = true;
  public clicked1 = false;
  public clicked2 = false;

  public statistiques: any;
  public staticArray: string[] = [];
  public sumArray: number[] = [];
  public divisionArray: number[] = [];

  constructor(private _ds : DashboardService) {}

  ngOnInit() {
    const gradientChartOptionsConfigurationWithTooltipBlue: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#2380f7'
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#2380f7'
          }
        }]
      }
    };

    const gradientChartOptionsConfigurationWithTooltipPurple: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#9a9a9a'
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9a9a9a'
          }
        }]
      }
    };

    const gradientChartOptionsConfigurationWithTooltipRed: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#9a9a9a'
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(233,32,16,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9a9a9a'
          }
        }]
      }
    };

    const gradientChartOptionsConfigurationWithTooltipOrange: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 110,
            padding: 20,
            fontColor: '#ff8a76'
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(220,53,69,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#ff8a76'
          }
        }]
      }
    };

    const gradientChartOptionsConfigurationWithTooltipGreen: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 50,
            suggestedMax: 125,
            padding: 20,
            fontColor: '#9e9e9e'
          }
        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(0,242,195,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e'
          }
        }]
      }
    };


    const gradientBarChartConfiguration: any = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },

      tooltips: {
        backgroundColor: '#f5f5f5',
        titleFontColor: '#333',
        bodyFontColor: '#666',
        bodySpacing: 4,
        xPadding: 12,
        mode: 'nearest',
        intersect: 0,
        position: 'nearest'
      },
      responsive: true,
      scales: {
        yAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            suggestedMin: 60,
            suggestedMax: 120,
            padding: 20,
            fontColor: '#9e9e9e'
          }
        }],

        xAxes: [{

          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e'
          }
        }]
      }
    };

    this.canvas = document.getElementById('chartLineRed');
    this.ctx = this.canvas.getContext('2d');

    let gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
    gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
    gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); // red colors

    const data1 = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
      datasets: [{
        label: 'Data',
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#ec250d',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#ec250d',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#ec250d',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [80, 100, 70, 80, 120, 80],
      }]
    };

    let myChart = new Chart(this.ctx, {
      type: 'line',
      data1,
      options: gradientChartOptionsConfigurationWithTooltipRed
    });





    this.canvas = document.getElementById('chartLineGreen');
    this.ctx = this.canvas.getContext('2d');

    gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

    gradientStroke.addColorStop(1, 'rgba(66,134,121,0.15)');
    gradientStroke.addColorStop(0.4, 'rgba(66,134,121,0.0)'); // green colors
    gradientStroke.addColorStop(0, 'rgba(66,134,121,0)'); // green colors

    const data2 = {
      labels: ['JUL', 'AUG', 'SEP', 'OCT', 'NOV'],
      datasets: [{
        label: 'My First dataset',
        fill: true,
        backgroundColor: gradientStroke,
        borderColor: '#00d6b4',
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: '#00d6b4',
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: '#00d6b4',
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: [90, 27, 60, 12, 80],
      }]
    };

    myChart = new Chart(this.ctx, {
      type: 'line',
      data2,
      options: gradientChartOptionsConfigurationWithTooltipGreen

    });


    //////////////////////////////////////////////////////////////////////
    this._ds.listStatistiques()
      .subscribe(
        res =>{
          console.log(res);
          // console.log('aaaaaaa');
          res.forEach(element => {
            // console.log('cccccc '+ element);
            const staticStr = JSON.stringify(element);
            // console.log('dddddddd '+staticStr);
            JSON.parse(staticStr, (key, value) => {
              if(key === 'semaine'){
                // console.log('eeeeeeeeeee '+value);
                this.staticArray.push(value);
              }
              if(key === 'qtySum'){
                this.sumArray.push(value);
              }
              if(key === 'division'){
                this.divisionArray.push(value);
              }
            });
          });


          this.staticArray.unshift(this.staticArray.pop());
          this.sumArray.unshift(this.sumArray.pop());
          this.divisionArray.unshift(this.divisionArray.pop());

          console.log('semaine '+this.staticArray);
          console.log('sum '+this.sumArray);
          console.log('division '+this.divisionArray);

          const chartLabels = this.staticArray;
          console.log('finale '+chartLabels+' gggggggggg '+this.staticArray);

          // var chartLabels = ['15', '16', '17', '18', 'retard'];
          this.datasets = [
            this.divisionArray,
            this.sumArray,
            this.divisionArray
          ];

          this.data = this.datasets[0];

          this.canvas = document.getElementById('chartBig1');
          this.ctx = this.canvas.getContext('2d');

          gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

          gradientStroke.addColorStop(1, 'rgba(233,32,16,0.2)');
          gradientStroke.addColorStop(0.4, 'rgba(233,32,16,0.0)');
          gradientStroke.addColorStop(0, 'rgba(233,32,16,0)'); // red colors

          const config = {
            type: 'line',
            data: {
              labels: chartLabels,
              datasets: [{
                label: 'My First dataset',
                fill: true,
                backgroundColor: gradientStroke,
                borderColor: '#ec250d',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                pointBackgroundColor: '#ec250d',
                pointBorderColor: 'rgba(255,255,255,0)',
                pointHoverBackgroundColor: '#ec250d',
                pointBorderWidth: 20,
                pointHoverRadius: 4,
                pointHoverBorderWidth: 15,
                pointRadius: 4,
                data: this.data,
              }]
            },
            options: gradientChartOptionsConfigurationWithTooltipRed
          };


          this.myChartData = new Chart(this.ctx, config);

          this.canvas = document.getElementById('CountryChart');
          this.ctx  = this.canvas.getContext('2d');
          gradientStroke = this.ctx.createLinearGradient(0, 230, 0, 50);

          gradientStroke.addColorStop(1, 'rgba(29,140,248,0.2)');
          gradientStroke.addColorStop(0.4, 'rgba(29,140,248,0.0)');
          gradientStroke.addColorStop(0, 'rgba(29,140,248,0)'); // blue colors


          myChart = new Chart(this.ctx, {
            type: 'bar',
            responsive: true,
            legend: {
              display: false
            },
            data: {
              labels: chartLabels,
              datasets: [{
                label: 'Quantité',
                fill: true,
                backgroundColor: gradientStroke,
                hoverBackgroundColor: gradientStroke,
                borderColor: '#1f8ef1',
                borderWidth: 2,
                borderDash: [],
                borderDashOffset: 0.0,
                data: this.datasets[1],
              }]
            },
            options: gradientBarChartConfiguration
          });

        }, err=>{
          console.log(err);
        }
      );
  }

  // //////////////////////////////////////////////////////////

  /*onGetStatistique(){
      this._ds.listStatistiques()
      .subscribe(
        data =>{
          console.log(data);
          this.statistiques=data;
        }, err=>{
          console.log(err);
        }
      );
  }*/

// /////////////////////////////////////////////////////////

  public updateOptions() {
    this.myChartData.data.datasets[0].data = this.data;
    this.myChartData.update();
  }

  public arraymove(arr, fromIndex, toIndex) {
    const element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }
}
