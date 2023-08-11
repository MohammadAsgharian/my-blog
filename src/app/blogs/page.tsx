import {BlogCard} from '../../components/BlogCard';


async function getData() {
   const res = await fetch('http://localhost:3000/api/posts').then(res => res.json());
   return res;
 }

export default async function Page()  {
const posts = await getData();
 console.log(posts);
  return (<div className='max-w-3xl mx-auto p-5 space-y-5'>
   {posts.postInfo?.map((post:any)=><BlogCard title={post.title} desc={post.meta} />)}
    
 </div>);
 };
