import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const QuizPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
    navigate("/competetionpage");
  }, [navigate]);

  const onCompetetionsTextClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onAboutUsClick = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  const onButtonsorangeContentClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='quizzesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonswhiteContentContainerClick = useCallback(() => {
    navigate("/quizbycourseidpage");
  }, [navigate]);

  const onAboutUs2Click = useCallback(() => {
    //TODO: link
  }, []);

  const onPartnershipsClick = useCallback(() => {
    //TODO: link
  }, []);

  const onCareersClick = useCallback(() => {
    //TODO: link
  }, []);

  const onWhyCoDeskClick = useCallback(() => {
    //TODO: link
  }, []);

  const onPythonClick = useCallback(() => {
    //TODO: link
  }, []);

  const onBlogsClick = useCallback(() => {
    //TODO: link
  }, []);

  const onQuizClick = useCallback(() => {
    //TODO: link
  }, []);

  const onCompetetionClick = useCallback(() => {
    //TODO: link
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-29xl text-black font-body-tiny-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[3]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-29xl text-dodger-blue font-body-tiny-400 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center p-2.5 text-[inherit]"
                to="/"
                onClick={onLogoClick}
              >
                <div className="relative leading-[120%] font-semibold">
                  CoDeskLab
                </div>
              </Link>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-aqua-deep sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/coursepage"
                    onClick={onCoursesClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-400 text-black text-left inline-block">
                      Courses
                    </button>
                  </Link>
                  <div className="flex flex-row items-center justify-end">
                    <div className="relative leading-[120%] font-semibold">
                      Quizzes
                    </div>
                  </div>
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end text-black"
                    to="/competetionpage"
                    onClick={onCompetetionsClick}
                  >
                    <div
                      className="relative leading-[150%] cursor-pointer"
                      onClick={onCompetetionsTextClick}
                    >
                      Competetions
                    </div>
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/aboutuspage"
                    onClick={onAboutUsClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-400 text-black text-left inline-block">
                      About Us
                    </button>
                  </Link>
                </div>
                <div
                  className="flex flex-row items-center justify-center cursor-pointer"
                  onClick={openDrawerMenus}
                >
                  <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 w-8 relative overflow-hidden shrink-0 lg:flex md:flex">
                    <img
                      className="absolute top-[6px] left-[2.1px] max-h-full w-[19.8px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute top-[12px] left-[2.1px] max-h-full w-[19.8px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                    <img
                      className="absolute top-[18px] left-[2.1px] max-h-full w-[19.8px]"
                      alt=""
                      src="/vector-1.svg"
                    />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                Coding Quizes for Kids
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Fun way to learn coding for kids using quizzes
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-nero text-center inline-block max-h-[58px]">
                View a Quizzes
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-59@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-17xl">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Coding quizzes for kids
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Great collection of fun and interactive coding quizzes for kids
                to assess and acquire computer science knowledge.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-5xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="rounded-lg flex flex-col items-start justify-start">
              <div className="w-[350px] bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[10px]">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
                  alt=""
                  src="/image19@2x.png"
                />
                <div className="self-stretch bg-nero flex flex-col items-start justify-start py-0 px-[15px] gap-[15px]">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Scratch Programming
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
                      <img
                        className="w-6 relative h-6"
                        alt=""
                        src="/vector1.svg"
                      />
                      <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                        <div className="flex-1 relative leading-[150%]">
                          Leaderboard
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="self-stretch rounded bg-nero box-border h-[41px] flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-center text-lg text-aqua-deep border-[1px] border-solid border-aqua-deep"
                    onClick={onButtonswhiteContentContainerClick}
                  >
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                      View Quiz
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="quizzesContainer"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-13xl">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background5@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-row flex-wrap items-center justify-center py-[33px] px-[84px] gap-[0px_44px] lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
              <div className="self-stretch relative leading-[120%] font-semibold">
                CoDesk
              </div>
              <div className="self-stretch h-[189px] relative text-lg leading-[150%] text-nero inline-block">
                The CoDesk is on a mission to inspire school kids in Nepal to
                fall in love with coding. Coding is proven to develop
                creativity, logical thinking, and problem-solving skills in
                kids. It's an essential skill for the future, with more than 60%
                of all jobs in STEM-related fields requiring knowledge of code.
                Kids who start learning to code at a young age are guaranteed to
                become leaders, creators, and entrepreneurs of the future.
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[20px]">
                <a
                  className="[text-decoration:none] h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  href="https://www.linkedin.com/company/96404723"
                  target="_blank"
                >
                  <img
                    className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector1.svg"
                  />
                </a>
                <a
                  className="[text-decoration:none] h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  href="https://www.linkedin.com/company/96404723"
                  target="_blank"
                >
                  <img
                    className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector2.svg"
                  />
                </a>
                <a
                  className="[text-decoration:none] h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  href="https://www.linkedin.com/company/96404723"
                  target="_blank"
                >
                  <img
                    className="absolute h-[96%] w-[96%] top-[2%] right-[2%] bottom-[2%] left-[2%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/vector3.svg"
                  />
                </a>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[5px] text-base text-nero md:flex-row md:flex-wrap md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch relative text-xl leading-[150%] font-medium">
                  Company
                </div>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch h-6 relative leading-[150%] text-[inherit] inline-block"
                  to="/aboutuspage"
                  onClick={onAboutUs2Click}
                >
                  About Us
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/partnershippage"
                  onClick={onPartnershipsClick}
                >
                  Partnerships
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/applyteacher"
                  onClick={onCareersClick}
                >
                  Careers
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/whycodeskpage"
                  onClick={onWhyCoDeskClick}
                >
                  Why CoDesk?
                </Link>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch relative text-xl leading-[150%] font-medium">
                  Best Courses
                </div>
                <a className="[text-decoration:none] self-stretch relative leading-[150%] text-[inherit]">
                  Scratch
                </a>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/commingsoonpage"
                >
                  Web Development
                </Link>
                <a className="[text-decoration:none] self-stretch relative leading-[150%] text-[inherit]">
                  Game Development
                </a>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/curriculumbycoursepage"
                  onClick={onPythonClick}
                >
                  Python
                </Link>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[10px] sm:flex-[unset] sm:self-stretch">
                <div className="self-stretch relative text-xl leading-[150%] font-medium">
                  More
                </div>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/worksheetpage"
                >
                  Worksheet
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/blogpage"
                  onClick={onBlogsClick}
                >
                  Blogs
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/quizpage"
                  onClick={onQuizClick}
                >
                  Quiz
                </Link>
                <Link
                  className="cursor-pointer [text-decoration:none] self-stretch relative leading-[150%] text-[inherit]"
                  to="/competetionpage"
                  onClick={onCompetetionClick}
                >
                  Competetion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isDrawerMenusOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeDrawerMenus}
        >
          <DrawerMenus onClose={closeDrawerMenus} />
        </PortalDrawer>
      )}
    </>
  );
};

export default QuizPage;
