import './Watch.css'
const Watch = ({watch}) => {
    const {image, name, brand, price} = watch;
    return (
        <div className='watch-container' >
        <img className="watch-img" src={image} alt="" />
          <h3>Watch : {name} </h3>
          <h3>Brand : {brand}</h3>  
          <h4>Pice : {price}</h4>
        </div>
    );
};

export default Watch;