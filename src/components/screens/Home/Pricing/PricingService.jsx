import FadeUpAnimation from "@/components/common/FadeUpAnimation";
import Para from "@/components/common/Para";
import Image from "next/image";

const PricingService = () => {
  return (
    <div className="rounded-[20px] bg-white px-6 lg:px-[22px] pt-[43px] pb-[25px] flex-1">
      <div className="lg:pl-[28px]">
        <h5 className="font-raleway font-bold text-2xl lg:text-[34.07px] leading-[120%]">
          Unlimited Services
        </h5>
        <div className="max-w-[383px] mt-5 lg:mt-[31px]">
          <Para
            text=" Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online."
          />
        </div>
        <FadeUpAnimation>
          <ul className="mt-5 lg:mt-[41px] grid grid-cols-1 md:grid-cols-2 gap-y-[18px]">
            {[...new Array(6).keys()].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <figure className="shrink-0">
                  <Image
                    width={24}
                    height={24}
                    src={"/icons/common/check.svg"}
                    alt="check Icon"
                  />
                </figure>
                <p className="text-sm">Unlimited requests</p>
              </li>
            ))}
          </ul>
        </FadeUpAnimation>
      </div>
      <div className="bg-background mt-[41px] rounded-10 py-7 px-12 flex items-center justify-between">
        <FadeUpAnimation>
          <p className="text-paragraph text-lg lg:text-xl">
            <span className="font-bold text-4xl lg:text-6xl text-foreground">
              $3,250
            </span>
            /mo
          </p>
        </FadeUpAnimation>

        <button>
          <Image
            src={"/icons/common/arrow.svg"}
            alt="Arrow Icon"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
};

export default PricingService;
