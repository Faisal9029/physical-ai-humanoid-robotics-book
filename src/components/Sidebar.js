import React from 'react';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  // This is a simplified sidebar component
  // In a real Docusaurus project, sidebar would be configured in docusaurus.config.js
  return (
    <nav className="sidebar">
      <h3>Physical AI & Humanoid Robotics</h3>
      <ul>
        <li><a href="/docs/front-matter/preface">Preface</a></li>
        <li><a href="/docs/part-1-robotic-nervous-system/nodes-topics-services/chapter-2">Part I: Chapter 2</a></li>
        <li><a href="/docs/part-2-digital-twin/gazebo-physics/chapter-5">Part II: Chapter 5</a></li>
        <li><a href="/docs/part-3-ai-robot-brain/nav2-slam/chapter-10">Part III: Chapter 10</a></li>
        <li><a href="/docs/part-4-vision-language-action/llm-planning/chapter-12">Part IV: Chapter 12</a></li>
        <li><a href="/docs/part-5-capstone/autonomous-humanoid/chapter-16">Part V: Chapter 16</a></li>
        <li><a href="/docs/appendix/hardware-lab/hardware-architecture">Appendix: Hardware</a></li>
      </ul>
    </nav>
  );
};

export default Sidebar;