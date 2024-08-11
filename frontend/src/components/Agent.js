import React from 'react';
import AgentProfile from './AgentProfile';
import AgentDashboard from './AgentDashboard';
import Footer from './Footer';

function Agent() {
  return (
    <div className="p-8">
      <div className="flex space-x-8">
        {/* Agent Profile Section */}
        <div className="flex-1">
          <AgentProfile />
        </div>

        {/* Agent Dashboard Section */}
        <div className="flex-1">
          <AgentDashboard />
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-16 border-t-4 border-green-800">
        <Footer />
      </div>
    </div>
  );
}

export default Agent;