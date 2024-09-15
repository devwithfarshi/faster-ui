import ReviewSectionCard from "@/components/common/ReviewSectionCard";
import Banner from "@/components/screens/Home/Banner";
import ContactUs from "@/components/screens/Home/Contact";
import FAQ from "@/components/screens/Home/FAQ";
import Portfolio from "@/components/screens/Home/Portfolio";
import Pricing from "@/components/screens/Home/Pricing";
import Services from "@/components/screens/Home/Services";
import Footer from "@/components/shared/Footer";

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <Portfolio />
      <ReviewSectionCard />
      <Pricing />
      <FAQ />
      <div className="mt-12 lg:mt-[111px] h-px bg-borderAccent"></div>

      <section className="pt-12 lg:pt-[124px] 2xl:pb-[120px] relative after:content-[''] after:absolute after:top-[5%]  2xl:after:top-0 after:left-0 after:h-full after:w-full after:bg-[url('/images/footer-bg.png')] after:bg-no-repeat after:bg-cover after:-z-10 ">
        <ContactUs />
        <Footer />
      </section>
    </>
  );
};
export default Home;
