import React from "react";
import "./PasswordStrengthMeter.css";
import CheckIcon from "@mui/icons-material/Check"; // Correct icon for "Check"
import CloseIcon from "@mui/icons-material/Close"; // Correct icon for "X"



const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 characters", met: password.length >= 6 },
    { label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
    { label: "Contains lowercase letter", met: /[a-z]/.test(password) },
    { label: "Contains a number", met: /\d/.test(password) },
    { label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
  ];

  return (
    <div className="password-criteria">
      {criteria.map((item) => (
        <div key={item.label} className="criteria-item">
          {item.met && <CheckIcon className="criteria-check" />}
          <span className={item.met ? "criteria-text met" : "criteria-text"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function PasswordStrengthMeter({ password }) {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const strength = getStrength(password);

  const getColor = (strength) => {
    if (strength === 0) return "bg-red";
    if (strength === 1) return "bg-orange";
    if (strength === 2) return "bg-yellow";
    if (strength === 3) return "bg-lightgreen";
    return "bg-green";
  };

  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    return "Strong";
  };

  return (
    <div className="password-strength-meter">
      <div className="strength-info">
        <span className="strength-label">Password strength:</span>
        <span className={`strength-text ${getColor(strength)}`}>
          {getStrengthText(strength)}
        </span>
      </div>
      <div className="strength-bar">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`bar-segment ${
              index < strength ? getColor(strength) : "bg-gray"
            }`}
          ></div>
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
}

