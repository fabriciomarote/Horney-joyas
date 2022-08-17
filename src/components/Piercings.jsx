import Navbar from './Navbar';
import SelectionModel from './SelectionModel';
import { getPiercings } from '../api';

const Piercings = () => {

    const piercings = getPiercings()

    const image = "https://drive.google.com/drive/u/0/folders/1Skzq_LULLWfELQqDWmCka7VRHESxKYD5"

    return (
      <>
        <div className="container">
          <div className="rings-content">
            <div className='selections-box'>
              {piercings.map((piercing, idx) => {
                return <SelectionModel key={piercing.name} selection={piercing} product={"piercings"}/>
              })}
            </div>
            <img className='image' src={image} alt="imagen"></img>
          </div>
        </div>
      </>
    );
  }
  
  export default Piercings;