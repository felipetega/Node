'use client'
import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_AUTH_REGISTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        const data = await response.json();
        console.error(data.message);
      }
    } catch (error) {
      console.error('Internal Server Error', error);
    }
}


  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            placeholder="Username" 
            required 
          />
        </div>
        <div>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Password" 
            required 
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email" 
            required 
          />
        </div>
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
