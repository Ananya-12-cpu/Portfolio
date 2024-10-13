// pages/index.js
'use client'
import BarChart from '../components/BarChart';

function SkillPage() {
  // Data for the chart
  const data = {
    labels: ['React Js', 'Next Js', 'JavaScript','TypeScript', 'HTML', 'CSS','Bootstrap'],
    datasets: [
      {
        label: 'My Skills',
        data: [10, 10, 8,5, 8, 5,9],
        backgroundColor: '#5a67d0',
        borderColor: '#5a67d0',
        borderWidth: 1,
        
      },
    ],
  };

  // Chart options
  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top',
  //     },
  //     title: {
  //       display: true,
  //       text: 'Monthly Sales Chart',
  //     },
  //   },
  // };

  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
 <div className='h-[70%] w-[70%]'>
      {/* <h1>Bar Chart Example</h1> */}
      <BarChart data={data}
      
      //  options={options}
        />
    </div>
    </div>
   
  );
}
export default SkillPage