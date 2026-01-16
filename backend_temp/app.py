from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Backend is running"

@app.route("/estimate", methods=["POST"])
def estimate():
    data = request.get_json()
    return jsonify({"estimated_price": 1.25})

@app.route("/trend", methods=["GET"])
def trend():
    return jsonify({
        "areas": [800, 1000, 1500, 2000, 2500],
        "prices": [0.6, 0.9, 1.3, 1.8, 2.3]
    })

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)
