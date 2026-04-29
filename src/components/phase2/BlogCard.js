import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Phase2.module.css";
import { ArrowRight, ClockIcon } from "./icons";

const BlogCard = ({ post }) => {
  if (!post) return null;
  return (
    <Link href={`/blog/${post.slug}`} className={styles.blogCard}>
      <div className={styles.blogCardImage}>
        {post.category && (
          <span className={styles.blogCardCategory}>{post.category}</span>
        )}
        <Image
          src={post.coverImage}
          alt={post.title}
          width={640}
          height={360}
        />
      </div>
      <div className={styles.blogCardBody}>
        <h3 className={styles.blogCardTitle}>{post.title}</h3>
        <p className={styles.blogCardExcerpt}>{post.excerpt}</p>
        <div className={styles.blogCardFooter}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
            <ClockIcon size={13} /> {post.readMinutes} min read
          </span>
          <span className={styles.blogCardReadMore}>
            Read article <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
