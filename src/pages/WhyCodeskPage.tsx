import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const WhyCodeskPage: FunctionComponent = () => {
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

  return (
    <>
      <div className="w-full relative bg-nero1 flex flex-col items-center justify-start p-5 box-border gap-[20px] text-center text-13xl text-black1 font-body-xl-500 sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[5]">
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
        <div className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[4] text-left text-29xl text-nero1 lg:flex-col md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-center justify-center p-[15px] gap-[34px] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">{`Building the Nepal’s largest & most loved coding school for kids & teens and adult`}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-base">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  InnovatorsHome started with a dream to inspire school kids
                </p>
                <p className="m-0">
                  to fall in love with coding and to empower every
                </p>
                <p className="m-0">child to build anything they can imagine</p>
              </div>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-58@2x.png"
          />
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[30px] z-[3] text-17xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch bg-nero1 flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Why kids and parents love CoDesk?
              </div>
            </div>
            <div className="self-stretch h-[41px]" />
          </div>
          <div className="self-stretch bg-nero1 flex flex-col items-start justify-start p-[15px] gap-[40px] text-13xl sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="self-stretch bg-nero1 flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero1 flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[325px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason5svg1.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Curriculum
                      </div>
                    </div>
                    <div className="w-[525px] bg-nero1 hidden flex-row items-center justify-center p-2.5 box-border text-base text-darkslategray">
                      <div className="flex-1 relative leading-[22px] font-medium">
                        1
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero1 flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      Our unique curriculum is built on BIDE, STEAM, and Bloom's
                      taxonomy model for enhancing cognitive, logical and
                      computational skills. Combined with practical projects, it
                      makes learning not only informative but also fun for the
                      children!
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero1 flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Teachers
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero1 flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      Our teachers are experts in computer science, backed with
                      years of industry and teaching experience, passionate
                      about teaching kids.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero1 flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[348px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason2svg.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero1 flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero1 flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[350px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/reason1svg1@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Personalized Coding Journey
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero1 flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%]">
                      Every child is unique and and so is their journey of
                      learning to code. We ensure that every child is clear with
                      each concept before moving on to the next, even if it
                      means providing an extra class.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-nero1 flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[50px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:order-[2] md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Our values
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-2.5 text-lg">
                    <div className="flex-1 relative leading-[30px]">
                      Introducing children to coding and making them fall in
                      love with coding is our motto. We are not here to take
                      them to Mars or Moon, but help them build the skill of the
                      21st century and hopefully empower them in their journey
                      of life.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-nero1 flex flex-row items-center justify-center p-2.5 lg:order-[1] lg:flex-[unset] lg:self-stretch md:order-[1] md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[350px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason3svg.svg"
                />
              </div>
            </div>
            <div className="self-stretch bg-nero1 flex flex-row items-center justify-between lg:flex-col md:flex-col">
              <div className="flex-1 bg-nero1 flex flex-row items-center justify-center p-2.5 lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
                <img
                  className="w-[380px] relative h-[372px] overflow-hidden shrink-0"
                  alt=""
                  src="/reason4svg.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-center justify-center py-0 px-[70px] lg:flex-[unset] lg:self-stretch md:pl-2.5 md:pr-2.5 md:box-border md:flex-[unset] md:self-stretch">
                <div className="self-stretch flex flex-col items-start justify-start w-full">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-2.5">
                      <div className="flex-1 relative leading-[120%] font-semibold">
                        Founding Team Experise
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch bg-nero1 flex flex-row items-center justify-center py-2.5 px-[30px] text-lg">
                    <div className="flex-1 relative leading-[150%] whitespace-pre-wrap">
                      Codex’s founder are tutor and and also the system builder.
                      We understand what it takes to provide the right education
                      to your child.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero1 flex flex-col items-start justify-start p-5 gap-[20px] z-[2] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Why Codingal offers more value for the price?
            </div>
            <div className="self-stretch relative text-lg leading-[150%]">
              <p className="m-0">
                Our courses are holistic and our curriculum is scientifically
                based. Our prices are
              </p>
              <p className="m-0">transparent and predictable.</p>
            </div>
          </div>
          <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-5xl md:flex-row md:flex-wrap">
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero1 overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[88.2px] overflow-hidden shrink-0"
                alt=""
                src="/freecoursesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="relative leading-[150%] font-semibold">
                  Free class as beginners
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  Codex offers the chance to take a free class where your
                  children learn the basics of coding and learn to create their
                  own animations, apps or websites.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero1 overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/customizedlearningsvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="relative leading-[150%] font-semibold">
                  Customized Learning Journey
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  At Codex, we believe that each child is unique and so should
                  be their learning journey. We make sure that each child learns
                  according to their own pace which makes sure they learn coding
                  the right way.
                </div>
              </div>
            </div>
            <div className="shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded-13xl bg-nero1 overflow-hidden flex flex-col items-center justify-start py-10 px-5 gap-[28px]">
              <img
                className="w-[93.3px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/moneybackguaranteesvg.svg"
              />
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[31.5px] box-border">
                <div className="relative leading-[150%] font-semibold">
                  Guaranteed money back
                </div>
              </div>
              <div className="w-[317.3px] flex flex-col items-center justify-start py-0 px-[20.6px] box-border text-lg">
                <div className="self-stretch relative leading-[150%] font-semibold">
                  At Codex, we put customer satisfaction first and so, we have a
                  100% money back guarantee policy. If we do not meet your
                  expectations you have the right to cancel your purchase and
                  get your money back. It’s as simple as that.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero1 flex flex-col items-start justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[58px] pb-[0.5px]">
            <div className="w-full relative leading-[120%] font-semibold inline-block max-w-[1128px]">
              Why children should learn to code?
            </div>
          </div>
          <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap">
            <div className="w-[350px] rounded-3xs bg-nero1 flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png3@2x.png"
              />
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-center">
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
            <div className="w-[350px] rounded-3xs bg-nero1 flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png4@2x.png"
              />
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-center">
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
            <div className="w-[350px] rounded-3xs bg-nero1 flex flex-col items-center justify-center p-5 box-border">
              <img
                className="w-[250px] relative h-[250px] overflow-hidden shrink-0 object-cover"
                alt=""
                src="/reason1png5@2x.png"
              />
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-center">
                <div className="self-stretch flex flex-col items-center justify-center py-4 px-0">
                  <div className="self-stretch relative leading-[120%] font-semibold">
                    Learn through coding
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

export default WhyCodeskPage;
