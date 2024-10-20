import axios from 'axios';
import ProductCard from '../components/ProductCard';
import { GET_PRODUCTS } from '../constants/api';
import { useEffect, useState } from 'react';

const Home = () => {
    const [productsData, setProductsData] = useState({});
    const [productsDataLoading, setProductsDataLoading] = useState(false);

    useEffect(() => {
        setProductsDataLoading(true);
        axios
            .get(GET_PRODUCTS)
            .then((response) => {
                console.log(response.data);

                setProductsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setProductsDataLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-wrap justify-evenly gap-8">
            {productsDataLoading ? (
                <p>loading...</p>
            ) : (
                productsData?.products?.map((productData, index) => {
                    return (
                        <ProductCard key={index} productData={productData} />
                    );
                })
            )}
        </div>
    );
};

export default Home;
