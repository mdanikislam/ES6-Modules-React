import './Sunglasses.css'
const Sunglass = ({sunglass}) => {
    const{name, brand, price} = sunglass;
    return (
        <div className='sunglass-info'>
            <h3><span>Name :</span> {name}</h3>
            <h3><span>Brand :</span> {brand}</h3>
            <h4><span>Price : </span>{price}</h4>
            
        </div>
    );
};

export default Sunglass;