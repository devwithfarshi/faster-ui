import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { services } from "@/data/services.data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="pt-12 lg:pt-0">
      <Container>
        <Heading text="What We do" />
        <div className="mt-8 space-y-4 lg:space-y-0 lg:grid  lg:grid-cols-4 gap-4 xl:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
