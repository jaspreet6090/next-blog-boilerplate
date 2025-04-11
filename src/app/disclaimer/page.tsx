import { Fragment } from "react";

export const metadata = {
  title: "Disclaimer",
};

const disclaimer = [
  "***Disclaimer for example",
  "If you require any more information or have any questions about our site's disclaimer, please feel free to contact us by email at contact@example.com.",

  "***General Disclaimer",
  "All the information on this website — https://example.com — is published in good faith and for general informational purposes only.",
  "example does not make any warranties about the completeness, reliability, or accuracy of this information.",
  "Any action you take upon the information you find on our website is strictly at your own risk.",
  "example will not be liable for any losses and/or damages in connection with the use of our website.",

  "***External Links Disclaimer",
  "Our website may contain links to external websites that are not provided or maintained by or in any way affiliated with example.",
  "Please note that example does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.",
  "These links do not imply our endorsement of the content, and we are not responsible for any changes or updates to these sites.",

  "***Third-Party Policies",
  "Once you leave our site, please be aware that other websites may have different privacy policies and terms of service which are beyond our control.",
  "We encourage you to review the privacy policies and terms of any third-party sites before providing them with any personal information or engaging in transactions.",

  "***Consent",
  "By using our website, you hereby consent to our disclaimer and agree to its terms.",

  "***Updates",
  "We may update, amend, or make changes to this disclaimer at any time.",
  "Any changes will be prominently posted on this page to keep you informed.",
];

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h2>Disclaimer</h2>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="space-y-4">
          {disclaimer.map((item, index) => (
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
