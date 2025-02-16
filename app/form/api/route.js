import { NextResponse } from "next/server";
import liveData from "@/app/live.json";

export async function POST(request) {
  try {
    const body = await request.json();

    // Simulate storing or processing data
    console.log("Received data:", body);

    // Example: Save data to a database
    liveData.push(body);

    // Example: Response data
    const savedData = {
      ...body,
      status: "success",
      message: "Data saved successfully",
    };

    return NextResponse.json(savedData);
  } catch (error) {
    console.error("Error in API route:", error);

    return NextResponse.json(
      { status: "error", message: "Failed to save data" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  return NextResponse.json(liveData);
}
