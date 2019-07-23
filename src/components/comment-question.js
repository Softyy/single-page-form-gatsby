import React from "react";

import PropTypes from "prop-types";

function CommentQuestion({ questionText, questionId, required }) {
  return (
    <div class="p-4 rounded overflow-hidden shadow-lg">
      <label class="block">
        <span class="text-gray-700">{questionText}</span>
        <textarea
          class="form-textarea mt-1 block w-full bg-gray-200"
          rows="3"
          name={questionId}
          placeholder="Enter your comments here..."
          required={required}
          minlength="20"
        ></textarea>
      </label>
    </div>
  );
}

CommentQuestion.propTypes = {
  questionText: PropTypes.string,
  questionId: PropTypes.string,
  required: PropTypes.string
};

CommentQuestion.defaultProps = {
  required: false
};

export default CommentQuestion;
