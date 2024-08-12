import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FeedbackForm.css';  
import Nav from '../Nav';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    Object.keys(feedback).forEach((key) => {
      if (!feedback[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Feedback submitted:', feedback);
    setFeedback({
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
      question6: '',
      question7: '',
      question8: '',
      question9: '',
      question10: '',
    });
    setErrors({});
    navigate('/done');
  };

  return (
    <div className="feedback-page">
      <Nav />
      <div className="feedback-container">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Saylani Mass IT Feedback Form
        </h1>

        <form onSubmit={handleSubmit} className="feedback-form">
          <div className="form-group">
            <label>1. How was the quality of the lectures?</label>
            <select name="question1" onChange={handleChange} value={feedback.question1}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question1 && <p className="error-message">{errors.question1}</p>}
          </div>

          <div className="form-group">
            <label>2. How was the course content?</label>
            <select name="question2" onChange={handleChange} value={feedback.question2}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question2 && <p className="error-message">{errors.question2}</p>}
          </div>

          <div className="form-group">
            <label>3. How was the interaction with the instructor?</label>
            <select name="question3" onChange={handleChange} value={feedback.question3}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question3 && <p className="error-message">{errors.question3}</p>}
          </div>

          <div className="form-group">
            <label>4. How was the overall learning environment?</label>
            <select name="question4" onChange={handleChange} value={feedback.question4}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question4 && <p className="error-message">{errors.question4}</p>}
          </div>

          <div className="form-group">
            <label>5. How likely are you to recommend this course to others?</label>
            <select name="question5" onChange={handleChange} value={feedback.question5}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question5 && <p className="error-message">{errors.question5}</p>}
          </div>

          <div className="form-group">
            <label>6. How clear were the course materials?</label>
            <select name="question6" onChange={handleChange} value={feedback.question6}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question6 && <p className="error-message">{errors.question6}</p>}
          </div>

          <div className="form-group">
            <label>7. How helpful were the course resources?</label>
            <select name="question7" onChange={handleChange} value={feedback.question7}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question7 && <p className="error-message">{errors.question7}</p>}
          </div>

          <div className="form-group">
            <label>8. How engaging were the class activities?</label>
            <select name="question8" onChange={handleChange} value={feedback.question8}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question8 && <p className="error-message">{errors.question8}</p>}
          </div>

          <div className="form-group">
            <label>9. How effective was the feedback from the instructor?</label>
            <select name="question9" onChange={handleChange} value={feedback.question9}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question9 && <p className="error-message">{errors.question9}</p>}
          </div>

          <div className="form-group">
            <label>10. How satisfied are you with the overall course?</label>
            <select name="question10" onChange={handleChange} value={feedback.question10}>
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            {errors.question10 && <p className="error-message">{errors.question10}</p>}
          </div>

          <button type="submit" className="submit-button">Submit Feedback</button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
