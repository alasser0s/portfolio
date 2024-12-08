import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#19191B] text-white py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          Terms and Conditions
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using this website, you accept and agree to be bound by the terms and conditions 
              outlined here. If you disagree with any part of these terms, you may not access the website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software, 
              is my property or that of my licensors and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Use License</h2>
            <p className="text-gray-300 leading-relaxed">
              Permission is granted to temporarily view the materials on my website for personal, non-commercial use only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Project Engagement</h2>
            <p className="text-gray-300 leading-relaxed">
              When engaging in a project:
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300 space-y-2">
              <li>All project requirements must be clearly defined in writing</li>
              <li>Payment terms will be agreed upon before project commencement</li>
              <li>Changes to project scope may affect timeline and cost</li>
              <li>Final deliverables will be provided upon complete payment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed">
              The materials on my website are provided on an 'as is' basis. I make no warranties, expressed or implied, 
              and hereby disclaim and negate all other warranties including, without limitation, implied warranties or 
              conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Limitations</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall I or my suppliers be liable for any damages arising out of the use or inability to use 
              the materials on my website, even if I or an authorized representative has been notified orally or in 
              writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Egypt, and you 
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section>
            <p className="mt-8 text-gray-400">
              Last updated: December 8, 2024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
