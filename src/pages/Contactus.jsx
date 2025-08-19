import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState } from "react";
// Contactus component
// This component currently just displays a simple message
export const Contactus = () => {
  const [form, setForm] = useState({ name: "", email: "", idea: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", idea: "" });
  };

  return (
    <Box
      sx={{
        maxWidth: 420,
        mx: "auto",
        mt: 8,
        p: 4,
        background: "#fff",
        borderRadius: 4,
        boxShadow: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, fontWeight: 700, color: "#1976d2" }}
      >
        Contact Us
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "#555" }}>
        We'd love to hear from you! Share your feedback or submit your idea for
        Swim Free below.
      </Typography>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <input
          style={{
            width: "100%",
            padding: "12px",
            margin: "8px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          style={{
            width: "100%",
            padding: "12px",
            margin: "8px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          style={{
            width: "100%",
            padding: "12px",
            margin: "8px 0",
            borderRadius: "4px",
            border: "1px solid #ccc",
            fontSize: "16px",
            resize: "vertical",
          }}
          name="idea"
          placeholder="Your Idea or Message"
          rows={4}
          value={form.idea}
          onChange={handleChange}
          required
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            py: 1.5,
            fontWeight: 600,
            borderRadius: 3,
            background: "linear-gradient(to right, #43a047, #1976d2)",
          }}
        >
          Submit
        </Button>
      </form>
      {submitted && (
        <Typography sx={{ mt: 3, color: "#2e7d32", fontWeight: 600 }}>
          Thank you for reaching out! We'll review your idea soon.
        </Typography>
      )}
    </Box>
  );
};

export default Contactus;
