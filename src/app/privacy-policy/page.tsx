import { Fragment } from "react";

export const metadata = {
  title: "Privacy Policy",
};

const privacyPolicy = [
  "***Introduction",
  "At example, your privacy is a top priority.",
  "This Privacy Policy outlines how we collect, use, and protect your information.",
  "By using our services, you consent to the practices described below.",

  "***Information We Collect",
  "We collect information you provide during account registration or while using our services.",
  "This includes name, email, usage data, IP address, and device/browser details.",
  "Some data may be collected automatically, including pages visited and time spent, for analytics and service improvement.",
  "We may use third-party services such as Google Analytics to monitor and analyze usage patterns.",

  "***How We Use Your Information",
  "We use your data to provide, maintain, and improve our services.",
  "It helps us troubleshoot issues, personalize content, and enhance user experience.",
  "We may also send updates, newsletters, or service-related notifications.",
  "Your information may be used in behavioral advertising and remarketing campaigns.",

  "***Cookies and Tracking",
  "We use cookies and similar tracking technologies to enhance functionality and gather insights.",
  "Cookies help us remember preferences, track sessions, and deliver personalized content and advertisements.",
  "You can control or disable cookies via your browser settings. However, some features may not work properly if you do so.",
  "We use the DoubleClick cookie and similar technologies for interest-based advertising. You may opt out via Google Ads Settings.",

  "***Behavioral Remarketing",
  "example uses remarketing services (e.g., Facebook, AppNexus) to show ads on other websites after you’ve visited our platform.",
  "These services use cookies to inform, optimize, and serve ads based on your past activity.",
  "You can opt out through respective ad settings or industry opt-out tools such as the Digital Advertising Alliance or your device settings.",

  "***Data Sharing and Disclosure",
  "We do not sell or rent your personal data to third parties.",
  "Your data may be shared with trusted service providers to facilitate operations and analytics, under strict confidentiality agreements.",
  "We may disclose data when required by law or to protect the rights, property, or safety of example and its users.",

  "***International Transfers",
  "Your data may be stored or processed outside your local jurisdiction, where privacy laws may differ.",
  "By using our services, you agree to the transfer of your data to these locations.",

  "***Children’s Privacy",
  "Our services are not directed to children under the age of 13.",
  "We do not knowingly collect personal information from children. If we become aware of such data, we will promptly delete it.",

  "***Data Retention",
  "We retain your data only as long as necessary for legal, operational, or analytical purposes.",
  "You can request data deletion by contacting our support team.",
  "Some data may be retained for fraud prevention, compliance, or statistical analysis.",

  "***Security",
  "We implement industry-standard security measures to protect your data.",
  "However, no online transmission or storage system is completely secure.",
  "We encourage you to protect your account credentials and use strong passwords.",

  "***Your Rights",
  "You have the right to access, update, or delete your personal information.",
  "You may object to or restrict certain types of data processing.",
  "To exercise these rights, contact us at contact@example.com.",

  "***Third-Party Links",
  "Our site may contain links to third-party websites or services not operated by us.",
  "We are not responsible for the privacy practices of those sites.",
  "Please review their privacy policies before providing any personal information.",

  "***Policy Updates",
  "We may update this Privacy Policy from time to time.",
  "Changes will be posted on this page with a revised effective date.",
  "Your continued use of the services after updates constitutes acceptance of the new terms.",

  "***Contact Information",
  "If you have any questions or concerns about your data, please reach out to us.",
  "Email: contact@example.com",
  "Company Name: example",
];

export default function Page() {
  return (
    <div className="mt-4 sm:mt-12">
      <h2>Privacy Policy</h2>

      <div className="mt-8 grid lg:grid-cols-[3fr_1fr] gap-8">
        <div className="space-y-4">
          {privacyPolicy.map((item, index) => (
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
