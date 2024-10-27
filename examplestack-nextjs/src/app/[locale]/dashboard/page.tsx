'use client'

// import { useState, useRef, useEffect } from 'react'
// import * as Highcharts from 'highcharts'
// import highchartsAccessibility from 'highcharts/modules/accessibility'
// import HighchartsReact from 'highcharts-react-official'

// import { useDashboard } from '@/hooks/dashboard'

// if (typeof window !== 'undefined') {
//   highchartsAccessibility(Highcharts);
// }

// const optionDefault = {
//   title: {},
//   chart: {
//     backgroundColor: "#FFF",
//     spacingRight: 0,
//     spacingBottom: 10,
//     // marginLeft: 8,
//     // marginRight: 65,
//     plotBorderWidth: 1,
//     plotBorderColor: "rgba(0, 0, 0, 0.05)",
//     animation: false,
//     // events: {
//     //   redraw: redraw() {},
//     //   render: render() {},
//     //   load: load() {}
//     // }
//   },
//   series: [],
//   tooltip: {
//     backgroundColor: "transparent",
//     borderColor: "transparent",
//     padding: 0,
//     followPointer: true,
//     followTouchMove: false,
//     shadow: false,
//     hideDelay: 0,
//     shared: true,
//     split: false,
//     useHTML: true,
//     zIndex: 100,
//     formatter: () => {},
//     events: {}
//   },
//   time: {
//     useUTC: false
//   },
//   xAxis: {
//     tickWidth: 0,
//     lineWidth: 0,
//     type: "datetime",
//     crosshair: {
//       label: {
//         enabled: true,
//         backgroundColor: "#808A9D",
//         format: "{value:%e %b '%y %H:%M:%S}",
//         shape: "rect"
//       },
//       dashStyle: "dot",
//       snap: true,
//       style: {
//         fontSize: "11px"
//       }
//     },
//     dateTimeLabelFormats: {
//       millisecond: "%l:%M:%s.%L %p",
//       second: "%l:%M:%s %p",
//       minute: "%l:%M %p",
//       hour: "%l:%M %p",
//       day: "%e %b",
//       week: "%e %b",
//       month: "%b '%y",
//       year: "%Y"
//     },
//     top: 10,
//     labels: {
//       style: {
//         color: "#808A9D",
//         fontSize: "11px"
//       },
//       y: 20
//     },
//     minRange: 3000000,
//     id: "datetime-x-axis",
//     events: {
//       // setExtremes: eY() {}
//     },
//     zoomEnabled: true
//   },
//   yAxis: [
//     {
//       gridLineColor: "rgba(0, 0, 0, 0.05)",
//       tickPixelInterval: 60,
//       showFirstLabel: true,
//       showLastLabel: false,
//       crosshair: {
//         zIndex: 50,
//         label: {
//           enabled: true,
//           backgroundColor: "#808A9D",
//           // formatter: formatter() {},
//           shape: "rect",
//           padding: 6,
//           style: {
//             fontWeight: "500",
//             fontSize: "11px"
//           }
//         },
//         dashStyle: "dot",
//         snap: false
//       },
//       labels: {
//         align: "left",
//         // formatter: formatter() {},
//         x: 6,
//         y: 4,
//         style: {
//           color: "#808A9D",
//           fontWeight: "500",
//           fontSize: "11px"
//         },
//         zIndex: 1
//       },
//       title: {},
//       type: "linear",
//       id: "price-y-axis",
//       className: "price-y-axis",
//       top: "0%",
//       height: "85%",
//       plotLines: [
//         {
//           id: "base-price-plotline",
//           value: 0.3714314206951752,
//           dashStyle: "dot",
//           zIndex: 5
//         }
//       ]
//     },
//     {
//       id: "vol-y-axis",
//       top: "85%",
//       height: "15%",
//       visible: false,
//       startOnTick: false,
//       endOnTick: false
//     }
//   ],
//   rangeSelector: {
//     enabled: false
//   },
//   credits: { enabled: false },
//   plotOptions: {
//     areaspline: {
//       animation: false,
//       cropThreshold: 9007199254740991
//     },
//     series: {
//       animation: false,
//       turboThreshold: 1
//     }
//   },
//   navigator: {
//     enabled: true,
//     adaptToUpdatedData: false,
//     maskFill: "rgba(56, 98, 251, 0.08)",
//     outlineColor: "#f5f6f7",
//     height: 40,
//     margin: 36,
//     handles: {
//       width: 14,
//       height: 20
//     },
//     xAxis: {
//       endOnTick: true,
//       lineColor: "#f5f6f7",
//       gridLineColor: "#f5f6f7",
//       tickColor: "#f5f6f7",
//       tickPixelInterval: 100
//     },
//     yAxis: {
//       lineColor: "#f5f6f7",
//       gridLineColor: "#f5f6f7",
//       tickColor: "#f5f6f7"
//     }
//   }
// };

