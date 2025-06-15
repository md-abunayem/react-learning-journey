import React, { useState } from "react";

const Country = ({ countryObj , deleteCountry}) => {
  const { country } = countryObj;
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    width: "250px",
    boxShadow: isHovered
      ? "0 8px 16px rgba(0,0,0,0.2)"
      : "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "0.3s ease",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    cursor: "pointer",
  };

  const imgStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const textStyle = {
    margin: "8px 0",
    fontSize: "14px",
    color: "#333",
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={country.flags.png}
        alt={`Flag of ${country.name.common}`}
        style={imgStyle}
      />
      <p style={textStyle}>
        <strong>Name:</strong> {country.name.common}
      </p>
      <p style={textStyle}>
        <strong>Population:</strong>{" "}
        {country.population.toLocaleString()}
      </p>
      <p style={textStyle}>
        <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
      </p>
      <p style={textStyle}>
        <strong>Region:</strong> {country.region}
      </p>

      <button style={{backgroundColor:"orange", borderRadius: "4px", color:"white", border:"none", height:"25px", width:"60px"}} onClick={()=>deleteCountry(country.name.common)}>Delete</button>
    </div>
  );
};

export default Country;
