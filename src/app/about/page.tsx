import { Fragment } from "react";

export const metadata = {
  title: "About Us",
};

const aboutUs = [
  "***Our Story",
  "example was born from a deep love for sneaker culture and streetwear.",
  "What started as a passion project has evolved into a trusted destination for sneakerheads around the world.",
  "From rare drops to timeless classics, we’re here to celebrate the stories behind every pair.",

  "***What We Do",
  "We curate, showcase, and sell the hottest sneakers from top brands and emerging designers.",
  "Whether you're chasing a grail or building your rotation, we’ve got you covered.",
  "Our platform combines style, authenticity, and convenience for the ultimate sneaker shopping experience.",

  "***Our Mission",
  "To connect people through sneakers and build a community that thrives on creativity, authenticity, and passion.",
  "We aim to make sneaker culture more accessible while honoring its roots and evolution.",
  "From product drops to exclusive content, everything we do reflects our commitment to the culture.",

  "***Our Team",
  "We’re a crew of sneaker enthusiasts, creatives, and tech lovers.",
  "Our team lives and breathes sneakers — from design to resale trends.",
  "Driven by passion and precision, we bring unique perspectives to the world of footwear.",

  "***Why Choose Us",
  "Every pair we feature is handpicked, verified, and delivered with care.",
  "We prioritize authenticity, transparency, and putting the sneaker community first.",
  "With us, you're not just buying sneakers — you're joining a movement.",

  "***Our Community",
  "We believe sneakers bring people together — and we’re here for the culture, not just the commerce.",
  "From local sneaker meetups to global digital drops, we support creators, collectors, and fans alike.",
  "Join our events, follow us on socials, and become part of example fam.",

  "***Sustainability",
  "We’re committed to doing better for the planet, one step at a time.",
  "From eco-friendly packaging to spotlighting sustainable brands, we’re taking strides toward a greener future.",
  "Because looking good shouldn't cost the Earth.",

  "***Sneaker Education",
  "New to the game or a seasoned collector? Our Sneaker School section is for you.",
  "Learn about drop dates, sneaker history, sizing guides, care tips, and more.",
  "Knowledge is power — and kicks are just the beginning.",

  "***Collabs & Partnerships",
  "We love working with creators, influencers, and brands who share our passion.",
  "From limited-edition drops to exclusive content, our collabs are designed to make waves.",
  "Want to partner with us? Let’s build something iconic together.",

  "***Press & Media",
  "example has been featured in sneaker blogs, streetwear magazines, and culture podcasts.",
  "For interviews, media kits, or press inquiries, reach out to our PR team.",
  "Media contact: press@example.com",

  "***Careers",
  "Want to work with a team that lives for sneakers and tech? You're in the right place.",
  "We’re always looking for fresh talent across design, marketing, dev, and operations.",
  "Check out open roles or drop us a line: careers@example.com",

  "***Get in Touch",
  "Have a question, a collab idea, or just want to geek out over sneakers?",
  "We’d love to hear from you — hit us up anytime.",
  "Email: contact@example.com",
];

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h2>About Us</h2>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="space-y-4">
          {aboutUs.map((item, index) => (
            <Fragment key={index}>
              {item.startsWith("***") ? (
                <h3 className="text-2xl py-4">{item.replace("***", "")}</h3>
              ) : (
                <p className="text-sm text-foreground ">{item}</p>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-4 border"></div>
      </div>
    </div>
  );
}
