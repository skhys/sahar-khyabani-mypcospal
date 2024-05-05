import React, { useState, useEffect } from "react";
import "./HomePage.scss";
import { Link } from "react-router-dom";

function HomePage() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "MyPCOSPal";
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/date");
      if (!response.ok) {
        throw new Error("Failed to fetch entries");
      }
      const data = await response.json();
      setEntries(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching entries:", error.message);
      setLoading(false);
    }
  };

  const renderList = (items) => {
    const parsedItems = JSON.parse(items);

    return parsedItems.map((item, index) => (
      <span key={index}>
        {item}
        {index !== items.length - 1 && ", "}
      </span>
    ));
  };

  return (
    <div className="header__group">
      <section className="header__details">
        <div className="header__image" alt="hero img"></div>
        <Link to="/form">
          <button className="header__btn">+ Log Symptoms</button>
        </Link>
        <div>
          <h2 className="entries__title">Entries</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="entries__container">
              {entries.map((entry, index) => (
                <div key={index} className="entry">
                  <p className="entry__title">Date:</p>
                  <p className="entry__input">
                    {new Date(entry.date).toLocaleDateString()}
                  </p>
                  <p className="entry__title">Mood:</p>
                  <p className="entry__input">{entry.mood}</p>
                  <p className="entry__title">Symptoms:</p>
                  <p className="entry__input">{renderList(entry.symptoms)}
                  </p>
                  <p className="entry__title">Activities:</p>
                  <p className="entry__input">{renderList(entry.activities)}
                  </p>
                  <p className="entry__title">Notes:</p>
                  <p className="entry__input">{entry.notes || "N/A"}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
