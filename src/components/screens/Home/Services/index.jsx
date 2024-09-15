import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { services } from "@/data/services.data";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section>
      <Container>
        <Heading text="What We do" />
        <div className="mt-8 grid grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
