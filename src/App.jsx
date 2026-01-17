import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import VideoSection from './components/VideoSection';
import { toolsData } from './data/tools';

function App() {
  return (
    <Layout>
      <Hero />
      <VideoSection
        videoId="sI5FzI-vGkQ"
        title="Featured Tutorial: Building with Lovable"
        description="See how you can build full-stack web apps just by chatting."
      />
      <div className="container">
        {toolsData.map((category) => (
          <CategorySection
            key={category.category}
            title={category.category}
            description={category.description}
            tools={category.tools}
          />
        ))}
      </div>
    </Layout>
  );
}

export default App;
