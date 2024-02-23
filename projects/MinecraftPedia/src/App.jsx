import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Box from '@mui/material/box'

import ActionAreaCard from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Box className='main' sx={{}}>
        <header>
          <h1>MinecraftPedia</h1>

        </header>
        <Box className='content'>
          <ActionAreaCard _urlImg={"https://minecraft.wiki/images/Invicon_Acacia_Boat.png"} _name={"Acacia Boat"} _rarity={"Common"} _renewable={true} _maxStack={1}></ActionAreaCard>
        </Box>
      </Box>
    </>
  )
}

export default App
