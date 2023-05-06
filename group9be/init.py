## export FLASK_APP=app.py
## export FLASK_DEBUG=1
## flask run

import os
import functools
from flask import (
    Flask,
    session,
    render_template,
    request,
    abort,
    redirect,
    url_for,
)
from flask_cors import CORS
from flask_jwt_extended import JWTManager, create_access_token
from pymongo import MongoClient, server_api
from passlib.hash import pbkdf2_sha256

MONGODB_URI = "mongodb+srv://tristangonzalez97:tt3group9@tt3group9.nckwgqs.mongodb.net/"

app = Flask(__name__)
client = MongoClient("mongodb+srv://tristangonzalez97:tt3group9@tt3group9.nckwgqs.mongodb.net/")
app.db = client.employeeexpenseclaims

# Secret key generated with secrets.token_urlsafe()
app.secret_key = "lkaQT-kAb6aIvqWETVcCQ28F-j-rP_PSEaCDdTynkXA"
app.config['JWT_SECRET_KEY'] = 'your-secret-key'  # Set your own secret key
jwt = JWTManager(app)

# Define a route to generate a JWT token
@app.route('/get_token', methods=['POST'])
def get_token():
    # Assuming you have a User model, you can get the user's data from the request
    # For example, getting the email and password from a JSON request
    email = request.json.get('email')
    password = request.json.get('password')

    # Authenticate the user, for example by checking the email and password against a database
    # If the authentication is successful, generate a JWT token
    if email == 'example@example.com' and password == 'password':
        access_token = create_access_token(identity=email)
        return jsonify({'access_token': access_token}), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401

@app.get("/")
def home():
    print([e for e in app.db.employee.find({})])
    return render_template("home.html", employeeid=session.get("employeeid"))

def login_required(route):
    @functools.wraps(route)
    def route_wrapper(*args, **kwargs):
        if session.get("email") is None:
            return redirect(url_for("login"))

        return route(*args, **kwargs)

    return route_wrapper


@app.get("/protected")
@login_required
def protected():
    return render_template("protected.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    print([e for e in app.db.find({})])
    if request.method == "POST":
        employeeid = request.form.get("employeeid")
        password = request.form.get("password")

        if pbkdf2_sha256.verify(password, users.get("employeeid")):
            session["employeeid"] = employeeid
            return redirect(url_for("protected"))
        else:
            abort(401)
    return render_template("login.html")

@app.errorhandler(401)
def auth_error():
    return "Not authorized"
