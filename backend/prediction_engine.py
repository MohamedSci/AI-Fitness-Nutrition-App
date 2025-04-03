import onnxruntime
import logging
import numpy as np
import pandas as pd  # Import pandas here

class PredictionEngine:
    def __init__(self, models_dir='backend/models'):
        self.models_dir = models_dir
        self.fitness_level_model = None
        self.training_params_model = None
        self.dietary_needs_model = None
        self.ort_session_fitness = None
        self.ort_session_training = None
        self.ort_session_dietary = None

    def load_models(self):
        try:
            self.fitness_level_model = f"{self.models_dir}/fitness_level_model.onnx"
            self.training_params_model = f"{self.models_dir}/training_params_model.onnx"
            self.dietary_needs_model = f"{self.models_dir}/dietary_needs_model.onnx"

            self.ort_session_fitness = onnxruntime.InferenceSession(self.fitness_level_model)
            self.ort_session_training = onnxruntime.InferenceSession(self.training_params_model)
            self.ort_session_dietary = onnxruntime.InferenceSession(self.dietary_needs_model)

            logging.info("ONNX models loaded successfully.")

        except Exception as e:
            logging.error(f"Error loading ONNX models: {e}")
            raise

    def predict_fitness_level(self, user_profile):
        try:
            input_name = self.ort_session_fitness.get_inputs()[0].name
            input_data = np.array([list(user_profile.values())], dtype=np.float32) # Adjust data type and structure as needed
            ort_inputs = {input_name: input_data}
            output = self.ort_session_fitness.run(None, ort_inputs)
            # Assuming the output is a single value representing the fitness level
            # You'll need to adjust this based on your model's output
            fitness_level_index = np.argmax(output[0]) # Example for classification
            levels = ["Beginner", "Intermediate", "Advanced"] # Example levels
            return levels[fitness_level_index]
        except Exception as e:
            logging.error(f"Error predicting fitness level: {e}")
            return "Error"

    def predict_training_plan(self, user_profile):
        try:
            input_name = self.ort_session_training.get_inputs()[0].name
            input_data = np.array([list(user_profile.values())], dtype=np.float32) # Adjust data type and structure as needed
            ort_inputs = {input_name: input_data}
            output = self.ort_session_training.run(None, ort_inputs)
            # Assuming the output is structured data for the training plan
            # You'll need to adjust this based on your model's output
            # This is a placeholder - the actual implementation depends heavily on your model
            return {
                'workout_frequency': '3 days per week',
                'exercises': [
                    {'name': 'Barbell Squat', 'sets': 3, 'repetitions': 8},
                    {'name': 'Bench Press', 'sets': 3, 'repetitions': 8},
                    {'name': 'Deadlift', 'sets': 3, 'repetitions': 6},
                    {'name': 'Overhead Press', 'sets': 3, 'repetitions': 7},
                ]
            }
        except Exception as e:
            logging.error(f"Error predicting training plan: {e}")
            return {}

    def predict_dietary_needs(self, user_profile):
        try:
            input_name = self.ort_session_dietary.get_inputs()[0].name
            input_data = np.array([list(user_profile.values())], dtype=np.float32) # Adjust data type and structure as needed
            ort_inputs = {input_name: input_data}
            output = self.ort_session_dietary.run(None, ort_inputs)
            # Assuming the output contains daily calories and macronutrient targets
            # You'll need to adjust this based on your model's output
            return {
                'daily_calories': 3900, # Placeholder
                'macronutrient_targets': {
                    'protein': 190, # Placeholder
                    'carbs': 400,   # Placeholder
                    'fat': 130     # Placeholder
                }
            }
        except Exception as e:
            logging.error(f"Error predicting dietary needs: {e}")
            return {}