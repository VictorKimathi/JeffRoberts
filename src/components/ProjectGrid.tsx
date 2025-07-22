import React from 'react';
import { Button } from './Button';
import { ExternalLinkIcon } from 'lucide-react';
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}
export function ProjectGrid() {
  const projects: Project[] = [{
    id: 1,
    title: 'CONSUMER TECH REVIEWS',
    description: 'In-depth analysis and reviews of smartphones, laptops, and the latest gadgets with a focus on user experience and practical applications.',
    image: 'https://images.unsplash.com/photo-1573739122661-d6d6d854b7e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Device Reviews', 'Comparisons', 'Buying Guides']
  }, {
    id: 2,
    title: 'DIGITAL LIFESTYLE FEATURES',
    description: 'Exploring how technology shapes our daily lives, from productivity tools to entertainment platforms and smart home ecosystems.',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['Digital Trends', 'Tech Culture', 'Lifestyle']
  }, {
    id: 3,
    title: 'TECH TUTORIALS & EXPLAINERS',
    description: 'Step-by-step guides and explanatory features that break down complex technologies and software for everyday users.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['How-To Guides', 'Tutorials', 'Explainers']
  }];
  return <section id="projects" className="py-20 bg-[#181C1F]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
            PORTFOLIO
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore my writing across various tech verticals. Each category
            represents my expertise in transforming complex technology into
            engaging content.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <div key={project.id} className="bg-[#0F1112] border border-[#22272B] rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => <span key={index} className="text-xs px-2 py-1 bg-[#22272B] rounded-full">
                      {tag}
                    </span>)}
                </div>
                <Button className="w-full flex items-center justify-center gap-2">
                  READ SAMPLES <ExternalLinkIcon size={16} />
                </Button>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <Button variant="secondary">VIEW ALL ARTICLES</Button>
        </div>
      </div>
    </section>;
}