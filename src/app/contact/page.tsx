import ContactForm from "./form";

export const metadata = {
  title: "Contact",
};

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h2>Contact</h2>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="p-4 ">
          <h3>Get in touch</h3>
          <ContactForm />
        </div>
        <div className=" flex flex-col gap-4 p-4">
          <h3>Address</h3>
          <span>street 1,city 1</span>

          <span>state , 123456</span>

          <div className="flex items-center ">
            <div className="flex-1 border-t" />
            <span>OR</span>
            <div className="flex-1 border-t" />
          </div>
          <div className="flex flex-col">
            <span>Mail us:</span>
            <span>contact@example.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
