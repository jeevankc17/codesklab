import { FunctionComponent, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export type DrawerMenusType = {
  onClose?: () => void;
};

const DrawerMenus: FunctionComponent<DrawerMenusType> = ({ onClose }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onMenuItemClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMenuItem1Click = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onMenuItem2Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onMenuItem3Click = useCallback(() => {
    navigate("/partnershippage");
  }, [navigate]);

  const onMenuItem4Click = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onMenuItem5Click = useCallback(() => {
    navigate("/competetionpage");
  }, [navigate]);

  const onMenuItem6Click = useCallback(() => {
    navigate("/worksheetpage");
  }, [navigate]);

  const onMenuItem7Click = useCallback(() => {
    navigate("/blogpage");
  }, [navigate]);

  const onMenuItem8Click = useCallback(() => {
    navigate("/projectpage");
  }, [navigate]);

  const onMenuItem9Click = useCallback(() => {
    window.open("/whycodeskpage");
  }, []);

  const onMenuItem10Click = useCallback(() => {
    window.open("/applyteacher");
  }, []);

  const onMenuItem11Click = useCallback(() => {
    window.open("/commingsoonpage");
  }, []);

  const onMenuItem12Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onMenuItem13Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  return (
    <div
      className="w-80 bg-nero flex flex-col items-start justify-start py-5 px-[30px] box-border gap-[138px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] h-full max-w-[90%] overflow-auto text-left text-xs text-lightslategray font-roboto"
      data-animate-on-scroll
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
        <div className="flex flex-row items-center justify-start gap-[12px]">
          <div className="flex flex-row items-start justify-start">
            <img
              className="w-[49px] relative h-[49px] object-cover"
              alt=""
              src="/group3@2x.png"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[18px]">Hello</div>
            <b className="relative text-xl leading-[30px] text-black1">
              CoDeskLab
            </b>
          </div>
        </div>
        <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-aliceblue" />
        <div className="flex flex-col items-start justify-start gap-[28px] text-base text-black">
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] text-[inherit]"
            to="/"
            onClick={onMenuItemClick}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/houseline.svg"
            />
            <div className="relative leading-[24px] font-medium">Home</div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] text-[inherit]"
            to="/aboutuspage"
            onClick={onMenuItem1Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/info.svg"
            />
            <div className="relative leading-[24px] font-medium">About Us</div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] text-[inherit]"
            to="/coursepage"
            onClick={onMenuItem2Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/video.svg"
            />
            <div className="relative leading-[24px] font-medium">Courses</div>
          </Link>
          <a
            className="[text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] cursor-pointer text-[inherit]"
            onClick={onMenuItem3Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/book--undefined--glyph-undefined1.svg"
            />
            <div className="relative leading-[24px] font-medium">
              School Partnerships
            </div>
          </a>
          <a
            className="[text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] cursor-pointer text-[inherit]"
            onClick={onMenuItem4Click}
          >
            <img
              className="w-6 relative h-[19.5px]"
              alt=""
              src="/vector21.svg"
            />
            <div className="relative leading-[24px] font-medium">Quizzes</div>
          </a>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] text-[inherit]"
            to="/competetionpage"
            onClick={onMenuItem5Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/flagbannerfold.svg"
            />
            <div className="relative leading-[24px] font-medium">
              Competetion
            </div>
          </Link>
          <a
            className="[text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] cursor-pointer text-[inherit]"
            onClick={onMenuItem6Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/bookopentext.svg"
            />
            <div className="relative leading-[24px] font-medium">
              Worksheets
            </div>
          </a>
          <a
            className="[text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] cursor-pointer text-[inherit]"
            onClick={onMenuItem7Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/bookopentext.svg"
            />
            <div className="relative leading-[24px] font-medium">Blogs</div>
          </a>
          <a
            className="[text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] cursor-pointer text-[inherit]"
            onClick={onMenuItem8Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/celltower1.svg"
            />
            <div className="relative leading-[24px] font-medium">Projects</div>
          </a>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-center justify-start gap-[16px] text-[inherit]"
            to="/whycodeskpage"
            onClick={onMenuItem9Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/question2.svg"
            />
            <div className="relative leading-[24px] font-medium">
              Why CoDesk?
            </div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-center justify-start gap-[16px] text-[inherit]"
            to="/applyteacher"
            onClick={onMenuItem10Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/chalkboardteacher2.svg"
            />
            <div className="relative leading-[24px] font-medium">Careers</div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-center justify-start gap-[16px] text-[inherit]"
            to="/commingsoonpage"
            onClick={onMenuItem11Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/lockkeyopen.svg"
            />
            <div className="relative leading-[24px] font-medium">Login</div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] text-[inherit]"
            to="/commingsoonpage"
            onClick={onMenuItem12Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/cashregister.svg"
            />
            <div className="relative leading-[24px] font-medium">Register</div>
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] self-stretch flex flex-row items-start justify-start gap-[16px] text-[inherit]"
            to="/commingsoonpage"
            onClick={onMenuItem13Click}
          >
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/userswitch.svg"
            />
            <div className="relative leading-[24px] font-medium">
              Instructor Login
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-start justify-start text-sm">
        <div className="relative leading-[24px]">Version 1.0.0</div>
      </div>
    </div>
  );
};

export default DrawerMenus;
