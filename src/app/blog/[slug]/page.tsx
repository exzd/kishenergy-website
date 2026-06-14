import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | Kish Energy",
    };
  }

  return {
    title: post.title.en,
    description: post.desc.en,
    alternates: {
      canonical: `https://kishenergy.ir/blog/${slug}`,
    },
    openGraph: {
      title: post.title.en,
      description: post.desc.en,
      url: `https://kishenergy.ir/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: ["Kish Energy Engineering Board"],
      images: [
        {
          url: "https://kishenergy.ir/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.en,
      description: post.desc.en,
      images: ["https://kishenergy.ir/og-image.jpg"],
    },
  };
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

