import React from "react";

import PropTypes from "prop-types";

function RatingQuestion({ questionText, questionId }) {
  return (
    <div class="p-4 rounded overflow-hidden shadow-lg">
      <div class="flex pb-2">
        <span class="text-gray-700">{questionText}</span>
      </div>
      <div class="flex flex-wrap md:w">
        <label class="inline-flex items-center mr-6">
          <input
            type="radio"
            class="form-radio"
            name={questionId}
            value="1"
            required
          ></input>
          <span class="ml-2">Strongly Disagree</span>
        </label>
        <label class="inline-flex items-center mr-6">
          <input
            type="radio"
            class="form-radio"
            name={questionId}
            value="2"
            required
          ></input>
          <span class="ml-2">Disagree</span>
        </label>
        <label class="inline-flex items-center mr-6">
          <input
            type="radio"
            class="form-radio"
            name={questionId}
            value="3"
            required
          ></input>
          <span class="ml-2">Neutral</span>
        </label>
        <label class="inline-flex items-center mr-6">
          <input
            type="radio"
            class="form-radio"
            name={questionId}
            value="4"
            required
          ></input>
          <span class="ml-2">Agree</span>
        </label>
        <label class="inline-flex items-center">
          <input
            type="radio"
            class="form-radio"
            name={questionId}
            value="5"
            required
          ></input>
          <span class="ml-2">Strongly Agree</span>
        </label>
      </div>
    </div>
  );
}

RatingQuestion.propTypes = {
  questionText: PropTypes.string,
  questionId: PropTypes.string
};

export default RatingQuestion;
