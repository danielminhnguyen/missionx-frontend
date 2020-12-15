import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from "../../components/Footer/Footer";
import ProjectLibraryContent from "./Project";

export default function ProjectLibrary() {
  return (
    <div className="page">
      <NavigationBar authenticated={true} />
      <ProjectLibraryContent />
      <Footer />
    </div>
  );
}
