import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const filePath = path.join(process.cwd(), "data", "dashbord-data.json");
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

    console.log("Received data:", body);
    const filePath = path.join(process.cwd(), "data", "dashbord-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent || "{}");
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

// update
export async function PUT(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), "data", "dashbord-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent || "[]");
    const index = data.findIndex((item) => item.id === body.id);
    if (index !== -1) {
      data[index] = body;
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return NextResponse.json({ message: "Data updated successfully!" });
    } else {
      return NextResponse.json({ message: "Data not found." }, { status: 404 });
    }
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json(
      { message: "Failed to update data." },
      { status: 500 }
    );
  }
}

// delete
export async function DELETE(request) {
  try {
    const body = await request.json();
    const filePath = path.join(process.cwd(), "data", "dashbord-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent || "[]");
    const index = data.findIndex((item) => item.id === body.id);
    if (index !== -1) {
      data.splice(index, 1);
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
      return NextResponse.json({ message: "Data deleted successfully!" });
    } else {
      return NextResponse.json({ message: "Data not found." }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json(
      { message: "Failed to delete data." },
      { status: 500 }
    );
  }
} 