import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

export type QuizCardType = {
  image?: string;
  courseName?: string;
  courseId?: string;
};

const QuizCard: FunctionComponent<QuizCardType> = ({
  image = "/image19@2x.png",
  courseName,
  courseId,
}) => {
  const navigate = useNavigate();

  const onButtonswhiteContentClick = useCallback(() => {
    navigate("/quizbycourseidpage");
  }, [navigate]);

  return (
    <div className="w-[350px] bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[10px] text-left text-5xl text-black1 font-heading-04-600">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch bg-nero flex flex-col items-start justify-start py-0 px-[15px] gap-[15px]">
        <div className="self-stretch bg-nero flex flex-row items-center justify-center">
          <div className="flex-1 relative leading-[150%] font-semibold">
            {courseName}
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] text-base">
          <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/icon2.svg"
            />
            <div className="flex-1 bg-nero flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[150%]">{`6 modules & 36 lessons `}</div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
            <img className="w-6 relative h-6" alt="" src="/vector11.svg" />
            <div className="flex-1 bg-nero flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[150%]">Leaderboard</div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/ladder.svg"
            />
            <div className="flex-1 bg-nero flex flex-row items-center justify-center">
              <div className="flex-1 relative leading-[150%]">
                Basic to advance level
              </div>
            </div>
          </div>
        </div>
        <Link
          className="cursor-pointer [text-decoration:none] self-stretch rounded bg-nero box-border h-[41px] flex flex-row items-center justify-center py-[9px] px-5 text-center text-lg text-aqua-deep border-[1px] border-solid border-aqua-deep"
          to="/quizbycourseidpage"
          onClick={onButtonswhiteContentClick}
          id={courseId}
        >
          <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
            View Quiz
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;
