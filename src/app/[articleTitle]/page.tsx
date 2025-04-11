import CreationDate from "@/components/global/creation-date";
import { Button } from "@/components/ui/button";
import allArticles from "@/constants/all";
import formatTitle from "@/lib/format-title";
import { BarChart, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

interface Props {
  params: Promise<{ articleTitle: string }>;
}
export const generateStaticParams = () => {
  return allArticles.map(({ title }) => {
    const formattedTitle = formatTitle(title);
    return {
      articleTitle: formattedTitle,
    };
  });
};

export const generateMetadata = async (props: Props): Promise<Metadata> => {
  const params = await props.params;
  const { articleTitle } = params;

  const article = allArticles.find(({ title }) => {
    return formatTitle(title) === articleTitle;
  }) as TArticle;
  return {
    title: article.title,
    description: article.contents.at(-1),
    openGraph: {
      url: `/${articleTitle}`,
      title: article.title,
      description: article.contents.at(-1),
      images: [`/articles/${article.imgUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.contents.at(-1),
      images: [`/articles/${article.imgUrl}`],
    },
  };
};

export default async function Page(props: Props) {
  const params = await props.params;
  const { articleTitle } = params;
  const article = allArticles.find(
    (article) => formatTitle(article.title) === articleTitle
  );

  if (!article) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 lg:h-[40vh]">
        <h1>Article Not Found</h1>
        <Button asChild aria-label="Go Home">
          <Link href={"/"}>Go Home</Link>
        </Button>
      </div>
    );
  }
  return (
    <section className="mt-4 sm:mt-12 grid lg:grid-cols-[3fr_1fr] gap-8">
      {/* Article */}
      <div>
        <h1>{article.title}</h1>
        <div className="text-xs text-foreground flex flex-wrap justify-between  items-center gap-2 mt-4 sm:mt-8 max-w-xl">
          <div className="flex items-center gap-2">
            <Image
              src={`/authors/${article.authorName}.jpg`}
              alt={article.authorName}
              width={30}
              height={30}
              className="rounded-full size-12 object-cover"
            />
            <span>{article.authorName}</span>
          </div>

          <div className="hidden sm:block border-t flex-1" />
          <div className="flex items-center gap-2">
            <Clock size={"16"} />
            {article.readTime}
          </div>
          <div className="hidden sm:block  border-t flex-1" />
          <div className="flex items-center gap-2">
            <Calendar size={"16"} />{" "}
            <CreationDate articleNumber={article.articleNumber} />
          </div>
          <div className="hidden sm:block border-t flex-1" />
          <div className="flex items-center gap-2">
            <BarChart size={"16"} />
            {article.views} views
          </div>
        </div>

        <div className="relative mt-8 w-full h-[300px] lg:h-[600px]">
          <Image
            src={`/articles/${article.imgUrl}`}
            alt={article.title}
            fill
            className="object-cover border"
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="/blur.jpg"
          />
        </div>

        <div className="lg:max-w-4xl lg:ml-auto mt-8 space-y-6">
          {article.contents.map((content, i) => (
            <Fragment key={i}>
              {content.includes("***") ? (
                <h2>{content.replace("***", "")}</h2>
              ) : content.includes(".webp") ? (
                <Image
                  src={`/articles/${content}`}
                  alt={article.title}
                  width={1000}
                  height={1000}
                  blurDataURL="/blur.jpg"
                  className="h-[300px] lg:h-[450px] w-full object-cover border mt-8"
                />
              )  : (
                <p>{content}</p>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      {/* Side Component */}
      <div className="border">
       
      </div>

      {/* Must read */}
      <div className="col-span-full ">
        <div className="border-t mb-8" />
          <div className="border">
            <h2>Must Read</h2>
          </div>
      </div>
    </section>
  );
}
