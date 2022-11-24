import React, {useState} from 'react'
import axios from 'axios'
import HandlewhetherData from './HandlewhetherData'
const Home = () => {
const [formdata, setFormdata] = useState({city:''})
const [whetherData, setWhetherData] = useState([])
 const [cond, setCond] = useState(false)
 const handleformSubmit = async(e)=>{
  setCond(false)
e.preventDefault()
const  {city} =  formdata
console.log("city name", city)
const res =  await axios.get(`https://weatherdbi.herokuapp.com/data/weather/${city}`)
console.log("Response is..", res)
const whether_data = res.data
console.log("whether_data", whether_data)
setWhetherData(whether_data)
setCond(true)
setFormdata({city:''})

 }
  return (
    <div className='container px-8'>
         <form> 
      <div className="mt-3 flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
  <div className="relative flex-grow w-full">
 
    <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
      City Name
    </label>
    <input
      type="text"
      id="full-name" 
      placeholder='Enter city name'
      name="city"
      value={formdata.city}
      onChange ={(e)=> setFormdata({city:e.target.value})}
      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-transparent focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
   
  </div>
  
  <button onClick={handleformSubmit} className="text-white bg-blue-500 border-0 py-2 px-4 md:px-8 focus:outline-none hover:bg-blue-600 rounded md:text-lg bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
    Search
  </button>
  
</div>
</form>
{cond? <HandlewhetherData  whetherData = {whetherData} city ={formdata && formdata.city}/>:<div className='flex  justify-center h-screen'> <h1 className='  mt-7 p-5 '>Enter a city name to get the whether  information of that city</h1></div>
   }
  
  </div>

  )
}

export default Home