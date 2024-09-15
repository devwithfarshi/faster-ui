import Button from "@/components/common/Button";
import Heading from "@/components/common/Heading";
import Para from "@/components/common/Para";
const PricingLeftCard = () => {
  return (
    <div>
      <Heading text={"Pricing"} />
      <div className="mt-4 max-w-[282px]">
        <Para
          text=" Take a look at some of our recent projects to see how we've helped
            businesses like yours succeed online."
        />
      </div>
      <div className="mt-[81px] rounded-[20px] bg-white p-[26px] pt-[37px] max-w-[387px] flex flex-col gap-y-[31px]">
        <h5 className="font-raleway font-bold text-[34.07px] leading-[120%]">
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
    </div>
  );
};

export default PricingLeftCard;
