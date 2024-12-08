import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#19191B] text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Privacy Policy
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Information Collection</h2>
            <p className="text-gray-300 leading-relaxed">
              When you use the contact form on my portfolio website, I collect only the information you voluntarily provide, 
              such as your name and email address. This information is used solely for the purpose of responding to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Use of Information</h2>
            <p className="text-gray-300 leading-relaxed">
              The information collected is used exclusively to:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Respond to your messages and inquiries</li>
              <li>Provide the services you request</li>
              <li>Improve your experience on the website</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              I implement appropriate security measures to protect your personal information. Your data is never sold, 
              traded, or transferred to third parties without your explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Cookies and Analytics</h2>
            <p className="text-gray-300 leading-relaxed">
              This website uses cookies to enhance your browsing experience. I also use analytics tools to understand 
              how visitors interact with the site, which helps me improve its functionality and content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of your data</li>
              <li>Request deletion of your data</li>
              <li>Withdraw your consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact me through the contact form 
              on this website or directly via email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Updates to This Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              This Privacy Policy may be updated occasionally. The latest version will always be posted on this page, 
              with the last update date clearly indicated.
            </p>
            <p className="mt-4 text-gray-400">
              Last updated: December 8, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
