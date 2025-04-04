import React from 'react';
import { useLocation } from 'react-router-dom';
import RecommendationCard from './RecommendationCard.js';
import "../styles/components/Recommendations.css";

const Recommendations = () => {
  const location = useLocation();
  const recommendations = location.state;

  if (!recommendations) {
    return (
      <div className="recommendations-container">
        <h2>No recommendations available</h2>
        <p>Please fill out the form to get your personalized plan.</p>
      </div>
    );
  }

  return (
    <div className="recommendations-container">
      <div className="recommendations-header">
        <h2>Your Personalized Fitness Plan</h2>
        <p>Based on your profile and goals</p>
      </div>
      
      <RecommendationCard 
        title="Your Fitness Level"
        content={recommendations.fitness_level}
        type="level"
      />
      
      <RecommendationCard
        title="Training Plan"
        content={recommendations.training_plan}
        type="training"
      />
      
      <RecommendationCard
        title="Nutrition Plan"
        content={recommendations.dietary_needs}
        type="nutrition"
      />
      
      <div className="action-buttons">
        <button className="btn btn-primary">Save Plan</button>
        <button className="btn btn-secondary">Print Plan</button>
      </div>
    </div>
  );
};

export default Recommendations;