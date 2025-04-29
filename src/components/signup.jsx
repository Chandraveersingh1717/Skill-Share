import React from "react";
import "./Signup.css";

export default function SignUpForm() {
  return (
    <div className="signup-container">
    <div className="form-container">
      <form className="form-body">
        <h2>Sign Up</h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
        />
        <div className="radio-group">
          <input
            type="radio"
            name="role"
            value="teacher"
          />
          Teacher
          <input
            type="radio"
            name="role"
            value="student"
          />
          Student
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}