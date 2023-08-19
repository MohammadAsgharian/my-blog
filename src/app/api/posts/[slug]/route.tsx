
import { NextApiHandler } from "next";
import fs, { readFileSync } from "fs";
import path from "path";
import matter from "gray-matter";

import { NextRequest, NextResponse } from "next/server";
import { remark } from "remark";
import html from 'remark-html';
import { serialize } from "next-mdx-remote/serialize";

export async function GET(request: NextRequest,{ params }: { params: { slug: string } }) {
  
  const  contentHtml = await readPostInfoBySlug(params.slug!);
  return NextResponse.json(contentHtml);
  }
const readPostInfoBySlug = async (slug : string) => {
  const filePathToRead = path.join(process.cwd(), "posts/" + slug+".md");
  const file = fs.readFileSync(filePathToRead, "utf8");
  const {content, data} = matter(file);
  const source =await serialize(content)


  return  {content:source};
};
