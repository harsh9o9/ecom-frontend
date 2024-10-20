import axios from 'axios';

export const fetchData = async (url, setData, setLoading, errorMessage) => {
    setLoading(true);
    try {
        const response = await axios.get(url);
        setData(response.data);
    } catch (error) {
        console.error(errorMessage, error);
        alert(errorMessage, error);
    } finally {
        setLoading(false);
    }
};
