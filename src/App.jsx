import va from './assets/ai (1).png'

import './App.css'
import { use, useContext } from 'react'
import { DataContext } from './context/UserContext.Jsx'
import spea from './assets/speak.gif'
import respon from './assets/aiVoice.gif'
const App = () => {
   
   let {recognition,speaking,setSpeaking,promt,response,} = useContext(DataContext)




  return (
    <div className='main'>
      <img src={va} id='background' />
      <span id='text'>i am Ayra , Your Advance Virtual Assistant </span>
     {!speaking ? <button id='btn' onClick={()=>{
        setSpeaking(true)
        recognition.start()

        }}>Click Here</button> 
        : 
        <div className='fix'>
          {!response ?<img src={spea} alt="" id='speak' /> :<img src={respon} alt="" id='speak' />}
        <p id='p'>{promt}</p>
        </div>
         }
      
      
     

    </div>

    
  )
}

export default App