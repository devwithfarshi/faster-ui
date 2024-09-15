"use client";
import { useState } from "react";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { faqs } from "@/data/faq.data";
import FAQCard from "./FAQCard";
import Image from "next/image";

const FAQ = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  return (
    <section className="mt-[174px] ">
      <Container className="relative">
        <figure className="absolute w-[765px] h-[726px] -z-10 left-0 top-0 -translate-x-1/2 -translate-y-1/4">
          <Image src={"/images/faq/faq-bg.svg"} alt="faq-bg" fill />
        </figure>
        <div className="flex gap-[69px]">
          <div className="mt-[100px]">
            <Heading text={"Frequently Asked Questions"} />
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQCard
                key={faq.id}
                faq={faq}
                accordionOpen={accordionOpen}
                setAccordionOpen={setAccordionOpen}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
