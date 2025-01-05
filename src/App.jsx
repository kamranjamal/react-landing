

import { FaPaperPlane } from 'react-icons/fa'
import Card from './compoenents/Card'
import HeroSetion from './compoenents/HeroSetion'
import Navbar from './compoenents/Navbar'
import { FaFileContract } from "react-icons/fa";
import { FcGoodDecision } from "react-icons/fc";
import Pravicy from './compoenents/Pravicy';
import Footer from './compoenents/Footer';

function App() {
  const data=[
    {
      icon:<FaPaperPlane/>,
      title:'Planning your Future',
      des:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas'
    },
    {
      icon:<FaFileContract />,
      title:'Contract with us',
      des:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas'
    },
    {
      icon:<FcGoodDecision />,
      title:'Best Result Guarantee',
      des:'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quas'
    }
  ]


  return (
    <main className=' bg-gray-800 text-gray-100 pb-3'>
      <Navbar/>
      <HeroSetion/>
      <div className='flex justify-center'>
      {
        data.map((item,ind)=>{
          return(
            <Card key={ind} icon={item.icon} title={item.title} des={item.des}/>
          )
        })
      }
      
      </div>
      <Pravicy/>
      <div className='mt-20'>
      <Footer/>
      </div>
    
    </main>
  )
}

export default App
