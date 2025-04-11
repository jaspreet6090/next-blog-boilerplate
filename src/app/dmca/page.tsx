import { Fragment } from "react";

export const metadata = {
  title: "DMCA",
};

const dmcaPolicy = [
  "***DMCA Notice",
  "example respects the intellectual property rights of others.",
  "If you believe your copyrighted work has been used without authorization, you may submit a DMCA notice to us.",
  "We will respond promptly to valid copyright infringement claims.",

  "***Submitting a DMCA Takedown Request",
  "Include your name, contact information, and a description of the copyrighted work.",
  "Specify the exact URL or location of the allegedly infringing content.",
  "Provide a statement of good faith belief that the use is unauthorized.",
  "Include a statement, under penalty of perjury, that the information is accurate and you are the copyright owner or authorized to act on their behalf.",

  "***Where to Send Your Notice",
  "Email your DMCA notice to: contact@example.com",
  "Subject line: DMCA Takedown Request",

  "***Counter Notification",
  "If you believe content was removed in error, you may file a counter-notification.",
  "Include your contact details, the removed content’s URL, and a statement under penalty of perjury that the content was removed in error.",
  "We may restore the content unless the original complainant files a lawsuit within 10 business days.",

  "***Repeat Infringers",
  "We may terminate accounts of users who are repeat infringers.",
  "We reserve the right to take appropriate legal and administrative action.",

  "***Legal Disclaimer",
  "This DMCA policy is provided for informational purposes only and is not legal advice.",
  "Please consult a qualified attorney if you are unsure of your rights or obligations under the DMCA.",
];

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h2>DMCA</h2>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="space-y-4">
          {dmcaPolicy.map((item, index) => (
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
