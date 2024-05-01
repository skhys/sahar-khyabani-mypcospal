import React, { useState } from "react";
import "./Form.scss";

function Form() {
  const [date, setDate] = useState("");
  const [mood, setMood] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [activities, setActivities] = useState([]);
  const [comment, setComment] = useState("");
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/date", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ date, mood, symptoms, activities, comment }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form data");
      }

      const data = await response.json();
      setSubmissionMessage(data.message);

      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    }
  };

  const moodOptions = [
    "Happy",
    "Sad",
    "Angry",
    "Excited",
    "Calm",
    "Anxious",
    "Stressed",
    "Relaxed",
    "Tired",
    "Energetic",
  ];
  const symptomOptions = [
    "Irregular periods",
    "Acne",
    "Fatigue",
    "Hair loss",
    "Brain Fog",
    "Mood swings",
    "Hirsutism",
    "Sleep problems",
    "Digestive issues",
    "Headaches",
  ];
  const activityOptions = [
    "Yoga",
    "Pilates",
    "Walking",
    "Swimming",
    "Dancing",
    "Running/Jogging",
    "Meditating",
    "Weightlifting",
    "Hiking",
    "Didn't Exercise",
  ];

  const handleCheckboxChange = (option, category) => {
    switch (category) {
      case "mood":
        setMood((prevMood) =>
          prevMood.includes(option)
            ? prevMood.filter((mood) => mood !== option)
            : [...prevMood, option]
        );
        break;
      case "symptoms":
        setSymptoms((prevSymptoms) =>
          prevSymptoms.includes(option)
            ? prevSymptoms.filter((symptom) => symptom !== option)
            : [...prevSymptoms, option]
        );
        break;
      case "activities":
        setActivities((prevActivities) =>
          prevActivities.includes(option)
            ? prevActivities.filter((activity) => activity !== option)
            : [...prevActivities, option]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <h1 className="header-title">MyPCOSPal</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-section">
          <label className="form-label" htmlFor="date">
            Date:
          </label>
          <input
            className="form-input"
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-section">
          <label className="form-label" htmlFor="mood">
            How I'm feeling:
          </label>
          <select
            className="form-select"
            id="mood"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select Mood</option>
            {moodOptions.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-section">
          <legend className="form-label">Symptoms:</legend>
          {symptomOptions.map((option, index) => (
            <label key={index} className="form-label">
              <input
                className="form-input"
                type="checkbox"
                value={option}
                checked={symptoms.includes(option)}
                onChange={() => handleCheckboxChange(option, "symptoms")}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="form-section">
          <legend className="form-label">Activities:</legend>
          {activityOptions.map((option, index) => (
            <label key={index} className="form-label">
              <input
                className="form-input"
                type="checkbox"
                value={option}
                checked={activities.includes(option)}
                onChange={() => handleCheckboxChange(option, "activities")}
              />
              {option}
            </label>
          ))}
        </div>
        <div className="form-section">
          <label className="form-label" htmlFor="comment">
            Notes:
          </label>
          <textarea
            className="form-input"
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add any additional notes..."
          />
        </div>
        <button className="form-submit" type="submit">
          Submit
        </button>
      </form>
      {submissionMessage && <p>{submissionMessage}</p>}
    </div>
  );
}

export default Form;
