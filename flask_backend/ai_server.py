# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import joblib

# app = Flask(__name__)
# CORS(app)

# # Load models once
# category_model  = joblib.load("category_model.pkl")
# priority_model  = joblib.load("priority_model.pkl")
# sentiment_model = joblib.load("sentiment_model.pkl")

# department_map = {
#     "Hostel":         "Hostel Warden",                  
#     "Academic":       "Academic Office",
#     "Infrastructure": "Maintenance Department",
#     "Canteen":        "Canteen Manager",
#     "Harassment":     "Student Welfare Cell"
# }

# @app.route("/analyze", methods=["POST"])
# def analyze():  
#     data    = request.json
#     text    = data.get("complaint_text", "").lower().strip()

#     category   = category_model.predict([text])[0]
#     priority   = priority_model.predict([text])[0]
#     sentiment  = sentiment_model.predict([text])[0]
#     department = department_map.get(category, "Administration")

#     return jsonify({
#         "category":   category,
#         "department": department,
#         "priority":   priority,
#         "sentiment":  sentiment
#     })

# if __name__ == "__main__":
#     app.run(port=5000, debug=True)




from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

category_model  = joblib.load("category_model.pkl")
priority_model  = joblib.load("priority_model.pkl")
sentiment_model = joblib.load("sentiment_model.pkl")

department_map = {
    "Hostel": "hostel",
    "Academic": "academic",
    "Infrastructure": "maintenance",
    "Canteen": "canteen",
    "Harassment": "student welfare"
}

@app.route("/analyze", methods=["POST"])
def analyze():

    data = request.json
    text = data.get("complaint_text", "").lower().strip()

    category  = category_model.predict([text])[0]
    priority  = priority_model.predict([text])[0]
    sentiment = sentiment_model.predict([text])[0]

    department = department_map.get(category, "administration")

    return jsonify({
        "category": category,
        "department": department,
        "priority": priority,
        "sentiment": sentiment
    })

if __name__ == "__main__":
    app.run(port=5000, debug=True)