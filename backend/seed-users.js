const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('./src/models/user.model');

async function seedUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    const password = await bcrypt.hash('Test@12345', 10);

    await User.insertMany([
      {
        role: 'alumni',
        name: 'Rahul Sharma',
        email: 'rahul.alumni@example.com',
        password,
        courseStudied: 'B.Tech Computer Science',
        company: 'Infosys',
        graduationYear: 2024,
        expertise: 'Software Development',
        skills: ['Java', 'Python', 'SQL', 'React'],
        bio: 'Software engineer interested in helping students with career guidance.',
        mentorAvailable: true,
        mentorshipTopics: ['Software Development', 'Placements', 'Interview Preparation'],
        isVerified: true,
        profileStatus: 'verified',
        verifiedAt: new Date(),
        location: 'Hyderabad',
        isOnline: false
      },

      {
        role: 'alumni',
        name: 'Priya Reddy',
        email: 'priya.alumni@example.com',
        password,
        courseStudied: 'B.Tech Information Technology',
        company: 'TCS',
        graduationYear: 2023,
        expertise: 'Full Stack Development',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        bio: 'Full stack developer interested in mentoring students.',
        mentorAvailable: true,
        mentorshipTopics: ['Web Development', 'Full Stack', 'Career Guidance'],
        isVerified: true,
        profileStatus: 'verified',
        verifiedAt: new Date(),
        location: 'Bangalore',
        isOnline: false
      },

      {
        role: 'alumni',
        name: 'Arjun Kumar',
        email: 'arjun.alumni@example.com',
        password,
        courseStudied: 'B.Tech Artificial Intelligence',
        company: 'Accenture',
        graduationYear: 2025,
        expertise: 'Artificial Intelligence and Machine Learning',
        skills: ['Python', 'Machine Learning', 'SQL', 'Data Science'],
        bio: 'AI engineer interested in machine learning and data science.',
        mentorAvailable: true,
        mentorshipTopics: ['Machine Learning', 'Python', 'Data Science'],
        isVerified: true,
        profileStatus: 'verified',
        verifiedAt: new Date(),
        location: 'Hyderabad',
        isOnline: false
      }
    ]);

    console.log('Alumni users added successfully');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

seedUsers();