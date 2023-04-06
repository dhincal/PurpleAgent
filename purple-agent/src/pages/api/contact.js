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
        text: "this is a text",
        html: "<h1>Test heading</h1><p>some body text</p>"
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
