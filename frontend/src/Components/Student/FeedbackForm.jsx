import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav';  
import Footer from '../Footer';

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
    
    navigate('/done');
  };
  
  // Inline styles
  const feedbackContainerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    marginTop:'40px',
    marginBottom:'40px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  };

  const selectStyle = {
    width: '100%',
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '16px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '18px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };
    const formGroup = {
      marginBottom:'15px',
    };

  return (
    <div className='feedback-form'>
      <Nav />
      <div style={feedbackContainerStyle}>
        <h1 style={{ textAlign: 'center', color: 'blue', fontSize:'25px', fontWeight:'bold', marginBottom: '20px' }}>
          Saylani Mass IT Feedback Form
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="formGroup" style={formGroup}>
            
            <label style={labelStyle}>1. How was the quality of the lectures?</label>
            <select
              name="question1"
              onChange={handleChange}
              value={feedback.question1}
              style={selectStyle}
              required
            >
              <option value="">Select</option>
              <option value="Good">👍 Good</option>
              <option value="Average">😐 Average</option>
              <option value="Excellent">🌟 Excellent</option>
            </select>
            </div>
          
            <div div className="formGroup" style={formGroup}>
          <label style={labelStyle}>2. How was the course content?</label>
          <select name="question2" onChange={handleChange} value={feedback.question2} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup " style={formGroup}>
          <label style={labelStyle}>3. How was the interaction with the instructor?</label>
          <select name="question3" onChange={handleChange} value={feedback.question3} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup" style={formGroup}>
          <label style={labelStyle}>4. How was the overall learning environment?</label>
          <select name="question4" onChange={handleChange} value={feedback.question4} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup" style={formGroup}>
          <label style={labelStyle}>5. How likely are you to recommend this course to others?</label>
          <select name="question5" onChange={handleChange} value={feedback.question5} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup" style={formGroup}>
          <label style={labelStyle}>6. How clear were the course materials?</label>
          <select name="question6" onChange={handleChange} value={feedback.question6} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup" style={formGroup}>
          <label style={labelStyle}>7. How helpful were the course resources?</label>
          <select name="question7" onChange={handleChange} value={feedback.question7} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup" style={formGroup}>
          <label style={labelStyle}>8. How engaging were the class activities?</label>
          <select name="question8" onChange={handleChange} value={feedback.question8} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup" style={formGroup}>
          <label style={labelStyle}>9. How effective was the feedback from the instructor?</label>
          <select name="question9" onChange={handleChange} value={feedback.question9} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>

        <div className="formGroup mb-7" style={formGroup}>
          <label style={labelStyle}>10. How satisfied are you with the overall course?</label>
          <select name="question10" onChange={handleChange} value={feedback.question10} style={selectStyle} required>
            <option value="">Select</option>
            <option value="Good">👍 Good</option>
            <option value="Average">😐 Average</option>
            <option value="Excellent">🌟 Excellent</option>
          </select>
        </div>


          <button type="submit" style={buttonStyle}>Submit Feedback</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default FeedbackForm;
