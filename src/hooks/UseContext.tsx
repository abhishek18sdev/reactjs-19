import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext("");
const UseContext = ({children} :any ) => {
  return (
    <ThemeContext.Provider value='test'>
    {children}
    </ThemeContext.Provider>
  )
}


export const Child = () => {
    const value = useContext(ThemeContext)
  return (
    <div>Child : {value}</div>
  )
}


export default UseContext