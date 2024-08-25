// import React from 'react'
"use client";

import { Accordion } from "flowbite-react";

export default function About() {
  return (
    <div className="About">
      <Accordion>
        <Accordion.Panel className="AccordionPanel">
          <Accordion.Title className="AccordionTitle">
            Who am I?
          </Accordion.Title>
          <Accordion.Content className="AccordionContent">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              I am an beginner programmer in React. I have moderate proficiency
              in HTML, CSS, and JavaScript.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              I have a plan to become a professional web developer, and I am
              currently progressing through it, working on myself to enhance my
              skills.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="AccordionPanel">
          <Accordion.Title className="AccordionTitle">
            What is the website built with?
          </Accordion.Title>
          <Accordion.Content className="AccordionContent">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              This website was built using React and Vite. The following
              libraries were used: React Router DOM for navigation between
              elements. Flowbite React to accelerate the building of certain
              elements. Material-UI for creating elements not present in the
              previous libraries. Font Awesome for importing icons and usage.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel className="AccordionPanel">
          <Accordion.Title className="AccordionTitle">
            About this website
          </Accordion.Title>
          <Accordion.Content className="AccordionContent">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              We experiment with some APIs that we managed to obtain for free to
              showcase them. We used React Hooks to make the pages more
              responsive and smoother. The website is built using MUI, Font
              Awesome, and Flowbite React libraries.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
}
