import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Para from "@/components/common/Para";
import Image from "next/image";
const PortfolioHeader = ({ handlePrev, handleNext }) => {
  return (
    <div className="pt-[87px]">
      <Container>
        <div className="flex items-start justify-evenly flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0">
          <button
            onClick={handlePrev}
            className="size-12 shrink-0 lg:size-[78px] rounded-full bg-white border border-white grid place-items-center rotate-180 order-2 lg:order-1"
          >
            <Image
              src={"/icons/common/arrow.svg"}
              alt="Arrow Icon"
              width={24}
              height={24}
            />
          </button>
          <div className="text-center order-1 lg:order-2">
            <Heading text={"Check our Work"} />
            <div className=" max-w-[449px] mt-8">
              <Para
                text=" Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online."
              />
            </div>
          </div>
          <button
            onClick={handleNext}
            className="size-12 shrink-0 lg:size-[78px] rounded-full bg-white border border-white grid place-items-center order-3 "
          >
            <Image
              src={"/icons/common/arrow.svg"}
              alt="Arrow Icon"
              width={24}
              height={24}
            />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioHeader;
