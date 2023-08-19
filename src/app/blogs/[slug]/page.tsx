import fs from "fs"
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import getPostMetadata from '../getPosts';

import path from "path";

// const fetchPost = async (slug: string) => {
  
//   const res = await fetch(`http://localhost:3000/api/posts/${slug}`).then(res =>  res.json())
//   return res;
// }
const getPostContent = (slug: string) => {

  const filePathToRead = path.join(process.cwd(), "posts/" + slug+".md");
  const file = fs.readFileSync(filePathToRead, "utf8");
	const {content, data} = matter(file);
	return {content,data}
}

export const generateStaticParams = async () => {
	const posts = getPostMetadata()
	return posts.map((post) => ({
		slug: post.slug,
	}))
}


export default async function Page(props: any)  {
  const { slug } = props.params;
   const post = getPostContent(slug)
	return (
		<div>
			<h1 className=" font-kasei font-bold md:text-4xl text-2xl">
				{post.data.title}
			</h1>
      <article className="prose prose-slate  prose-a:text-blue-600  prose-pre:bg-orange-900"><Markdown>{post.content}</Markdown></article>
				{/* <Markdown></Markdown> */}
		</div>
	)
 };
