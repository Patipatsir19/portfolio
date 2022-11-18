import React from "react";

import "./experience.styles.scss";

const Experience = () => {
  return (
    <>
      <div className="experience mb-3">
        <div className="experience_list">
          <div className="circle mb-2">2+</div>
          <span>Working</span>
          <span>career</span>
        </div>
        <div className="experience_list">
          <div className="circle mb-2">3+</div>
          <span>Complete</span>
          <span>Project</span>
        </div>
        <div className="experience_list">
          <div className="circle mb-2">2+</div>
          <span>companies</span>
        </div>
      </div>
      <div className="career mb-3">
        <div className="career_list">
          <div>Food Science</div>
          <dl>
            <dt className="career_list_factory">Hi-q food product Co.,Ltd.</dt>
            <dd>Production Asst. Supervisor (Retort)</dd>
            <dd>I had manage employee in 3 factory in a diary, Solving the problems in diaty and controlled retort in sometime.</dd>
            <dt className="career_list_factory">Perfect Companion Group Co.,Ltd.</dt>
            <dd>Production Supervisor (Retort)</dd>
            <dd>I had manage employee in retort section, Solving the problems, controlled the retort and unload machine. </dd>
            <dt className="career_list_factory">Food Service And Consultant Co.,Ltd</dt>
            <dd>Process Authority</dd>
            <dd>I made document for factory who I test the product in sealed container and retort machine.</dd>
          </dl>
        </div>
      </div>
    </>
  );
};

export default Experience;
