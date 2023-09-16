import React, { useEffect, useState } from 'react';
import './Products.css';
import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loaging';


function Products(){

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchProducts('iphone').then((response) => {
      setProducts(response);
      setLoading(true);
      
    });

  }, []);

  return(

    ( loading && <Loading /> ) || (
      <section className="products container">
        {
          products.map((product) => <ProductCard key={product.id} data={product}/>)
        }
      </section> )
  );
}

export default Products;
