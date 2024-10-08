import Container from "@/components/common/Container";
import PricingLeftCard from "./PricingLeftCard";
import PricingService from "./PricingService";

const Pricing = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col md:flex-row md:gap-0 gap-8 lg:gap-8">
          <PricingLeftCard />
          <PricingService />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
