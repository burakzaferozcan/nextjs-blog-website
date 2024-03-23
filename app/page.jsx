import BlogCard from "@/components/BlogCard";
import styles from "./styles.module.css";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/posts?limit=20");
  return response.json();
}
export default async function Home() {
  const { posts } = await getPosts();
  console.log(posts);
  return (
    <div className={styles.blogContainer}>
      {posts.map((post) => {
        return <BlogCard key={post.id} {...post} />;
      })}
    </div>
  );
}
