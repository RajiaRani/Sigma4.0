import React, { useState, useEffect } from 'react';

function CountryPrompt({ id }) {
  const [showPrompt, setShowPrompt] = useState(false);  // Controls the visibility of the prompt
  const [promptMessage, setPromptMessage] = useState("");  // Stores the message from the backend

  // Fetch data from the API when the component loads
  useEffect(() => {
    const getPromptData = async () => {
      try {
        const response = await fetch(`http:/localhost:3000/api/country/${id}`);
        const data = await response.json();

        if (data.showPrompt) {
          setShowPrompt(true); // Show prompt if API response says so
          setPromptMessage(data.message);
        }
      } catch (error) {
        console.error("Error fetching prompt data:", error);
      }
    };

    getPromptData();
  }, [id]);

  const handleSignUp = () => {
    window.location.href = "/signup"; // Redirect to the signup page
  };

  const handleReject = () => {
    setShowPrompt(false); // Close the prompt
  };

  return (
    <>
      {showPrompt && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <p>{promptMessage}</p>
            <button onClick={handleSignUp} style={styles.button}>Sign Up</button>
            <button onClick={handleReject} style={styles.button}>Reject</button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  },
  button: {
    margin: "10px",
    padding: "10px 20px",
  },
};

export default CountryPrompt;
