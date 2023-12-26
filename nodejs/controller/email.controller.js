import { Resend } from "resend";

export async function SendEmail(req, res) {
  try {
    const resend = new Resend("re_gFTvRUDM_ANbSaba3SgwBt2KLXPPA86zx");
    const { name, email, message } = req.body;
    const data = await resend.emails.send({
      from: `Portafolio contact <onboarding@resend.dev>`,
      to: ["dancastell1022@gmail.com"],
      subject: `Hey Daniel, ${name} wants to contact to you`,
      html: `<strong>${message}</strong><p><b>Contact via email: </b>${email}</p><br/>`,
    });

    console.log({ data });
    res.send({
      message: "A message has been sent to Daniel via email",
      data: data,
    });
    console.log(data);
  } catch (error) {
    res.send({ message: "Error" });
    console.log(error);
  }
}
