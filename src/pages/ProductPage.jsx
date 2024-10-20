import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_CATEGORIES, GET_PRODUCT } from '../constants/api';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaRegCopy } from 'react-icons/fa';
import { fetchData } from '../utils/apiUtils';

const ProductPage = () => {
    const { id } = useParams();
    const [productData, setProductData] = useState({});
    const [productDataLoading, setProductDataLoading] = useState(false);
    const [categoriesData, setCategoriesData] = useState([]);
    const [categoriesDataLoading, setCategoriesDataLoading] = useState(false);
    const [editData, setEditData] = useState(false);
    const [productName, setProductName] = useState('');
    const handleProductNameChange = (event) => {
        setProductName(event.target.value);
    };

    useEffect(() => {
        const fetchProductData = () => {
            const productUrl = `${GET_PRODUCT}?id=${id}`;
            fetchData(
                productUrl,
                (data) => {
                    setProductData(data);
                    setProductName(data?.product?.name || '');
                },
                setProductDataLoading,
                'Error fetching product data:'
            );
        };
        const fetchCategoriesData = () => {
            fetchData(
                GET_CATEGORIES,
                () => {
                    setCategoriesData;
                },
                setCategoriesDataLoading,
                'Error fetching categories data:'
            );
        };

        fetchProductData();
        fetchCategoriesData();
    }, [id]);

    return (
        <div>
            {productDataLoading ? (
                <p>Loading...</p>
            ) : (
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
                        <tr className="border-b border-gray-700">
                            <th
                                scope="row"
                                className="whitespace-nowrap bg-gray-800 px-6 py-4 font-medium text-white">
                                Product ID
                            </th>
                            <td className="flex items-center justify-between gap-4 px-6 py-4">
                                {productData?.product?.id}
                                <CopyToClipboard
                                    text={productData?.product?.id}>
                                    <button>
                                        <FaRegCopy />
                                    </button>
                                </CopyToClipboard>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th
                                scope="row"
                                className="whitespace-nowrap bg-gray-800 px-6 py-4 font-medium text-white">
                                Product name
                            </th>
                            <td className="flex items-center justify-between gap-4 px-6 py-4">
                                {productData?.product?.name}
                                <CopyToClipboard
                                    text={productData?.product?.name}>
                                    <button>
                                        <FaRegCopy />
                                    </button>
                                </CopyToClipboard>
                            </td>
                        </tr>
                        <tr className="border-b border-gray-700">
                            <th
                                scope="row"
                                className="whitespace-nowrap bg-gray-800 px-6 py-4 font-medium text-white">
                                Category name
                            </th>
                            <td className="flex items-center justify-between gap-4 px-6 py-4">
                                {productData?.category?.name}
                                <CopyToClipboard
                                    text={productData?.category?.name}>
                                    <button>
                                        <FaRegCopy />
                                    </button>
                                </CopyToClipboard>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
            <div className="ml-4 mt-6">
                <button
                    type="button"
                    className="mb-2 me-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800"
                    onClick={() => {
                        setEditData(!editData);
                    }}>
                    Edit
                </button>
                <button
                    type="button"
                    className="mb-2 me-2 ml-4 rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-900">
                    Delete
                </button>
            </div>
            {editData && (
                <form className="w-96 p-4">
                    <label
                        htmlFor="product_name"
                        className="mb-2 block text-sm font-medium text-white">
                        Enter new product name
                    </label>
                    <input
                        type="text"
                        id="product_name"
                        className="block w-full rounded-lg border border-gray-600 bg-gray-700 p-2.5 text-sm text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                        value={productName}
                        onChange={handleProductNameChange}
                        required
                    />

                    <button
                        type="submit"
                        className="mb-2 me-2 mt-4 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-800">
                        Submit
                    </button>
                </form>
            )}
        </div>
    );
};

export default ProductPage;
