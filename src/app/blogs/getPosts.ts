import { PostMetadata } from '@/types/postMetadata';
import fs from 'fs'
import matter from 'gray-matter'
import path from "path";


const getPostMetadata = (): PostMetadata[] => {
    const dirPathToRead = path.join(process.cwd(), "posts");
    const dirs = fs.readdirSync(dirPathToRead);
    
    const data = dirs.map((dir) => {
      const filePathToRead = path.join(process.cwd(), "posts/" + dir);
      const file = fs.readFileSync(filePathToRead, "utf8");
      const matterResult = matter(file)
		return {
			title: matterResult.data.title,
			slug: matterResult.data.slug,
		}
	})

	return data
}

export default getPostMetadata