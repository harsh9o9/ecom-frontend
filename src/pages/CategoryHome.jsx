import Category from "./Categories";

const CategoryHome = () => {
    const { categoryData, setCategoryData } = useState({});
    const { categoryDataLoading, setCategoryDataLoading } = useState(false);

    useEffect(() => {
        setCategoryDataLoading(false);
        axios
            .get(GET_CATEGORIES)
            .then((response) => {
                console.log(response.data);

                setCategoryData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCategoryDataLoading(false);
            });
    }, []);

    return <div>
        {categoryDataLoading ? (
            <p>Loading</p>
        ) : (categoryData.map(obj,index) => {
            return (<Category key={index} props={obj} />)
        })}
        
    </div>;
};

export default CategoryHome;
