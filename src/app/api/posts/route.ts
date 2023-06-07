import { NextApiHandler } from "next";
import fs, { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = readPostInfo();
  return NextResponse.json({ postInfo: data });
}
const readPostInfo = () => {
  const dirPathToRead = path.join(process.cwd(), "posts");
  const dirs = fs.readdirSync(dirPathToRead);

  const data = dirs.map((dir) => {
    const filePathToRead = path.join(process.cwd(), "posts/" + dir);
    const file = fs.readFileSync(filePathToRead, "utf8");

    return matter(file).data;
  });

  return data;
};
