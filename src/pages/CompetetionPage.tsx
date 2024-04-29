import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const CompetetionPage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [isDrawerMenusOpen, setDrawerMenusOpen] = useState(false);

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate("/quizpage");
  }, [navigate]);

  const onCompetetionsContainerClick = useCallback(() => {
    navigate("/competetionpage");
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
    const anchor = document.querySelector("[data-scroll-to='bodyContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBodyContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='bodyContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }
  }, []);

  const onLabelliveContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='liveContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLabelupcomingContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='upcomingContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLabelpracticeContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='practiceContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLabelcompletedContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='completedContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonsgreenContentContainerClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsgreenContentContainer2Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsorangeContent1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsgreenContentContainer3Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContentContainerClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsorangeContent2Click = useCallback(() => {
    navigate("/quizpage");
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
      <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-left text-29xl text-black font-body-tiny-400 sm:py-[30px] sm:px-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[3]">
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
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black font-body-tiny-400 sm:flex">
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
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end text-[inherit]"
                    to="/quizpage"
                    onClick={onQuizzesClick}
                  >
                    <div className="relative leading-[150%]">Quizzes</div>
                  </Link>
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer text-base text-aqua-deep"
                    onClick={onCompetetionsContainerClick}
                  >
                    <div className="relative leading-[120%] font-semibold">
                      Competetions
                    </div>
                  </div>
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
                Competitive Programing
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Competitive programming for kids offers a myriad of advantages,
                providing them with a structured platform to enhance
                problem-solving skills, logical reasoning, and algorithmic
                thinking from a young age. Through engaging in coding challenges
                and competitions, children not only cultivate computational
                thinking but also foster perseverance, teamwork, and creativity.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                View a Competetions
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-52@2x.png"
          />
        </div>
        <div
          className="self-stretch flex flex-row items-start justify-center gap-[20px] relative cursor-pointer z-[1] text-center text-15xl-6 font-inter lg:flex-col md:flex-col"
          onClick={onBodyContainerClick}
        >
          <div className="w-[900px] flex flex-col items-start justify-start z-[1] lg:self-stretch lg:w-auto md:w-full">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 z-[2]">
              <b className="flex-1 relative leading-[42px]">{`All coding competitions & hackathons`}</b>
            </div>
            <div className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center pt-0 px-0 pb-px gap-[32px] sticky top-[77] [background:white] z-[1] text-xs font-body-tiny-400">
              <div
                className="w-[121px] rounded bg-nero h-9 flex flex-row items-center justify-start py-0 px-0.5 box-border gap-[12px] cursor-pointer text-aqua-deep"
                onClick={onLabelliveContainerClick}
              >
                <div className="flex-1 relative leading-[130%] font-semibold">
                  <span>Live</span>
                  <span className="text-black">{` `}</span>
                </div>
                <div className="w-[33px] rounded bg-aqua-deep flex flex-row items-start justify-start py-0.5 px-2 box-border text-sm text-nero font-segoe-ui">
                  <div className="flex-1 relative leading-[21px] font-semibold">
                    1
                  </div>
                </div>
              </div>
              <div
                className="w-[121px] rounded bg-nero h-9 flex flex-row items-center justify-start py-0 px-0.5 box-border gap-[12px] cursor-pointer"
                onClick={onLabelupcomingContainerClick}
              >
                <div className="flex-1 relative leading-[130%] font-semibold">{`Upcoming `}</div>
                <div className="w-[33px] rounded bg-aqua-deep flex flex-row items-start justify-start py-0.5 px-2 box-border text-sm text-nero font-segoe-ui">
                  <div className="flex-1 relative leading-[21px] font-semibold">
                    1
                  </div>
                </div>
              </div>
              <div
                className="w-[121px] rounded bg-nero h-9 flex flex-row items-center justify-start py-0 px-0.5 box-border gap-[12px] cursor-pointer"
                onClick={onLabelpracticeContainerClick}
              >
                <div className="flex-1 relative leading-[130%] font-semibold">{`Practice `}</div>
                <div className="w-[33px] rounded bg-aqua-deep flex flex-row items-start justify-start py-0.5 px-2 box-border text-sm text-nero font-segoe-ui">
                  <div className="flex-1 relative leading-[21px] font-semibold">
                    1
                  </div>
                </div>
              </div>
              <div
                className="w-[121px] rounded bg-nero h-9 flex flex-row items-center justify-start py-0 px-0.5 box-border gap-[12px] cursor-pointer"
                onClick={onLabelcompletedContainerClick}
              >
                <div className="flex-1 relative leading-[130%] font-semibold">{`Completed `}</div>
                <div className="w-[33px] rounded bg-aqua-deep flex flex-row items-start justify-start py-0.5 px-2 box-border text-sm text-nero font-segoe-ui">
                  <div className="flex-1 relative leading-[21px] font-semibold">
                    1
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start p-5 gap-[16px] z-[0] text-left text-lgi-5 font-segoe-ui">
              <div className="self-stretch flex flex-col items-center justify-center pt-[50px] px-0 pb-0 gap-[16px] relative text-center text-5xl text-aqua-deep font-body-tiny-400">
                <div className="self-stretch flex flex-col items-start justify-start text-left text-lgi-5 font-segoe-ui">
                  <div className="self-stretch relative leading-[30px] font-semibold">
                    Live
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px]">
                  <div className="flex-1 flex flex-row items-center justify-between md:flex-col">
                    <img
                      className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/iconpng1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-center justify-center gap-[10px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[150%] font-semibold">
                            Nepal CodeWars 2024 Kid’s Hackathon
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-base text-chateau-green">
                          <div className="flex-1 relative leading-[150%]">
                            Hosted by: Hewlett CoDesk Innovations
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-sm text-black">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Team size: Upto 3 members
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Ends in: 36 days, 21 hrs, 17 mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[230px] rounded bg-chateau-green box-border h-12 flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-lg text-nero border-[1px] border-solid border-nero md:w-full sm:w-full"
                    onClick={onButtonsgreenContentContainerClick}
                  >
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Register & Join`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px]">
                  <div className="flex-1 flex flex-row items-center justify-between md:flex-col">
                    <img
                      className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/iconpng1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-center justify-center gap-[10px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[150%] font-semibold">
                            Nepal CodeWars 2024 Kid’s Hackathon
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-base text-chateau-green">
                          <div className="flex-1 relative leading-[150%]">
                            Hosted by: Hewlett CoDesk Innovations
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-sm text-black">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Team size: Upto 3 members
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Ends in: 36 days, 21 hrs, 17 mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[230px] rounded bg-chateau-green box-border h-12 flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-lg text-nero border-[1px] border-solid border-nero md:w-full sm:w-full"
                    onClick={onButtonsgreenContentContainer2Click}
                  >
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Register & Join`}</div>
                  </div>
                </div>
                <div
                  className="absolute left-[0] top-[-114px]"
                  data-scroll-to="liveContainer"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[16px] relative">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[30px] font-semibold">
                    Upcoming
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px] text-center text-5xl text-aqua-deep font-body-tiny-400">
                  <div className="flex-1 flex flex-row items-center justify-between md:flex-col">
                    <img
                      className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/iconpng1@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-center justify-center gap-[10px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[150%] font-semibold">
                            Nepal CodeWars 2024 Kid’s Hackathon
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-base text-chateau-green">
                          <div className="flex-1 relative leading-[150%]">
                            Hosted by: Hewlett Packard Enterprise
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-sm text-black">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Team size: Upto 3 members
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Ends in: 36 days, 21 hrs, 17 mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep w-[230px] rounded box-border flex flex-row items-center justify-center border-[1px] border-solid border-nero md:w-full"
                    autoFocus={true}
                    onClick={onButtonsorangeContent1Click}
                  >
                    <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                      Register Now
                    </div>
                  </button>
                </div>
                <div
                  className="absolute left-[0] top-[-114px]"
                  data-scroll-to="upcomingContainer"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[16px] relative">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[30px] font-semibold">
                    Practice
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px] text-center text-5xl text-aqua-deep font-body-tiny-400">
                  <div className="flex-1 flex flex-row items-center justify-between md:flex-col">
                    <img
                      className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/iconpng2@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-center justify-center gap-[10px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[150%] font-semibold">
                            HPE CodeWars 2024 Hackathon
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-base text-chateau-green">
                          <div className="flex-1 relative leading-[150%]">
                            Hosted by: Hewlett Packard Enterprise
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-sm text-black">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Team size: Upto 3 members
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Ends in: 36 days, 21 hrs, 17 mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[230px] rounded bg-chateau-green box-border h-12 flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-lg text-nero border-[1px] border-solid border-nero md:w-full"
                    onClick={onButtonsgreenContentContainer3Click}
                  >
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                      Start now
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[0] top-[-114px]"
                  data-scroll-to="practiceContainer"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start pt-[50px] px-0 pb-0 gap-[16px] relative">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[30px] font-semibold">
                    Completed
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-between p-[15px] text-center text-5xl text-aqua-deep font-body-tiny-400">
                  <div className="flex-1 flex flex-row items-center justify-between md:flex-col">
                    <img
                      className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/iconpng2@2x.png"
                    />
                    <div className="flex-1 flex flex-col items-center justify-center gap-[10px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-col items-start justify-start">
                        <div className="self-stretch flex flex-row items-start justify-start">
                          <div className="flex-1 relative leading-[150%] font-semibold">
                            HPE CodeWars 2024 Hackathon
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start text-base text-chateau-green">
                          <div className="flex-1 relative leading-[150%]">
                            Hosted by: Hewlett Packard Enterprise
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start text-sm text-black">
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Team size: Upto 3 members
                          </div>
                        </div>
                        <div className="self-stretch flex flex-row items-center justify-start">
                          <div className="flex-1 relative leading-[120%] font-semibold">
                            Ends in: 36 days, 21 hrs, 17 mins
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[230px] rounded bg-nero box-border flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-lg border-[1px] border-solid border-aqua-deep md:w-full"
                    onClick={onButtonswhiteContentContainerClick}
                  >
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                      View Competetion
                    </div>
                  </div>
                </div>
                <div
                  className="absolute left-[0] top-[-114px]"
                  data-scroll-to="completedContainer"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-row items-start justify-center z-[0] text-left text-5xl font-body-tiny-400 lg:w-full lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-start p-2.5 box-border gap-[15px] sticky top-[77] lg:flex md:flex">
              <div className="self-stretch relative leading-[150%] font-semibold text-transparent !bg-clip-text [background:linear-gradient(16.28deg,_)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Play while you learn & win amazing prizes`}</div>
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
                alt=""
                src="/image15@2x.png"
              />
              <div className="self-stretch bg-nero box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[5px] min-h-[52.5px] text-base border-[1px] border-solid border-nero">
                <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                  Real-time Leaderboard
                </div>
                <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                  Weekly Winner Awards
                </div>
                <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                  Championships
                </div>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  autoFocus={true}
                  onClick={onButtonsorangeContent2Click}
                >
                  <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Take a quiz now
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute left-[0] top-[-77px]"
            data-scroll-to="bodyContainer"
          />
        </div>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-13xl">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background1@2x.png"
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

export default CompetetionPage;
