import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TG_BOT_TOKEN!;
const CHAT_ID = process.env.TG_CHAT_ID!;

export async function POST(req: NextRequest) {
	try {
		const { email, message } = await req.json();

		const text = `
		✉️ Новое сообщение с сайта:\n\n
		📧 Email: ${email}\n
		📝 Сообщение: ${message}
		`;

		const response = await fetch(
			`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					chat_id: CHAT_ID,
					text,
					parse_mode: "HTML", // Можно добавить для форматирования
				}),
			}
		);
		console.log(response);

		if (response.status !== 200) {
			throw new Error("Failed to send message");
		} else {
			return NextResponse.json({ success: true });
		}
	} catch (err) {
		console.error(err);
		return NextResponse.json(
			{ error: "Ошибка при отправке" },
			{ status: 500 }
		);
	}
}
