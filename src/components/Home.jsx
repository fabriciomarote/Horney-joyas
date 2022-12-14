import React from 'react';
import { useState, useEffect } from 'react';
import { getAllTake3 } from '../api';
import SelectionModel from './SelectionModel';
import Api from '../api2';
import '../styles/Home.css';

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
  }, []);
  
    return (
        <>
            <div className="container">
                <div className="content">  
                    <div className='selections-box'>
                        {allProducts.map((product) => {
                            return <SelectionModel key={product.id} selection={product} />
                        })}
                    </div>
                </div>
            </div>
        </>  
    );
  }
  
  export default Home;