import React, { useContext } from 'react';
import propTypes from 'prop-types';
import  { BsCartPlusFill } from 'react-icons/bs';

import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';
import AppContext from '../../Context/AppContext';

function ProductCard({ data }) {

  const {title, thumbnail, price} = data;

  const { cartItens, setCartItens } = useContext(AppContext);

  const handleAddCart = () => setCartItens([ ...cartItens, data ]);

  return(
    <section className="product-card">
      
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
        alt="product" 
        className="card__image" 
      />

      <div className="card__infos">
        <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card-title">{title}</h2>
      </div>

      <button 
        type="button"
        className="bt__add-cart"
        onClick={ handleAddCart }
      >
        <BsCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
