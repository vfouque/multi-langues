import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import SpainFlag from '../../assets/spain.svg'
import './ToggleLangs.css'

export default function ToggleLangs() {
   return (
      <div className='container-langs'>
         <img src={FrenchFlag} alt="FrenchFlag" />
         <img src={EnglishFlag} alt="EnglishFlag" />
         <img src={SpainFlag} alt="SpainFlag" />
      </div>
   )
}
