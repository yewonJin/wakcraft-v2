import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { id, password } = await req.json();

    if (!id || !password) {
      return NextResponse.json(
        { message: "아이디 혹은 비밀번호를 입력해주세요" },
        { status: 400 },
      );
    }

    if (
      id !== process.env.ADMIN_ID ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return NextResponse.json(
        { message: "아이디 혹은 비밀번호가 일치하지 않습니다." },
        { status: 400 },
      );
    }

    const token = jwt.sign({ user: id }, process.env.JWT_SECRET as string, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const response = NextResponse.json(
      { message: "로그인 성공" },
      { status: 200 },
    );

    response.cookies.set({
      name: "jwt",
      value: token,
      httpOnly: true,
      maxAge: 60 * 60,
    });

    return response;
  } catch (e) {
    return NextResponse.json({ message: "로그인 실패" }, { status: 400 });
  }
}
