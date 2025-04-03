import pandas as pd
import numpy as np

class DataPreprocessor:
    def preprocess_user_data(self, user_profile_df):
        """
        Preprocesses the user data for model prediction.
        """
        # Calculate BMI
        user_profile_df['height_m'] = user_profile_df['height'] / 100
        user_profile_df['bmi'] = user_profile_df['weight'] / (user_profile_df['height_m'] ** 2)
        user_profile_df.drop(columns=['height_m', 'height', 'weight'], inplace=True)

        # Convert gender to numerical (example: male=1, female=0, other=2)
        user_profile_df['gender'] = user_profile_df['gender'].map({'male': 1, 'female': 0, 'other': 2}).fillna(-1)

        # Convert activity level to numerical (example mapping)
        activity_mapping = {
            'Sedentary': 1,
            'Lightly Active': 2,
            'Moderately Active': 3,
            'Very Active': 4,
            'Extra Active': 5
        }
        user_profile_df['activity_level'] = user_profile_df['activity_level'].map(activity_mapping).fillna(0)

        # Convert target goal to numerical (example mapping)
        goal_mapping = {
            'strength': 1,
            'endurance': 2,
            'weight_loss': 3,
            'muscle_gain': 4,
            'overall_fitness': 5
        }
        user_profile_df['target_goal'] = user_profile_df['target_goal'].map(goal_mapping).fillna(0)

        # Convert dietary preference to numerical (example mapping)
        dietary_mapping = {
            'none': 0,
            'vegetarian': 1,
            'vegan': 2,
            'pescatarian': 3,
            'gluten_free': 4,
            'dairy_free': 5
        }
        user_profile_df['dietary_preference'] = user_profile_df['dietary_preference'].map(dietary_mapping).fillna(0)

        # Ensure the order of columns matches the training data
        expected_columns = [
            'age', 'gender', 'pushups', 'squats', 'weight_lifted_squat_max',
            'weight_lifted_bench_max', 'activity_level', 'target_goal',
            'dietary_preference', 'plank_duration', 'running_endurance',
            'weight_lifted_squat', 'weight_lifted_bench', 'bmi'
        ]
        # Add any missing columns with a default value (e.g., 0)
        for col in expected_columns:
            if col not in user_profile_df.columns:
                user_profile_df[col] = 0

        return user_profile_df[expected_columns]

# Example usage (for testing the preprocessor)
if __name__ == '__main__':
    sample_user_profile = pd.DataFrame([{
        "age": 29,
        "gender": "male",
        "weight": 88,
        "height": 171,
        "pushups": 50,
        "squats": 50,
        "weight_lifted_squat_max": 40.0,
        'weight_lifted_bench': 20,
        "weight_lifted_bench_max": 25.0,
        "activity_level": "Moderately Active",
        "target_goal": "strength",
        "dietary_preference": "none",
        "plank_duration": 60,
        "running_endurance": 17,
        "weight_lifted_squat": 30,
    }])
    preprocessor = DataPreprocessor()
    processed_data = preprocessor.preprocess_user_data(sample_user_profile)
    print(processed_data)