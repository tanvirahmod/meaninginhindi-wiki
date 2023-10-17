import { getWords } from '@/lib/words';

export default async function sitemap() {
  const baseUrl = "https://meaninginhindi.wiki";

  // Get All Posts from CMS
  const posts:any = await getWords();
  
  const postsUrls =
    posts?.map((post:{word: string, lastMod: string}) => {
      return {
        url: `${baseUrl}/dictionary/${post.word}`,
        lastModified: `${post.lastMod}`,
      };
    }) ?? [];

//   // Get All Categories from CMS
//   const categories = await getAllCategories();
//   const categoriesUrls =
//     categories?.map((category) => {
//       return {
//         url: `${baseUrl}/${category.slug}`,
//         lastModified: new Date(),
//       };
//     }) ?? [];


  return [
    {
      url: baseUrl,
      lastModified: "2023-09-16",
    },
    ...postsUrls,
    // ...categoriesUrls,
  ];
}