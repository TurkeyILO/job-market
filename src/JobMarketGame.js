import React, { useState } from "react";

const scenarios = {
  start: {
    text: "Choose Your Path in the Job Market",
    options: [
      { text: "Apply for a Job", next: "apply" },
      { text: "Start Your Own Business", next: "business" },
      { text: "Network and Use Connections", next: "network" }
    ]
  },
  apply: {
    text: "You submit your CV. What's next?",
    options: [
      { text: "Wait for a response", next: "no_response" },
      { text: "Apply elsewhere", next: "more_apps" }
    ]
  },
  no_response: {
    text: "You never hear back. Try again?",
    options: [{ text: "Go back", next: "start" }]
  },
  more_apps: {
    text: "You apply to 50 jobs, but only unpaid internships respond. Try again?",
    options: [{ text: "Go back", next: "start" }]
  },
  business: {
    text: "You start your own business. What next?",
    options: [
      { text: "Apply for a loan", next: "loan" },
      { text: "Start freelancing", next: "freelance" }
    ]
  },
  loan: {
    text: "You get lost in paperwork. Try again?",
    options: [{ text: "Go back", next: "start" }]
  },
  freelance: {
    text: "Companies refuse to hire without ‘formal experience.’ Try again?",
    options: [{ text: "Go back", next: "start" }]
  },
  network: {
    text: "Your connections help you find opportunities, but what about those without them?",
    options: [{ text: "Go back", next: "start" }]
  },
  debate: {
    text: "Debate this at the ILO",
    options: [{ text: "Now let's fix this system at ILO HNMUN!", next: "start" }]
  }
};

const JobMarketGame = () => {
  const [currentStep, setCurrentStep] = useState("start");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 relative">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" alt="Turkey Flag" className="absolute top-4 left-4 w-12" />
      <h1 class
