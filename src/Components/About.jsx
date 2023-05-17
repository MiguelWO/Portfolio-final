/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/galaxy-3608029_1920.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hi, I'm Miguel Wagner, a system and computer engineer with training and a focus on data and artificial intelligence. I'm constantly searching for fresh chances to put my knowledge and talents to use and support businesses in their endeavors.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web development",
  "Python",
  "JavaScript",
  "React",
  "Express",
  "Data Science",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Visualization",
  "MongoDB",
  "SQL",
  "AWS",
  "Game Development",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am a responsible individual who enjoys learning new things. I also constantly seek for new and better ways to learn new things while keeping up with the most recent advancements and trends in AI. I always strive to realize my long-term career goal of using my expertise to benefit a large organization. I am eager to collaborate with like-minded people that are passionate about the same things I am and am excited about the chances that lay ahead. Please don't hesitate to get in touch with me if you're curious to learn more about my background, abilities, or professional aspirations. I welcome new chances and would be delighted to network with other professionals in my sector.";

const About = () => {
  return (
    <section className="light" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
