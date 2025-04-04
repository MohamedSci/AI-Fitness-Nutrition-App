import React from 'react';
import '../../styles/components/FormSteps.css';

const GoalsStep = ({ userProfile, handleChange }) => {
  return (
    <div className="form-step-content">
      <h2>Your Fitness Goals</h2>
      
      <div className="form-group">
        <label htmlFor="target_goal">Primary Goal</label>
        <select
          id="target_goal"
          name="target_goal"
          value={userProfile.target_goal}
          onChange={handleChange}
          required
        >
          <option value="strength">Build Strength</option>
          <option value="endurance">Improve Endurance</option>
          <option value="weight_loss">Lose Weight</option>
          <option value="muscle_gain">Gain Muscle</option>
          <option value="overall_fitness">Overall Fitness</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="activity_level">Current Activity Level</label>
        <select
          id="activity_level"
          name="activity_level"
          value={userProfile.activity_level}
          onChange={handleChange}
          required
        >
          <option value="Sedentary">Sedentary (little or no exercise)</option>
          <option value="Lightly Active">Lightly Active (light exercise 1-3 days/week)</option>
          <option value="Moderately Active">Moderately Active (moderate exercise 3-5 days/week)</option>
          <option value="Very Active">Very Active (hard exercise 6-7 days/week)</option>
          <option value="Extra Active">Extra Active (very hard exercise & physical job)</option>
        </select>
      </div>
      
      <div className="form-group">
        <label htmlFor="dietary_preference">Dietary Preference</label>
        <select
          id="dietary_preference"
          name="dietary_preference"
          value={userProfile.dietary_preference}
          onChange={handleChange}
        >
          <option value="none">No Restrictions</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="gluten_free">Gluten-Free</option>
          <option value="dairy_free">Dairy-Free</option>
          <option value="keto">Keto</option>
          <option value="paleo">Paleo</option>
        </select>
      </div>
    </div>
  );
};

export default GoalsStep;