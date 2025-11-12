import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Determinar la carpeta según el tipo
    const fileName = file.name;
    const fileExtension = fileName.split(".").pop();
    
    // Si es una imagen de carousel, guardar en la carpeta del destino
    const destinoFolder = formData.get("destinoFolder") as string || "mundo-turistico";
    const subfolder = formData.get("subfolder") as string || "";
    
    let uploadPath: string;
    if (subfolder) {
      uploadPath = path.join(process.cwd(), "public", "mundo-turistico", subfolder, fileName);
    } else {
      uploadPath = path.join(process.cwd(), "public", "mundo-turistico", fileName);
    }

    // Crear directorio si no existe
    const dir = path.dirname(uploadPath);
    const fs = require("fs");
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    await writeFile(uploadPath, buffer);

    // Retornar la ruta relativa para usar en el frontend
    const relativePath = subfolder 
      ? `/mundo-turistico/${subfolder}/${fileName}`
      : `/mundo-turistico/${fileName}`;

    return NextResponse.json({ 
      success: true, 
      path: relativePath,
      fileName 
    });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Error uploading file" },
      { status: 500 }
    );
  }
}

