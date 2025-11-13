import React, { createContext, useState } from 'react'

import data from "../data/data.json"

    export const AppContext = createContext()


function AppContextProvider({children}) {


    const [lang,setLang] = useState("tr")

     let langData = data[lang]
     let skillsData = data["skill"]

  return (
  <AppContext.Provider value={{langData,skillsData,lang,setLang}}>
   {children}
 </AppContext.Provider>
  )
}

export default AppContextProvider