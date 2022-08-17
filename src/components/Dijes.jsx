import Navbar from './Navbar';
import SelectionModel from './SelectionModel';
import { getDijes } from '../api';

const Dijes = () => {

    const dijes = getDijes()

    return (
      <>
        <div className="container">
          <div className="rings-content">
            <div className='selections-box'>
              {dijes.map((dije, idx) => {
                return <SelectionModel key={dije.name} selection={dije} product={"dijes"}/>
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Dijes;