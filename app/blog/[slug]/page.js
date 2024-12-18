import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogBySlug, getBlogs } from "@/lib/blog";
import TableOfContents from '@/components/blog/TableOfContents'
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const components = {
  h1: ({ children }) => (
    <h1 id={children.toLowerCase().replace(/\s+/g, '-')}>{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 id={children.toLowerCase().replace(/\s+/g, '-')}>{children}</h2>
  ),
  // ... 其他标题级别
};

// 修改提取标题的函数，只提取 h1-h2
function extractHeadings(content) {
  const headingRegex = /^#{1,2}\s+(.+)$/gm;  // 修改为只匹配1-3个#
  const headings = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].split(' ')[0].length;
    if (level <= 2) {  // 确保只包含 h1-h2
      headings.push({
        level,
        text: match[1].trim(),
        id: match[1].trim().toLowerCase().replace(/\s+/g, '-')
      });
    }
  }

  return headings;
}

export default async function Blog({ params }) {
  const { slug } = params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const { metadata, content } = blog;
  const { title, summary, image, author, publishedAt, tag } = metadata;

  // 添加提取标题的调用
  const headings = extractHeadings(content);

  return (
    <section className="flex gap-4 mx-auto relative">
      <aside className="hidden relative pt-14 2xl:block mt-2">
        <Link
          href="/blog"
          className="sticky flex items-center gap-1 py-2 pl-4 pr-5 rounded-full top-10  text-foreground font-semibold bg-[#f2f2f21a] "
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </Link>
      </aside>
      <article className="mx-auto mt-16 w-full max-w-3xl">
        <header>
          {image && (
            <div className="relative w-full flex justify-center items-center mb-10 overflow-hidden rounded-lg aspect-[240/135]">
              <Image
                src={image}
                alt={title || ""}
                className="object-cover"
                fill
              />
            </div>
          )}

          <p className="mb-2 text-sm text-muted-foreground">
            {publishedAt ?? ""} | {tag}
          </p>

          <h1 className="mb-2 text-4xl font-bold">{title}</h1>

          <p className="mb-6 text-muted-foreground">{author}</p>

          <p className="">{summary}</p>
        </header>

        <hr className="mt-10 border-[0.5px] border-muted-foreground" />

        <main className="mt-16 max-w-none prose prose-invert prose-p:text-foreground prose-h1:text-foreground prose-h2:text-foreground prose-h3:text-foreground prose-h4:text-foreground prose-ul:text-foreground prose-ol:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-strong:font-bold prose-a:text-blue-400 prose-a:opacity-80 prose-code:text-foreground prose-img:opacity-90 prose-p:tracking-tight">
          <MDXRemote source={content} components={components} />
        </main>
      </article>

      <aside className="hidden lg:block w-64 relative mt-16">
        <div className="fixed p-4 bg-[#1a1a1a] rounded-lg">
          <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
          <TableOfContents headings={headings} />
        </div>
      </aside>
    </section>
  );
}

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
