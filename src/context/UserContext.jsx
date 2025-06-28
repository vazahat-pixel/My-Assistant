import React, { createContext, useState } from 'react'
import { GenrateapiResponse } from '../Gemini';
export const DataContext = createContext();

const UserContext = ({children}) => {

    let [speaking,setSpeaking] = useState(false)
    let [promt,setPrompt] = useState("listening....")
    let [response,setResponse] = useState(false)
        function Speak(text){
         let msg = new SpeechSynthesisUtterance(text)
            msg.volume = 1;
            msg.rate = 1;
            msg.pitch = 1;
            msg.text = text;
            msg.lang = "en-US";
            window.speechSynthesis.speak(msg);
        }
            

async function AiResponse(prompt) {
  const result = await GenrateapiResponse(prompt);
  console.log("🤖 Gemini says:", result);
  Speak(result);
}


         

    


      let speakRecognition =window.SpeechRecognition || window.webkitSpeechRecognition;
      let recognition = new speakRecognition();

      recognition.onresult=(eveent)=>{
        let currentIndex = eveent.resultIndex;
        let transcript = eveent.results[currentIndex][0].transcript;
        setPrompt(transcript)
        AiResponse(transcript)
        Speak(transcript)
        setResponse(true)
        console.log(transcript)
        setTimeout(() => {
         setSpeaking(false)


        }, 2000);

      }

    let value = {
        recognition,
        speaking,
        setSpeaking,
        promt,
        setPrompt,
        response

        
        
    }
   

  return (
    <div>
    <DataContext.Provider value={value}>
    {children}
    </DataContext.Provider>
    </div>
  )
}

export default UserContext