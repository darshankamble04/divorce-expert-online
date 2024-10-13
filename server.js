require('dotenv').config();
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

app.post('/api/send-email', (req, res) => {
  const {
    cityMarriage,
    cityHusband,
    cityWife,
    dateOfMarriage,
    placeOfMarriage,
    banquetHall,
    husbandName,
    wifeName,
    husbandReligion,
    wifeReligion,
    husbandFatherName,
    wifeFatherName,
    husbandDOB,
    wifeDOB,
    husbandContact,
    wifeContact,
    husbandEmail,
    wifeEmail,
    husbandResidenceBeforeMarriage,
    wifeResidenceBeforeMarriage,
    postMarriageAddress,
    presentAddressHusband,
    presentAddressWife,
    childrenInfo,
    maintenanceSettlement,
    assetsSettlement,
    pendingLitigations,
    lawyerComments,
    name,
    email,
    countryCode,
    phoneNumber
  } = req.body;

  // Nodemailer configuration for sending email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'divorceexpertonline@gmail.com',
      pass: 'cpsq dgfy uqhk vmjm' // Use the generated app password here
    }
  });

  // HTML content for the email
  const htmlMessage = `
    <h2>Client Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${countryCode} ${phoneNumber}</p>

    <h3>Marriage Details</h3>
    <p><strong>City of Marriage:</strong> ${cityMarriage}</p>
    <p><strong>City of Husband:</strong> ${cityHusband}</p>
    <p><strong>City of Wife:</strong> ${cityWife}</p>
    <p><strong>Date of Marriage:</strong> ${dateOfMarriage}</p>
    <p><strong>Place of Marriage:</strong> ${placeOfMarriage}</p>
    <p><strong>Banquet Hall:</strong> ${banquetHall}</p>

    <h3>Husband Details</h3>
    <p><strong>Name:</strong> ${husbandName}</p>
    <p><strong>Religion:</strong> ${husbandReligion}</p>
    <p><strong>Father's Name:</strong> ${husbandFatherName}</p>
    <p><strong>Date of Birth:</strong> ${husbandDOB}</p>
    <p><strong>Contact:</strong> ${husbandContact}</p>
    <p><strong>Email:</strong> ${husbandEmail}</p>
    <p><strong>Residence Before Marriage:</strong> ${husbandResidenceBeforeMarriage}</p>
    <p><strong>Present Address:</strong> ${presentAddressHusband}</p>

    <h3>Wife Details</h3>
    <p><strong>Name:</strong> ${wifeName}</p>
    <p><strong>Religion:</strong> ${wifeReligion}</p>
    <p><strong>Father's Name:</strong> ${wifeFatherName}</p>
    <p><strong>Date of Birth:</strong> ${wifeDOB}</p>
    <p><strong>Contact:</strong> ${wifeContact}</p>
    <p><strong>Email:</strong> ${wifeEmail}</p>
    <p><strong>Residence Before Marriage:</strong> ${wifeResidenceBeforeMarriage}</p>
    <p><strong>Present Address:</strong> ${presentAddressWife}</p>

    <h3>Other Information</h3>
    <p><strong>Post Marriage Address:</strong> ${postMarriageAddress}</p>
    <p><strong>Children Information:</strong> ${childrenInfo}</p>
    <p><strong>Maintenance Settlement:</strong> ${maintenanceSettlement}</p>
    <p><strong>Assets Settlement:</strong> ${assetsSettlement}</p>
    <p><strong>Pending Litigations:</strong> ${pendingLitigations}</p>
    <p><strong>Lawyer's Comments:</strong> ${lawyerComments}</p>
  `;

  const mailOptions = {
    from: 'divorceexpertonline@gmail.com',
    to: email, // Recipient email
    subject: 'Client Information',
    html: htmlMessage // Sending HTML content
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send('Error sending email');
    }
    res.send('Email sent successfully');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

