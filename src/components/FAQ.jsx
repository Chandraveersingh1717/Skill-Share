import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "1. How does deSk reward points?",
    answer:
      "deSk rewards points for class participation, attendance, completing tasks, and inviting others. Points can be redeemed for discounts or perks.",
  },
  {
    question: "2. How do I choose the right tutor?",
    answer:
      "You can view tutor profiles, ratings, and reviews. Filter by subject and teaching style to find your perfect match.",
  },
  {
    question: "3. What if I am dissatisfied with the class?",
    answer:
      "You can request a refund or reschedule with a different tutor. Your feedback helps improve the platform.",
  },
  {
    question: "4. How to join the class meet?",
    answer:
      "After booking, a link is sent to your email and dashboard. Click it at the scheduled time to join.",
  },
  {
    question: "5. How to earn rewards?",
    answer:
      "Earn rewards by attending classes, referring friends, completing assignments, and engaging with platform activities.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleIndex(index)}
          >
            {item.question}
          </div>
          <div className="faq-answer">
            {activeIndex === index && <p>{item.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
