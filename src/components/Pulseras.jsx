import Navbar from './Navbar';
import SelectionModel from './SelectionModel';
import { getPulseras } from '../api';

const Pulseras = () => {

    const pulseras = getPulseras()
      
    return (
      <>
        <div className="rings-container">
          <Navbar/>
          <div className="rings-content">
            <div className='selections-box'>
              {pulseras.map((pulsera, idx) => {
                return <SelectionModel key={pulsera.name} selection={pulsera} product={"pulseras"}/>
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Pulseras;