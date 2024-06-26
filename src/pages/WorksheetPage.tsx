import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const WorksheetPage: FunctionComponent = () => {
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

  const onAboutUs2Click = useCallback(() => {
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
      "[data-scroll-to='worksheetsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonsorangeContent1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  return (
    <>
      <div className="w-full relative bg-nero1 flex flex-col items-center justify-start p-5 box-border gap-[20px] text-left text-29xl text-nero1 font-body-xl-500 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[3]">
          <header className="self-stretch w-full rounded bg-nero1 flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="flex-1 flex flex-row items-center justify-between">
              <Link
                className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-center p-2.5 text-[inherit]"
                to="/"
                onClick={onLogoClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDeskLab
                </div>
              </Link>
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black1 font-body-xl-500 sm:flex">
                <div className="bg-nero1 flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/coursepage"
                    onClick={onCoursesClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-xl-500 text-black1 text-left inline-block">
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
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/aboutuspage"
                    onClick={onAboutUs2Click}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-body-xl-500 text-black1 text-left inline-block">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-start py-0 px-[15px] gap-[15px] z-[2] lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                Coding Worksheet for Kids
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                Fun way to learn coding for kids using worksheets
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                View A Worksheet
              </div>
            </button>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[500px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-510@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[30px] relative z-[1] text-center text-17xl text-black1">
          <div className="self-stretch bg-nero1 flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Coding Worksheets for kids
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Great collection of fun and interactive coding worksheets for
                kids to assess and acquire computer science knowledge.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 text-left text-5xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] rounded-lg bg-nero1 flex flex-col items-center justify-start p-2.5 box-border gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover"
                alt=""
                src="/image20@2x.png"
              />
              <div className="self-stretch bg-nero1 overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-nero1">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Write your name in Binary?
                </div>
              </div>
              <div className="self-stretch bg-nero1 box-border overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[5px] min-h-[52.5px] text-base border-[1px] border-solid border-nero1">
                <div className="w-full relative leading-[150%] inline-block max-w-[320px]">
                  A fun activity to help you create words using binary code
                </div>
              </div>
              <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-between text-sm border-[1px] border-solid border-nero1">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[7.5px]">
                  <div className="relative leading-[120%] font-semibold">
                    Age 11 to 14
                  </div>
                </div>
                <div className="rounded-11xl bg-cornflowerblue flex flex-col items-start justify-start py-1.5 px-[19.5px] text-nero1">
                  <div className="relative leading-[150%] font-medium">
                    Coding
                  </div>
                </div>
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                autoFocus={true}
                onClick={onButtonsorangeContent1Click}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                  Download a worksheet
                </div>
              </button>
            </div>
          </div>
          <div
            className="absolute left-[0] top-[-70px]"
            data-scroll-to="worksheetsContainer"
          />
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

export default WorksheetPage;
