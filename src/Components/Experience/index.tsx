import { motion } from "framer-motion";
import styles from "./index.module.scss";

const textAnimate = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4, duration: 1.5 },
  },
};

export default function Experience() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  return (
    <motion.section
      transition={{ staggerChildren: 0.2 }}
      initial={"offscreen"}
      whileInView={"onscreen"}
      id="experience"
      className="my-20"
    >
      <motion.div variants={textAnimate}>
        <h1 className="display-medium secondary-text">Experience</h1>
        <div className="subline"></div>
      </motion.div>
      <motion.div variants={textAnimate} className="px-2 py-5">
        <h2 className="display-small">Senior Software Engineer</h2>
        <h3 className="headline-small primary-text">PrettyLittleThing</h3>
        <p className="title-small secondary-text">
          October 2024 to {month} {year}
        </p>
        <p>
          Worked on building a new Design System used on Prettylittlething
          website and expanding that out across all the other domains at Bohoo
          such as BoohooMan. Allowing resuable components accross fashion based
          websites and flexbility to different branding and designs of each
          domain. Building,improving and maintaing prettylething website.
        </p>
      </motion.div>

      <motion.div variants={textAnimate} className="px-2 py-5">
        <h2 className="display-small">Front End Engineer</h2>
        <h3 className="headline-small primary-text">Smart Pension</h3>
        <p className="title-small secondary-text">August 2022 to May 2024</p>
        <p>
          Front end developer working on a new CMS using modern web technologies
          such as React, Graphql and Remix. Built for desktop and mobile
          applications. Built for over 77000 companies, allowing users to access
          all there pension information in one place.
        </p>
      </motion.div>
      <motion.div variants={textAnimate} className="px-2 py-5">
        <h2 className="display-small">Mid Software Engineer</h2>
        <h3 className="headline-small primary-text">BBC Global News</h3>
        <p className="title-small secondary-text">
          August 2021 to September 2022
        </p>
        <p>
          During the time a BBC I moved up to a mid-level engineer and also
          worked some newer projects. One of the projects was to build modern
          bbc home page, using a modern tech stack, using NextJS, typescript and
          allowing the homepage to be more dynamic and customizable. Also worked
          on Pagebuilder which allowed advertisers and sponsers to build great
          looking article pages they could use to show off their product or
          content.
        </p>
      </motion.div>
      <motion.div variants={textAnimate} className="px-2 py-5">
        <h2 className="display-small">Junior Software Engineer</h2>
        <h3 className="headline-small primary-text">BBC Global News</h3>
        <p className="title-small secondary-text">
          January 2021 to August 2021
        </p>
        <p>
          Working on a wide variety of projects and tech stacks (legacy and
          modern) built for millions of users. Succesfully released BBC travel,
          culture, future and worklife to new design and techstack (React,
          redux, typescript, node, aws). Worked on BBC reel a premium video and
          short documentary platform for readers to help look beyond their
          world.
        </p>
      </motion.div>
      <motion.div variants={textAnimate} className="px-2 py-5">
        <h2 className="display-small">Software Engineer</h2>
        <h3 className="headline-small primary-text">CloudIQ</h3>
        <p className="title-small secondary-text">2017 to 2021</p>
        <p>
          Worked on legacy platform which invloved building custom emails and
          overlays for many clients such as PetsAtHome, EE, TUI and deploying
          tags that collects data from websites to help clients understand sales
          of there site. Successfully released a new paypal partnered product
          for clients.Worked on a new cms platform built using React and node,
          that allowed clients to view there data and create emails and overlays
          for their site.
        </p>
      </motion.div>
    </motion.section>
  );
}
