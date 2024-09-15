import Image from "next/image";
import PortfolioHeader from "./PortfolioHeader";

const Portfolio = () => {
  return (
    <section className=" min-h-dvh mt-[130px] bg-[url('/images/portfolio/bg-portfolio-shape.svg')] bg-no-repeat bg-top">
      <PortfolioHeader />
    </section>
  );
};

export default Portfolio;
