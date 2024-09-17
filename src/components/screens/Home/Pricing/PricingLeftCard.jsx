import Button from "@/components/common/Button";
import FadeUpAnimation from "@/components/common/FadeUpAnimation";
import Heading from "@/components/common/Heading";
import Para from "@/components/common/Para";
const PricingLeftCard = () => {
  return (
    <div className="flex flex-col justify-between items-start lg:items-stretch  ">
      <div>
        <Heading text={"Pricing"} />
      </div>
      <div className="mt-4  max-w-[282px]">
        <Para
          text=" Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online."
        />
      </div>
      <FadeUpAnimation>
        <div className="mt-[81px] rounded-[20px] bg-white p-[26px] pt-[37px] w-full md:w-[90%] lg:w-auto lg:max-w-[387px] flex flex-col gap-y-[31px]">
          <h5 className="font-raleway font-bold text-2xl lg:text-[34.07px] leading-[120%]">
            Let’s Schedule a Meeting
          </h5>
          <a href="#">
            <Button
              text="Schedule Meeting"
              variant="primary"
              className="w-full py-[18px]"
            />
          </a>
        </div>
      </FadeUpAnimation>
    </div>
  );
};

export default PricingLeftCard;
