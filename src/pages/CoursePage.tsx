import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const CoursePage: FunctionComponent = () => {
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

  const onCardscourseContainerClick = useCallback(() => {
    //TODO: link
  }, []);

  const onButtonswhiteContentContainerClick = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onCardscourseContainer1Click = useCallback(() => {
    //TODO: link
  }, []);

  const onButtonswhiteContentContainer2Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onButtonscurriculumContainerClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onCardscourseContainer2Click = useCallback(() => {
    //TODO: link
  }, []);

  const onButtonswhiteContentContainer3Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onButtonscurriculumContainer2Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onCardscourseContainer3Click = useCallback(() => {
    //TODO: link
  }, []);

  const onButtonswhiteContentContainer4Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onButtonscurriculumContainer3Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onCardscourseContainer4Click = useCallback(() => {
    //TODO: link
  }, []);

  const onButtonswhiteContentContainer5Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onButtonscurriculumContainer4Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onCardscourseContainer5Click = useCallback(() => {
    //TODO: link
  }, []);

  const onButtonswhiteContentContainer6Click = useCallback(() => {
    navigate("/curriculumbycoursepage");
  }, [navigate]);

  const onButtonscurriculumContainer5Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonscurriculumContainer6Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainer7Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonscurriculumContainerClick1 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainerClick2 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainer8Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContentClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContent1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent1Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContent2Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent2Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContent3Click = useCallback(() => {
    navigate("/commingsoonpage");
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
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-17xl text-black font-body-tiny-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[5]">
          <header className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="w-[1240px] flex flex-row items-center justify-between">
              <div
                className="flex flex-row items-center justify-center p-2.5 cursor-pointer"
                onClick={onLogoContainerClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDeskLab
                </div>
              </div>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black font-body-tiny-400 sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onCoursesContainerClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[120%] font-semibold font-body-tiny-400 text-aqua-deep text-left inline-block">
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
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-tiny-400 text-black text-left inline-block">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[4] text-29xl text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                All Coding Courses
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Pick from a wide range of online coding courses for kids and set
                your children on the path of success
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
            >
              <div className="relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                View a Courses
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-5@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[50px] z-[3] text-center">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Specialized coding courses
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Learn only what you want to learn with coding courses focused on
                app development, website building, game development, data
                science, or more
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[50px] text-left text-base">
            <div
              className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
              onClick={onCardscourseContainerClick}
            >
              <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                <img
                  className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                  alt=""
                  src="/scratchprogrammingpng@2x.png"
                />
                <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[150%]">Web Development</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Scratch Programming
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding fundamental programming concepts through
                      visual coding.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire1.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Learning to create interactive stories, games, and
                      animations.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire2.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Exploring computational thinking and problem-solving
                      skills.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chalkboardteacher1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Grade 3-10
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/book--undefined--glyph-undefined.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules & 36 Lessons`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/microsoftwordlogo.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/question1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/celltower.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      100+ fun activities and projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scratch Programming Certificate
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[5px] text-center text-lg text-aqua-deep">
                <div
                  className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentContainerClick}
                >
                  <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                    View Curriculum
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center">
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
              onClick={onCardscourseContainer1Click}
            >
              <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                <img
                  className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                  alt=""
                  src="/scratchprogrammingpng@2x.png"
                />
                <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[150%]">
                    Game Development
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Robolox Programming
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Mastering the tools and features of Roblox Studio for
                      building immersive game environments.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire1.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Learning Lua programming language to create interactive
                      game mechanics and functionalities.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire2.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding the fundamentals of game design to create
                      engaging gameplay experiences.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chalkboardteacher1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Grade 3-10
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/book--undefined--glyph-undefined.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules & 36 Lessons`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/microsoftwordlogo.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/question1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/celltower.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      100+ fun activities and projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scratch Programming Certificate
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[5px] text-center text-lg text-aqua-deep">
                <div
                  className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentContainer2Click}
                >
                  <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                    View Curriculum
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer"
                  onClick={onButtonscurriculumContainerClick}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
              onClick={onCardscourseContainer2Click}
            >
              <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                <img
                  className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                  alt=""
                  src="/scratchprogrammingpng@2x.png"
                />
                <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[150%]">App Development</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Thunkable Programming
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Building mobile apps without traditional coding using a
                      visual programming interface.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire1.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Integrating various features such as sensors, APIs, and
                      databases into app development.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire2.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding the app development lifecycle from design to
                      deployment.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chalkboardteacher1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Grade 3-10
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/book--undefined--glyph-undefined.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules & 36 Lessons`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/microsoftwordlogo.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/question1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/celltower.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      100+ fun activities and projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scratch Programming Certificate
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[5px] text-center text-lg text-aqua-deep">
                <div
                  className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentContainer3Click}
                >
                  <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                    View Curriculum
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer"
                  onClick={onButtonscurriculumContainer2Click}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
              onClick={onCardscourseContainer3Click}
            >
              <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                <img
                  className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                  alt=""
                  src="/scratchprogrammingpng@2x.png"
                />
                <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[150%]">{`IOT & Robotics`}</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      IOT Based Scratch
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Learning about smart devices and how they interact with
                      the internet to perform various tasks.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire1.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding the role of sensors in collecting data and
                      actuators in performing actions in IoT systems.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire2.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Introducing simple programming concepts through visual
                      programming languages suitable for kids.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chalkboardteacher1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Grade 6-12
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/book--undefined--glyph-undefined.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules & 36 Lessons`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/microsoftwordlogo.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/question1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/celltower.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      100+ fun activities and projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scratch Programming Certificate
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[5px] text-center text-lg text-aqua-deep">
                <div
                  className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentContainer4Click}
                >
                  <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                    View Curriculum
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer"
                  onClick={onButtonscurriculumContainer3Click}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
              onClick={onCardscourseContainer4Click}
            >
              <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                <img
                  className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                  alt=""
                  src="/scratchprogrammingpng@2x.png"
                />
                <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[150%]">
                    Artificial Intelligence
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Python Programming
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      {" "}
                      Introduction to Python programming language syntax and
                      concepts.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire1.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding data types, variables, loops, and
                      conditionals. Learning to solve problems and automate
                      tasks using Python scripts.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire2.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding how to work on data sets using Bussiness
                      Intelligence tools and machine learning models for
                      different purposes
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chalkboardteacher1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Grade 7 and above
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/book--undefined--glyph-undefined.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules & 36 Lessons`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/microsoftwordlogo.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/question1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/celltower.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      100+ fun activities and projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scratch Programming Certificate
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[5px] text-center text-lg text-aqua-deep">
                <div
                  className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentContainer5Click}
                >
                  <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                    View Curriculum
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer"
                  onClick={onButtonscurriculumContainer4Click}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-[350px] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border gap-[10px] cursor-pointer"
              onClick={onCardscourseContainer5Click}
            >
              <div className="self-stretch relative rounded-t-md rounded-b-none bg-nero h-[99px] text-darkslateblue">
                <img
                  className="absolute top-[-38px] right-[-34px] w-[227px] h-[123px] overflow-hidden object-cover"
                  alt=""
                  src="/scratchprogrammingpng@2x.png"
                />
                <div className="absolute top-[37px] left-[-3px] rounded-8xs bg-nero h-[37px] flex flex-row items-center justify-center p-2.5 box-border">
                  <div className="relative leading-[150%]">Web Development</div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-5xl text-dodger-blue">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Web Development
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px] text-sm text-black">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Understanding of UI/UX principles using Figma then HTML,
                      CSS, and JavaScript for creating interactive web pages.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire1.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      {" "}
                      Learning about responsive design and cross-browser
                      compatibility.
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/fire2.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px] whitespace-pre-wrap">
                      Exploring different web development frameworks and
                      libraries for enhanced functionality in client-side,
                      server-side and database.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] text-sm">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/chalkboardteacher1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Grade 7 and above
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/book--undefined--glyph-undefined.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`6 Modules & 36 Lessons`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/microsoftwordlogo.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Study Materials `}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/question1.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">{`Worksheets & Quizzes`}</div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-6 relative h-6 overflow-hidden shrink-0"
                    alt=""
                    src="/celltower.svg"
                  />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      100+ fun activities and projects
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scratch Programming Certificate
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Exclusive access to competitions
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-row items-center justify-start gap-[10px]">
                  <img className="w-6 relative h-6" alt="" src="/vector1.svg" />
                  <div className="flex-1 bg-nero flex flex-row items-center justify-center">
                    <div className="flex-1 relative leading-[150%]">
                      Scholarships for top performers
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[5px] text-center text-lg text-aqua-deep">
                <div
                  className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentContainer6Click}
                >
                  <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">
                    View Curriculum
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer"
                  onClick={onButtonscurriculumContainer5Click}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[50px] z-[2] text-center sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                All-in-one generalized coding courses
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Learn to create apps, websites, games and more in our extensive
                online coding courses for kids who want to be real all-rounders
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[50px] text-base font-inter sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[95px] text-5xl text-purple-heart">
                  <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[358px]">
                    Level 1
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[50px]">
                  <div className="self-stretch relative leading-[22px] font-semibold">
                    Introduction to Basic Programming Concepts
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-tiny-400">
                  <div className="w-full relative leading-[150%] inline-block max-w-[358px]">
                    A perfect course for kids who want to test drive to coding
                    road.
                  </div>
                </div>
                <div className="self-stretch h-[42px] flex flex-col items-center justify-center text-sm-8 font-segoe-ui">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="relative leading-[21px] font-semibold">
                      100+ Activities | 100+ Quizzes
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                    <div className="relative leading-[21px] font-semibold">
                      Duration: 12 months
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-tiny-400">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/archive.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`Module 1 & 2 of all specialized courses`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/chats.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Learn live with expert Computer Science teacher
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/cardholder.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`40+ robust physical & online classes`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/campfire.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`100+ fun activities, quizzes & projects`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/airplay.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Stem.org accredited certificate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/bookmarkssimple.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Experience of coding competetions
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/lifebuoy1.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-black">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/videoconference.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Live 1:1 class with Coding Instructor
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/computertower.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Receive monthly progress reports
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray">
                  <div className="w-[310px] hidden flex-col items-center justify-center gap-[9px]">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Sequencing and Algorithms:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Block-Based Programming (Using Scratch or Blockly):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Problem Solving:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[9px] text-black">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Level 1 CoDesk developer certificate
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Lifetime community access
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Study materials and resources toolkit
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Exclusive access to competitions
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Scholarships for top three performers in our low coding
                        program
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[310px] hidden flex-row items-center justify-center cursor-pointer text-center text-lg text-aqua-deep"
                    onClick={onButtonscurriculumContainer6Click}
                  >
                    <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                      <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                      <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                        <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                          <img
                            className="w-5 flex-1 relative max-h-full"
                            alt=""
                            src="/frame.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer text-center text-lg text-aqua-deep"
                  onClick={onButtonscurriculumContainer7Click}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[95px] text-5xl text-purple-heart">
                  <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[358px]">
                    Level 2
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[50px]">
                  <div className="self-stretch relative leading-[22px] font-semibold">
                    Intermidiate Programming Concepts
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-tiny-400">
                  <div className="w-full relative leading-[150%] inline-block max-w-[358px]">
                    A course for those who want to master the art of coding and
                    create a better future through code.
                  </div>
                </div>
                <div className="self-stretch h-[42px] flex flex-col items-center justify-center text-sm-8 font-segoe-ui">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="relative leading-[21px] font-semibold">
                      100+ Activities | 100+ Quizzes
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                    <div className="relative leading-[21px] font-semibold">
                      Duration: 12 months
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-tiny-400">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/archive.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`Module 3 & 4 of all specialized courses`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/chats.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Learn live with expert Computer Science teacher
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/cardholder.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`40+ robust physical & online classes`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/campfire.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`100+ fun activities, quizzes & projects`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/airplay.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Stem.org accredited certificate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/bookmarkssimple.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Experience of coding competetions
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/lifebuoy1.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-black">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/videoconference.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Live 1:1 class with Coding Instructor
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/computertower.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Receive monthly progress reports
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray">
                  <div className="w-[310px] hidden flex-col items-center justify-center gap-[9px]">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Sequencing and Algorithms:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Block-Based Programming (Using Scratch or Blockly):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Problem Solving:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[9px] text-black">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Level 2 CODesk developer certificate
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Lifetime community access
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Study materials and resources toolkit
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Exclusive access to competitions
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Scholarships for top three performers in our low coding
                        program
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[310px] hidden flex-row items-center justify-center cursor-pointer text-center text-lg text-aqua-deep"
                    onClick={onButtonscurriculumContainerClick1}
                  >
                    <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                      <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                      <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                        <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                          <img
                            className="w-5 flex-1 relative max-h-full"
                            alt=""
                            src="/frame.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center text-center text-lg text-aqua-deep">
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[95px] text-5xl text-purple-heart">
                  <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[358px]">
                    Level 3
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-start py-0 px-[50px]">
                  <div className="self-stretch relative leading-[22px] font-semibold">
                    Advanced Programming Concepts
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-tiny-400">
                  <div className="w-full relative leading-[150%] inline-block max-w-[358px]">
                    A perfect course for kids who want to use coding to solve
                    real-world problems and create a better future.
                  </div>
                </div>
                <div className="self-stretch h-[42px] flex flex-col items-center justify-center text-sm-8 font-segoe-ui">
                  <div className="self-stretch flex flex-col items-center justify-start">
                    <div className="relative leading-[21px] font-semibold">
                      100+ Activities | 100+ Quizzes
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                    <div className="relative leading-[21px] font-semibold">
                      Duration: 12 months
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-tiny-400">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/archive.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`Module 5 & 6 of all specialized courses`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/chats.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Learn live with expert Computer Science teacher
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/cardholder.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`40+ robust physical & online classes`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/campfire.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">{`100+ fun activities, quizzes & projects`}</div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/airplay.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Stem.org accredited certificate
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/bookmarkssimple.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Experience of coding competetions
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/lifebuoy1.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Lifetime access to course content
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-black">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/videoconference.svg"
                    />
                    <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                      Live 1:1 class with Coding Instructor
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/computertower.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
                      Receive monthly progress reports
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray">
                  <div className="w-[310px] hidden flex-col items-center justify-center gap-[9px]">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Sequencing and Algorithms:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Block-Based Programming (Using Scratch or Blockly):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Problem Solving:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                        Creative Projects (Incorporating Scratch):
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[9px] text-black">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Level 3 CoDesk developer certificate
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Lifetime community access
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Study materials and resources toolkit
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Exclusive access to competitions
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Scholarships for top three performers in our low coding
                        program
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-[310px] hidden flex-row items-center justify-center cursor-pointer text-center text-lg text-aqua-deep"
                    onClick={onButtonscurriculumContainerClick2}
                  >
                    <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                      <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                      <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                        <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                          <img
                            className="w-5 flex-1 relative max-h-full"
                            alt=""
                            src="/frame.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="self-stretch flex flex-row items-center justify-center cursor-pointer text-center text-lg text-aqua-deep"
                  onClick={onButtonscurriculumContainer8Click}
                >
                  <div className="self-stretch flex-1 rounded bg-nero flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
                    <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Download Curriculum `}</div>
                    <div className="self-stretch w-[27.5px] flex flex-col items-start justify-center py-0 pr-0 pl-[7.5px] box-border">
                      <div className="self-stretch h-5 overflow-hidden shrink-0 flex flex-col items-center justify-center">
                        <img
                          className="w-5 flex-1 relative max-h-full"
                          alt=""
                          src="/frame.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="self-stretch bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[1] text-center text-17xl text-black font-body-tiny-400 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Coding Workshops
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image12@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    {" "}
                    Single Day Codeshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for kids who want to test drive to coding
                    road.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 6-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      5+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      10+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    First class free!
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onButtonsorangeContent1Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng3@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image13@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Multi Day Codeshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A course for those who want to master the art of coding and
                    create a better future through code.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 6-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      10+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      15+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    First class free!
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContent1Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onButtonsorangeContent2Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng3@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image14@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Week Long Codeshops
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-base">
                  <div className="self-stretch relative leading-[150%]">
                    A perfect course for kids who want to use coding to solve
                    real-world problems and create a better future.
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      Ages 6-18
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      20 Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      30+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    First class free!
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContent2Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                  onClick={onButtonsorangeContent3Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng3@2x.png"
              />
            </div>
          </div>
        </section>
        <div className="self-stretch flex flex-col items-center justify-start z-[0] text-13xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background1@2x.png"
          />
          <div className="self-stretch bg-footer-header flex flex-row flex-wrap items-center justify-center py-[33px] px-[84px] gap-[0px_44px] lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-[5px] sm:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[14px] !mb-[40px] md:flex-[unset] md:self-stretch">
              <div className="w-[255px] relative leading-[120%] font-semibold inline-block">
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

export default CoursePage;
