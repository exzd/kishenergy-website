import React from "react";
import Link from "next/link";
import { blogPosts } from "@/lib/blogData";
import { ArticleClient } from "./ArticleClient";

// generateStaticParams runs at build time on the server to determine static export paths
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  
  // Find matching post
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="container" style={{ padding: "8rem 2rem", textAlign: "center" }}>
        <h1>Article Not Found</h1>
        <p style={{ margin: "2rem 0" }}>The requested blog post could not be found.</p>
        <Link href="/blog" style={{ color: "var(--accent-gold)", fontWeight: 600 }}>
          ← Back to Blog
        </Link>
      </div>
    );
  }

  // Delegate rendering to client component for language toggling
  return <ArticleClient post={post} />;
}
