import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, FormControl, FormLabel, Grid } from '@mui/material';
import ContactInfo from './ContactInfo';
export const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Load saved form data from local storage when the component mounts
  useEffect(() => {
    const savedFormData = localStorage.getItem('formData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // You can perform any additional actions here if needed
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
    <Grid container spacing={2} justifyContent={center}>
    <Grid item xs={12} sm={6} md={6}>
    <FormControl>
      <p>Contact Us</p>
      <p>Fields marked with an * are required</p>
      <FormLabel>Enter Name*</FormLabel>
      <TextField
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <FormLabel>Email*</FormLabel>
      <TextField
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormLabel>Message*</FormLabel>
      <TextField
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br />
      <Button variant="outlined" onClick={handleSubmit}>
        Submit
      </Button>
    </FormControl>
    </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <div><ContactInfo/></div>
        </Grid>
    </Grid>
    </Container>
  );
};
