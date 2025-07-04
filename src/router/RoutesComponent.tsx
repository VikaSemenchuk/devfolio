import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { NotFoundPage } from "@/pages";
import { Layout } from "@/components/Layout";

const LazyHomePage = lazy(() => (import("@/pages/HomePage")))
const LazyAboutPage = lazy(() => (import("@/pages/AboutPage")))
const LazyProjectsPage = lazy(() => (import("@/pages/ProjectsPage")))
const LazyProjectDetailPage = lazy(() => import("@/pages/ProjectDetailsPage"));
const LazyCareerPathPage = lazy(() => (import("@/pages/CareerPathPage")))
const LazyImpressumPage = lazy(() => import("@/pages/ImpressumPage"));
const LazyDatenschutzPage = lazy(() => import("@/pages/DatenschutzPage"));


const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LazyHomePage />} />
        <Route path="about" element={<LazyAboutPage />} />
        <Route path="projects" element={<LazyProjectsPage />} />
        <Route path="projects/:id" element={<LazyProjectDetailPage />} />
        <Route path="path-to-it" element={<LazyCareerPathPage />} />
         <Route path="impressum" element={<LazyImpressumPage />} />
        <Route path="datenschutz" element={<LazyDatenschutzPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutesComponent;