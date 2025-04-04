from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import logging
from prediction_engine import PredictionEngine
from data_preprocessor import DataPreprocessor

app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

# Initialize components
prediction_engine = PredictionEngine()
preprocessor = DataPreprocessor()

# Load models at startup
@app.before_request
def load_models():
    try:
        prediction_engine.load_models()
        logging.info("AI models loaded successfully.")
    except Exception as e:
        logging.error(f"Error loading AI models: {e}")
        raise

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Validate input
        user_profile = request.get_json()
        if not user_profile:
            return jsonify({'error': 'No input data provided'}), 400
            
        required_fields = ['age', 'gender', 'weight', 'height', 'activity_level', 'target_goal']
        for field in required_fields:
            if field not in user_profile or not user_profile[field]:
                return jsonify({'error': f'Missing required field: {field}'}), 400
        
        # Process and predict
        user_profile_df = pd.DataFrame([user_profile])
        processed_user_profile_df = preprocessor.preprocess_user_data(user_profile_df)
        processed_user_profile = processed_user_profile_df.iloc[0].to_dict()

        fitness_level = prediction_engine.predict_fitness_level(processed_user_profile)
        training_plan = prediction_engine.predict_training_plan(processed_user_profile)
        dietary_needs = prediction_engine.predict_dietary_needs(processed_user_profile)

        response = {
            'fitness_level': fitness_level,
            'training_plan': training_plan,
            'dietary_needs': dietary_needs,
            'user_profile': user_profile  # Return original for reference
        }
        return jsonify(response)
        
    except Exception as e:
        logging.error(f"Error during prediction: {e}")
        return jsonify({'error': str(e)}), 500

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    load_models()
    app.run(debug=True)