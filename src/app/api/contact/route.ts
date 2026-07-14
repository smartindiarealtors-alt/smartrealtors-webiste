import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export async function POST(request: Request) {
  try {
    let fullname = "";
    let email = "";
    let phone = "";
    let subject = "";
    let message = "";

    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await request.json();
      fullname = body.fullname || "";
      email = body.email || "";
      phone = body.phone || "";
      subject = body.subject || "";
      message = body.message || "";
    } else {
      const bodyText = await request.text();
      const params = new URLSearchParams(bodyText);
      fullname = params.get("fullname") || "";
      email = params.get("email") || "";
      phone = params.get("phone") || "";
      subject = params.get("subject") || "";
      message = params.get("message") || "";
    }

    console.log("Received contact submission:", { fullname, email, phone, subject, message });

    // Validate inputs
    if (!fullname || !email || !phone) {
      return new Response("Missing required fields (name, email, phone)", { status: 400 });
    }

    // Check if Supabase variables are set up
    const isSupabaseConfigured =
      SUPABASE_URL &&
      SUPABASE_ANON_KEY &&
      !SUPABASE_URL.includes("your-project") &&
      !SUPABASE_ANON_KEY.includes("your-supabase");

    if (isSupabaseConfigured) {
      // Send to Supabase REST API
      const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": SUPABASE_ANON_KEY,
          "Authorization": `Bearer ${SUPABASE_ANON_KEY}`,
          "Prefer": "return=minimal",
        },
        body: JSON.stringify({
          fullname,
          email,
          phone,
          subject,
          message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Supabase API error:", errorText);
        throw new Error(`Supabase returned status ${response.status}`);
      }

      console.log("Successfully stored in Supabase!");
    } else {
      // Local fallback file logging for demo purposes
      console.warn("Supabase variables not set. Saving submission to local file fallback...");
      const logDir = path.join(process.cwd(), "scratch");
      if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
      }
      const logFile = path.join(logDir, "contact_submissions.json");
      const submission = { fullname, email, phone, subject, message, date: new Date().toISOString() };
      
      let submissions = [];
      if (fs.existsSync(logFile)) {
        try {
          submissions = JSON.parse(fs.readFileSync(logFile, "utf8"));
        } catch (e) {}
      }
      submissions.push(submission);
      fs.writeFileSync(logFile, JSON.stringify(submissions, null, 2), "utf8");
    }

    // jQuery validation handler expects literal text response "success"
    return new Response("success", {
      headers: { "Content-Type": "text/plain" },
    });
  } catch (error: any) {
    console.error("Contact API submission error:", error.message);
    // Return standard error response but don't break flow if possible
    return new Response("Error submitting message: " + error.message, { status: 500 });
  }
}
