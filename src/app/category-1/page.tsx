import formatTitle from "@/lib/format-title";
import { Metadata } from "next";
import Link from "next/link";

const title = "Category 1";

export const metadata: Metadata = {
  title: title,
};

export default function Page() {
  return (
    <div className="mt-4 lg:mt-12">
      <h2>{title}</h2>

      <div className="mt-12  lg:mt-16space-y-16 lg:space-y-24">
        {new Array(3).fill(0).map((_, index) => (
          <section key={index}>
            <h3>Section {index + 1}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {new Array(4).fill(0).map((_, index) => (
                <Link href={`${formatTitle(title)}`} key={index} className="border rounded-md">
                  {/* Image */}
                  <div className="relative h-[300px] w-full  bg-neutral-300 rounded-t-md">
                    {/* <Image
                  src={`/articles/${article.imgUrl}`}
                  alt={article.title}
                  fill
                  className="object-cover border"
                  quality={75}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="/blur.jpg"
                /> */}
                  </div>
                 <div className="p-4">
                 <h3>Image {index + 1}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident, tenetur?
                  </p>
                 </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
