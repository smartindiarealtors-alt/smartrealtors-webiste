import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "index.html");
  try {
    const htmlContent = fs.readFileSync(filePath, "utf8");
    return new Response(htmlContent, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load index.html" }, { status: 500 });
  }
}
