import React from "react";   
import '../styles/SelectionModel.css';

const SelectionModel = (props) => {

    const { selection, product } = props

    return (
      <div className="selectionModel-container">
            <div className="image-selection">
                <img className='image' src={selection.mainImage} alt="imagen"></img>
            </div>
            <div className='box-description-selectionModel'>
                <div className='box-description'>
                    <div className="name-selection">  
                        <p className="selection-name">{selection.name}</p>
                    </div>
                    <div className="precio-selection">
                        ${selection.price}
                    </div>   
                </div>
                <div className="link-selection">
                    <div className='buttons'>
                        <a type="button" className="link" id="modal" data-toggle="modal" data-target="#exampleModalCenter">ver más </a>
                    </div>    
                </div>
            </div>
      </div>
    );
  };
  
  export default SelectionModel;