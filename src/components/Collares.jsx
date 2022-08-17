import Navbar from './Navbar';
import SelectionModel from './SelectionModel';
import { getCollares } from '../api';

const Collares = () => {

    const collares = getCollares()

    return (
      <>
        <div className="container">
          <div className="rings-content">
            <div className='selections-box'>
              {collares.map((collar, idx) => {
                return <SelectionModel key={collar.name} selection={collar} product={"collares"}/>
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Collares;