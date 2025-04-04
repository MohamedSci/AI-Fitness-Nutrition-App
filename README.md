# AI-Powered Personalized Fitness and Nutrition Recommendation Web Application

This project provides personalized fitness and nutrition recommendations based on user input and AI models.

## Project Structure

ai_fitness_nutrition_app/
├── frontend/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── index.js
│       ├── components/
│       │   ├── UserProfileForm.js
│       │   └── Recommendations.js
│       └── App.css
├── backend/
│   ├── app.py
│   ├── prediction_engine.py
│   ├── data_preprocessor.py
│   └── models/
│       ├── fitness_level_model.onnx  # Placeholder
│       ├── training_params_model.onnx # Placeholder
│       └── dietary_needs_model.onnx  # Placeholder
├── README.md
└── requirements.txt

## Setup Instructions

**Backend:**

1.  Navigate to the `backend` directory: `cd backend`
2.  Create a virtual environment (optional but recommended): `python -m venv venv`
3.  Activate the virtual environment:
    * On Windows: `venv\Scripts\activate`
    * On macOS/Linux: `source venv/bin/activate`
4.  Install dependencies: `pip install -r requirements.txt`
5.  Place your ONNX models (`fitness_level_model.onnx`, `training_params_model.onnx`, `dietary_needs_model.onnx`) in the `backend/models` directory.
6.  Run the backend application from the Project Root: `backend/python app.py`

**Frontend:**

1.  Navigate to the `frontend` directory: `cd frontend`
2.  Install dependencies: `npm install` or `yarn install`
3.  Run the frontend development server: `npm start` or `yarn start`

## Usage

1.  Open your web browser and navigate to the address where the frontend is running (usually `http://localhost:3000`).
2.  Fill out the user profile form with your information.
3.  Click the "Get Recommendations" button.
4.  The personalized fitness level, training plan, and dietary needs will be displayed on the recommendations page.

## Important Notes

* **ONNX Models:** Ensure that the ONNX models in the `backend/models` directory are correctly trained and their input/output structures are handled appropriately in the `prediction_engine.py` file. You will likely need to adjust the `predict_fitness_level`, `predict_training_plan`, and `predict_dietary_needs` methods based on the specifics of your models.
* **Data Preprocessing:** The `data_preprocessor.py` file contains the logic for preprocessing user input. Make sure the preprocessing steps match the steps used during the training of your AI models.
* **Error Handling:** The code includes basic error handling, but you may need to add more robust error handling and validation for a production application.
* **CORS:** CORS is enabled for development purposes. You will need to configure CORS properly for your production environment.
* **Deployment:** This README provides basic setup instructions for local development. For deploying to a production environment (e.g., AWS, Google Cloud, Azure), you will need to follow the specific deployment procedures for your chosen platform.

## Further Development

* Implement user authentication and store user data in a database.
* Add more detailed recommendations and explanations.
* Allow users to track their progress and provide feedback.
* Improve the user interface and user experience.
* Implement more sophisticated data preprocessing and feature engineering.
* Explore more advanced AI techniques and model architectures.
III. Placeholders and Important Considerations:

ONNX Models: The backend/models/ directory is currently empty placeholders. You must replace these with your actual trained .onnx model files.
Model Input and Output: The predict_fitness_level, predict_training_plan, and predict_dietary_needs methods in backend/prediction_engine.py have placeholder logic for handling the model outputs. You will need to carefully inspect the output structure of your ONNX models and update these methods accordingly. This is the most crucial part for ensuring accuracy.
Data Preprocessing: The backend/data_preprocessor.py performs basic preprocessing. Ensure that the preprocessing steps (including feature engineering, scaling, and encoding) are exactly the same as the steps you applied to your training data before training your ONNX models. The order of features in the expected_columns list in DataPreprocessor is also critical.
Error Handling: The provided code includes basic error handling. You should enhance this for a production-ready application.
Security: This is a basic example and doesn't include advanced security measures. For a real-world application, you'll need to implement proper security practices.