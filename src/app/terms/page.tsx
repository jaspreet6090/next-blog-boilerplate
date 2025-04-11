import { Fragment } from "react";

export const metadata = {
  title: "Terms",
};

const terms = [
  "***Introduction",
  "Welcome to example! These Terms and Conditions govern your use of our website and services.",
  "By accessing example, you agree to abide by these terms and any applicable laws.",
  "Please review them carefully before using our platform.",

  "***Acceptance of Terms",
  "Your use of the example website constitutes your full acceptance of these terms.",
  "If you do not agree with any part of these terms, you must not use our services.",
  "These terms apply to all users, visitors, and others who access our service.",

  "***Changes to Terms",
  "We may update these terms from time to time to reflect changes in legal or operational requirements.",
  "It is your responsibility to review the terms periodically.",
  "Continued use of the service after changes implies acceptance of the new terms.",

  "***User Responsibilities",
  "You must provide accurate and complete information during account registration.",
  "It is your responsibility to keep your login credentials secure.",
  "You are liable for all activity under your account, whether authorized or not.",

  "***Prohibited Activities",
  "You may not engage in fraudulent, abusive, or harmful behavior on the platform.",
  "Activities like data scraping, reverse engineering, or disrupting the service are strictly prohibited.",
  "Violation of these terms may result in immediate suspension or termination of access.",

  "***Intellectual Property",
  "All trademarks, logos, and content on example are the intellectual property of the company.",
  "You may not reproduce, distribute, or create derivative works without explicit permission.",
  "Unauthorized use of our content may result in legal action.",

  "***Limitation of Liability",
  "example is provided on an 'as is' and 'as available' basis without warranties of any kind.",
  "We do not guarantee that the service will be uninterrupted or error-free.",
  "In no event shall example be liable for indirect, incidental, or consequential damages.",

  "***Termination",
  "We reserve the right to suspend or terminate your access at any time for any reason.",
  "Accounts found in violation of our terms will be permanently disabled.",
  "Users may also choose to deactivate their account at any time by contacting support.",

  "***Governing Law",
  "These terms are governed by the laws of the jurisdiction in which example operates.",
  "Any legal disputes will be handled in the local courts of that jurisdiction.",
  "You agree to submit to the exclusive jurisdiction of these courts.",

  "***Contact Information",
  "For questions, concerns, or support inquiries, reach out to us anytime.",
  "Email: contact@example.com",
  "Company Name: example",
];

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h2>Terms</h2>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="">
          {terms.map((term, index) => (
            <Fragment key={index}>
              {term.startsWith("***") ? (
                <h3 className="text-2xl mt-4">{term.replace("***", "")}</h3>
              ) : (
                <p className="text-sm text-foreground mt-4">{term}</p>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-4 border"></div>
      </div>
    </div>
  );
}
