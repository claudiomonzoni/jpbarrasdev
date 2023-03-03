import  { useState } from 'react';
import Card from './Card';


export default function Boton() {

    const [cuentame, setCuentame] = useState(0)
  return (

    <div>
        <button onClick={() => setCuentame(cuentame + 1)}>    
        Boton aqui {cuentame}
        </button>

        <Card></Card>
        </div>
  )
}
