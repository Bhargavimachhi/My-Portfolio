import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { projectsDetails } from "@/assets/data/projectDetails";
import { useParams } from "react-router-dom";
import { ProjectHeadingImage } from "./ProjectHeadingImage";
import { ProjectPortals } from "./ProjectPortals";
import { ProjectDetails } from "./ProjectDetails";
import { Footer } from "./Footer";
import { NotFoundPage } from "./NotFoundPage";

export const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setProject(projectsDetails[id]);

    if (!projectsDetails[id]) {
      setNotFound(true);
    }

    setLoading(false);
  }, [id, projectsDetails]);

  if (notFound) {
    return <NotFoundPage />;
  }

  if (loading) {
    return;
  }

  return (
    <>
      <Navbar />
      <ProjectHeadingImage
        title={project.title}
        description={project.description}
        imageSrc={project.imageSrc}
        github={project.github}
        liveLink={project.liveLink}
      />
      <ProjectDetails project={project} />
      <ProjectPortals portals={project.portals} />
      <Footer />
    </>
  );
};
