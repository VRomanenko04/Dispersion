import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SENDER_MAIL,
        pass: process.env.SENDER_SECRET_CODE,
    }
});

interface MailData {
    fullName: string;
    email: string;
    projectType: string;
    howToContact: string;
    contactDetails?: string;
    message: string;
    orderCode: string;
};

export async function POST(req: NextRequest) {
    try {
        // Explicitly parse the request body as JSON
        const requestData: MailData = await req.json();

        const contactDetailsString = requestData.contactDetails ? `Информация для связи: ${requestData.contactDetails}` : '';

        // Content of the email
        const mailOptions = {
            from: process.env.SENDER_MAIL,
            to: process.env.MAIL_TO_RECEIVING,
            subject: 'Новый запрос',
            text: `Имя: ${requestData.fullName}\nEmail: ${requestData.email}\nКак связаться: ${requestData.howToContact}\n${contactDetailsString}\nТип проекта: ${requestData.projectType}\nНомер заказа: ${requestData.orderCode}\nОписание: ${requestData.message}`,
        };

        await transporter.sendMail(mailOptions);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, error: 'Ошибка при отправке письма' });
    }
}