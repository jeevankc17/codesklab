import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const ReviewPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesContainerClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onQuizzesContainerClick = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onCompetetionsContainerClick = useCallback(() => {
    navigate("/competetionpage");
  }, [navigate]);

  const onCompetetionsTextClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onAboutUsContainerClick = useCallback(() => {
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
      "[data-scroll-to='worksheetSectionContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onNewsTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onCareersTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onHowWeWorkClick = useCallback(() => {
    //TODO: link
  }, []);

  const onScratchTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onWebDevelopmentTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onGameDevelopmentTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onPythonTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onBlogsTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onQuizTextClick = useCallback(() => {
    //TODO: link
  }, []);

  const onCompetetionTextClick = useCallback(() => {
    //TODO: link
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-21xl text-black1 font-inter">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[3]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div
                className="flex flex-row items-center justify-center p-2.5 cursor-pointer"
                onClick={onLogoContainerClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDeskLab
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black1 font-body-tiny-400 sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onCoursesContainerClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-400 text-black1 text-left inline-block">
                      Courses
                    </button>
                  </div>
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onQuizzesContainerClick}
                  >
                    <div className="relative leading-[150%]">Quizzes</div>
                  </div>
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onCompetetionsContainerClick}
                  >
                    <div
                      className="relative leading-[150%] cursor-pointer"
                      onClick={onCompetetionsTextClick}
                    >
                      Competetions
                    </div>
                  </div>
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onAboutUsContainerClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-400 text-black1 text-left inline-block">
                      About Us
                    </button>
                  </div>
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[2] text-nero lg:flex-col md:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative tracking-[-0.01em] leading-[48px] font-semibold whitespace-pre-wrap">{`Testimonials  & Reviews By Our Little Coders And their well wishers`}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base font-body-tiny-400">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Hear our students and their parents share the many reasons why
                they love CoDesk
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                View Testimonials
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-53@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] relative z-[1] text-center">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative tracking-[-0.01em] leading-[48px] font-semibold whitespace-pre-wrap">{`Testimonials  & Reviews`}</div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm font-body-tiny-400">
              <div className="flex-1 relative leading-[150%]">
                Reviews and testimonials from students and parents
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-lg text-footer-header font-body-tiny-400">
            <div className="w-[380px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-gray1-100 box-border flex flex-col items-start justify-start p-[15px] gap-[15px] border-[1px] border-solid border-footer-header">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image17@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Nisha
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-5xl">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  I love learning with CoDesk. It's always fun and the teacher
                  is nice and kind.
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="worksheetSectionContainer"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-13xl">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background3@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-row flex-wrap items-center justify-center py-[33px] px-[84px] gap-[0px_44px] lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
              <div className="w-[255px] relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                CoDesk
              </div>
              <div className="self-stretch h-[189px] relative text-lg leading-[27px] font-roboto text-nero inline-block">
                The CoDesk is on a mission to inspire school kids in Nepal to
                fall in love with coding. Coding is proven to develop
                creativity, logical thinking, and problem-solving skills in
                kids. It's an essential skill for the future, with more than 60%
                of all jobs in STEM-related fields requiring knowledge of code.
                Kids who start learning to code at a young age are guaranteed to
                become leaders, creators, and entrepreneurs of the future.
              </div>
              <div className="w-[130px] relative h-[30px]">
                <img
                  className="absolute top-[0px] left-[0px] w-[30px] h-[30px] overflow-hidden"
                  alt=""
                  src="/entyposocialfacebookwithcircle.svg"
                />
                <img
                  className="absolute top-[0px] left-[100px] w-[30px] h-[30px] overflow-hidden"
                  alt=""
                  src="/entyposocialtwitterwithcircle.svg"
                />
                <img
                  className="absolute top-[0px] left-[50px] w-[30px] h-[30px] overflow-hidden"
                  alt=""
                  src="/entyposocialinstagramwithcircle.svg"
                />
              </div>
            </div>
            <div className="w-px relative box-border h-[157.9px] border-r-[1px] border-solid border-gray1-500 md:hidden" />
            <div className="flex-1 flex flex-row items-start justify-between text-base text-nero font-roboto md:flex-row md:flex-wrap md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="w-[197.3px] relative h-[159.8px] sm:!mb-[40px]">
                <div
                  className="absolute top-[47.8px] left-[0px] inline-block w-[135.7px] cursor-pointer"
                  onClick={onAboutUsTextClick}
                >
                  About Us
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.7px]">
                  Company
                </div>
                <div
                  className="absolute top-[78.8px] left-[0px] inline-block w-[84.3px] cursor-pointer"
                  onClick={onNewsTextClick}
                >
                  News
                </div>
                <div
                  className="absolute top-[109.8px] left-[0px] inline-block w-[115.1px] cursor-pointer"
                  onClick={onCareersTextClick}
                >
                  Careers
                </div>
                <div
                  className="absolute top-[140.8px] left-[0px] inline-block w-[197.3px] cursor-pointer"
                  onClick={onHowWeWorkClick}
                >
                  How we work
                </div>
              </div>
              <div className="w-[197.8px] relative h-[159.8px] sm:!mb-[40px]">
                <div
                  className="absolute top-[47.8px] left-[0.5px] inline-block w-[109.6px] cursor-pointer"
                  onClick={onScratchTextClick}
                >
                  Scratch
                </div>
                <div className="absolute top-[0px] left-[0.5px] text-xl leading-[27px] font-medium inline-block w-[131.6px]">
                  Best Courses
                </div>
                <div
                  className="absolute top-[78.8px] left-[0.5px] inline-block w-[197.3px] cursor-pointer"
                  onClick={onWebDevelopmentTextClick}
                >
                  Web Development
                </div>
                <div
                  className="absolute top-[109.9px] left-[0px] inline-block w-[156px] cursor-pointer"
                  onClick={onGameDevelopmentTextClick}
                >
                  Game Development
                </div>
                <div
                  className="absolute top-[140.8px] left-[0.5px] inline-block w-[164.4px] cursor-pointer"
                  onClick={onPythonTextClick}
                >
                  Python
                </div>
              </div>
              <div className="w-[197.3px] relative h-[159.8px]">
                <div className="absolute top-[47.8px] left-[0px] inline-block w-[172.9px]">
                  Worksheet
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.7px]">
                  More
                </div>
                <div
                  className="absolute top-[78.8px] left-[0px] inline-block w-[135.4px] cursor-pointer"
                  onClick={onBlogsTextClick}
                >
                  Blogs
                </div>
                <div
                  className="absolute top-[109.8px] left-[0px] inline-block w-[50.6px] cursor-pointer"
                  onClick={onQuizTextClick}
                >
                  Quiz
                </div>
                <div
                  className="absolute top-[140.8px] left-[0px] inline-block w-[197.3px] cursor-pointer"
                  onClick={onCompetetionTextClick}
                >
                  Competetion
                </div>
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

export default ReviewPage;
