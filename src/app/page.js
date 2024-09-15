import Banner from "@/components/screens/Home/Banner";
import Portfolio from "@/components/screens/Home/Portfolio";
import Services from "@/components/screens/Home/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Portfolio />
      <div className="mb-10"></div>
    </>
  );
};
export default Home;
