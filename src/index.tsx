import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { TestimoniesPage } from "./screens/TestimoniesPage/TestimoniesPage";
import { ContactPage } from "./screens/ContactPage/ContactPage";
import { BlogPage } from "./screens/BlogPage/BlogPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/testimonies", element: <TestimoniesPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/about", element: <AboutPage /> }
]);

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);