import '../styles/SelectionModel.css';

const SelectionModel = (props) => {

    const { selection, product } = props

    return (
      <div className="selectionModel-container">
            <div className="image-selection">
                <a href={`/${product}/${selection.name}`}><img className='image' src={selection.mainImage} alt="imagen"></img></a>
            </div>
            <div className='box-description-selectionModel'>
                <div className='box-description'>
                    <div className="name-selection">  
                        <a href={`/${product}/${selection.name}`} className="selection-name">{selection.name}</a>
                    </div>
                    <div className="precio-selection">
                        ${selection.price}
                    </div>   
                </div>
                <div className="link-selection">
                    <a href={`/${product}/${selection.name}`} className="link">ver más </a>
                </div>
            </div>
      </div>
    );
  };
  
  export default SelectionModel;