import { useReviewers } from "@/data/review.data";
import Image from "next/image";

const ReviewSectionCard = () => {
  return (
    <div className="my-[86px] max-w-[409px] mx-auto rounded-[22px] p-[21px] bg-white border border-borderSecondary flex items-center gap-[13px]">
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
      <div>
        <p className="text-paragraph text-base">
          <span className="font-semibold text-foreground">5.0</span> Based on
          <span className="font-semibold text-foreground"> 145</span> Reviews
        </p>
        <div className="mt-1 flex gap-[6.36px] items-center">
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
