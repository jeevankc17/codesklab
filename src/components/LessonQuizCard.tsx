import { FunctionComponent, useCallback } from "react";
import { Link } from "react-router-dom";

export type LessonQuizCardType = {
  image?: string;
  lessonName?: string;
  courseName?: string;
  lessonNumber?: string;
  level?: string;
  lessonId?: string;
  numberQuestions?: string;
};

const LessonQuizCard: FunctionComponent<LessonQuizCardType> = ({
  image = "/image19@2x.png",
  lessonName,
  courseName,
  lessonNumber,
  level,
  lessonId,
  numberQuestions,
}) => {
  const onButtonswhiteContentClick = useCallback(() => {
    //TODO: button to open the quiz array of lesson-id
  }, []);

  return (
    <div className="w-[350px] bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[10px] text-left text-5xl text-black1 font-heading-04-600">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch bg-nero flex flex-col items-start justify-start py-0 px-[19px] gap-[10px]">
        <div className="w-[292px] h-[72px] flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[150%] font-semibold">
            {lessonName}
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] text-base">
          <div className="self-stretch bg-nero flex flex-row items-center justify-start text-chateau-green">
            <div className="flex-1 bg-nero flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[150%]">{courseName}</div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/question1.svg"
            />
            <div className="flex-1 bg-nero flex flex-row items-center justify-start">
              <div className="w-[136px] relative leading-[150%] flex items-center shrink-0">
                No. of Questions:
              </div>
              <div className="w-[35px] relative leading-[150%] flex items-center shrink-0">
                {numberQuestions}
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/bookopentext.svg"
            />
            <div className="flex-1 bg-nero flex flex-row items-center justify-start">
              <div className="w-[62px] relative leading-[150%] flex items-center shrink-0">
                Lesson:
              </div>
              <div className="w-[35px] relative leading-[150%] flex items-center shrink-0">
                {lessonNumber}
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/icon3.svg"
            />
            <div className="flex-1 bg-nero flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[150%]">{level}</div>
            </div>
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] self-stretch rounded bg-nero box-border h-[41px] flex flex-row items-center justify-center py-[9px] px-5 text-center text-lg text-aqua-deep border-[1px] border-solid border-aqua-deep"
          to="/commingsoonpage"
          onClick={onButtonswhiteContentClick}
          id={lessonId}
        >
          <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
            Play Quiz
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LessonQuizCard;
