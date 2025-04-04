import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterGuide from './CharacterGuide.js';
import ProgressBar from './ProgressBar.js';
import PersonalInfoStep from './FormSteps/PersonalInfoStep.js';
import FitnessMetricsStep from './FormSteps/FitnessMetricsStep.js';
import GoalsStep from './FormSteps/GoalsStep.js';
import ReviewStep from './FormSteps/ReviewStep.js';
import { submitUserProfile } from '../utils/api.js';
import '../styles/components/FormSteps.css';

const UserProfileForm = () => {
  const [step, setStep] = useState(1);
  const [userProfile, setUserProfile] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    pushups: '',
    squats: '',
    weight_lifted_squat_max: '',
    weight_lifted_bench_max: '',
    activity_level: 'Moderately Active',
    target_goal: 'strength',
    dietary_preference: 'none',
    plank_duration: '',
    running_endurance: '',
    weight_lifted_squat: '',
    weight_lifted_bench: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await submitUserProfile(userProfile);
      navigate('/recommendations', { state: data });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfoStep userProfile={userProfile} handleChange={handleChange} />;
      case 2:
        return <FitnessMetricsStep userProfile={userProfile} handleChange={handleChange} />;
      case 3:
        return <GoalsStep userProfile={userProfile} handleChange={handleChange} />;
      case 4:
        return <ReviewStep userProfile={userProfile} />;
      default:
        return <PersonalInfoStep userProfile={userProfile} handleChange={handleChange} />;
    }
  };

  return (
    <div className="form-container">
      <CharacterGuide step={step} />
      <ProgressBar step={step} totalSteps={4} />
      
      <form onSubmit={step === 4 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        <div className={`form-step form-step-${step}`}>
          {renderStep()}
        </div>

        <div className="form-navigation">
          {step > 1 && (
            <button type="button" onClick={prevStep} className="btn btn-secondary">
              Previous
            </button>
          )}
          {step < 4 ? (
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          ) : (
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Generating Your Plan...' : 'Get My Plan!'}
            </button>
          )}
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default UserProfileForm;