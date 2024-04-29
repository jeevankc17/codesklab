import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const AboutUsPage: FunctionComponent = () => {
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
      "[data-scroll-to='headingContainer']"
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
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-13xl text-black font-body-tiny-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[5]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <div
                className="flex flex-row items-center justify-center p-2.5 cursor-pointer"
                onClick={onLogoContainerClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDesk
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black font-body-tiny-400 sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onCoursesContainerClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-400 text-black text-left inline-block">
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
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[120%] font-semibold font-body-tiny-400 text-aqua-deep text-left inline-block">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[4] text-left text-29xl text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">{`Building the world’s largest & most loved coding school for kids & teens`}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  CoDesk started with a dream to inspire school kids
                </p>
                <p className="m-0">
                  to fall in love with coding and to empower every
                </p>
                <p className="m-0">child to build anything they can imagine</p>
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                View Our Team
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[3] font-inter">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 relative">
              <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                Our Leadership Team
              </div>
              <div
                className="absolute left-[0] top-[-77px]"
                data-scroll-to="headingContainer"
              />
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-xl text-dimgray font-body-tiny-400">
              <div className="flex-1 relative leading-[32px]">
                With over 30 years of combined experience, we have got a
                well-seasoned team at the helm.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base font-body-tiny-400 md:flex-row md:flex-wrap">
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap">{`“Teaching coding to kids is a huge responsibility and we want to take that”  `}</div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-12@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-5xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Sandeep Neupane
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & CEO, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] h-[76px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="w-[270px] relative leading-[120%] font-semibold hidden">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowbendrightdown.svg"
              />
            </div>
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  "Empowering young minds with coding skills is a profound
                  responsibility we eagerly embrace."
                </div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-13@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-5xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Jeevan KC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & CTO, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowbendrightdown.svg"
              />
            </div>
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  "Guiding children through the world of coding is a weighty
                  task we're committed to shouldering."
                </div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-12@2x.png"
                />
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[2px]">
                <div className="self-stretch flex flex-col items-center justify-start text-5xl">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Abin KC
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">{`Co-Founder & Marketing Leads, CoDesk`}</div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[150%]">
                    IOE TU Dharan
                  </div>
                </div>
                <div className="w-[270px] hidden flex-col items-center justify-start min-h-[72px] text-wwwcodingalcom-mine-shaft">
                  <div className="self-stretch relative leading-[120%] font-semibold">{`Former Co-founder and CTO `}</div>
                </div>
              </div>
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0 hidden"
                alt=""
                src="/arrowbendrightdown.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[2] text-16xl font-segoe-ui">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <b className="flex-1 relative leading-[54px]">Our Core Belief</b>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-13xl font-body-tiny-400">
            <div className="self-stretch bg-nero flex flex-row items-start justify-start gap-[40px] lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
                <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                  <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8000030517578px] z-[0]">
                    <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="w-[224.8px] absolute !m-[0] top-[0.5px] left-[0px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/empoweringchildrenpng@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Empowering Children
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      The future is digital and we believe providing children
                      with the knowledge of coding will safeguard their future.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
                <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                  <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8000030517578px] z-[0]">
                    <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="w-[224.8px] absolute !m-[0] top-[0.5px] left-[-0.2px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/inquisitivenesspng@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Discovering Why?
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      We encourage children to ask as many questions as
                      possible. We believe a curious mind will do wonders.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-start justify-start gap-[40px] lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
                <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                  <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8000030517578px] z-[0]">
                    <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <img
                    className="w-[224.8px] absolute !m-[0] top-[0.8px] left-[-0.2px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                    alt=""
                    src="/childhoodwonderpng@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      The wonder of childhood
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      We believe that childhood is a wonderful age where
                      valuable thoughts are shaped and through our curriculum we
                      try to inculcate learnings through a fun way.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center gap-[20px] w-full lg:w-full lg:flex-[unset] lg:self-stretch md:flex-col md:flex-[unset] md:self-stretch">
                <div className="overflow-hidden flex flex-row items-start justify-center relative object-contain sm:flex-col">
                  <div className="w-[224.8px] overflow-hidden shrink-0 flex flex-col items-start justify-start max-w-[224.8000030517578px] z-[0]">
                    <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                      <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                    </div>
                  </div>
                  <div className="!m-[0] absolute top-[0.8px] left-[-0.5px] overflow-hidden flex flex-row items-start justify-center max-w-[224.8000030517578px] z-[1]">
                    <div className="flex-1 overflow-hidden flex flex-col items-start justify-start max-w-[224.8000030517578px] z-[0]">
                      <div className="w-[224.8px] h-[179.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <div className="w-[224.8px] relative h-[179.8px] overflow-hidden shrink-0" />
                      </div>
                    </div>
                    <img
                      className="w-[224.8px] absolute !m-[0] top-[0px] left-[0px] h-[179.8px] overflow-hidden shrink-0 object-cover z-[1]"
                      alt=""
                      src="/codingpng@2x.png"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start w-full md:flex-[unset] md:self-stretch">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Coding should be fun
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      We want to make learning computer science a fun activity
                      children look forward to. We are constantly working to mke
                      our sessions and activities as interactive and
                      entertaining for the kids as possible.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[1] text-16xl font-segoe-ui">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <b className="flex-1 relative leading-[54px]">Our Roadmap</b>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-13xl font-inter">
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] relative h-[325px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason5svg.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                        Conceptualization
                      </div>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-tiny-400">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (April 2022)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-tiny-400">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Identified the need for afterSchool software to streamline
                      after-school program management and conducted market
                      research for validation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-tiny-400 lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <b className="flex-1 relative leading-[37.5px]">
                        Team Formation
                      </b>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (October 2022)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Assembled a dedicated team passionate about education
                      technology to develop afterSchool software.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                  alt=""
                  src="/partnersvg.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                  alt=""
                  src="/devsvg.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                        Product Development Kickoff
                      </div>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-tiny-400">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (January 2023)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-tiny-400">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Initiated development on afterSchool software, focusing on
                      core features and utilizing agile methodologies.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-tiny-400 lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <b className="flex-1 relative leading-[37.5px]">
                        Beta Testing
                      </b>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (July 2023)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Launched a beta version of afterSchool, gathering feedback
                      from users for iterative improvements.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                  alt=""
                  src="/partnersvg.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                  alt=""
                  src="/oct2020svg.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                        User Feedback and Iteration
                      </div>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-tiny-400">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (October 2023)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-tiny-400">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Incorporated user feedback to enhance the afterSchool
                      software, prioritizing user experience and functionality.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-tiny-400 lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <b className="flex-1 relative leading-[37.5px]">
                        Official Launch
                      </b>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (April 2024)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Launched afterSchool software officially, leveraging
                      feedback from beta testing to ensure a robust product.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <div className="w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-row items-start justify-start">
                  <img
                    className="w-[300px] relative h-[300px]"
                    alt=""
                    src="/clip-path-group.svg"
                  />
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] h-[300px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/childhoodwonderpng1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                        User Acquisition and Onboarding
                      </div>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-tiny-400">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (July 2024)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-tiny-400">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Executed targeted marketing campaigns to acquire new users
                      and provided comprehensive onboarding support.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-tiny-400 lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <b className="flex-1 relative leading-[37.5px]">
                        Expansion and Partnerships
                      </b>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (January 2025)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Explored opportunities for expansion and formed strategic
                      partnerships to increase adoption.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <div className="w-[300px] h-[300px] overflow-hidden shrink-0 flex flex-col items-start justify-start">
                  <div className="w-[300px] h-[324.8px] overflow-hidden shrink-0 flex flex-col items-center justify-center">
                    <img
                      className="w-[300px] relative h-[324.8px] overflow-hidden shrink-0"
                      alt=""
                      src="/sep2021svg.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] h-[300px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/childhoodwonderpng1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                        Continuous Improvement and Innovation
                      </div>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-tiny-400">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (April 2025)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-tiny-400">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Committed to ongoing product development and innovation,
                      staying ahead of the competition.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-tiny-400 lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <b className="flex-1 relative leading-[37.5px]">
                        Scaling Operations
                      </b>
                    </div>
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (April 2026)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Scaled operations and infrastructure to meet the
                      increasing demand for afterSchool software, ensuring
                      sustainability.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[300px] relative h-[300px] overflow-hidden shrink-0"
                  alt=""
                  src="/happysvg.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-left">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background2@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-row flex-wrap items-center justify-center py-[33px] px-[84px] gap-[0px_44px] lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
              <div className="w-[255px] relative leading-[120%] font-semibold inline-block">
                CoDesk
              </div>
              <div className="w-[562px] h-[189px] relative text-lg leading-[150%] text-nero hidden">
                The CoDesk is on a mission to inspire school kids in Nepal to
                fall in love with coding. Coding is proven to develop
                creativity, logical thinking, and problem-solving skills in
                kids. It's an essential skill for the future, with more than 60%
                of all jobs in STEM-related fields requiring knowledge of code.
                Kids who start learning to code at a young age are guaranteed to
                become leaders, creators, and entrepreneurs of the future.
              </div>
              <div className="flex flex-row items-start justify-start gap-[20px]">
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/entyposocialfacebookwithcircle.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/entyposocialinstagramwithcircle.svg"
                />
                <img
                  className="h-[30px] w-[30px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/entyposocialtwitterwithcircle.svg"
                />
              </div>
            </div>
            <div className="w-px relative box-border h-[157.9px] border-r-[1px] border-solid border-gray1-500 md:hidden" />
            <div className="flex-1 flex flex-row items-start justify-between text-base text-nero md:flex-row md:flex-wrap md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="w-[197.3px] relative h-[164.8px] sm:!mb-[40px]">
                <div
                  className="absolute top-[47.8px] left-[0px] leading-[150%] inline-block w-[135.7px] cursor-pointer"
                  onClick={onAboutUsTextClick}
                >
                  About Us
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[150%] font-medium inline-block w-[174.7px]">
                  Company
                </div>
                <div
                  className="absolute top-[78.8px] left-[0px] leading-[150%] inline-block w-[84.3px] cursor-pointer"
                  onClick={onNewsTextClick}
                >
                  News
                </div>
                <div
                  className="absolute top-[109.8px] left-[0px] leading-[150%] inline-block w-[115.1px] cursor-pointer"
                  onClick={onCareersTextClick}
                >
                  Careers
                </div>
                <div
                  className="absolute top-[140.8px] left-[0px] leading-[150%] inline-block w-[197.3px] cursor-pointer"
                  onClick={onHowWeWorkClick}
                >
                  How we work
                </div>
              </div>
              <div className="w-[197.9px] relative h-[164.8px] sm:!mb-[40px]">
                <div
                  className="absolute top-[47.8px] left-[0.6px] leading-[150%] inline-block w-[109.6px] cursor-pointer"
                  onClick={onScratchTextClick}
                >
                  Scratch
                </div>
                <div className="absolute top-[0px] left-[0.6px] text-xl leading-[150%] font-medium inline-block w-[131.6px]">
                  Best Courses
                </div>
                <div
                  className="absolute top-[78.8px] left-[0.6px] leading-[150%] inline-block w-[197.3px] cursor-pointer"
                  onClick={onWebDevelopmentTextClick}
                >
                  Web Development
                </div>
                <div
                  className="absolute top-[109.9px] left-[0px] leading-[150%] inline-block w-[165px] cursor-pointer"
                  onClick={onGameDevelopmentTextClick}
                >
                  Game Development
                </div>
                <div
                  className="absolute top-[140.8px] left-[0.6px] leading-[150%] inline-block w-[164.4px] cursor-pointer"
                  onClick={onPythonTextClick}
                >
                  Python
                </div>
              </div>
              <div className="w-[197.3px] relative h-[159.8px]">
                <div className="absolute top-[47.8px] left-[0px] leading-[150%] inline-block w-[172.9px]">
                  Worksheet
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[150%] font-medium inline-block w-[76.7px]">
                  More
                </div>
                <div
                  className="absolute top-[78.8px] left-[0px] leading-[150%] inline-block w-[135.4px] cursor-pointer"
                  onClick={onBlogsTextClick}
                >
                  Blogs
                </div>
                <div
                  className="absolute top-[109.8px] left-[0px] leading-[150%] inline-block w-[50.6px] cursor-pointer"
                  onClick={onQuizTextClick}
                >
                  Quiz
                </div>
                <div
                  className="absolute top-[140.8px] left-[0px] font-roboto inline-block w-[197.3px] cursor-pointer"
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

export default AboutUsPage;
