import { FunctionComponent, useState, useCallback } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Image1 from "../components/Image1";
import PortalPopup from "../components/PortalPopup";
import DrawerMenus from "../components/DrawerMenus";
import PortalDrawer from "../components/PortalDrawer";
import Footer from "../components/Footer";

const HomePage: FunctionComponent = () => {
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

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCoursesClick = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onQuizzesClick = useCallback(() => {
    navigate("/quizpage");
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
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContentClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent1Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContent1Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent2Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContent2Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent3Click = useCallback(() => {
    navigate("/coursepage");
  }, [navigate]);

  const onButtonsorangeContent3Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonscurriculumContainerClick = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainerClick1 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainerClick2 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainerClick3 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainerClick4 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonscurriculumContainerClick5 = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonswhiteContent4Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonsorangeContent4Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsgreenContentContainerClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsgreenContentContainer2Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent5Click = useCallback(() => {
    navigate("/competetionpage");
  }, [navigate]);

  const onButtonsorangeContent5Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonswhiteContent6Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonsorangeContent6Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent7Click = useCallback(() => {
    navigate("/reviewpage");
  }, [navigate]);

  const onButtonsorangeContent7Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonsorangeContent8Click = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/839019799/");
  }, []);

  const onButtonsorangeContent9Click = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/2232652/");
  }, []);

  const onButtonsorangeContent10Click = useCallback(() => {
    window.open("https://scratch.mit.edu/projects/16853582/");
  }, []);

  const onButtonswhiteContent8Click = useCallback(() => {
    navigate("/projectpage");
  }, [navigate]);

  const onButtonsorangeContent11Click = useCallback(() => {
    navigate("/commingsoonpage");
  }, [navigate]);

  const onButtonswhiteContent9Click = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onButtonsorangeContent12Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonswhiteContent10Click = useCallback(() => {
    navigate("/aboutuspage");
  }, [navigate]);

  const onButtonsorangeContent13Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonswhiteContent11Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonsorangeContent14Click = useCallback(() => {
    window.location.href = "mailto:jkc5186@gmail.com";
  }, []);

  const openImagePopup = useCallback(() => {
    setImagePopupOpen(true);
  }, []);

  const closeImagePopup = useCallback(() => {
    setImagePopupOpen(false);
  }, []);

  const onButtonswhiteContent12Click = useCallback(() => {
    //TODO: button link
  }, []);

  const onButtonsorangeContent16Click = useCallback(() => {
    window.location.href = "tel:9868296800";
  }, []);

  return (
    <>
      <div className="w-full relative bg-nero1 flex flex-col items-center justify-center p-[30px] box-border gap-[60px] text-center text-17xl text-black1 font-body-xl-500 sm:gap-[5px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
        <div className="self-stretch h-[77px] flex flex-row items-start justify-start sticky top-[0] z-[19]">
          <header className="self-stretch rounded bg-nero1 flex flex-row items-center justify-center py-[22px] px-20 box-border sticky w-full top-[0] [background:white] text-left text-13xl text-aqua-deep font-inter lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
            <div className="w-[1240px] flex flex-row items-center justify-between">
              <div
                className="flex flex-row items-center justify-center p-2.5 cursor-pointer"
                onClick={onLogoContainerClick}
              >
                <div className="relative tracking-[-0.01em] leading-[40px] font-semibold">
                  CoDeskLab
                </div>
              </div>
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
                  >
                    <div
                      className="relative tracking-[-0.01em] leading-[22px] cursor-pointer"
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
        <header className="self-stretch rounded-mini bg-footer-header flex flex-row items-center justify-between py-0 px-[15px] z-[18] text-left text-29xl text-nero1 font-inter lg:flex-col md:flex-col md:gap-[10px] md:p-2.5 md:box-border sm:gap-[5px] sm:p-[5px] sm:box-border">
          <div className="flex-1 flex flex-col items-start justify-start p-[15px] gap-[15px] lg:order-[2] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start font-body-xl-500">
              <div className="self-stretch relative leading-[120%] font-semibold sm:text-21xl">
                Online coding classes for kids, teens and adult to become the
                innovators of the future
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[15px] text-5xl">
              <div className="self-stretch w-[107px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[32px] font-semibold">
                    2,000+
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[26.7px] pl-0 text-base font-body-xl-500">
                  <div className="self-stretch relative leading-[24px]">
                    Students
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[34.3px] pl-0">
                  <div className="relative tracking-[-0.01em] leading-[32px] font-semibold">
                    10+
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start relative text-base font-body-xl-500">
                  <div className="relative leading-[24px] z-[0]">Districts</div>
                  <div className="w-6 absolute !m-[0] bottom-[0px] left-[0px] box-border h-px z-[1] border-b-[1px] border-solid border-silver" />
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[5px] text-lg">
              <div className="self-stretch flex flex-row items-center justify-center">
                <img
                  className="w-8 relative h-8 overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/phonecall@2x.png"
                />
              </div>
              <div className="flex-1 flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[24px] font-semibold">{`Call us at 9868296800 for help & questions.`}</div>
              </div>
            </div>
          </div>
          <img
            className="flex-1 relative max-w-full overflow-hidden h-[516.2px] object-cover lg:order-[1] lg:flex-[unset] lg:self-stretch md:flex-[unset] md:self-stretch"
            alt=""
            src="/image-5@2x.png"
          />
        </header>
        <section className="self-stretch bg-nero1 flex flex-col items-center justify-start p-5 gap-[20px] z-[17] text-center text-17xl text-aqua-deep font-body-xl-500 sm:pl-[05px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">
              <span>Learn coding</span>
              <span className="text-black1">{` from the top `}</span>
              <span>Nepali IT instructors</span>
              <span className="text-black1">
                . Our hand-picked instructors ensure the best learning
                experience.
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-2.5 gap-[15px] text-left text-5xl text-black1 lg:flex-row lg:flex-wrap">
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Coding stacks
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Disruptive Technology
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Empowering Youth
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
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
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Hands On Resources
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/androidlogo.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Unlimited
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Hackathons Event
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 h-[150px] flex flex-col items-center justify-center p-[5px] box-border gap-[5px] sm:w-[300px]">
              <div className="self-stretch flex flex-row items-end justify-start gap-[14px]">
                <img
                  className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                  alt=""
                  src="/desktoptower.svg"
                />
                <div className="flex-1 flex flex-row items-end justify-start">
                  <div className="flex-1 relative leading-[150%] font-semibold">
                    Robust
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-lg">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Virtual & Physical Classes`}</div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero1 flex flex-col items-center justify-center p-5 gap-[20px] z-[16] text-center text-17xl text-black1 font-body-xl-500 sm:pl-[5px] sm:pr-[05px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap">
              With CoDesk Premium, your child gets private tutoring from best
              instructors
            </div>
          </div>
          <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-center gap-[10px] text-left text-lg">
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/wechatlogo.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Experience exclusive 1:1 online private tutoring
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/chalkboardteacher.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Handpicked top coding instructor as per your choice
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/appwindow.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Flexible number of weekly classes for your child
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/question.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Unlimited doubt sessions, available 24x7. Absolutely free!
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/skypelogo.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Personalized attention from instructor in each class
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/videoconference.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Flexibility to choose class timings & reschedule`}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/lifebuoy.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Dedicated support team to resolve queries 24x7
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/student.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Lifetime access to all class recordings
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/applepodcastslogo.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Complete projects & Quizzes after every class`}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/baseballhelmet.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Gamified Learning dashboard with projects & quizzes`}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/articlemedium.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">{`Receive monthly progress reports & attend PTMs`}</div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px]">
              <img
                className="w-[100px] relative h-[100px] overflow-hidden shrink-0"
                alt=""
                src="/arrowsincardinal.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Learn together with 2-4 coding buddies
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="self-stretch bg-nero1 flex flex-col items-center justify-center p-5 gap-[20px] z-[15] text-center text-17xl text-black1 font-body-xl-500 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Choose a coding course that excites your child
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-sm sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image@2x.png"
              />
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Specialized Coding
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
                      50 Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      100+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    First class free!
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero1 self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContentClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                  onClick={onButtonsorangeContentClick}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero1 text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image1@2x.png"
              />
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    All In One Coding
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
                      50+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      100+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    First class free!
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero1 self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContent1Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                  onClick={onButtonsorangeContent1Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero1 text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 flex flex-col items-start justify-start p-2.5 box-border relative gap-[15px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image2@2x.png"
              />
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] text-5xl">
                  <div className="w-full relative leading-[150%] font-semibold inline-block max-w-[344px]">
                    Coding Workshops
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
                      Ages 6-16
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      15+ Lessons
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[120%] font-semibold">
                      170+ Activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-2 text-center text-dodger-blue">
                  <div className="w-full relative leading-[150%] inline-block max-w-[384px]">
                    First class free!
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-start gap-[15px] z-[2]">
                <button
                  className="cursor-pointer py-[9px] px-5 bg-nero1 self-stretch rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
                  onClick={onButtonswhiteContent2Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-aqua-deep text-center inline-block max-h-[58px]">
                    view course
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[9px] px-5 bg-aqua-deep self-stretch rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                  onClick={onButtonsorangeContent2Click}
                >
                  <div className="flex-1 relative text-lg tracking-[-0.01em] leading-[20px] capitalize font-semibold font-inter text-nero1 text-center inline-block max-h-[58px]">
                    Try a free class
                  </div>
                </button>
              </div>
              <img
                className="w-[100px] !m-[0] absolute top-[10px] left-[10px] h-[25px] overflow-hidden shrink-0 object-cover z-[3]"
                alt=""
                src="/bestsellingpng@2x.png"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent3Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                See All course
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent3Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </section>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[50px] z-[14]">
          <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[5px]">
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
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[50px] text-base font-inter">
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero1 overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start gap-[5px]">
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
                <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-xl-500">
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
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-xl-500">
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/videoconference1.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
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
                <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray">
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
                  <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[9px] text-black1">
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
                    onClick={onButtonscurriculumContainerClick}
                  >
                    <div className="self-stretch flex-1 rounded bg-nero1 flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
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
                  onClick={onButtonscurriculumContainerClick1}
                >
                  <div className="self-stretch flex-1 rounded bg-nero1 flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
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
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero1 overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start gap-[5px]">
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
                <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-xl-500">
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
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-xl-500">
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/videoconference1.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
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
                <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray">
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
                  <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[9px] text-black1">
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
                    onClick={onButtonscurriculumContainerClick2}
                  >
                    <div className="self-stretch flex-1 rounded bg-nero1 flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
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
                  onClick={onButtonscurriculumContainerClick3}
                >
                  <div className="self-stretch flex-1 rounded bg-nero1 flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
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
            <div className="w-[350px] shadow-[0px_10px_15px_-3px_rgba(0,_0,_0,_0.1),_0px_4px_6px_-2px_rgba(0,_0,_0,_0.05)] rounded bg-nero1 overflow-hidden shrink-0 flex flex-col items-start justify-start p-2.5 box-border gap-[10px]">
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start gap-[5px]">
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
                <div className="self-stretch flex flex-col items-center justify-center min-h-[63px] font-body-xl-500">
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
              <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-[5px] gap-[5px] text-left text-sm text-blues font-body-xl-500">
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
                  <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                    <img
                      className="w-8 relative h-8 overflow-hidden shrink-0"
                      alt=""
                      src="/videoconference1.svg"
                    />
                    <div className="flex-1 relative leading-[150%]">
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
                <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-[5px] gap-[5px] text-darkslategray">
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
                  <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[9px] text-black1">
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
                    onClick={onButtonscurriculumContainerClick4}
                  >
                    <div className="self-stretch flex-1 rounded bg-nero1 flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
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
                  onClick={onButtonscurriculumContainerClick5}
                >
                  <div className="self-stretch flex-1 rounded bg-nero1 flex flex-row items-center justify-center py-[9px] px-5 border-[1px] border-solid border-aqua-deep">
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
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-center p-5 gap-[20px] z-[13]">
          <div className="self-stretch flex flex-col items-center justify-center pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Flexible pricing with personalized classes
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[25px] px-2.5 gap-[15px] text-left text-base md:flex-row md:flex-wrap sm:pt-5 sm:pb-5 sm:box-border">
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch rounded-t-md rounded-b-none bg-aqua-deep flex flex-col items-start justify-center pt-[25px] px-[25px] pb-[5px] relative border-[1px] border-solid border-black1">
                <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    8 classes / month
                  </div>
                </div>
                <img
                  className="w-[100px] !m-[0] absolute top-[0px] left-[0px] h-[25px] overflow-hidden shrink-0 object-cover z-[1]"
                  alt=""
                  src="/bestsellingpng1@2x.png"
                />
              </div>
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start py-2.5 px-5 gap-[5px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      2 classes per week
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      12+ fun and engaging activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Access to complete coding module
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Expert-designed, project-based curriculum paired with
                      hands-on activities and projects
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Progress Tracking - Parent Teacher Meet
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Unlimited doubt sessions, available 24*7
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[300px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch rounded-t-md rounded-b-none bg-aqua-deep flex flex-col items-start justify-center pt-[25px] px-[25px] pb-[5px] relative border-[1px] border-solid border-black1">
                <div className="self-stretch flex flex-row items-start justify-center z-[0]">
                  <div className="flex-1 relative leading-[120%] font-semibold">
                    4 classes / month
                  </div>
                </div>
                <img
                  className="w-[100px] !m-[0] absolute top-[0px] left-[0px] h-[25px] overflow-hidden shrink-0 object-cover hidden z-[1]"
                  alt=""
                  src="/bestsellingpng2@2x.png"
                />
              </div>
              <div className="self-stretch bg-nero1 flex flex-col items-start justify-start py-2.5 px-5 gap-[5px] text-sm">
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      1 classes per week
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      8+ fun and engaging activities
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Access to complete coding module
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg1.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Expert-designed, project-based curriculum paired with
                      hands-on activities and projects
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Progress Tracking - Parent Teacher Meet
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[10px]">
                  <img
                    className="w-[18px] relative h-[18px] overflow-hidden shrink-0"
                    alt=""
                    src="/svg.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%]">
                      Unlimited doubt sessions, available 24*7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] hidden flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent4Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                Become a Teacher
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent4Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-start p-5 gap-[20px] z-[12] text-5xl text-aqua-deep">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-17xl text-black1">
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Learn, compete, and win certificates in coding competitions
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start pt-0 px-[16.2px] pb-[0.5px] text-sm text-dimgray">
              <div className="self-stretch relative leading-[150%]">
                <p className="m-0">
                  Our coding competitions and hackathons are a great way to put
                  your coding skills to
                </p>
                <p className="m-0">
                  test and to learn and grow while competing with the best minds
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-between p-[15px]">
              <div className="flex-1 flex flex-row items-center justify-between sm:flex-col">
                <img
                  className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/iconpng@2x.png"
                />
                <div className="flex-1 flex flex-col items-center justify-center gap-[10px] sm:flex-[unset] sm:self-stretch">
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
                  <div className="self-stretch flex flex-col items-start justify-start text-sm text-black1">
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
                className="w-[230px] rounded bg-chateau-green box-border h-12 flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-lg text-nero1 border-[1px] border-solid border-nero1 md:w-full"
                onClick={onButtonsgreenContentContainerClick}
              >
                <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Register & Join`}</div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-between p-[15px]">
              <div className="flex-1 flex flex-row items-center justify-between sm:flex-col">
                <img
                  className="w-[186px] rounded h-[127px] overflow-hidden shrink-0 object-cover"
                  alt=""
                  src="/iconpng@2x.png"
                />
                <div className="flex-1 flex flex-col items-center justify-center gap-[10px] sm:flex-[unset] sm:self-stretch">
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
                  <div className="self-stretch flex flex-col items-start justify-start text-sm text-black1">
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
                className="w-[230px] rounded bg-chateau-green box-border h-12 flex flex-row items-center justify-center py-[9px] px-5 cursor-pointer text-lg text-nero1 border-[1px] border-solid border-nero1 md:w-full"
                onClick={onButtonsgreenContentContainer2Click}
              >
                <div className="relative leading-[150%] font-semibold inline-block max-h-[58px]">{`Register & Join`}</div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent5Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                See Competetions
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded hidden flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent5Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-nero1 flex flex-col items-start justify-start p-5 gap-[20px] z-[11] text-13xl">
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
                src="/reason1png@2x.png"
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
                src="/reason1png1@2x.png"
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
                src="/reason1png2@2x.png"
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
        <div className="self-stretch h-[646px] bg-lavenderblush flex flex-col items-center justify-start p-5 box-border gap-[20px] z-[10]">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[120%] font-semibold">
              Watch our students and parents share their experiences at
              InnovatorsHome
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-center justify-start">
            <img
              className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/image-1@2x.png"
            />
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent6Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                Show More Video Testimonial
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded hidden flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent6Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Show More Video Testimonial
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-start justify-start p-5 gap-[20px] z-[9]">
          <div className="self-stretch flex flex-row items-center justify-center">
            <div className="flex-1 relative leading-[120%] font-semibold">{`Students & parents love ❤️ InnovatorsHome`}</div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[20px] text-left text-lg md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image3@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Nisha
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-xl">
                <div className="flex-1 relative leading-[150%]">
                  I love learning with CoDesk. It's always fun and the teacher
                  is nice and kind.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image4@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Peter
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-xl">
                <div className="flex-1 relative leading-[150%]">
                  I love learning with CoDesk. It's always fun and the teacher
                  is nice and kind.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image5@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Rishav
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-xl">
                <div className="flex-1 relative leading-[150%]">
                  I now have two apps published on the Google Play Store. I'm
                  glad to be learning coding.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image6@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Roshni
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-xl">
                <div className="flex-1 relative leading-[150%]">
                  CoDesk's well-structured courses have made coding fun for my
                  son. They're the best and the quickest.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image7@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Surya
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-xl">
                <div className="flex-1 relative leading-[150%]">
                  My son is now an expert in web development, all thanks to the
                  excellent teachers on CoDesk.
                </div>
              </div>
            </div>
            <div className="w-[350px] shadow-[0px_1px_3px_rgba(0,_0,_0,_0.1)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:pl-[5px] sm:pr-[5px] sm:box-border">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start">
                  <img
                    className="w-[100px] relative rounded-100xl h-[100px] object-cover"
                    alt=""
                    src="/image8@2x.png"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[5px]">
                  <div className="self-stretch flex flex-row items-center justify-start">
                    <div className="flex-1 relative leading-[150%] font-semibold">
                      Preeti
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-center justify-start text-base">
                    <div className="flex-1 relative leading-[150%]">
                      CoDesk Student
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start text-center text-xl">
                <div className="flex-1 relative leading-[150%]">
                  My son particularly enjoys CoDesk's curriculum that offers
                  interesting exercises and projects such as Minecraft, Star
                  Wars and Captain America.
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent7Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                See more reviews
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded hidden flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent7Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero1 flex flex-row flex-wrap items-center justify-center p-[15px] gap-[0px_15px] z-[8] text-left md:flex-col md:gap-[15px] md:p-[15px] md:box-border sm:gap-[5px] sm:p-[5px] sm:box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover md:flex-[unset] md:self-stretch"
            alt=""
            src="/dashboarddemopng@2x.png"
          />
          <div className="flex-1 flex flex-col items-start justify-center p-[15px] gap-[15px] md:flex-[unset] md:self-stretch">
            <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[0.5px]">
              <div className="self-stretch relative leading-[120%] font-semibold">
                Intuitive learning dashboard for kids and parents
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[10px] text-sm">
              <div className="self-stretch relative leading-[150%]">{`Class management & progress tracking`}</div>
              <div className="self-stretch relative leading-[150%]">
                Easy rescheduling of classes
              </div>
              <div className="self-stretch relative leading-[150%]">
                Session notes
              </div>
              <div className="self-stretch relative leading-[150%]">
                Certificates of completion
              </div>
              <div className="self-stretch relative leading-[150%]">
                Course and instructor information
              </div>
              <div className="self-stretch relative leading-[150%]">
                Access to global coding competitions, masterclasses, quizzes,
                resources and much more.
              </div>
            </div>
            <div
              className="self-stretch rounded bg-aqua-deep flex flex-row items-center justify-center pt-[18.5px] px-[65px] pb-[19px] cursor-pointer text-center text-lg text-nero1 font-inter border-[1px] border-solid border-nero1"
              onClick={onButtonContainerClick}
            >
              <div className="relative tracking-[-0.01em] leading-[20px] capitalize font-semibold inline-block max-h-[58px]">
                Try a free class
              </div>
            </div>
          </div>
        </div>
        <section className="self-stretch bg-nero1 flex flex-col items-center justify-start p-5 gap-[20px] z-[7] text-center text-17xl text-black1 font-body-xl-500 sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch h-[62px] flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px] box-border">
            <div className="self-stretch relative leading-[120%] font-semibold">
              See amazing projects created by our students
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px] text-left text-5xl md:flex-row md:flex-wrap sm:flex-row sm:flex-wrap">
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image9@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Nisha KC
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
                      <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                        <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
                      </div>
                      <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                        <div className="self-stretch relative leading-[150%]">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
                    <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
                      Website development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
                      Premier league
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                    onClick={onButtonsorangeContent8Click}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                      View Project
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
                alt=""
                src="/rectangle-2@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image10@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Aayush Shrestha
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
                      <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                        <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
                      </div>
                      <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                        <div className="self-stretch relative leading-[150%]">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
                    <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
                      Game Development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
                      Mine Craft
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                    onClick={onButtonsorangeContent9Click}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                      View Project
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
                alt=""
                src="/rectangle-21@2x.png"
              />
            </div>
            <div className="w-[350px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 flex flex-col items-start justify-start p-2.5 box-border relative gap-[25px]">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover z-[0]"
                alt=""
                src="/image11@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[5px] z-[1]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row flex-wrap items-center justify-between">
                    <div className="flex-1 flex flex-col items-start justify-start">
                      <div className="self-stretch relative leading-[150%] font-semibold">
                        Aayush Shrestha
                      </div>
                    </div>
                    <div className="w-[110px] flex flex-row items-center justify-end text-right text-base">
                      <div className="flex-1 flex flex-col items-end justify-center py-0 pr-[5px] pl-0">
                        <div className="w-[65px] relative leading-[150%] flex items-center">{`Grade: `}</div>
                      </div>
                      <div className="w-10 flex flex-col items-start justify-center py-0 pr-[5px] pl-0 box-border text-left text-wwwcodingalcom-mine-shaft">
                        <div className="self-stretch relative leading-[150%]">
                          10
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[220.3px] pl-0 text-base">
                    <div className="relative leading-[150%] inline-block max-w-[373.3299865722656px]">
                      Game Development
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-sm">
                    <div className="relative leading-[120%] font-semibold inline-block max-w-[373.3299865722656px]">
                      Car Race
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-center">
                  <button
                    className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                    onClick={onButtonsorangeContent10Click}
                  >
                    <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                      View Project
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="w-[100px] absolute !m-[0] top-[150px] left-[10px] rounded-100xl h-[100px] object-cover z-[2]"
                alt=""
                src="/rectangle-22@2x.png"
              />
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent8Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                See more projects
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent11Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </section>
        <div className="self-stretch bg-nero1 flex flex-col items-start justify-start p-5 gap-[20px] z-[6] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-center gap-[13px]">
            <div className="w-9 h-[131px] overflow-hidden shrink-0 flex flex-col items-end justify-center">
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[29.2px] shrink-0"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="flex-1 relative leading-[120%] font-semibold">
              It's our love and passion for coding that drives us to teach
              coding
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-base md:flex-row md:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[120%] font-semibold whitespace-pre-wrap">{`“Teaching coding to kids is a huge responsibility and we want to take that”  `}</div>
              </div>
              <div className="w-full overflow-hidden flex flex-col items-center justify-center py-0 px-[42px] box-border max-w-[384px]">
                <img
                  className="w-[146px] relative rounded-61xl-5 h-[154px] object-cover"
                  alt=""
                  src="/rectangle-1@2x.png"
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
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
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
                  src="/rectangle-11@2x.png"
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
            <div className="w-[300px] shadow-[0px_25px_50px_-12px_rgba(0,_0,_0,_0.25)] rounded-lg bg-nero1 overflow-hidden shrink-0 flex flex-col items-center justify-center py-[50px] px-[15px] box-border gap-[15px]">
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
                  src="/rectangle-1@2x.png"
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
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent9Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                Meet our team
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded hidden flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent12Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-start p-5 gap-[20px] z-[5] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">{`Most loved & trusted platform for kids to learn coding`}</div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-[15px] gap-[15px] text-left text-lg md:flex-row md:flex-wrap sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] text-base font-inter sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[22px] font-semibold">
                  Classes runs on hybrid model
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  All level of Coding courses from child to teenagers then
                  adults
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Lifetime support and access to all the resources
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Dashboard to track learning milestones and progress
                </div>
              </div>
            </div>
            <div className="w-[200px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] rounded bg-nero1 flex flex-col items-start justify-start p-[15px] box-border gap-[15px] sm:w-[300px]">
              <img
                className="w-[50px] relative h-[50px] overflow-hidden shrink-0"
                alt=""
                src="/presentationchart.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start">
                <div className="flex-1 relative leading-[150%] font-semibold">
                  Guided course journey for each child
                </div>
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] flex flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent10Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                Know more CoDesk
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded hidden flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent13Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Try a free class
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-start p-5 box-border gap-[20px] min-w-[370px] z-[4] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-row items-center justify-start">
            <div className="flex-1 relative leading-[120%] font-semibold">
              Frequently asked questions
            </div>
          </div>
          <Accordion className="self-stretch">
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>Why should kids learn to code?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Coding for kids helps improve their logical thinking, critical
                thinking, problem-solving skills, creativity, mathematics and
                writing skills and also gives them valuable skills in life and
                at the workplace. Coding provides a competitive advantage when
                applying to colleges, internships, and jobs. In addition, basic
                programming knowledge can change how kids interact daily with
                the technologies they use. It’s a basic literacy–one we can’t
                afford to overlook.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] hidden flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent11Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                Become a Teacher
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent14Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                Ask your doubt?
              </div>
            </button>
          </section>
        </div>
        <div className="self-stretch bg-nero1 flex flex-row items-center justify-center p-5 z-[3] md:flex-col sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="flex-1 bg-nero1 flex flex-col items-start justify-start p-5 gap-[40px] md:flex-[unset] md:self-stretch sm:pl-[5px] sm:pr-[5px] sm:box-border">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-center justify-start pt-0 px-2.5 pb-3">
                <div className="self-stretch relative leading-[120%] font-semibold">
                  You are in safe hands at InnovatorsHome
                </div>
              </div>
              <div className="self-stretch h-[35px] flex flex-row items-center justify-center p-2.5 box-border text-sm">
                <div className="flex-1 relative leading-[150%]">
                  Like thousands of other parents who have enrolled their kids
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm">
              <div className="self-stretch flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[150%] font-medium">
                  At CoDeskLab, we are passionate about customer satisfaction.
                  If at any point, you feel that you wish to discontinue using
                  CoDeskLab, please email us at billing@codesklab.com and we
                  will immediately process your refund for the remaining
                  lessons/classes, no questions asked.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-center gap-[30px] z-[2]">
          <div className="self-stretch bg-nero1 flex flex-col items-center justify-center py-0 px-[5px] gap-[5px]">
            <div className="self-stretch flex flex-row items-center justify-center p-2.5">
              <div className="flex-1 relative leading-[120%] font-semibold">
                Contact Us
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-center p-2.5 text-base">
              <div className="flex-1 relative leading-[150%]">
                Feel free to reach out to us
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5">
            <form className="m-0 w-[550px] shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] rounded-xl bg-nero1 box-border flex flex-col items-start justify-start py-7 px-[30px] gap-[17px] border-[1px] border-solid border-nero1 md:w-[350px]">
              <div className="self-stretch flex flex-col items-start justify-start">
                <div className="self-stretch relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero text-left">
                  Fill in your details to join the party!
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                <input
                  className="[outline:none] font-body-xl-500 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-xl-500 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Email address"
                  type="text"
                />
                <input
                  className="[outline:none] font-body-xl-500 text-base bg-[transparent] self-stretch rounded flex flex-col items-start justify-start py-4 px-3 text-gray1-300 border-[1px] border-solid border-gray1-400"
                  placeholder="Phone Number"
                  type="text"
                />
              </div>
              <button
                className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
                onClick={openImagePopup}
              >
                <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                  Subimt
                </div>
              </button>
            </form>
          </div>
        </div>
        <div className="self-stretch bg-nero1 flex flex-col items-center justify-start p-5 gap-[20px] z-[1] sm:pl-[5px] sm:pr-[5px] sm:box-border">
          <div className="self-stretch flex flex-col items-center justify-start pt-0 px-0 pb-[0.5px]">
            <div className="self-stretch relative leading-[120%] font-semibold">
              Special thanks to
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[20px] text-xs text-dimgray md:flex-row md:flex-wrap">
            <div className="w-[368px] h-[212px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[8px] min-w-[350px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[114px] pl-[113.9px]">
                <div className="w-[309px] relative leading-[130%] flex items-center justify-center">
                  Built by alumni of
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px]">
                <img
                  className="w-[150px] relative h-[108px] object-cover"
                  alt=""
                  src="/standard-collection-25@2x.png"
                />
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/standard-collection-24@2x.png"
                />
              </div>
            </div>
            <div className="w-[368px] h-[212px] flex flex-col items-start justify-start pt-0 px-0 pb-3.5 box-border gap-[8px] min-w-[350px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[114px] pl-[113.9px]">
                <div className="w-[305px] relative leading-[130%] flex items-center justify-center">
                  Backed by
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center gap-[10px]">
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/random-symboles-3@2x.png"
                />
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/random-symboles-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[368px] h-[212px] flex flex-col items-center justify-center pt-0 px-0 pb-3.5 box-border gap-[8px] min-w-[350px]">
              <div className="self-stretch flex flex-col items-center justify-start py-0 pr-[114px] pl-[113.9px]">
                <div className="w-[305px] relative leading-[130%] flex items-center justify-center">
                  Backed by
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px]">
                <img
                  className="w-[150px] relative h-[150px] object-cover"
                  alt=""
                  src="/standard-collection-18@2x.png"
                />
                <img
                  className="w-[150px] relative h-[150px]"
                  alt=""
                  src="/standard-collection-17.svg"
                />
              </div>
            </div>
          </div>
          <section className="self-stretch bg-nero1 flex flex-row flex-wrap items-start justify-center p-[15px] gap-[15px]">
            <button
              className="cursor-pointer py-[9px] px-5 bg-nero1 rounded box-border h-[41px] hidden flex-row items-center justify-center border-[1px] border-solid border-aqua-deep"
              autoFocus={true}
              onClick={onButtonswhiteContent12Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-aqua-deep text-center inline-block max-h-[58px]">
                Become a Teacher
              </div>
            </button>
            <button
              className="cursor-pointer py-[9px] px-5 bg-aqua-deep rounded flex flex-row items-center justify-center border-[1px] border-solid border-nero1"
              autoFocus={true}
              onClick={onButtonsorangeContent16Click}
            >
              <div className="relative text-lg leading-[150%] font-semibold font-body-xl-500 text-nero1 text-center inline-block max-h-[58px]">
                support us
              </div>
            </button>
          </section>
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

export default HomePage;
