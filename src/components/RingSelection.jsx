import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { getRings, getByName } from '../api';
import '../styles/Selection.css';

const RingSelection = () => {

    const { nombre } = useParams();

    console.log(nombre)

    const rings = getRings()

    const selection = getByName(rings, nombre)

    console.log(selection)

    return (
        <>
            <div className="selection-container">
                <Navbar/>
                <div className="selection-content col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div>
                        {selection.name}
                        ${selection.price}
                        {selection.description}
                        {selection.type}
                        <img className='' src={selection.mainImage} alt="imagen"></img>
                    </div>
                </div>
            </div>
        </> 
    );
  }
  
  export default RingSelection;
  