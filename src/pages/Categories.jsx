import axios from 'axios';
import { GET_CATEGORIES } from '../constants/api';

const Category = (props) => {
    /* 
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
    */

    return (
        <div>
            <p>props.name</p>
        </div>
    );
};

export default Category;
