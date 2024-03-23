import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import NotFound from "./not-found";
async function getPost(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}
async function Page({ params, searchParams }) {
  const { id, title, body } = await getPost(params.id);
  if (!title) {
    return <NotFound />;
  }
  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image
          src={`https://picsum.photos/960/400?random=${id}`}
          alt={title}
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default Page;
