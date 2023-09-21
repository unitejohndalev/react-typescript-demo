
import { createContext } from 'react'
import { theme } from './theme'

type ThemeContextProvideProps = {
    children: React.ReactNode
}

export const ThemeContext = createContext(theme)

const ThemeContextProvider = ({children} : ThemeContextProvideProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextProvider