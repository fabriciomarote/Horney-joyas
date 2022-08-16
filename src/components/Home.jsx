import React from 'react';
import '../styles/Home.css';
import Navbar from './Navbar';
import { getAllTake3 } from '../api';
import SelectionModel from './SelectionModel';
import Api from '../api2';
import { useState, useEffect } from 'react';


const Home = () => {

    const allProducts = getAllTake3();

    const [data, setData] = useState();

    useEffect(() => {
        Api.getData()
        .then(response => {
          console.log(response.data.values);
          setData(response.data.result)
          console.log(data);
        }).catch(error => {
          console.log(error)
        });  
  }, [data]);
  
    return (
        <>
            <div className="home-container">
                <div className="navbar-home">
                   <Navbar/>
                </div> 
                <div className="home-content">  
                    <div className='home-selections-box'>
                        {allProducts.map((product, idx) => {
                            return <SelectionModel key={product.name} selection={product} />
                        })}
                    </div>
                </div>
            </div>
        </>  
    );
  }
  
  export default Home;