import { useReviewers } from "@/data/review.data";
import Image from "next/image";

const ReviewSectionCard = () => {
  return (
    <div className="my-12 lg:my-[86px] mx-4 max-w-[409px] lg:mx-auto rounded-[22px] p-[21px] bg-white border border-borderSecondary flex items-center gap-[13px] flex-col lg:flex-row">
      <ul className="flex items-center">
        {useReviewers.map((user) => (
          <li
            key={user.id}
            className="relative size-[37px] rounded-full border-2 border-white -ml-1.5 "
          >
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="rounded-full object-cover"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col-reverse lg:flex-col gap-y-1">
        <p className="text-paragraph text-base">
          <span className="font-semibold text-foreground">5.0</span> Based on
          <span className="font-semibold text-foreground"> 145</span> Reviews
        </p>
        <div className=" flex justify-center lg:justify-normal gap-[6.36px] items-center">
          {[...new Array(5).keys()].map((item) => (
            <figure key={item}>
              <Image
                src="/icons/common/star.svg"
                alt="Star"
                width={18}
                height={18}
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSectionCard;
