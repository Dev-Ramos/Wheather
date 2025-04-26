'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Sun, Moon } from "lucide-react"
import { useState } from "react"

const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [temperatureUnit, setTemperatureUnit] = useState('C°')
  const toggleTheme = () => {
    setDarkMode((prev)=> !prev)
  }
  const handleTemperatureUnit = (unit: string) => {
    setTemperatureUnit(unit)
  }
  return (
    <header className="flex items-center w-screen mx-auto">
        <div className="flex flex-row gap-x-1 justify-self-start">
          <Input placeholder="Qual sua cidade?" className="w-full"/>
          <Button variant="outline">
            <Search className="h-2 w-2 hover: cursor-pointer"/>  
          </Button>
        </div>
      <div className="flex flex-row gap-x-2 w-1/5 ml-4">
        <div className="flex flex-row gap-x-2 items-center justify-center border border-gray-400 py-1 px-2 rounded-sm">
          <button
            type="button"
            onClick={()=> handleTemperatureUnit('C°')}
            className={`text-gray-500 hover:text-gray-900 hover:cursor-pointer ${temperatureUnit === 'C°' && 'font-semibold text-gray-800'}`}>
            C°
          </button>
          <p className="text-gray-400">|</p>
          <button
            type="button"
            onClick={()=> handleTemperatureUnit('F°')}
            className={`text-gray-500 hover:text-gray-900 hover:cursor-pointer ${temperatureUnit === 'F°' && 'font-semibold text-gray-800'}`}>
            F°
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={toggleTheme}
            className="text-gray-500 hover:text-gray-900 hover:cursor-pointer border border-gray-400 p-2 rounded-md">
            <span>
              {darkMode ? <Moon className="h-4 w-4 hover:cursor-pointer"/> : <Sun className="h-4 w-4 hover:cursor-pointer"/>}
            </span>
          </button>
        </div>
        </div>
      </header>
  )
}

export default Header
