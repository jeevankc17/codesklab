import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import CoursePage from "./pages/CoursePage";
import CurriculumByCoursePage from "./pages/CurriculumByCoursePage";
import AboutUsPage from "./pages/AboutUsPage";
import ReviewPage from "./pages/ReviewPage";
import PartnershipPage from "./pages/PartnershipPage";
import BlogPage from "./pages/BlogPage";
import WhyCodeskPage from "./pages/WhyCodeskPage";
import QuizPage from "./pages/QuizPage";
import WorksheetPage from "./pages/WorksheetPage";
import CommingSoonPage from "./pages/CommingSoonPage";
import ApplyTeacher from "./pages/ApplyTeacher";
import QuizByCourseIDPage from "./pages/QuizByCourseIDPage";
import CompetetionPage from "./pages/CompetetionPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/projectpage":
        title = "";
        metaDescription = "";
        break;
      case "/coursepage":
        title = "";
        metaDescription = "";
        break;
      case "/curriculumbycoursepage":
        title = "";
        metaDescription = "";
        break;
      case "/aboutuspage":
        title = "";
        metaDescription = "";
        break;
      case "/reviewpage":
        title = "";
        metaDescription = "";
        break;
      case "/partnershippage":
        title = "";
        metaDescription = "";
        break;
      case "/blogpage":
        title = "";
        metaDescription = "";
        break;
      case "/whycodeskpage":
        title = "";
        metaDescription = "";
        break;
      case "/quizpage":
        title = "";
        metaDescription = "";
        break;
      case "/worksheetpage":
        title = "";
        metaDescription = "";
        break;
      case "/commingsoonpage":
        title = "";
        metaDescription = "";
        break;
      case "/applyteacher":
        title = "";
        metaDescription = "";
        break;
      case "/quizbycourseidpage":
        title = "";
        metaDescription = "";
        break;
      case "/competetionpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projectpage" element={<ProjectPage />} />
      <Route path="/coursepage" element={<CoursePage />} />
      <Route
        path="/curriculumbycoursepage"
        element={<CurriculumByCoursePage />}
      />
      <Route path="/aboutuspage" element={<AboutUsPage />} />
      <Route path="/reviewpage" element={<ReviewPage />} />
      <Route path="/partnershippage" element={<PartnershipPage />} />
      <Route path="/blogpage" element={<BlogPage />} />
      <Route path="/whycodeskpage" element={<WhyCodeskPage />} />
      <Route path="/quizpage" element={<QuizPage />} />
      <Route path="/worksheetpage" element={<WorksheetPage />} />
      <Route path="/commingsoonpage" element={<CommingSoonPage />} />
      <Route path="/applyteacher" element={<ApplyTeacher />} />
      <Route path="/quizbycourseidpage" element={<QuizByCourseIDPage />} />
      <Route path="/competetionpage" element={<CompetetionPage />} />
    </Routes>
  );
}
export default App;
