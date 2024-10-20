import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_PRODUCT } from '../constants/api';

const Product = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({});
    const [productDataLoading, setProductDataLoading] = useState(false);

    useEffect(() => {
        setProductDataLoading(true);
        axios
            .get(`${GET_PRODUCT}?id=${id}`)
            .then((response) => {
                setProductData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setProductDataLoading(false);
            });
    }, []);

    return (
        <table className="w-full rounded-md text-left text-sm text-gray-400">
            <thead className="text-xs uppercase text-gray-400">
                <tr className="border-b border-t border-gray-700">
                    <th scope="col" className="bg-gray-800 px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Details
                    </th>
                </tr>
            </thead>
            <tbody>
                {productDataLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <tr className="border-b border-gray-700">
                            <th
                                scope="row"
                                className="whitespace-nowrap bg-gray-800 px-6 py-4 font-medium text-white">
                                Product ID
                            </th>
                            <td className="px-6 py-4">
                                {productData?.product?.id}
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th
                                scope="row"
                                className="whitespace-nowrap bg-gray-800 px-6 py-4 font-medium text-white">
                                Product name
                            </th>
                            <td className="px-6 py-4">
                                {productData?.product?.name}
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th
                                scope="row"
                                className="whitespace-nowrap bg-gray-800 px-6 py-4 font-medium text-white">
                                Category name
                            </th>
                            <td className="px-6 py-4">
                                {productData?.category?.name}
                            </td>
                        </tr>
                    </>
                )}
            </tbody>
        </table>
    );
};

export default Product;
