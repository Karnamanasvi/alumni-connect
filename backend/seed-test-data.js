const mongoose = require('mongoose');
require('dotenv').config();

const Job = require('./src/models/job.model');
const Event = require('./src/models/event.model');

async function seedData() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');

    // Add Jobs
    await Job.insertMany([
      {
        title: 'Software Engineer',
        company: 'Infosys',
        description: 'Entry-level software engineering opportunity for fresh graduates.',
        link: 'https://www.infosys.com/careers/',
        location: 'Hyderabad',
        salary: '₹5-7 LPA',
        skills: ['Java', 'Python', 'SQL'],
        closingDate: new Date('2026-12-31')
      },
      {
        title: 'Graduate Engineer Trainee',
        company: 'TCS',
        description: 'Graduate trainee opportunity for engineering students.',
        link: 'https://www.tcs.com/careers',
        location: 'Hyderabad',
        salary: '₹4-6 LPA',
        skills: ['Java', 'Python', 'SQL'],
        closingDate: new Date('2026-12-31')
      },
      {
        title: 'Associate Software Engineer',
        company: 'Accenture',
        description: 'Entry-level software development opportunity.',
        link: 'https://www.accenture.com/in-en/careers',
        location: 'Bangalore',
        salary: '₹5-8 LPA',
        skills: ['JavaScript', 'React', 'SQL'],
        closingDate: new Date('2026-12-31')
      }
    ]);

    console.log('Jobs added successfully');

    // Add Events
    await Event.insertMany([
      {
        title: 'Alumni Networking Meet',
        description: 'A networking session where students can interact with alumni.',
        eventDate: new Date('2026-10-15'),
        location: 'Seminar Hall, MGM Campus',
        eventTime: '10:30 AM · 2 hours',
        category: 'Alumni Event'
      },
      {
        title: 'Career Guidance Session',
        description: 'Career guidance session focused on placements and interview preparation.',
        eventDate: new Date('2026-10-20'),
        location: 'Auditorium, MGM Campus',
        eventTime: '11:00 AM · 2 hours',
        category: 'Career'
      },
      {
        title: 'Technical Workshop',
        description: 'Technical workshop covering modern software development technologies.',
        eventDate: new Date('2026-10-25'),
        location: 'Computer Lab, MGM Campus',
        eventTime: '10:00 AM · 3 hours',
        category: 'Workshop'
      }
    ]);

    console.log('Events added successfully');

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await mongoose.connection.close();
  }
}

seedData();