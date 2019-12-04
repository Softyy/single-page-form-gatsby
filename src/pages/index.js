import React from "react";

import Layout from "../components/layout";
import RatingQuestion from "../components/rating-questions";
import CommentQuestion from "../components/comment-question";

const courses = [
  {
    text: "Python Essentials",
    id: "essentials"
  },
  {
    text: "Python Analytics",
    id: "analytics"
  },
  {
    text: "Hadoop Essentials",
    id: "hadoop"
  },
  {
    text: "Python Dashboards",
    id: "dashboards"
  },
  {
    text: "Machine Learning / AI",
    id: "ml/ai"
  }
];

const questions1 = [
  {
    text:
      "1. The materials used in class increased my knowledge and skills in the subject matter.",
    id: "q1"
  },
  {
    text: "2. The exercises and assigned readings were valuable.",
    id: "q2"
  },
  {
    text:
      "3. The course was organized in a manner that eased my understanding of the subject matter.",
    id: "q3"
  },
  {
    text: "4. I would prefer to have more in class assignments and exercises.",
    id: "q4"
  }
];

const questions2 = [
  {
    text:
      "5. The course gave me confidence to do more advanced work in the subject.",
    id: "q5"
  },
  {
    text:
      "6. After this course I am encouraged to expand my knowledge in Python further.",
    id: "q6"
  },
  {
    text:
      "7. The exercises and quizzes contributed to my knowledge of the course material and understanding of the subject.",
    id: "q7"
  },
  {
    text:
      "8. I have a clear understanding about Python and how it can benefit in my job.",
    id: "q8"
  },
  {
    text: "9. The course was Challenging",
    id: "q9"
  }
];

const questions3 = [
  {
    text: "10. I would highly recommend this course to other students",
    id: "q10"
  },
  {
    text: "11. There are clear benefits I can take away from this course",
    id: "q11"
  },
  {
    text:
      "12. The instructor did a good job of explaining all different topics",
    id: "q12"
  }
];

const questions4 = [
  {
    text: "13. What are the strengths of this course?",
    id: "q13"
  },
  {
    text:
      "14. What parts of the course were the most difficult to your learning",
    id: "q14"
  },
  {
    text:
      "15. Name one to three specific things about the course or instructor that was done well to support student learning.",
    id: "q15"
  },
  {
    text:
      "16. Name one to three specific things about the course that could be improved to better support student learning.",
    id: "q16"
  }
];

function IndexPage() {
  return (
    <Layout>
      <section>
        <form
          name="python-review"
          className="mx-auto md:w-3/4"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="python-review" />

          <p className="leading-loose mb-8">
            Please fill out this form for feedback on the python course you
            took!
          </p>
          <div class="p-4 rounded overflow-hidden shadow-lg">
            <label class="block">
              <span class="text-gray-700">Course Name</span>
              <select
                class="form-select block w-full mt-1 bg-gray-100 p-2"
                name="course"
                id="course"
              >
                {courses.map(c => (
                  <option value={c.id}>{c.text}</option>
                ))}
              </select>
            </label>
          </div>

          <h2 className="mt-8">Section 1: Course Material</h2>

          {questions1.map(q => (
            <RatingQuestion questionText={q.text} questionId={q.id} />
          ))}

          <CommentQuestion
            questionText="Additional Comments?"
            questionId="section-1-additional"
          />

          <h2 className="mt-8">Section 2: Course Structure and Flow</h2>

          {questions2.map(q => (
            <RatingQuestion questionText={q.text} questionId={q.id} />
          ))}

          <CommentQuestion
            questionText="Additional Comments?"
            questionId="section-2-additional"
          />
          <h2 className="mt-8">Section 3: Overall Review</h2>

          {questions3.map(q => (
            <RatingQuestion questionText={q.text} questionId={q.id} />
          ))}

          <CommentQuestion
            questionText="Additional Comments?"
            questionId="section-3-additional"
          />

          <h2 className="mt-8">
            Section 4: What can we improve / What did we do well?
          </h2>
          {questions4.map(q => (
            <CommentQuestion
              questionText={q.text}
              questionId={q.id}
              required={true}
            />
          ))}
          <button className="border-b-4 border-gray-800 hover:border-gray-700 bg-gray-700 hover:bg-gray-600 font-bold px-4 py-2 rounded text-sm text-white mt-2">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default IndexPage;
