import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const AboutUsPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const onAboutUsClick = useCallback(() => {
    //TODO: link
  }, []);

  const onPartnershipsClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onCareersClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onWhyCoDeskClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onPythonClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onBlogsClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onQuizClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onCompetetionClick1 = useCallback(() => {
    //TODO: link
  }, []);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onCompetetionsClick = useCallback(() => {
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

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-16xl text-black1 font-segoe-ui sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[4]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center p-2.5 text-[inherit]"
                to="/"
                onClick={onLogoClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDesk
                </div>
              </Link>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black1 font-body-xl-600 sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/coursepage"
                    onClick={onCoursesClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-xl-600 text-black1 text-left inline-block">
                      Courses
                    </button>
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end text-[inherit]"
                    to="/quizpage"
                    onClick={onQuizzesClick}
                  >
                    <div className="relative leading-[150%]">Quizzes</div>
                  </Link>
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end text-[inherit]"
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
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onAboutUsContainerClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[120%] font-semibold font-body-xl-600 text-aqua-deep text-left inline-block">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[3] text-left text-29xl text-nero font-body-xl-600 lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
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
            src="/image-54@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[2] text-13xl font-inter">
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
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-xl text-dimgray font-body-xl-600">
              <div className="flex-1 relative leading-[32px]">
                With over 30 years of combined experience, we have got a
                well-seasoned team at the helm.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base font-body-xl-600 md:flex-row md:flex-wrap">
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
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[1]">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <b className="flex-1 relative leading-[54px]">Our Core Belief</b>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-13xl font-body-xl-600">
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
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[0]">
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
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-xl-600">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (April 2022)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-xl-600">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      <span>
                        Identified the need for CoDeskLab to streamline
                        after-school program management and conducted market
                        research for validation.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-xl-600 lg:flex-col md:flex-col">
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
                      <span>
                        Assembled a dedicated team passionate about education
                        technology to develop CoDeskLab.
                      </span>
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
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-xl-600">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (January 2023)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-xl-600">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      <span>
                        Initiated development on CoDeskLab, focusing on core
                        features and utilizing agile methodologies.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-xl-600 lg:flex-col md:flex-col">
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
                      <span>
                        Launched a beta version of CoDeskLab, gathering feedback
                        from users for iterative improvements.
                      </span>
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
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-xl-600">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (October 2023)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-xl-600">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Incorporated user feedback to enhance the afterSchool
                      software, prioritizing user experience and functionality.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-xl-600 lg:flex-col md:flex-col">
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
                      <span>
                        Launched CoDeskLab officially, leveraging feedback from
                        beta testing to ensure a robust product.
                      </span>
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
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-xl-600">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (July 2024)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-xl-600">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Executed targeted marketing campaigns to acquire new users
                      and provided comprehensive onboarding support.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-xl-600 lg:flex-col md:flex-col">
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
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5 text-base font-body-xl-600">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        (April 2025)
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg font-body-xl-600">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                      Committed to ongoing product development and innovation,
                      staying ahead of the competition.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between text-9xl-7 font-body-xl-600 lg:flex-col md:flex-col">
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
                      increasing demand for CoDeskLab software, ensuring
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
          <Footer
            onAboutUs3Click={onAboutUsClick}
            onPartnershipsClick={onPartnershipsClick1}
            onCareersClick={onCareersClick1}
            onWhyCoDeskClick={onWhyCoDeskClick1}
            onPythonClick={onPythonClick1}
            onBlogsClick={onBlogsClick1}
            onQuizClick={onQuizClick1}
            onCompetetionClick={onCompetetionClick1}
          />
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
