const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const router = express.Router();

app.use('/api/v1', router);
const adminEmail = process.env.ADMIN_MAIL;

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resumes');
  },
  filename: function (req, file, cb) {
    cb(null, 'resume-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.use(
  cors({
    origin: process.env.LOCAL_HOST,
    credentials: true,
  })
);

const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

const sendConfirmationEmail = async (to, subject, text) => {
  const transporter = createTransporter();
  const mailOptions = { from: process.env.EMAIL_USER, to, subject, text };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}:`, info.response);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error);
  }
};

const sendUserConfirmation = async (to, text) =>
  sendConfirmationEmail(to, 'Registration Confirmation', text);

const sendAdminConfirmation = async (to, text, attachments) => {
  const transporter = createTransporter();
  const adminMailOptions = {
    from: process.env.EMAIL_USER,
    to: adminEmail,
    subject: 'New User Registration',
    text,
    attachments,
  };

  try {
    const info = await transporter.sendMail(adminMailOptions);
    console.log('Email sent to admin:', info.response);

    // Delete the uploaded file after sending the email
    fs.unlink(attachments[0].path, (unlinkError) => {
      if (unlinkError) {
        console.error('Error deleting file:', unlinkError);
      } else {
        console.log('File deleted successfully');
      }
    });
  } catch (error) {
    console.error('Error sending email to admin:', error);
  }
};

const sendCareerFormSubmissionConfirmation = async (careerFormData) => {
  const { email } = careerFormData;
  const text =
    'Thank you for submitting the career form. We have received your details and will get back to you soon.';
  await sendUserConfirmation(email, text);
};

const sendCareerFormSubmissionAdminNotification = async (careerFormData, resumePath) => {
  const { name, email, phone, jobProfile } = careerFormData;
  const attachments = [{ filename: 'resume.pdf', path: resumePath }];
  const text = `A new career form has been submitted with the following details:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nJob Profile: ${jobProfile}`;

  try {
    await sendAdminConfirmation(adminEmail, text, attachments);
  } catch (error) {
    console.error('Error sending email to admin:', error);
  }
};

router.post(
  '/career-form',
  upload.single('resume'),
  async (req, res) => {
    try {
      const careerFormData = req.body;
      await sendCareerFormSubmissionConfirmation(careerFormData);
      await sendCareerFormSubmissionAdminNotification(careerFormData, req.file.path);
      res.json({ success: true, message: 'Career form submitted successfully' });
    } catch (error) {
      console.error('Error submitting career form:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

router.post('/contactlgs', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = createTransporter();

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Registration Confirmation',
      text: `Thank you for contacting us. We will get back to you soon.`,
    };

    transporter.sendMail(userMailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email to user:', error);
        res.json({ success: true });
      } else {
        console.log('Email sent to user:', info.response);
        res.json({ success: true });

        const adminMailOptions = {
          from: process.env.EMAIL_USER,
          to: adminEmail,
          subject: 'New User Registration',
          text: `A new user has registered with the following details:\n\nFirstName: ${firstName}\nLastName: ${lastName}\nEmail: ${email}\nMessage: ${message}`,
        };

        transporter.sendMail(adminMailOptions, (adminError, adminInfo) => {
          if (adminError) {
            console.error('Error sending email to admin:', adminError);
          } else {
            console.log('Email sent to admin:', adminInfo.response);
          }
        });
      }
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/queries', async (req, res) => {
  try {
    const { queryFirstName, queryLastName, queryEmail, queryMessage } = req.body;

    if (!queryFirstName || !queryLastName || !queryEmail  || !queryMessage) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const transporter = createTransporter();

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: queryEmail,
      subject: 'Registration Confirmation',
      text: `Thank you for contacting us. We will get back to you soon.`,
    };

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: adminEmail,
      subject: 'New Client has Contacted for service',
      text: `A new Client has Contacted with the following details:\n\nFirstName: ${queryFirstName}\nLastName: ${queryLastName}\nEmail: ${queryEmail}\nMessage: ${queryMessage}`,
    };

    transporter.sendMail(userMailOptions, (error, userInfo) => {
      if (error) {
        console.error('Error sending email to user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Email sent to user:', userInfo.response);

        transporter.sendMail(adminMailOptions, (adminError, adminInfo) => {
          if (adminError) {
            console.error('Error sending email to admin:', adminError);
          } else {
            console.log('Email sent to admin:', adminInfo.response);
          }
        });

        res.json({ success: true });
      }
    });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`));
