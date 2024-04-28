import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const CommingSoonPage: FunctionComponent = () => {
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
    navigate("/");
  }, [navigate]);

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
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-lg text-primary-500 font-body-tiny-400">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[2]">
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
        <div className="self-stretch bg-nero flex flex-row items-center justify-between py-0 px-[15px] z-[1]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                COMING SOON
              </div>
              <div className="self-stretch relative text-29xl leading-[120%] font-semibold text-gray-900">
                There is no record on our Database currently, we are going to
                launch our feature very soon. Stay tune
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-nero text-center inline-block max-h-[58px]">
                Go Back To Home
              </div>
            </button>
          </div>
          <img
            className="w-[579px] relative h-[604px] object-cover"
            alt=""
            src="/saly2@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-13xl text-black1 font-inter">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background1@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-row flex-wrap items-center justify-center py-[33px] px-[84px] gap-[0px_44px] lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
              <div className="w-[255px] relative tracking-[-0.01em] leading-[40px] font-semibold inline-block">
                CoDesk
              </div>
              <div className="self-stretch h-[162px] relative text-lg leading-[27px] font-roboto text-nero inline-block">
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

export default CommingSoonPage;
