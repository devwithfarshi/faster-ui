import Container from "@/components/common/Container";
import Heading from "@/components/common/Heading";
import Image from "next/image";
const PortfolioHeader = () => {
  return (
    <div className="pt-[87px]">
      <Container>
        <div className="flex items-start justify-between">
          <button className="size-[78px] rounded-full bg-white border border-white grid place-items-center rotate-180">
            <Image
              src={"/icons/common/arrow.svg"}
              alt="Arrow Icon"
              width={24}
              height={24}
            />
          </button>
          <div>
            <Heading text={"Check our Work"} />
          </div>
          <button className="size-[78px] rounded-full bg-white border border-white grid place-items-center">
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
