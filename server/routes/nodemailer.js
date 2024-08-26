const PDFDocument = require("pdfkit");
const fs = require("fs");
const nodemailer = require("nodemailer");
const moment = require("moment");

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.email,
    pass: process.env.password,
  },
});

// Function to generate a PDF with reservation details
const generateReservationPDF = (reservationData, filename) => {
  const doc = new PDFDocument();
  const primaryColor = "#4CAF50"; // Vert
  const secondaryColor = "#FFC107"; // Jaune
  const textColor = "#333333"; // Gris foncé
  const backgroundColor = "#f5f5f5"; // Gris clair pour le fond
  const highlightColor = "#FF5733"; // Couleur pour les parties importantes

  // Format des horaires
  const formatTimings = (timings) => {
    return timings.map((timing) =>
      moment(timing, "HH:mm").format("DD/MM/YYYY HH:mm")
    );
  };

  doc.rect(0, 0, doc.page.width, doc.page.height).fill(backgroundColor);

  doc
    .fillColor(primaryColor)
    .fontSize(26)
    .text("Confirmation de Réservation", { align: "center", underline: true })
    .moveDown(1.5);

  doc
    .fillColor(textColor)
    .fontSize(18)
    .text("Détails de la réservation :\n", { align: "left" })
    .moveDown();

  const info = [
    { label: "Nom complet", value: `${reservationData.name}` },
    { label: "Téléphone", value: reservationData.phoneNumber },
    { label: "Adresse", value: reservationData.address },
    { label: "E-mail", value: reservationData.email },
    {
      label: "Horaire",
      value: `du ${formatTimings(reservationData.timings).join(" à ")}`,
    },
    { label: "Montant à payer", value: "150dh" },
  ];

  const tableTop = 200;
  const rowHeight = 50;
  const colWidth = 250;

  doc.lineWidth(1);

  for (let i = 0; i <= info.length; i++) {
    doc
      .moveTo(50, tableTop + i * rowHeight)
      .lineTo(50 + colWidth * 2, tableTop + i * rowHeight)
      .stroke();
  }

  for (let i = 0; i <= 2; i++) {
    doc
      .moveTo(50 + i * colWidth, tableTop)
      .lineTo(50 + i * colWidth, tableTop + rowHeight * info.length)
      .stroke();
  }

  info.forEach((row, rowIndex) => {
    doc
      .fontSize(14)
      .fillColor(textColor)
      .text(row.label, 55, tableTop + 5 + rowIndex * rowHeight, {
        width: colWidth - 10,
        align: "left",
      });
    doc
      .fontSize(14)
      .fillColor(highlightColor)
      .text(row.value, 55 + colWidth, tableTop + 5 + rowIndex * rowHeight, {
        width: colWidth - 10,
        align: "left",
      });
  });

  doc.moveDown(2);

  // Ajouter l'instruction pour présenter le PDF à la sécurité du terrain
  doc
    .fillColor(textColor)
    .fontSize(12)
    .text(
      "Veuillez présenter ce document aux agents de sécurité du terrain pour vérification lors de votre arrivée.",
      { align: "left", lineGap: 10 }
    );

  doc.moveDown(1);

  doc
    .fillColor(secondaryColor)
    .fontSize(12)
    .text("Merci pour votre réservation!", { align: "center", lineGap: 10 })
    .text("Nous espérons vous voir bientôt.", { align: "center" });

  doc.pipe(fs.createWriteStream(`${filename}.pdf`));
  doc.end();
};

// Function to send an email with the PDF attached
const sendConfirmationEmail = (email, filename) => {
  const mailOptions = {
    from: "mounirabaddah6@gmail.com",
    to: email,
    subject: "Confirmation de réservation",
    text: "Merci pour votre réservation! Trouvez ci-joint la confirmation de votre réservation.",
    attachments: [
      {
        filename: `${filename}.pdf`,
        path: `${filename}.pdf`,
      },
    ],
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.error("Erreur lors de l'envoi de l'e-mail :", error);
    } else {
      console.log("E-mail envoyé :", info.response);
    }
  });
};

module.exports = { generateReservationPDF, sendConfirmationEmail };
