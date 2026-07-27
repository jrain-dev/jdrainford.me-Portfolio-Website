import { notFound } from "next/navigation";
import { getBlogPostBySlug } from "@/app/lib/getPosts";

export async function generateStaticParams() {
  return [];
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-70 pt-16 sm:pt-24 md:pt-32 lg:pt-[10rem] pb-12">
      <article className="max-w-3xl mx-auto prose prose-neutral">
        <p className="text-sm text-gray-500">
          {new Date(post.date).toLocaleDateString()}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-2">{post.title}</h1>
        <p className="text-base text-gray-600 mt-4">{post.excerpt}</p>
        <div className="mt-8 whitespace-pre-wrap text-base leading-8 text-gray-800">
          {post.content}
        </div>
      </article>
    </main>
  );
}
