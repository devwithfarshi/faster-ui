import ReviewSectionCard from "@/components/common/ReviewSectionCard";
import Banner from "@/components/screens/Home/Banner";
import Portfolio from "@/components/screens/Home/Portfolio";
import Services from "@/components/screens/Home/Services";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Portfolio />
      <ReviewSectionCard />
      <div className="mb-10"></div>
    </>
  );
};
export default Home;
