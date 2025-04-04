import React from 'react';
import './styles/components/FormSteps.css';

const ReviewStep = ({ userProfile }) => {
  const formatValue = (value) => {
    if (value === '' || value === null || value === undefined) return 'Not provided';
    return value;
  };

  return (
    <div className="form-step-content">
      <h2>Review Your Information</h2>
      <p>Please review your information before submitting.</p>
      
      <div className="review-step">
        <h3>Personal Information</h3>
        <div className="review-item">
          <div className="review-label">Age</div>
          <div className="review-value">{formatValue(userProfile.age)}</div>
        </div>
        <div className="review-item">
          <div className="review-label">Gender</div>
          <div className="review-value">{formatValue(userProfile.gender)}</div>
        </div>
        <div className="review-item">
          <div className="review-label">Weight</div>
          <div className="review-value">{formatValue(userProfile.weight)} kg</div>
        </div>
        <div className="review-item">
          <div className="review-label">Height</div>
          <div className="review-value">{formatValue(userProfile.height)} cm</div>
        </div>
        
        <h3>Fitness Metrics</h3>
        <div className="review-item">
          <div className="review-label">Push-ups (max in 1 min)</div>
          <div className="review-value">{formatValue(userProfile.pushups)}</div>
        </div>
        <div className="review-item">
          <div className="review-label">Squats (max in 1 min)</div>
          <div className="review-value">{formatValue(userProfile.squats)}</div>
        </div>
        <div className="review-item">
          <div className="review-label">Plank Duration</div>
          <div className="review-value">{formatValue(userProfile.plank_duration)} seconds</div>
        </div>
        
        <h3>Goals & Preferences</h3>
        <div className="review-item">
          <div className="review-label">Primary Goal</div>
          <div className="review-value">{formatValue(userProfile.target_goal)}</div>
        </div>
        <div className="review-item">
          <div className="review-label">Activity Level</div>
          <div className="review-value">{formatValue(userProfile.activity_level)}</div>
        </div>
        <div className="review-item">
          <div className="review-label">Dietary Preference</div>
          <div className="review-value">{formatValue(userProfile.dietary_preference)}</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewStep;