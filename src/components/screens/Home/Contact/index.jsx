import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import ContactInput from "./ContactInput";
import Button from "@/components/common/Button";
import Image from "next/image";
import FadeUpAnimation from "@/components/common/FadeUpAnimation";

const ContactUs = () => {
  return (
    <section>
      <Container className="relative">
        <figure className="absolute right-0 top-0 -translate-y-1/4 w-[235px] h-[218px] -z-10">
          <Image src={"/images/Contact/contact-bg.svg"} alt="contact-bg" fill />
        </figure>
        <div className="text-center">
          <Heading text={"Let’s Get in Touch"} />
        </div>
        <FadeUpAnimation>
          <form className="mt-[71px] max-w-[696px] mx-auto flex flex-col gap-y-4">
            <ContactInput
              id={"email"}
              name="email"
              label="email"
              placeholder="example@email.com"
              type="email"
            />
            <ContactInput
              id={"name"}
              name="name"
              label="name"
              placeholder={"full name"}
              type="text"
            />
            <ContactInput
              id={"message"}
              name="message"
              label="message"
              placeholder={"write your message...."}
              type="textarea"
            />
            <Button
              variant="primary"
              text={"Get in Touch"}
              className="w-full py-[19px] mt-2"
            />
          </form>
        </FadeUpAnimation>
      </Container>
    </section>
  );
};

export default ContactUs;
