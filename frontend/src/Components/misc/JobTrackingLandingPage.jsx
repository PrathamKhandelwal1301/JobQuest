import React from 'react';
import { 
  Rocket, 
  BarChart, 
  Columns, 
  Users, 
  Briefcase, 
  Clock, 
  Mail, 
  Database, 
  TrendingUp 
} from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group">
    <div className="mb-4 flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StatCard = ({ icon, number, label }) => (
  <div className="text-center p-6 bg-gray-50 rounded-xl">
    <div className="mb-3 flex items-center justify-center">
      {icon}
    </div>
    <div className="text-3xl font-bold text-blue-600 mb-2">{number}+</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

const JobTrackingLandingPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Features Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Powerful Features for Your Job Search</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your job application process with our comprehensive tracking and management tools.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Rocket className="w-10 h-10 text-blue-500" />}
            title="Smart Tracking"
            description="Automatically track and organize all your job applications from multiple platforms."
          />
          <FeatureCard 
            icon={<BarChart className="w-10 h-10 text-green-500" />}
            title="Detailed Analytics"
            description="Gain insights into your job search with comprehensive application performance metrics."
          />
          <FeatureCard 
            icon={<Columns className="w-10 h-10 text-purple-500" />}
            title="Custom Dashboards"
            description="Create personalized dashboards to visualize and manage your job search strategy."
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How JobTracker Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simplify your job search with our intuitive 3-step process.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center w-24 h-24 bg-blue-50 rounded-full mx-auto">
                <span className="text-4xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Connect Accounts</h3>
              <p className="text-gray-600">Link your job search platforms and email accounts.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center w-24 h-24 bg-green-50 rounded-full mx-auto">
                <span className="text-4xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Track Applications</h3>
              <p className="text-gray-600">Automatically sync and monitor your job applications.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center w-24 h-24 bg-purple-50 rounded-full mx-auto">
                <span className="text-4xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Optimize Strategy</h3>
              <p className="text-gray-600">Use insights to improve your job search approach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">JobTracker by the Numbers</h2>
            <p className="text-xl max-w-2xl mx-auto">
              We're helping job seekers transform their career search with data-driven insights.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <StatCard 
              icon={<Users className="w-12 h-12 text-black" />}
              number="50,000"
              label="Active Users"
            />
            <StatCard 
              icon={<Briefcase className="w-12 h-12 text-black" />}
              number="250,000"
              label="Applications Tracked"
            />
            <StatCard 
              icon={<Clock className="w-12 h-12 text-black" />}
              number="75"
              label="Hours Saved per User"
            />
            <StatCard 
              icon={<TrendingUp className="w-12 h-12 text-black" />}
              number="40"
              label="Improved Placement Rate"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Supercharge Your Job Search?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of job seekers who have transformed their career tracking with JobTracker.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="px-8 py-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
              Get Started - Free
            </button>
            <button className="px-8 py-4 border-2 border-black text-black rounded-lg hover:bg-gray-100 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobTrackingLandingPage;