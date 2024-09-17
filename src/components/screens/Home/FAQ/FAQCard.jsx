import FadeUpAnimation from "@/components/common/FadeUpAnimation";
import Para from "@/components/common/Para";
import Image from "next/image";

const FAQCard = ({ faq, accordionOpen, setAccordionOpen }) => {
  return (
    <FadeUpAnimation>
      <div className="py-6 pl-[30px] pr-[17px] bg-white rounded-10 lg:max-h-[137px]">
        <button
          onClick={() =>
            setAccordionOpen(accordionOpen !== faq.id ? faq.id : null)
          }
          className="flex items-start justify-between w-full"
        >
          <h5 className="font-bold font-raleway text-base lg:text-lg text-start">
            {faq.question}
          </h5>
          <figure className="relative size-6 shrink-0">
            <Image
              src={
                accordionOpen !== faq.id
                  ? "/icons/common/plus.svg"
                  : "/icons/common/mains.svg"
              }
              alt="plus"
              fill
            />
          </figure>
        </button>

        <div
          className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
            accordionOpen === faq.id
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div
            className={`overflow-hidden duration-500 ${
              accordionOpen === faq.id ? "mt-4" : "mt-0"
            }`}
          >
            <Para text={faq.answer} />
          </div>
        </div>
      </div>
    </FadeUpAnimation>
  );
};
export default FAQCard;
