import { NextResponse } from "next/server";
import { sendMail } from "../../../utility/helper";
export async function POST (request: Request) {
  const body = await request.json()
  try {
    await sendMail(
      "Congrats! Subscribe successfully",
      body.email,
      "Thank you for subscribe Metro D.C Area - ShenZhen Chamber of Commerse.",
    )
    return NextResponse.json("success")
  } catch (error) {
    return NextResponse.json(error)
  }
}
