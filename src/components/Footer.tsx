import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

export type FooterType = {
  /** Action props */
  onAboutUs3Click?: () => void;
  onPartnershipsClick?: () => void;
  onCareersClick?: () => void;
  onWhyCoDeskClick?: () => void;
  onPythonClick?: () => void;
  onBlogsClick?: () => void;
  onQuizClick?: () => void;
  onCompetetionClick?: () => void;
};

const Footer: FunctionComponent<FooterType> = ({
  onAboutUs3Click,
  onPartnershipsClick,
  onCareersClick,
  onWhyCoDeskClick,
  onPythonClick,
  onBlogsClick,
  onQuizClick,
  onCompetetionClick,
}) => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start z-[0] text-center text-13xl text-black1 font-heading-04-600">
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[108px] shrink-0 object-cover"
        alt=""
        src="/subscribe-section-background6@2x.png"
      />
      <div className="self-stretch bg-footer-header flex flex-col items-center justify-start py-2.5 px-5 gap-[44px] lg:flex-col">
        <div className="self-stretch flex flex-col items-start justify-start gap-[14px] !mb-[40px]">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="h-[38px] flex-1 relative leading-[120%] font-semibold inline-block">
              CoDesk
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-lg text-nero">
            <div className="h-[81px] flex-1 relative leading-[150%] inline-block md:text-left sm:text-left">
              The CoDesk is on a mission to inspire school kids in Nepal to fall
              in love with coding. Coding is proven to develop creativity,
              logical thinking, and problem-solving skills in kids. It's an
              essential skill for the future, with more than 60% of all jobs in
              STEM-related fields requiring knowledge of code. Kids who start
              learning to code at a young age are guaranteed to become leaders,
              creators, and entrepreneurs of the future.
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[5px] text-right text-base text-nero lg:flex-row md:flex-col sm:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] md:flex-[unset] md:self-stretch sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-row items-start justify-start text-xl">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Company
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] h-6 flex-1 relative leading-[150%] text-[inherit] inline-block"
                to="/aboutuspage"
                onClick={onAboutUs3Click}
              >
                About Us
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/partnershippage"
                onClick={onPartnershipsClick}
              >
                Partnerships
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/applyteacher"
                onClick={onCareersClick}
              >
                Careers
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/whycodeskpage"
                onClick={onWhyCoDeskClick}
              >
                Why CoDesk?
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-center md:flex-[unset] md:self-stretch sm:!mb-[40px] sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-row items-start justify-start text-xl">
              <div className="flex-1 relative leading-[150%] font-semibold">
                Best Courses
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <a className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]">
                Scratch
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/commingsoonpage"
              >
                Web Development
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <a className="[text-decoration:none] flex-1 relative leading-[150%] text-[inherit]">
                Game Development
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/curriculumbycoursepage"
                onClick={onPythonClick}
              >
                Python
              </Link>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[10px] text-left md:flex-[unset] md:self-stretch sm:flex-[unset] sm:self-stretch">
            <div className="self-stretch flex flex-row items-start justify-start text-xl">
              <div className="flex-1 relative leading-[150%] font-semibold">
                More
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/worksheetpage"
              >
                Worksheet
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/blogpage"
                onClick={onBlogsClick}
              >
                Blogs
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
                to="/quizpage"
                onClick={onQuizClick}
              >
                Quiz
              </Link>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start">
              <Link
                className="cursor-pointer [text-decoration:none] flex-1 relative leading-[150%] text-[inherit]"
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
  );
};

export default Footer;
