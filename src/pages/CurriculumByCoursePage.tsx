import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const CurriculumByCoursePage: FunctionComponent = () => {
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

  const onCoursesContainerClick = useCallback(() => {
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

  const onAboutUs2Click = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const openDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(true);
  }, []);

  const closeDrawerMenus = useCallback(() => {
    setDrawerMenusOpen(false);
  }, []);

  const onButtonswhiteContentClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='courseDetailContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonsorangeContentClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonscurriculumContainerClick = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonswhiteContent1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsorangeContent1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-start justify-center p-5 box-border gap-[20px] text-left text-base text-black1 font-heading-04-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[4]">
          <header className="self-stretch rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="w-[1240px] flex flex-row items-center justify-between">
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center p-2.5 text-[inherit]"
                to="/"
                onClick={onLogoClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDeskLab
                </div>
              </Link>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black1 font-heading-04-600 sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <div
                    className="flex flex-row items-center justify-end cursor-pointer"
                    onClick={onCoursesContainerClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base leading-[120%] font-semibold font-heading-04-600 text-aqua-deep text-left inline-block">
                      Courses
                    </button>
                  </div>
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
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/aboutuspage"
                    onClick={onAboutUs2Click}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-heading-04-600 text-black1 text-left inline-block">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[3] text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start text-29xl">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                Scratch Programming
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  An intensive course to teach kids how to create stunning,
                </p>
                <p className="m-0">interactive and feature-rich websites</p>
              </div>
            </div>
            <div className="w-[278px] flex flex-row items-start justify-start p-[5px] box-border gap-[5px] text-center text-black1 font-segoe-ui">
              <div className="flex-1 bg-nero flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black1">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Grade
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black1">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    3-9
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black1">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Lesson
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black1">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    36
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero flex flex-col items-end justify-start gap-[10px]">
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black1">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    Activities
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center p-2.5 border-[1px] border-solid border-black1">
                  <div className="flex-1 relative leading-[24px] font-semibold">
                    100+
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[15px]">
              <button
                className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                onClick={onButtonswhiteContentClick}
              >
                <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                  view Curriculum
                </div>
              </button>
              <button
                className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={onButtonsorangeContentClick}
              >
                <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero text-center inline-block max-h-[58px]">
                  Try a free class
                </div>
              </button>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-53@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-col items-start justify-center relative z-[2] text-17xl">
          <div className="self-stretch flex flex-row items-start justify-center gap-[20px] lg:flex-col">
            <div className="w-[859px] flex flex-col items-start justify-start z-[1] lg:w-full lg:order-[2]">
              <div className="self-stretch bg-nero flex flex-col items-start justify-center py-0 px-[5px] gap-[5px] z-[4]">
                <div className="self-stretch flex flex-row items-center justify-start p-2.5">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    Description
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-0 text-sm">
                  <div className="flex-1 relative leading-[150%]">
                    <p className="m-0">
                      Scratch is a visual programming language and online
                      community targeted primarily at children, created by the
                      Lifelong Kindergarten Group at the MIT Media Lab. Scratch
                      allows users to create interactive stories, games, and
                      animations by snapping together code blocks rather than
                      typing text-based commands.
                    </p>
                    <p className="m-0">
                      One of the key features of Scratch is its simplicity and
                      accessibility. The language is designed to be easy to
                      learn, even for young children, while still offering
                      enough depth to create complex projects. Instead of
                      writing lines of code, users drag and drop graphical
                      blocks that represent programming concepts like loops,
                      conditionals, and variables. This approach lowers the
                      barrier to entry for newcomers to programming, allowing
                      them to focus on the logic and creativity of their
                      projects rather than syntax.
                    </p>
                    <p className="m-0">
                      Scratch also includes a library of sprites (characters or
                      objects) and backgrounds that users can use to populate
                      their projects. Users can also import their own images,
                      sounds, and music to personalize their creations further.
                    </p>
                    <p className="m-0">
                      In addition to its programming environment, Scratch offers
                      an online community where users can share their projects,
                      collaborate with others, and explore projects created by
                      fellow users. This aspect of Scratch fosters a supportive
                      and creative community where users can learn from each
                      other, get feedback on their work, and find inspiration
                      for their next project.
                    </p>
                    <p className="m-0">
                      Overall, Scratch provides a fun and engaging platform for
                      learning programming concepts and fostering creativity,
                      making it a popular choice for educators teaching computer
                      science to children and beginners of all ages.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center z-[3] text-13xl font-inter">
                <div className="flex-1 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] max-h-[709px]">
                  <div className="self-stretch bg-nero flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[40px] font-semibold">
                        Course Requirement
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-sm font-heading-04-600">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[9px]">
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Curiosity and Creativity: An open mind and a
                          willingness to explore and experiment with coding
                          concepts and project ideas are essential for success
                          in this course.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Basic Computer Skills: Familiarity with using a
                          computer and navigating web browsers is helpful but
                          not required.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Scratch Account: Creating a free account on the
                          Scratch website is necessary to save and share
                          projects and to participate in the Scratch community.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Access to a Computer: Learners should have access to a
                          computer or laptop with internet connectivity.
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Adding JavaScript to websites
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          File handling using Python
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Using NodeJS on websites
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Hands-on website building projects
                        </div>
                      </div>
                    </div>
                    <div className="w-80 bg-ghostwhite hidden flex-col items-center justify-center gap-[9px] text-darkslategray">
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Level 1 Certificate
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Game, app development certificates
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Scholarships for top five performers
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Lifetime community access
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center z-[2]">
                <div className="flex-1 shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] max-h-[709px]">
                  <div className="self-stretch bg-nero flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-center">
                      <div className="self-stretch relative leading-[120%] font-semibold">
                        Who this course for?
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-sm">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[9px]">
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Hobbyists and Enthusiasts: Anyone interested in
                          creating animations, games, and interactive stories as
                          a hobby or for personal projects.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Parents and Guardians: Those interested in introducing
                          their children to programming and fostering their
                          creativity and logical thinking skills.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Educators: Teachers looking to integrate programming
                          and computational thinking into their curriculum,
                          particularly for students in elementary and middle
                          school.
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Beginners in Programming: Individuals with little to
                          no programming experience who want to learn coding in
                          a fun and interactive way.
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Adding JavaScript to websites
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          File handling using Python
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Using NodeJS on websites
                        </div>
                      </div>
                      <div className="w-80 hidden flex-row items-center justify-center gap-[5px] text-darkslategray">
                        <img
                          className="w-8 relative h-8 overflow-hidden shrink-0"
                          alt=""
                          src="/fire3.svg"
                        />
                        <div className="flex-1 relative leading-[150%]">
                          Hands-on website building projects
                        </div>
                      </div>
                    </div>
                    <div className="w-80 bg-ghostwhite hidden flex-col items-center justify-center gap-[9px] text-darkslategray">
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Level 1 Certificate
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Game, app development certificates
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Scholarships for top five performers
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                        <img
                          className="w-6 relative h-6 overflow-hidden shrink-0"
                          alt=""
                          src="/trophy.svg"
                        />
                        <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                          Lifetime community access
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] max-h-[709px] z-[1] text-sm">
                <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] text-center text-17xl text-darkslategray">
                  <div className="self-stretch flex flex-col items-start justify-start text-left text-black1">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      What you will learn in this course?
                    </div>
                  </div>
                  <div className="w-[330px] hidden flex-col items-center justify-center min-h-[63px] text-sm">
                    <div className="w-full relative tracking-[-0.01em] leading-[22px] inline-block max-w-[358px]">
                      <p className="m-0">
                        A perfect course for kids who want to excel at
                      </p>
                      <p className="m-0">
                        coding and build complex games and applications.
                      </p>
                    </div>
                  </div>
                  <div className="w-[330px] h-[42px] hidden flex-col items-center justify-center text-sm-8 font-segoe-ui">
                    <div className="w-[330px] hidden flex-col items-center justify-start">
                      <div className="relative leading-[21px] font-semibold">
                        100+ Activities | 100+ Quizzes
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                      <div className="relative leading-[21px] font-semibold">
                        Duration: 4 months
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/checkcircle.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    <p className="m-0">Fundamentals of Scratch Programming:</p>
                    <ul className="m-0 font-inherit text-inherit pl-[19px]">
                      <li className="mb-0">
                        Understanding the Scratch interface and its components.
                      </li>
                      <li className="mb-0">
                        Learning basic programming concepts such as sequencing,
                        loops, conditionals, and variables using Scratch blocks.
                      </li>
                      <li className="mb-0">
                        Exploring sprite creation, motion, and interactivity.
                      </li>
                      <li>
                        Incorporating sound, music, and other multimedia
                        elements into projects.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/checkcircle.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    <p className="m-0">Community Engagement:</p>
                    <ul className="m-0 font-inherit text-inherit pl-[19px]">
                      <li className="mb-0">
                        Participating in the Scratch online community to share
                        projects, seek feedback, and collaborate with others.
                      </li>
                      <li>
                        Exploring diverse projects created by fellow Scratch
                        users for inspiration and learning.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden flex flex-col items-start justify-start p-2.5 box-border gap-[10px] max-h-[709px] z-[0] text-center text-darkslategray">
                <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-col items-start justify-start text-left text-black1">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      What you’ll achieve?
                    </div>
                  </div>
                  <div className="w-[330px] hidden flex-col items-center justify-center min-h-[63px] text-sm">
                    <div className="w-full relative tracking-[-0.01em] leading-[22px] inline-block max-w-[358px]">
                      <p className="m-0">
                        A perfect course for kids who want to excel at
                      </p>
                      <p className="m-0">
                        coding and build complex games and applications.
                      </p>
                    </div>
                  </div>
                  <div className="w-[330px] h-[42px] hidden flex-col items-center justify-center text-sm-8 font-segoe-ui">
                    <div className="w-[330px] hidden flex-col items-center justify-start">
                      <div className="relative leading-[21px] font-semibold">
                        100+ Activities | 100+ Quizzes
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-center text-sm-6">
                      <div className="relative leading-[21px] font-semibold">
                        Duration: 4 months
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch bg-nero flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm">
                  <div className="w-80 hidden flex-col items-center justify-center gap-[9px]">
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
                  <div className="self-stretch bg-ghostwhite flex flex-col items-center justify-center gap-[9px] text-black1">
                    <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                      <img
                        className="w-6 relative h-6 overflow-hidden shrink-0"
                        alt=""
                        src="/trophy.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        Web Development Certificate
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
                        Downloadable resources
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
                        Scholarships for top five performers
                      </div>
                    </div>
                  </div>
                  <div
                    className="w-80 hidden flex-row items-center justify-center cursor-pointer text-center text-lg text-aqua-deep"
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
            </div>
            <div className="self-stretch w-[521px] flex flex-row items-start justify-center sticky top-[70] z-[0] text-sm font-inter lg:self-stretch lg:w-full lg:order-[1]">
              <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-center p-2.5 sticky gap-[15px] top-[70] lg:flex-1">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                  alt=""
                  src="/image16@2x.png"
                />
                <div className="self-stretch bg-nero flex flex-col items-start justify-start gap-[5px] z-[1]">
                  <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                    <div className="w-full relative tracking-[-0.01em] leading-[32px] font-semibold inline-block max-w-[344px]">
                      Scratch Programming
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start font-heading-04-600">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[22px]">
                      <p className="m-0">
                        Learn and excel at coding and craft intricate
                      </p>
                      <p className="m-0">games, websites and apps</p>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start gap-[5px]">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-semibold">
                        Ages 6-16
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-semibold">
                        36 Lessons
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[20px] font-semibold">
                        100+ Activities
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue font-heading-04-600">
                    <div className="w-full relative tracking-[-0.01em] leading-[22px] inline-block max-w-[384px]">
                      First class free!
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[2] text-mid-6 font-segoe-ui">
                  <div className="self-stretch bg-nero flex flex-col items-center justify-start gap-[15px]">
                    <button
                      className="cursor-pointer py-[9px] px-5 bg-nero self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                      onClick={onButtonswhiteContent1Click}
                    >
                      <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                        Download curriculum
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
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[0.5px] pr-[109.4px] pl-0">
                    <b className="relative leading-[27px] inline-block max-w-[280px]">
                      This course includes:
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm font-heading-04-600">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/archive.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">{`6 module, 36 lessons & 50+ classes`}</div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/chats1.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        <p className="m-0">
                          Learn live with expert Computer Science
                        </p>
                        <p className="m-0">teacher</p>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/cardholder.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">
                        6 detailed modules
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/campfire.svg"
                      />
                      <div className="flex-1 relative leading-[150%]">{`100+ activities & projects`}</div>
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
                        Scratch developer certificate
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
                    <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                      <img
                        className="w-8 relative h-8 overflow-hidden shrink-0"
                        alt=""
                        src="/videoconference1.svg"
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
                </div>
                <img
                  className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                  alt=""
                  src="/bestsellingpng4@2x.png"
                />
              </div>
            </div>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="courseDetailContainer"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[15px] z-[1] text-center text-13xl font-inter">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative tracking-[-0.01em] leading-[40px] font-semibold">
                An ideal website building course for kids
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center py-2.5 px-[50px] text-xl font-heading-04-600">
              <div className="flex-1 relative leading-[32px]">
                Learn the principles of website building, start designing
                stunning websites, and add multimedia and complex
                functionalities to your websites.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[50px] text-left text-5xl font-heading-04-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px] max-h-[709px]">
              <div className="self-stretch bg-nero flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Top 10 Benefits of Learning at InnovatorsHome
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Classes run on hybrid model
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Regular doubt session
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Engaging quizzes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Thrilling competitions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                    Learning Certificates
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Live personalized classes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`Lifetime access to class videos & resources`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    All tutor are renowned developer
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                    Gamified learning environment
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Community of young coders
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[471px] bg-nero flex flex-col items-center justify-center p-2.5 box-border gap-[10px]">
              <div className="self-stretch relative leading-[150%] font-semibold">
                What you’ll learn?
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px] text-center text-sm">
                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
                  <img
                    className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/wechatlogo1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      <p className="m-0">{`Webs & App buiding`}</p>
                      <p className="m-0">principles</p>
                    </div>
                  </div>
                </div>
                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
                  <img
                    className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/wechatlogo1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      <p className="m-0">Creative, design</p>
                      <p className="m-0">thinking</p>
                    </div>
                  </div>
                </div>
                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
                  <img
                    className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/wechatlogo1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Game Development principles
                    </div>
                  </div>
                </div>
                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
                  <img
                    className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/wechatlogo1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      COllaboration
                    </div>
                  </div>
                </div>
                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
                  <img
                    className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/wechatlogo1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Hosting
                    </div>
                  </div>
                </div>
                <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero flex flex-col items-center justify-start p-[15px] box-border gap-[15px]">
                  <img
                    className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                    alt=""
                    src="/wechatlogo1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-center">
                    <div className="flex-1 relative leading-[120%] font-semibold">
                      Innovations
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px] max-h-[709px]">
              <div className="self-stretch bg-nero flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-center">
                  <div className="self-stretch relative leading-[150%] font-semibold">
                    Top 10 Benefits of Learning at InnovatorsHome
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[9px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Classes run on hybrid model
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Regular doubt session
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Engaging quizzes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Thrilling competitions
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                    Learning Certificates
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Live personalized classes
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">{`Lifetime access to class videos & resources`}</div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    All tutor are renowned developer
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative tracking-[-0.01em] leading-[22px]">
                    Gamified learning environment
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-center gap-[5px]">
                  <img
                    className="w-8 relative h-8 overflow-hidden shrink-0"
                    alt=""
                    src="/fire3.svg"
                  />
                  <div className="flex-1 relative leading-[150%]">
                    Community of young coders
                  </div>
                </div>
              </div>
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

export default CurriculumByCoursePage;
