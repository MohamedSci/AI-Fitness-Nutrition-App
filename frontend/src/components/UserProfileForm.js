import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const UserProfileForm = () => {
    const navigate = useNavigate();
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
        weight_lifted_bench: '', // Added missing feature
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserProfile(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userProfile),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch recommendations');
            }

            const data = await response.json();
            navigate('/recommendations', { state: data });

        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Tell us about yourself</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" id="age" name="age" value={userProfile.age} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="gender">Gender:</label>
                    <select id="gender" name="gender" value={userProfile.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="weight">Weight (kg):</label>
                    <input type="number" id="weight" name="weight" value={userProfile.weight} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="height">Height (cm):</label>
                    <input type="number" id="height" name="height" value={userProfile.height} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="pushups">Push-ups:</label>
                    <input type="number" id="pushups" name="pushups" value={userProfile.pushups} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="squats">Squats:</label>
                    <input type="number" id="squats" name="squats" value={userProfile.squats} onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="weight_lifted_squat_max">Max Squat Lift (kg):</label>
                    <input type="number" id="weight_lifted_squat_max" name="weight_lifted_squat_max" value={userProfile.weight_lifted_squat_max} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="weight_lifted_bench_max">Max Bench Lift (kg):</label>
                    <input type="number" id="weight_lifted_bench_max" name="weight_lifted_bench_max" value={userProfile.weight_lifted_bench_max} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="activity_level">Activity Level:</label>
                    <select id="activity_level" name="activity_level" value={userProfile.activity_level} onChange={handleChange} required>
                        <option value="Sedentary">Sedentary</option>
                        <option value="Lightly Active">Lightly Active</option>
                        <option value="Moderately Active">Moderately Active</option>
                        <option value="Very Active">Very Active</option>
                        <option value="Extra Active">Extra Active</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="target_goal">Target Goal:</label>
                    <select id="target_goal" name="target_goal" value={userProfile.target_goal} onChange={handleChange} required>
                        <option value="strength">Strength</option>
                        <option value="endurance">Endurance</option>
                        <option value="weight_loss">Weight Loss</option>
                        <option value="muscle_gain">Muscle Gain</option>
                        <option value="overall_fitness">Overall Fitness</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="dietary_preference">Dietary Preference:</label>
                    <select id="dietary_preference" name="dietary_preference" value={userProfile.dietary_preference} onChange={handleChange}>
                        <option value="none">None</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="pescatarian">Pescatarian</option>
                        <option value="gluten_free">Gluten-Free</option>
                        <option value="dairy_free">Dairy-Free</option>
                        {/* Add more preferences as needed */}
                    </select>
                </div>
                <div>
                    <label htmlFor="plank_duration">Plank Duration (seconds):</label>
                    <input type="number" id="plank_duration" name="plank_duration" value={userProfile.plank_duration} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="running_endurance">Running Endurance (minutes):</label>
                    <input type="number" id="running_endurance" name="running_endurance" value={userProfile.running_endurance} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="weight_lifted_squat">Current Squat Lift (kg):</label>
                    <input type="number" id="weight_lifted_squat" name="weight_lifted_squat" value={userProfile.weight_lifted_squat} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="weight_lifted_bench">Current Bench Lift (kg):</label>
                    <input type="number" id="weight_lifted_bench" name="weight_lifted_bench" value={userProfile.weight_lifted_bench} onChange={handleChange} />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Get Recommendations'}
                </button>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            </form>
        </div>
    );
};

export default UserProfileForm;