import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from "~/Components/Navbar";
import Footer from "~/Components/Footer";
import Accordion from "~/Components/Accordion";
import Header from "~/Components/Header";
import PageNotFound from "~/Components/PageNotFound";
import UpperCarousel from "~/Components/UpperCarousel";
import VerticalNavbar from "~/Components/VerticalNavbar";
import HorizontalNavbar from "~/Components/HorizontalNavbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Anmay Academy" },
    { name: "description", content: "Welcome to Online EdTech Platform!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <HorizontalNavbar />
      <VerticalNavbar />
      <UpperCarousel />
      <PageNotFound />
      <Accordion />
      <Footer />
    </div>
  );
}
