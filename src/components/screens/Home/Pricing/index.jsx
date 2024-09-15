import Container from "@/components/common/Container";
import PricingLeftCard from "./PricingLeftCard";
import PricingService from "./PricingService";

const Pricing = () => {
  return (
    <section>
      <Container>
        <div className="flex gap-8">
          <PricingLeftCard />
          <PricingService />
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
