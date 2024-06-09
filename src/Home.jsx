import Banner from "./Banner/Banner";
import Category from "./Catagori/Category";
import Featured from "./Catagori/Featured/Featured ";

 
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
            <h1>This is a Home page</h1>
        </div>
    );
};

export default Home;