// const priceSerie = {
//   color: '#16c784', // Color of point.
//   fillColor: {
//     linearGradient: {
//       x1: 0,
//       y1: 0,
//       x2: 0,
//       y2: 1
//     },
//     stops: [
//       [0, Highcharts.color('#16c784').setOpacity(0.35).get('rgba')],
//       [0.2, Highcharts.color('#16c784').setOpacity(0.28).get('rgba')],
//       [0.35, Highcharts.color('#16c784').setOpacity(0.2).get('rgba')],
//       [1, Highcharts.color('#16c784').setOpacity(0).get('rgba')]
//     ]
//   },
//   negativeColor: "#EA3943", // negative (phần âm, dưới mức ngưỡng threshold)
//   negativeFillColor: {
//     linearGradient: {
//       x1: 0,
//       y1: 0,
//       x2: 0,
//       y2: 1
//     },
//     stops: [
//       [0, Highcharts.color('#EA3943').setOpacity(0.35).get('rgba')],
//       [0.2, Highcharts.color('#EA3943').setOpacity(0.28).get('rgba')],
//       [0.35, Highcharts.color('#EA3943').setOpacity(0.2).get('rgba')],
//       [1, Highcharts.color('#EA3943').setOpacity(0).get('rgba')]
//     ]
//   },
//   type: "area",
//   id: "price-series",
//   // "yAxis: "price-y-axis",
//   // cropThreshold: 9007199254740991,
//   lineWidth: 2, // line width
//   clip: false,
//   zIndex: 3,
//   showInNavigator: false,
//   marker: {
//     symbol: "circle"
//   },
//   states: {
//     hover: {
//       enabled: true,
//       lineWidthPlus: 0,
//       halo: { size: 5 },
//       marker: { enabled: true }
//     },
//     inactive: {
//       enabled: false
//     }
//   },
//   dataGrouping: { enabled: false },
//   name: "Price",
//   data: [],
//   threshold: null
// };

// const volumnSerie = {
//   type: "column",
//   id: "volume-series",
//   // "yAxis: "vol-y-axis",
//   color: "#EFF2F5",
//   zIndex: 2,
//   showInNavigator: false,
//   showInLegend: false,
//   dataGrouping: { enabled: false },
//   // cropThreshold: 9007199254740991,
//   crisp: false,
//   clip: true,
//   grouping: false,
//   groupPadding: 0.01,
//   pointPadding: 0,
//   states: {
//     hover: {
//       enabled: true,
//       lineWidthPlus: 0,
//       halo: { size: 5 },
//       marker: { enabled: true }
//     },
//     inactive: {
//       enabled: false
//     }
//   },
//   name: "Vol 24h",
//   data: []
// };

// const Dashboard = (props: HighchartsReact.Props) => {
//   const { loadChart } = useDashboard()

//   const [errors, setErrors] = useState([])
//   const [title, setTitle] = useState(null);
//   const [options, setOptions] = useState(optionDefault);
//   const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

//   const convertPointsToData = (points) => {
//     const prices = [];
//     const volumns = [];

//     Object.keys(points).forEach(key => {
//       let pointTime = parseInt(key)*1000;
//       let pointPrice = points[key]['v'][0];
//       let pointVolumn = points[key]['v'][1];

//       prices.push([pointTime, pointPrice]);
//       volumns.push([pointTime, pointVolumn]);
//     });

//     return {
//       prices,
//       volumns
//     };
//   }

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await loadChart({ setErrors });

//       if (response.status.error_code == '0') {
//         const { prices, volumns } = convertPointsToData(response.data.points);

//         const newPriceSerie = {
//           ...priceSerie,
//           data: prices,
//           threshold: prices.length ? prices[0][1] : null
//         };

//         const newVolumnSerie = {
//           ...volumnSerie,
//           data: volumns
//         };

//         setOptions({
//           ...options,
//           series: [newPriceSerie]
//         });
//       } else {
//         setErrors(response.status.error_message);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log('3:', options);

//   return (
//     <>
//       <p>{ title }</p>
//       { options && options.series && options.series.length ? <HighchartsReact
//           highcharts={Highcharts}
//           options={options}
//           ref={chartComponentRef}
//           {...props}
//         /> : null
//       }
//     </>
//   );
// }

const Dashboard = () => {
  return (
    <>
      <p>Dashboard</p>
    </>
  )
}

export default Dashboard;
