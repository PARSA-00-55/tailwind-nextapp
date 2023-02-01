import Banner from "@/Components/Banner/Banner";
import Footer from "@/Components/Footer/Footer";
import Post from "@/Components/Post/Post";
import { Inter } from "@next/font/google";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home({posts}) {
  return (
    <>
      <Banner />
      <div className="w-full text-center">
        {posts?.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
        
        <Link href='/posts' className='btn btn-primary my-8'>See More Posts</Link>
        
      </div>
      <Footer />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
