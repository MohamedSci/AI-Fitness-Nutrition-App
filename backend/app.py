from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import logging
from prediction_engine import PredictionEngine
from data_preprocessor import DataPreprocessor

app = Flask(__name__)
CORS(app)  # Enable CORS for local development (adjust as needed for production)
logging.basicConfig(level=logging.INFO)

prediction_engine = PredictionEngine()
preprocessor = DataPreprocessor()

try:
    prediction_engine.load_models()
    logging.info("AI models loaded successfully.")
except Exception as e:
    logging.error(f"Error loading AI models: {e}")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        user_profile = request.get_json()
        user_profile_df = pd.DataFrame([user_profile])
        processed_user_profile_df = preprocessor.preprocess_user_data(user_profile_df)
        processed_user_profile = processed_user_profile_df.iloc[0].to_dict()

        fitness_level = prediction_engine.predict_fitness_level(processed_user_profile)
        training_plan = prediction_engine.predict_training_plan(processed_user_profile)
        dietary_needs = prediction_engine.predict_dietary_needs(processed_user_profile)

        response = {
            'fitness_level': fitness_level,
            'training_plan': training_plan,
            'dietary_needs': dietary_needs
        }
        return jsonify(response)
    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)