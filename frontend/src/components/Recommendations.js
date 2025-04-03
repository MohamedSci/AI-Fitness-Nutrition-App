import React from 'react';
import { useLocation } from 'react-router';

const Recommendations = () => {
    const location = useLocation();
    const recommendations = location.state;

    if (!recommendations) {
        return <p>No recommendations available. Please fill out the form.</p>;
    }

    return (
        <div>
            <h2>Your Personalized Recommendations</h2>
            {recommendations.fitness_level && (
                <div>
                    <h3>Fitness Level</h3>
                    <p>{recommendations.fitness_level}</p>
                </div>
            )}
            {recommendations.training_plan && (
                <div>
                    <h3>Training Plan</h3>
                    <p>Workout Frequency: {recommendations.training_plan.workout_frequency}</p>
                    <ul>
                        {recommendations.training_plan.exercises.map((exercise, index) => (
                            <li key={index}>
                                {exercise.name}: {exercise.sets} sets of {exercise.repetitions} reps
                                {exercise.details && ` (${exercise.details})`}
                                {exercise.muscle_group && ` (Muscle Group: ${exercise.muscle_group})`}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {recommendations.dietary_needs && (
                <div>
                    <h3>Dietary Needs</h3>
                    <p>Daily Calories: {recommendations.dietary_needs.daily_calories}</p>
                    {recommendations.dietary_needs.macronutrient_targets && (
                        <p>
                            Macronutrient Targets: Protein: {recommendations.dietary_needs.macronutrient_targets.protein}g,
                            Carbs: {recommendations.dietary_needs.macronutrient_targets.carbs}g,
                            Fat: {recommendations.dietary_needs.macronutrient_targets.fat}g
                        </p>
                    )}
                    {/* You might want to display more detailed dietary recommendations here */}
                </div>
            )}
        </div>
    );
};

export default Recommendations;