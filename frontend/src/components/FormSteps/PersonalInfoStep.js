import React from 'react';
import '../../styles/components/FormSteps.css';

const PersonalInfoStep = ({ userProfile, handleChange }) => {
  return (
    <div className="form-step-content">
      <h2>Personal Information</h2>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={userProfile.age}
          onChange={handleChange}
          required
          min="13"
          max="100"
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={userProfile.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={userProfile.weight}
            onChange={handleChange}
            required
            min="30"
            max="300"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="height">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={userProfile.height}
            onChange={handleChange}
            required
            min="100"
            max="250"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;