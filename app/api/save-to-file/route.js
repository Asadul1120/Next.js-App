import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();

    // Define the path to save the file
    const filePath = path.join(process.cwd(), "data", "user-data.json");

    // Check if the directory exists, create it if not
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Read the existing file, if it exists
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(fileContent || "[]");
    }

    // Add the new data to the array
    existingData.push(body);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json(
      { message: "Failed to save data." },
      { status: 500 }
    );
  }
}



export async function GET(request) {
    try {
      const filePath = path.join(process.cwd(), "data", "user-data.json");
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
