import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import { toolsData } from './data/tools';

function App() {
  return (
    <Layout>
      <Hero />
      <div id="tools" className="container">
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
