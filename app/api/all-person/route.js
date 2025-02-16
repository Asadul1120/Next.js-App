import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const filePath = path.join(process.cwd(), "data", "allperson-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent || "[]");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return NextResponse.json(
      { message: "Failed to read data." },
      { status: 500 }
    );
  }
}
//post request
export async function POST(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), "data", "allperson-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent || "[]");
    data.push(body);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return NextResponse.json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json(
      { message: "Failed to save data." },
      { status: 500 }
    );
  }
}