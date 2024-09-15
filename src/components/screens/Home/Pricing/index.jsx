import Container from "@/components/common/Container";
import PricingLeftCard from "./PricingLeftCard";
import PricingService from "./PricingService";

const Pricing = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-8">
          <PricingLeftCard />
          <PricingService />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
