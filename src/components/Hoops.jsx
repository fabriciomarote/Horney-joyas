import Navbar from './Navbar';
import SelectionModel from './SelectionModel';
import { getHoops } from '../api';

const Hoops = () => {

    const hoops = getHoops()
    
    return (
      <>
      <div className="container">
        <div className="hoops-content">
          <div className='selections-box'>
            {hoops.map((hoop, idx) => {
              return <SelectionModel key={hoop.name} selection={hoop} product={"aritos"}/>
            })}
          </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Hoops;