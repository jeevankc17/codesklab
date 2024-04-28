import { FunctionComponent, useState, useCallback } from "react";
import Image1 from "../components/Image1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const PartnershipPage: FunctionComponent = () => {
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
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

  const openImagePopup = useCallback(() => {
    setImagePopupOpen(true);
  }, []);

  const closeImagePopup = useCallback(() => {
    setImagePopupOpen(false);
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
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-29xl text-darkslategray font-body-tiny-400">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[4]">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-start py-0 px-[15px] gap-[15px] z-[3] text-nero lg:flex-col md:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold">
                CoDesk - School Partnerships
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[120%] font-semibold">
                We welcome schools to partner with us and introduce coding to
                students through fun activities.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-nero text-center inline-block max-h-[58px]">
                Contact Us
              </div>
            </button>
          </div>
          <img
            className="h-[500px] flex-1 relative max-w-full overflow-hidden object-contain lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-55@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[2] text-center text-17xl">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Benefits Of Partnering With Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm text-black1">
              <div className="flex-1 relative leading-[150%]">
                Make your school stand out by partnering with Nepal's #1 coding
                platform for school kids
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-left">
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[325px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason5svg2.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      For School
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg text-aqua-deep">
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px] text-darkslategray">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>{`Customised `}</span>
                        <span className="text-aqua-deep">
                          Coding Curriculum designed
                        </span>
                        <span> for each school.</span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>
                          Computer science graduate teachers from CoDesk
                        </span>
                        <span className="text-darkslategray">
                          {" "}
                          with vast industry and academic experience available.
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Master dashboard</span>
                        <span className="text-darkslategray">
                          {" "}
                          to track the performance of students and school
                          teachers.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      For Teachers
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg text-aqua-deep">
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Training</span>
                        <span className="text-darkslategray">{` provided to school teachers by `}</span>
                        <span>{`CoDesk Knowledge Experts `}</span>
                        <span className="text-darkslategray">
                          on curriculum, platforms, and programming languages
                          suitable for all grade groups.
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[30px] font-semibold">
                        <span>Custom dashboard</span>
                        <span className="text-darkslategray">
                          {" "}
                          to track and review the performance of each student
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Speakership / Advocate</span>
                        <span className="text-darkslategray">
                          {" "}
                          opportunity at Codex Events.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[348px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason2svg1.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[350px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/reason1svg@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      For Students
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-lg">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px] text-aqua-deep">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire4.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>Lifetime access</span>
                        <span className="text-darkslategray">{` to a personal dashboard with `}</span>
                        <span>lessons, projects, coding quizzes,</span>
                        <span className="text-darkslategray">{` and `}</span>
                        <span>STEM.org</span>
                        <span className="text-darkslategray">
                          {" "}
                          accredited certificates.
                        </span>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[30px] font-semibold">
                        Regular Parent-Teacher Meetings and doubt sessions.
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/fire3.svg"
                      />
                      <div className="flex-1 relative leading-[150%] font-semibold">
                        <span>{`Free participation in `}</span>
                        <span className="text-aqua-deep">{`National and Global coding competitions and hackathons, `}</span>
                        <span>hosted with CoDesk.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[1] text-center text-15xl-6 font-segoe-ui">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <b className="flex-1 relative [text-decoration:underline] leading-[45px]">
                Contact Us
              </b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-[15.9px] text-black1">
              <div className="flex-1 relative leading-[24px]">
                Feel free to reach out to us
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5">
            <form className="m-0 w-[550px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-nero box-border flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] border-[1px] border-solid border-whitesmoke md:w-[350px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-slategray text-left">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <input
                  className="[outline:none] font-body-tiny-400 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-tiny-400 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Email address"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-tiny-400 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Phone Number"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-tiny-400 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="School Name"
                  type="text"
                />
                <textarea
                  className="bg-[transparent] font-body-tiny-400 text-base [outline:none] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Leave Message"
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-tomato rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={openImagePopup}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-nero text-center inline-block max-h-[58px]">
                  Subimt
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="self-stretch rounded-mini flex flex-col items-center justify-start z-[0] text-black1">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background1@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-row flex-wrap items-center justify-center py-[33px] px-[84px] gap-[0px_44px] lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
              <div className="w-[255px] relative leading-[120%] inline-block">
                CoDesk
              </div>
              <div className="self-stretch h-[189px] relative text-lg leading-[150%] font-semibold text-nero inline-block">
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
            <div className="flex-1 flex flex-row items-start justify-between text-base text-nero md:flex-row md:flex-wrap md:flex-[unset] md:self-stretch sm:flex-col">
              <div className="w-[197.3px] relative h-[164.8px] sm:!mb-[40px]">
                <div
                  className="absolute top-[47.8px] left-[0px] leading-[150%] inline-block w-[135.7px] cursor-pointer"
                  onClick={onAboutUsTextClick}
                >
                  About Us
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[150%] font-semibold inline-block w-[174.7px]">
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
                  How we work?
                </div>
              </div>
              <div className="w-[197.8px] relative h-[164.8px] sm:!mb-[40px]">
                <div
                  className="absolute top-[47.8px] left-[0.5px] leading-[150%] inline-block w-[109.6px] cursor-pointer"
                  onClick={onScratchTextClick}
                >
                  Scratch
                </div>
                <div className="absolute top-[0px] left-[0.5px] text-xl leading-[150%] font-semibold inline-block w-[131.6px]">
                  Courses
                </div>
                <div
                  className="absolute top-[78.8px] left-[0.5px] leading-[150%] inline-block w-[197.3px] cursor-pointer"
                  onClick={onWebDevelopmentTextClick}
                >
                  Web Development
                </div>
                <div
                  className="absolute top-[109.9px] left-[0px] leading-[150%] inline-block w-[156px] cursor-pointer"
                  onClick={onGameDevelopmentTextClick}
                >
                  App Development
                </div>
                <div
                  className="absolute top-[140.8px] left-[0.5px] leading-[150%] inline-block w-[164.4px] cursor-pointer"
                  onClick={onPythonTextClick}
                >
                  Python
                </div>
              </div>
              <div className="w-[197.3px] relative h-[164.8px]">
                <div className="absolute top-[47.8px] left-[0px] leading-[150%] inline-block w-[172.9px]">
                  Worksheet
                </div>
                <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium font-roboto inline-block w-[76.7px]">
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
                  className="absolute top-[140.8px] left-[0px] leading-[150%] inline-block w-[197.3px] cursor-pointer"
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
      {isImagePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeImagePopup}
        >
          <Image1 onClose={closeImagePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default PartnershipPage;
