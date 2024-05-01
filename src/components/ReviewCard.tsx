import { FunctionComponent } from "react";

export type ReviewCardType = {
  image?: string;
  review?: string;
  identity?: string;
  nameOfIdentity?: string;
};

const ReviewCard: FunctionComponent<ReviewCardType> = ({
  image = "/image21@2x.png",
  review,
  identity,
  nameOfIdentity,
}) => {
  return (
    <div className="w-[380px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-gray1-100 box-border flex flex-col items-start justify-start p-[15px] gap-[15px] text-left text-lg text-footer-header font-body-xl-500 border-[1px] border-solid border-footer-header">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
        <div className="flex flex-row items-start justify-start">
          <img
            className="w-[100px] relative rounded-100xl h-[100px] object-cover"
            alt=""
            src={image}
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[150%] font-semibold">
              {nameOfIdentity}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start text-base">
            <div className="flex-1 relative leading-[150%]">{identity}</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start text-center text-5xl">
        <div className="flex-1 relative leading-[150%] font-semibold">
          {review}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
