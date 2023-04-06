// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { mailOptions, sender } from "@/config/nodemailer";

const handler = async (req, res) => {

  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.message || !data.phone) {
      return res.status(400).json({ "message": 'Bad Request' })
    }

    try {
      await sender.sendMail({
        ...mailOptions,

        subject: data.name,
        text: data.name + "" + data.email + "" + data.phone,
        text: data.message,
        html: `<h1>İsim: ${data.name}</h1> <h1>Email: ${data.email}</h1> <h1>Telefon: ${data.phone}</h1> <p>${data.message}</p>`
      })

      return res.status(200).json({ "message": "Success" })

    } catch (err) {
      console.log(err);
      return res.status(400).json({ "message": err.message })
    }
  }


  return res.status(400).json({ "message": 'Bad Request' })
}

export default handler;
