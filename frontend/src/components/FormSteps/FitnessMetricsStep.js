import React from 'react';
import '../../styles/components/FormSteps.css';

const FitnessMetricsStep = ({ userProfile, handleChange }) => {
  return (
    <div className="form-step-content">
      <h2>Fitness Metrics</h2>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="pushups">Push-ups (max in 1 min)</label>
          <input
            type="number"
            id="pushups"
            name="pushups"
            value={userProfile.pushups}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="squats">Squats (max in 1 min)</label>
          <input
            type="number"
            id="squats"
            name="squats"
            value={userProfile.squats}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="plank_duration">Plank Duration (seconds)</label>
          <input
            type="number"
            id="plank_duration"
            name="plank_duration"
            value={userProfile.plank_duration}
            onChange={handleChange}
            min="0"
            max="600"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="running_endurance">Running Endurance (minutes)</label>
          <input
            type="number"
            id="running_endurance"
            name="running_endurance"
            value={userProfile.running_endurance}
            onChange={handleChange}
            min="0"
            max="300"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="weight_lifted_squat">Current Squat Weight (kg)</label>
          <input
            type="number"
            id="weight_lifted_squat"
            name="weight_lifted_squat"
            value={userProfile.weight_lifted_squat}
            onChange={handleChange}
            min="0"
            step="0.5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="weight_lifted_squat_max">Max Squat Weight (kg)</label>
          <input
            type="number"
            id="weight_lifted_squat_max"
            name="weight_lifted_squat_max"
            value={userProfile.weight_lifted_squat_max}
            onChange={handleChange}
            min="0"
            step="0.5"
          />
        </div>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="weight_lifted_bench">Current Bench Weight (kg)</label>
          <input
            type="number"
            id="weight_lifted_bench"
            name="weight_lifted_bench"
            value={userProfile.weight_lifted_bench}
            onChange={handleChange}
            min="0"
            step="0.5"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="weight_lifted_bench_max">Max Bench Weight (kg)</label>
          <input
            type="number"
            id="weight_lifted_bench_max"
            name="weight_lifted_bench_max"
            value={userProfile.weight_lifted_bench_max}
            onChange={handleChange}
            min="0"
            step="0.5"
          />
        </div>
      </div>
    </div>
  );
};

export default FitnessMetricsStep;