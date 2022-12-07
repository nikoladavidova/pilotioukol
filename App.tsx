import React from 'react';
import './App.css';
import airports from './airports';
import { useState } from 'react';


interface airportstype{
  id:any;
  name:any;
  gpscode:any;
  municipality:any;
  code:any;
  image:any;
  long:any;
  lat:any;
}

interface coordinates{
  long:any;
  lat:any;
}



function Coordinatescard({ long, lat, }: coordinates) {


    const lalert=()=>{
        alert(long);
    }
    const laalert=()=>{
        alert(lat);
    }

  return (
      <div className={"divsouradnice"}>
        <p onClick={lalert}>Long:{long}</p>
          <p onClick={laalert}>Lat:{lat}</p>
     </div>
  );
}





function Airportcard({ id, name, gpscode, municipality, code, image,long, lat}: airportstype) {
  const [state, setState] = useState(false);
  const showHide=()=>{
    setState(!state);
  }
  return (
      <div>
        <table>
          <tr>
            <td>{name}</td>
            <td>{id}</td>
           <td colSpan={2}><div className={"divsouradnice"} onClick={showHide}>
               {state ? <Coordinatescard long={long} lat={lat}/>:"souradnice"}
           </div></td>
            <th><img src={image}/></th>
          </tr>
          <tr>
            <td>{code}</td>
            <td>{municipality}</td>
          </tr>
        </table>
      </div>);}



export default function App() {
  return (
      <main>

          <h1>Všechna letiště</h1>
        <div>
          {airports.map(({id, name,gpscode,municipality,code,image,long, lat}) =>
              <Airportcard id={id} name={name} gpscode={gpscode} municipality={municipality} code={code}
             image={image} long={long} lat={lat}/>)}


        </div>
      </main>
  );
}
