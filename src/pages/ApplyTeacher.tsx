import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";

const ApplyTeacher: FunctionComponent = () => {
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
    const anchor = document.querySelector("[data-scroll-to='stepsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonswhiteContentClick = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonsorangeContent1Click = useCallback(() => {
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
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-13xl text-darkslategray font-body-tiny-400">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[9]">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[8] text-left text-29xl text-nero lg:flex-col md:flex-col">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Teach Kids To Code
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Teaching kids to code is about empowering them with valuable
                skills for the future while fostering their creativity,
                problem-solving abilities, and passion for learning. As a
                teacher, your role is to guide and support students on their
                coding journey, making it an enjoyable and rewarding experience
                for them.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-nero text-center inline-block max-h-[58px]">
                Read Guidelines
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-56@2x.png"
          />
        </div>
        <section className="self-stretch bg-nero flex flex-col items-center justify-start p-5 gap-[20px] z-[7] text-center text-17xl text-darkslategray font-body-tiny-400">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Become a teacher in CoDesk doesn’t mean you will end up your
              coding journey
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-2.5 gap-[15px] text-left text-5xl lg:flex-row lg:flex-wrap">
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/appstorelogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    15+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-wwwcodingalcom-mine-shaft">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Teach whatever age group you prefer
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/applelogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    5+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-wwwcodingalcom-mine-shaft">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Teach whatever stack you want
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/personsimplerun.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    100+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-wwwcodingalcom-mine-shaft">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Teach on your own preferable language
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/cassettetape.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    50+
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-wwwcodingalcom-mine-shaft">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Hands On teaching Resources
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/androidlogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Hybrid Teaching
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-wwwcodingalcom-mine-shaft">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Teach physically as well as virutally
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero h-[200px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/desktoptower.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Great earnings
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg text-wwwcodingalcom-mine-shaft">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Earn from teaching as well as building
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center z-[6]">
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px]">
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
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Make your passion pay
                      </div>
                    </div>
                    <div className="w-[525px] bg-nero hidden flex-row items-center justify-center p-2.5 box-border text-base">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      If you are passionate about coding, teaching kids to code
                      is a great way to increase your while doing what you love.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Make An Impact
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      Coding is the skill of the future. By teaching kids to
                      code, you will empower them to be successful and create a
                      better future.
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
                  src="/reason1svg2@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Building Lifelong Relationships
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      As a teacher, you will touch the lives of hundreds of
                      children across the world and build lifelong relationships
                      with students and their families.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[5]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Unmatched earnings and growth
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
                alt=""
                src="/freecoursesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Get paid per class
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  As a teacher, you will get paid for every one-hour class you
                  successfully complete. The more classes you teach, the more
                  you earn.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/moneybackguaranteesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Attractive incentives
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  We offer lots of opportunities to increase your income through
                  various incentives, referral program, and mentorships.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/customizedlearningsvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Career growth plan
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Gain experience and grow as a teacher as well as developer
                  along with a clearly defined career progression path with
                  great rewards for performance and leadership.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] z-[4]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold">
              All the support you need
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[333.3px] shrink-0 object-cover"
            alt=""
            src="/happytoshowlaptoppng@2x.png"
          />
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
                alt=""
                src="/freecoursesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our long term vision through system
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our platform enables an immersive teaching and learning
                  experience with in-built video. The platform makes teaching
                  easy with all teaching aids, lesson plans, schedules at your
                  fingertips.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/customizedlearningsvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Unique curriculum and lesson plans
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Our curriculum makes teaching code fun for students and
                  teachers alike. We will also give you in-depth lesson plans to
                  guide the child's code-learning journey.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/moneybackguaranteesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Training and certification
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  All our teachers undergo extensive training on procedures and
                  curriculum to make sure we meet the highest standards and help
                  you grow as a teacher.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-center justify-center p-5 gap-[20px] relative z-[3]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold">
              All the support you need
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[333.3px] shrink-0 object-cover"
            alt=""
            src="/becomeateacherpng@2x.png"
          />
          <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] text-17xl">
            <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
              <div className="self-stretch flex flex-row items-center justify-center p-2.5">
                <div className="flex-1 relative leading-[120%] font-semibold">
                  5 steps to becoming a teacher
                </div>
              </div>
              <div className="self-stretch h-[41px]" />
            </div>
            <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-left text-lg-4 text-aqua-deep">
              <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
                <div className="flex-1 bg-nero flex flex-row items-center justify-end p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <img
                    className="w-48 relative h-48 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/submityourapplicationpng@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[30px] font-semibold">
                        Step 1
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-6xl-7 text-darkslategray">
                      <div className="self-stretch relative leading-[45px] font-semibold">
                        Submit your application
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-lg text-darkslategray">
                    <div className="self-stretch relative leading-[150%]">
                      Sign up as a teacher, verify your phone number, and
                      provide some basic information about yourself.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
                <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[30px] font-semibold">
                        Step 2
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-6xl-7 text-darkslategray">
                      <div className="self-stretch relative leading-[45px] font-semibold">
                        Share a demo video
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-lg text-darkslategray">
                    <div className="self-stretch relative leading-[150%]">
                      Upload a short 2 to 5 minute video of yourself explaining
                      a concept, subject or topic of your choice. This is your
                      chance to show off your skills. So make the most of it.
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-nero flex flex-row items-center justify-start p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                  <img
                    className="w-48 relative h-48 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/shareademovideopng@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
                <div className="flex-1 bg-nero flex flex-row items-center justify-end p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <img
                    className="w-48 relative h-48 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/taketechnicalassessmentpng@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[30px] font-semibold">
                        Step 3
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-6xl-7 text-darkslategray">
                      <div className="self-stretch relative leading-[45px] font-semibold">
                        Take technical assessment
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-lg text-darkslategray">
                    <div className="self-stretch relative leading-[150%]">
                      We will give you a small test to complete. This will help
                      us assess your technical knowledge and skill level.
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
                <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[30px] font-semibold">
                        Step 4
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-6xl-7 text-darkslategray">
                      <div className="self-stretch relative leading-[45px] font-semibold">
                        Do an interview
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-lg text-darkslategray">
                    <div className="self-stretch relative leading-[150%]">
                      If your skill and qualifications meet our expectations,
                      you'll hear from us to set up a round of interviews.
                    </div>
                  </div>
                </div>
                <div className="flex-1 bg-nero flex flex-row items-center justify-start p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                  <img
                    className="w-[200px] relative h-40 overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/doaninterviewpng@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
                <div className="flex-1 bg-nero flex flex-row items-center justify-end p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <img
                    className="w-48 relative h-[280px] overflow-hidden shrink-0 object-cover"
                    alt=""
                    src="/gethiredpng@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center py-8 px-0 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[30px] font-semibold">
                        Step 5
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-6xl-7 text-darkslategray">
                      <div className="self-stretch relative leading-[45px] font-semibold">
                        Get hired!
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-lg text-darkslategray">
                    <div className="self-stretch relative leading-[150%]">
                      If all goes well, you will be informed about our decision
                      to hire you as a teacher, and you'll be teaching kids to
                      code in no time!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero rounded box-border h-[41px] hidden flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContentClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-aqua-deep text-center inline-block max-h-[58px]">
                Become a Teacher
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContent1Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-tiny-400 text-nero text-center inline-block max-h-[58px]">
                Become A Teacher
              </div>
            </button>
          </section>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="stepsContainer"
          />
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[2]">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Eligibility criteria for teachers
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
                alt=""
                src="/freecoursesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Recent graduates
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Freshers with a technical degree are always welcome. We offer
                  training and certification to launch your career as a coding
                  teacher.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/customizedlearningsvg1.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Teaching experience
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Teaching experience and especially experience teaching coding
                  will increase your chances of successfully becoming a teacher.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/moneybackguaranteesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Coding experience
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Hands-on coding experience in a professional setting will also
                  be an added advantage as long as you meet the other basic
                  requirements.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero flex flex-col items-start justify-start p-5 gap-[20px] z-[1]">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[58px] pb-[0.5px]">
            <div className="w-full relative leading-[120%] font-semibold inline-block max-w-[1128px]">
              Why children should learn to code?
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap">
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png6@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Develop key skills
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center text-sm">
                  <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                    Learning to code helps improve a child's logical thinking
                    and problem-solving skills by 70%, also enabling them to
                    perform better at school.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png7@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Prepare for the future
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center text-sm">
                  <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                    Children need to learn coding and develop digital skills if
                    they want to be successful in the technology-driven job
                    market of the future.
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[350px] rounded-3xs bg-nero flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png8@2x.png"
              />
              <div className="self-stretch bg-nero flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Eligibility criteria for teachers
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center text-sm">
                  <div className="w-full relative leading-[150%] inline-block max-w-[448px]">
                    Our STEM-focused curriculum makes coding a learning aid and
                    helps kids develop a deeper understanding of the subjects
                    they study at school.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-mini flex flex-col items-center justify-start z-[0] text-left text-29xl text-black1">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[91px] shrink-0 object-cover"
            alt=""
            src="/subscribe-section-background6@2x.png"
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
    </>
  );
};

export default ApplyTeacher;
