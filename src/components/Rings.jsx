import Navbar from './Navbar';
import SelectionModel from './SelectionModel';
import { getRings, getHoops } from '../api';

import { useState, useEffect } from 'react';

const Rings = () => {

  const [value, setValue] = useState(0);
  const [render, setRender] = useState("");
  const rings = getRings();
  const hoops = getHoops()

  const [data, setData] = useState();
  
  const clickHandler = (value) => {
    setValue(value);
  };

  const changeState = () => {
      if (value === 0) {
        setRender("value1");
      } else if (value === 1) {
        setRender("value2");
      } else {
        setRender("value3");
      } 
  }

    const renderBy = () => {
        if (render === "value1") {
          return(
            <>
              {hoops.map((ring, idx) => {
                return <SelectionModel key={ring.name} selection={ring} product={"anillos"}/>
              })}
            </>
          );
        } else if (render === "value2") {
          return(
            <>
              {hoops.map((ring, idx) => {
                return <SelectionModel key={ring.name} selection={ring} />
              })}
            </>
          );
        } else if (render === "value3"){
          return(
            <>
              {hoops.map((ring, idx) => {
                return <SelectionModel key={ring.name} selection={ring} />
              })}
            </>
          );
        }
    }

    return (
      <>
        <div className="rings-container">
          <div className="navbar-home">
            <Navbar/>
          </div> 
          <div className="rings-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
            
            <div className='selections-box col-lg-12 col-md-12 col-sm-12 col-xs-12'>
              {rings.map((ring) => {
                  return <SelectionModel key={ring.id} selection={ring} product={"anillos"}/>
                })}
            </div>
          </div>  
        </div>
      </>
    );
  };
  
  export default Rings;

  /*
    <div className='buttons-box col-lg-12 col-md-12 col-sm-12 col-xs-12"'>
      <select className='select-btn' defaultValue={"value1"} >
        <option onClick={() => clickHandler(0)} defaultValue="value1" selected>Todos los productos</option>
        <option onClick={() => clickHandler(1)} value="value2">Precio menor a mayor</option>
        <option onClick={() => clickHandler(2)} value="value3">Precio mayor a menor</option>
      </select>
    </div>
  */
  