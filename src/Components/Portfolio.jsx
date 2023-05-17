/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg";

const imageAltText = "laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Image recognition using YOLO ",
    description:
      "Implementing the YOLO (You Only Look Once) algorithm to perform real-time object detection in images or videos. This project was implemented using different coins for its identification and was deployed on mobile devices.",
    url: "https://colab.research.google.com/drive/1jrI6scYzeTOOfbPLm2lec8Wn_Zl4dUik?usp=sharing",
  },
  {
    title: "Data Visualization Portfolio",
    description:
      "Developed and showcased a collection of visually compelling and informative data visualizations. Utilized various tools and techniques to transform complex data sets into easy-to-understand visuals, facilitating data-driven decision-making",
    url: "https://github.com/MiguelWO/data-visualization-portfolio",
  },
  {
    title: "Fullstack Social Media Web-App",
    description:
      "Designed and built a dynamic social media web application using Express and React. Developed both the frontend and backend components to create a seamless user experience. Implemented features such as user authentication, real-time updates, and interactive user interfaces.",
    url: "https://github.com/MiguelWO/social-media",
  },
  {
    title: "Pokedex",
    description:
      "Developed a Pokedex application using React and TypeScript. Designed and implemented a user-friendly interface to display detailed information about various Pokemon species. Integrated external APIs to fetch and update Pokemon data in real-time. Demonstrated proficiency in React components, state management, and responsive design to create a smooth and interactive user experience.",
    url: "https://github.com/MiguelWO/pokemon-ts",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
