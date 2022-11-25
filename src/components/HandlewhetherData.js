import React from 'react'


const HandlewhetherData = (props) => {
  const  {whetherData} = props
 
    
   return (
    <div className=''>
<div className='flex items-center'>
<h1 className='p-5 md:text-3xl '>Current Codition of <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-violet-500 mt-1 '> {whetherData.name} , {whetherData.sys.country} </span></h1>
</div>
<section className="text-gray-600 body-font">
    <div className="container px-5  mx-auto flex flex-wrap">
      <div className="flex flex-wrap -m-4">
        <div className="p-4   md:w-full">
          <div className="flex rounded-lg p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              
            <img alt='whether-img' className='rounded-full' src='https://img.freepik.com/premium-vector/outline-weather-icon-set-transparent-forecast-icons-outline-weather-pictogram-collection-cloud-sun-rain-wind-symbol_570901-29.jpg?w=2000'></img>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                 {whetherData.weather.description}
              </h2>
              <p className="leading-relaxed text-base">
                 <div> Tempreture  : <b>{whetherData.main.temp} °C </b> <br/> Pressure : <b> {whetherData.main.pressure} </b> hPa  <br/> humidity : <b> {whetherData.main.humidity}</b>  <br/>Wind    : <b> {whetherData.wind.speed} meter/sec </b>, wind direction : <b> {whetherData.wind.deg} ° </b>  </div>
              </p>
           
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
  {/* Navigation */}


 



   
    </div>
  )
}

export default HandlewhetherData