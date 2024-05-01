import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image1 from "../components/Image1";
import PortalPopup from "../components/PortalPopup";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const PartnershipPage: FunctionComponent = () => {
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
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
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const openImagePopup = useCallback(() => {
    setImagePopupOpen(true);
  }, []);

  const closeImagePopup = useCallback(() => {
    setImagePopupOpen(false);
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-29xl text-black1 font-heading-04-600 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[4]">
          <header className="self-stretch w-full rounded bg-nero flex flex-row items-center justify-center py-[22px] px-20 box-border sticky top-[0] [background:white] text-left text-13xl text-dodger-blue font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
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
              <div className="flex flex-row items-center justify-end gap-[36px] text-sm text-black1 font-heading-04-600 sm:flex">
                <div className="bg-nero flex flex-row items-center justify-end gap-[30px] md:hidden">
                  <Link
                    className="cursor-pointer [text-decoration:none] flex flex-row items-center justify-end"
                    to="/coursepage"
                    onClick={onCoursesClick}
                  >
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[150%] font-heading-04-600 text-black1 text-left inline-block">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-start py-0 px-[15px] gap-[15px] z-[3] text-left text-nero lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                CoDesk - School Partnerships
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                We welcome schools to partner with us and introduce coding to
                students through fun activities.
              </div>
            </div>
            <button
              className="cursor-pointer py-[9px] px-5 bg-tomato self-stretch rounded box-border h-[38px] flex flex-row items-center justify-center border-[1px] border-solid border-nero"
              autoFocus={true}
              onClick={onButtonsorangeContentClick}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-heading-04-600 text-nero text-center inline-block max-h-[58px]">
                Contact Us
              </div>
            </button>
          </div>
          <img
            className="h-[500px] flex-1 relative max-w-full overflow-hidden object-contain lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-56@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[2] text-17xl">
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Benefits Of Partnering With Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-sm">
              <div className="flex-1 relative leading-[150%]">
                Make your school stand out by partnering with Nepal's #1 coding
                platform for school kids
              </div>
            </div>
          </div>
          <div className="self-stretch bg-nero flex flex-col items-start justify-start p-[15px] gap-[40px] text-left sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="self-stretch bg-nero flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[325px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason5svg1.svg"
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
                    <div className="self-stretch flex flex-row items-start justify-center gap-[5px] text-black1">
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
                        <span className="text-black1">
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
                        <span className="text-black1">
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
                        <span className="text-black1">{` provided to school teachers by `}</span>
                        <span>{`CoDesk Knowledge Experts `}</span>
                        <span className="text-black1">
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
                        <span className="text-black1">
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
                        <span className="text-black1">
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
                  src="/reason2svg.svg"
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
                        <span className="text-black1">{` to a personal dashboard with `}</span>
                        <span>lessons, projects, coding quizzes,</span>
                        <span className="text-black1">{` and `}</span>
                        <span>STEM.org</span>
                        <span className="text-black1">
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
        <div
          className="self-stretch bg-nero flex flex-col items-center justify-center gap-[30px] z-[1] text-15xl-6 font-segoe-ui"
          data-scroll-to="contactUsContainer"
        >
          <div className="self-stretch bg-nero flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <b className="flex-1 relative [text-decoration:underline] leading-[45px]">
                Contact Us
              </b>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-[15.9px]">
              <div className="flex-1 relative leading-[24px]">
                Feel free to reach out to us
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5">
            <form className="m-0 w-[550px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-nero box-border flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] border-[1px] border-solid border-whitesmoke md:w-[350px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-heading-04-600 text-slategray text-left">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <input
                  className="[outline:none] font-heading-04-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="[outline:none] font-heading-04-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Email address"
                  type="text"
                />
                <input
                  className="[outline:none] font-heading-04-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Phone Number"
                  type="text"
                />
                <input
                  className="[outline:none] font-heading-04-600 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="School Name"
                  type="text"
                />
                <textarea
                  className="bg-[transparent] font-heading-04-600 text-base [outline:none] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Leave Message"
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-tomato rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero"
                onClick={openImagePopup}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-heading-04-600 text-nero text-center inline-block max-h-[58px]">
                  Subimt
                </div>
              </button>
            </form>
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
