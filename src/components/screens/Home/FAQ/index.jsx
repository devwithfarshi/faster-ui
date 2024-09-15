"use client";
import { useState } from "react";
import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import { faqs } from "@/data/faq.data";
import FAQCard from "./FAQCard";

const FAQ = () => {
  const [accordionOpen, setAccordionOpen] = useState(null);
  return (
    <section className="mt-[174px]">
      <Container>
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
