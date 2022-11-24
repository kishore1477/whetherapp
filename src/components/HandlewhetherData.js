import React from 'react'

const HandlewhetherData = (props) => {
    const  {whetherData , city} = props
    console.log("whetherData", whetherData)
    console.log("city", city)
   return (
    <div className=''>
<div className='flex items-center'>
<h1 className='p-5'>Current Codition of <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-violet-500 mt-1 '> {whetherData.region} </span></h1>
</div>
<section className="text-gray-600 body-font">
    <div className="container px-5  mx-auto flex flex-wrap">
      <div className="flex flex-wrap -m-4">
        <div className="p-4   md:w-full">
          <div className="flex rounded-lg p-8 sm:flex-row flex-col">
            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
              
            <img src={`${whetherData.currentConditions.iconURL}`}></img>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                 {whetherData.currentConditions.dayhour}
              </h2>
              <p className="leading-relaxed text-base">
                 <div> Tempreture {whetherData.currentConditions.temp.c} celsius , {whetherData.currentConditions.temp.f}</div>
              </p>
              <a className="mt-3 text-blue-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  </section>
    </div>
  )
}

export default HandlewhetherData