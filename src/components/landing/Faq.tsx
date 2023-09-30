import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

function Faq() {
  const accordionData = [
    {
      id: "f22g7232",
      ques: "What is PayBuddy and what services does it provide?",
      ans: "PayBuddy addresses a growing need in the modern workforce by, we specialize in providing payroll and compliance services for remote teams. We handle all aspects of payroll processing, including tax calculations, deductions, and compliance reporting across multiple countries.",
    },
    {
      id: "f34g7232",
      ques: "Who can benefit from PayBuddy?",
      ans: "PayBuddy addresses a growing need in the modern workforce by, we specialize in providing payroll and compliance services for remote teams. We handle all aspects of payroll processing, including tax calculations, deductions, and compliance reporting across multiple countries.",
    },
    {
      id: "f2g7232",
      ques: "Which countries does PayBuddy support?",
      ans: "PayBuddy addresses a growing need in the modern workforce by, we specialize in providing payroll and compliance services for remote teams. We handle all aspects of payroll processing, including tax calculations, deductions, and compliance reporting across multiple countries.",
    },
    {
      id: "f32g5232",
      ques: "What happens if there's an issue with payroll processing",
      ans: "PayBuddy addresses a growing need in the modern workforce by, we specialize in providing payroll and compliance services for remote teams. We handle all aspects of payroll processing, including tax calculations, deductions, and compliance reporting across multiple countries.",
    },
    {
      id: "f2g6232",
      ques: "Will my data be secured on PayBuddy?",
      ans: "PayBuddy addresses a growing need in the modern workforce by, we specialize in providing payroll and compliance services for remote teams. We handle all aspects of payroll processing, including tax calculations, deductions, and compliance reporting across multiple countries.",
    },
    {
      id: "f32g723",
      ques: "Will my data be secured on PayBuddy?",
      ans: "PayBuddy addresses a growing need in the modern workforce by, we specialize in providing payroll and compliance services for remote teams. We handle all aspects of payroll processing, including tax calculations, deductions, and compliance reporting across multiple countries.",
    },
  ];

  return (
    <div className="mx-auto px-4 md:px-0 flex  flex-col md:flex-row  w-full max-w-7xl mb-32 items-center">
      <div className=" max-w-lg mb-7 md:mb-0">
        <h2 className="text-center md:text-left text-2xl md:text-6xl font-heading-font mb-2 md:mb-4 ">
          Frequently <br className="hidden md:block" /> Asked Questions
        </h2>
        <p className="text-center md:text-left text-lg text-muted-foreground">
          Have an unaswered question? Reach us at support@paybuddy.com
        </p>
      </div>
      <div
        style={{ boxShadow: "20px 50px 80px 10px hsla(0, 0%, 0%, 0.25)" }}
        className="flex-1 bg-muted px-4 md:px-10 md:py-8 py-5 rounded-xl border-slate-50/10 border"
      >
        <Accordion type="single" className="w-full">
          {accordionData.map(({ id, ques, ans }) => (
            <AccordionItem value={id} key={id}>
              <AccordionTrigger>{ques}</AccordionTrigger>
              <AccordionContent>{ans}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq;
