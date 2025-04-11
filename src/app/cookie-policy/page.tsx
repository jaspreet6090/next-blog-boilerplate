import { Fragment } from "react";

export const metadata = {
  title: "Cookie Policy",
};

const cookiePolicy = [
  "***What Are Cookies",
  "Cookies are small text files stored on your device when you visit a website.",
  "They help websites remember your preferences and enhance user experience.",
  "Cookies can be session-based (temporary) or persistent (stored for a set time).",

  "***How We Use Cookies",
  "We use cookies to analyze traffic, personalize content, and improve performance.",
  "Cookies help us understand how users interact with our site so we can enhance usability.",
  "Some cookies may be set by third-party services for analytics or advertising.",

  "***Types of Cookies We Use",
  "Essential cookies: necessary for basic website functionality.",
  "Performance cookies: collect data on how visitors use our site.",
  "Functionality cookies: remember user choices and preferences.",

  "***Third-Party Cookies",
  "We may allow third-party services like analytics providers to set cookies.",
  "These cookies are subject to the privacy policies of their respective providers.",
  "We do not control third-party cookie behavior, but we limit their use for transparency.",

  "***Managing Your Cookie Preferences",
  "You can manage or disable cookies in your browser settings.",
  "Disabling cookies may impact your experience on our website.",
  "Most browsers also allow you to delete cookies already stored on your device.",

  "***Consent",
  "By continuing to use our site, you agree to the use of cookies as described.",
  "You may withdraw your consent at any time through your browser settings.",

  "***Contact",
  "If you have questions about our cookie usage, we’re here to help.",
  "Reach us at contact@example.com for more information.",
];

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h1>Cookie Policy</h1>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="space-y-4">
          {cookiePolicy.map((item, index) => (
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
