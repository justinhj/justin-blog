import { getCollection, type CollectionEntry } from 'astro:content';
import { format } from 'date-fns';

export type Post = CollectionEntry<'posts'>;

export async function getSortedPosts(): Promise<Post[]> {
  const posts = await getCollection('posts', ({ data }) => {
    return !data.draft;
  });

  return posts.sort((a, b) => {
    return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
  });
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  const posts = await getSortedPosts();
  return posts.filter((post) =>
    post.data.tags.map((t) => t.toLowerCase()).includes(tag.toLowerCase())
  );
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getSortedPosts();
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagsSet.add(tag.toLowerCase());
    });
  });

  return Array.from(tagsSet).sort();
}

export async function getPopularPosts(): Promise<Post[]> {
  return getPostsByTag('popular');
}

export function formatDate(date: Date): string {
  return format(date, 'MMM dd, yyyy');
}

export function getExcerpt(content: string, length: number = 160): string {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  if (plainText.length <= length) return plainText;
  return plainText.substring(0, length).trim() + '...';
}

export function getPostUrl(post: Post): string {
  return `/posts/${post.slug}`;
}
