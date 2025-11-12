import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const destinosPath = path.join(process.cwd(), "data", "destinos.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(destinosPath, "utf8");
    const destinos = JSON.parse(fileContents);
    return NextResponse.json(destinos);
  } catch (error) {
    return NextResponse.json(
      { error: "Error reading destinos" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { destinoId, destinoData } = body;

    const fileContents = fs.readFileSync(destinosPath, "utf8");
    const destinos = JSON.parse(fileContents);

    destinos[destinoId] = destinoData;

    fs.writeFileSync(destinosPath, JSON.stringify(destinos, null, 2), "utf8");

    return NextResponse.json({ success: true, destino: destinos[destinoId] });
  } catch (error) {
    return NextResponse.json(
      { error: "Error saving destino" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { destinoId, destinoData } = body;

    const fileContents = fs.readFileSync(destinosPath, "utf8");
    const destinos = JSON.parse(fileContents);

    if (!destinos[destinoId]) {
      return NextResponse.json(
        { error: "Destino not found" },
        { status: 404 }
      );
    }

    destinos[destinoId] = destinoData;

    fs.writeFileSync(destinosPath, JSON.stringify(destinos, null, 2), "utf8");

    return NextResponse.json({ success: true, destino: destinos[destinoId] });
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating destino" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const destinoId = searchParams.get("id");

    if (!destinoId) {
      return NextResponse.json({ error: "Destino ID required" }, { status: 400 });
    }

    const fileContents = fs.readFileSync(destinosPath, "utf8");
    const destinos = JSON.parse(fileContents);

    if (!destinos[destinoId]) {
      return NextResponse.json(
        { error: "Destino not found" },
        { status: 404 }
      );
    }

    delete destinos[destinoId];

    fs.writeFileSync(destinosPath, JSON.stringify(destinos, null, 2), "utf8");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Error deleting destino" },
      { status: 500 }
    );
  }
}

