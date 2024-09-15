import Para from "@/components/common/Para";
import Image from "next/image";

const ServiceCard = ({ service }) => {
  const extraStyle =
    service?.col === 2 ? "col-span-2" : service?.row === 2 ? "row-span-2" : "";
  return (
    <div
      className={`bg-white border border-background  pl-6 pt-[29px] pr-[23px] pb-[34px] rounded-10   ${extraStyle} ${
        (service?.col || service?.row) && service?.col
          ? "lg:flex flex-col lg:flex-row items-center justify-between"
          : "lg:flex flex-col lg:gap-10"
      }`}
    >
      <div>
        <figure className=" size-11 rounded-[9px] bg-background flex items-center justify-center">
          <Image
            width={24}
            height={24}
            src={service.icon}
            alt={service.title}
          />
        </figure>
        <div className="mt-[18px]">
          <h4 className=" font-semibold text-[19.77px]">{service.title}</h4>
        </div>
        <div className="mt-[19px] max-w-[231px]">
          <Para text={service.description} />
        </div>
      </div>
      {service?.image && (
        <div className="h-full w-[238px]">
          <figure className="relative w-full h-full">
            <Image
              fill
              src={service.image}
              alt={service.title}
              className="object-contain"
            />
          </figure>
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
