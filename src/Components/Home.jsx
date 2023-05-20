import About from "./About";
import Banner from "./Banner";
import Footer from "./Footer";
import Gellery from "./Gellery";
import Navbar from "./Navbar";
import Roadmap from "./Roadmap";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Gellery></Gellery>
            <Roadmap></Roadmap>
            <Footer></Footer>
        </div>
    );
};

export default Home;