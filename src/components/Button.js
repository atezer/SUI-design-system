import React from "react";
import "./ButtonStyles.css"; // Assuming a CSS file for button styles

// Button types and styles based on the screenshot
const buttonVariants = [
  { label: "Primary", className: "btn-primary" },
  { label: "Secondary", className: "btn-secondary" },
  { label: "Success", className: "btn-success" },
  { label: "Danger", className: "btn-danger" },
  { label: "Warning", className: "btn-warning" },
  { label: "Info", className: "btn-info" },
  { label: "Light", className: "btn-light" },
  { label: "Dark", className: "btn-dark" },
];

const buttonSizes = ["small", "medium", "large"];

export const TypeButtonStyle = () => {
  return (
    <div className="button-grid">
      {buttonVariants.map((variant) => (
        <div key={variant.label} className="button-row">
          {buttonSizes.map((size) => (
            <Button
              key={size}
              className={`${variant.className} btn-${size}`}
              aria-label={`${variant.label} ${size} button`}
            >
              Button
            </Button>
          ))}
          {buttonSizes.map((size) => (
            <Button
              key={`${size}-icon`}
              className={`${variant.className} btn-${size} btn-icon`}
              aria-label={`${variant.label} ${size} icon button`}
            >
              +
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};