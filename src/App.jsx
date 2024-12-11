/* App.css */
body {
  margin: 0;
  padding: 0;
  background-color: #121212; 
  color: #ffffff;
  font-family: 'Arial', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden; /* No unnecessary scrolling */
}

.main-container {
  background-color: #1e1e1e; 
  padding: 40px;
  border-radius: 12px;
  width: 80%; 
  max-width: 600px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

h1 {
  margin-bottom: 20px;
  font-size: 24px; 
  color: #00ffff; 
  text-align: center;
}

input[type="text"], 
textarea {
  width: 100%; 
  max-width: 500px; 
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #2c2c2c; 
  color: #ffffff; 
  resize: none;
}

textarea {
  height: 120px; 
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  background: linear-gradient(45deg, #00ffff, #ff00ff); 
  color: #121212;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 15px rgba(0, 255, 255, 0.6);
}

button:active {
  transform: scale(1);
  box-shadow: 0px 2px 10px rgba(0, 255, 255, 0.4);
}

/* Media Query for Mobile View */
@media (max-width: 768px) {
  .main-container {
    width: 90%; 
    padding: 20px; 
  }

  h1 {
    font-size: 20px; 
  }

  input[type="text"], 
  textarea {
    padding: 15px; 
    font-size: 18px;
  }

  textarea {
    height: 150px; 
  }

  button {
    font-size: 18px; 
    padding: 12px 25px;
  }
}
