import { useState, useEffect } from 'react'
import MenuListTtal from './components/MenuListTotal/MenuListTtal'
import DisplayColor from './components/DisplayColor/DisplayColor'
import s from './style.module.css'

import './App.css'

function App() {
  const [colorActual, setColorActual] = useState('')
  const onMenuListItemClick = (color) => {
    setColorActual(color)
  }

  return (

    <div>
      <h1>Cambio de colores</h1>
      <div className={s.workspace}>
        <MenuListTtal
          color={colorActual}
          onItemClick={onMenuListItemClick}
        />
        <DisplayColor
          onItemClick={onMenuListItemClick}
          color={colorActual}
        />
      </div>
    </div>

  )
}

export default App
