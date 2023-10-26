import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl, FormLabel } from '@mui/material';
export const Form = () => {
  return (
    <FormControl>
    <p>Contact Us</p>
    <p>Fields marked with an * are required</p>
    <FormLabel>Enter Name*</FormLabel>
    <TextField></TextField>
    <FormLabel>Email*</FormLabel>
    <TextField></TextField>
    <FormLabel>Message*</FormLabel>
    <TextField></TextField>
    <br/>
    <Button variant="outlined">Submit</Button>
</FormControl>
  )
}
