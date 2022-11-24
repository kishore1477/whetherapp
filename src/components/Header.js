import React from 'react'

const Header = () => {
  return (
    <header className="text-gray-600 body-font  md:shadow-md">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src='https://cdn.jim-nielsen.com/ios/512/weather-2019-02-07.png' className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full"></img>
       
        <span className="ml-3 text-xl">Whether App</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        
      </nav>
      
    </div>
  </header>
  
  )
}

export default Header