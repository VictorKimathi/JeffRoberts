import React from 'react';
import { PenToolIcon, SearchIcon, ClockIcon, EditIcon, BookOpenIcon, UsersIcon } from 'lucide-react';
interface Skill {
  icon: React.ReactNode;
  name: string;
  level: number;
}
export function About() {
  const skills: Skill[] = [{
    icon: <PenToolIcon size={24} />,
    name: 'Feature Writing',
    level: 95
  }, {
    icon: <SearchIcon size={24} />,
    name: 'SEO Optimization',
    level: 85
  }, {
    icon: <ClockIcon size={24} />,
    name: 'Deadline Management',
    level: 90
  }, {
    icon: <EditIcon size={24} />,
    name: 'AP Style Proficiency',
    level: 88
  }, {
    icon: <BookOpenIcon size={24} />,
    name: 'Long-form Storytelling',
    level: 92
  }, {
    icon: <UsersIcon size={24} />,
    name: 'Remote Collaboration',
    level: 85
  }];
  return <section id="about" className="py-20 bg-[#0F1112]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wider mb-4">
            ABOUT ME
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tech-savvy freelance writer with 5+ years of experience covering
            consumer technology, gadgets, and digital trends.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6900] to-[#005288] opacity-50 blur rounded-lg"></div>
              <div className="relative bg-[#181C1F] p-1 rounded-lg">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt="Jeff Roberts professional portrait" className="w-full h-auto rounded-lg" />
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">PROFILE</h3>
            <p className="text-gray-300 mb-6">
              Tech-savvy freelance writer with 5+ years of experience covering
              consumer technology, gadgets, and digital trends. Known for
              transforming complex tech into engaging, accessible features.
              Adept at working independently, hitting tight deadlines, and
              following brand style guides.
            </p>
            <p className="text-gray-300 mb-8">
              Proficient with CMS platforms, AP Style, and SEO best practices.
              Passionate about storytelling that informs and inspires readers
              across platforms.
            </p>
            <h3 className="text-2xl font-bold mb-4">WORK EXPERIENCE</h3>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-lg">Freelance Contributor</h4>
                <span className="text-[#FF6900] text-sm">
                  Mar 2021 – Present
                </span>
              </div>
              <h5 className="text-gray-300 italic mb-2">
                Digital Trends | Portland, OR
              </h5>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>
                  Produced 3–4 in-depth features monthly on topics such as
                  foldable phones, streaming device comparisons, and smart home
                  ecosystems
                </li>
                <li>
                  Regularly analyzed user experience and product design trends
                  across platforms
                </li>
                <li>
                  Maintained consistent voice and editorial accuracy in
                  alignment with AP and brand style
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-lg">Tech & Innovation Writer</h4>
                <span className="text-[#FF6900] text-sm">
                  Jan 2020 – Feb 2023
                </span>
              </div>
              <h5 className="text-gray-300 italic mb-2">MakeUseOf | Remote</h5>
              <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                <li>
                  Authored over 100 articles covering Android updates, gadget
                  breakdowns, and emerging software tools
                </li>
                <li>
                  Collaborated with graphic designers and SEO teams to improve
                  post visibility
                </li>
                <li>
                  Created evergreen tutorials and explainers that averaged 20K+
                  monthly page views
                </li>
              </ul>
            </div>
            <h3 className="text-2xl font-bold mb-6">TECHNICAL SKILLS</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => <div key={index} className="bg-[#181C1F] p-4 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-[#FF6900]">{skill.icon}</div>
                    <h4 className="font-bold">{skill.name}</h4>
                  </div>
                  <div className="w-full bg-[#22272B] rounded-full h-2.5">
                    <div className="bg-[#FF6900] h-2.5 rounded-full" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-bold mb-4">EDUCATION</h3>
              <div className="mb-2">
                <h4 className="font-bold">Associate of Arts in Journalism</h4>
                <p className="text-gray-300">
                  Santa Monica College, Santa Monica, CA
                </p>
                <p className="text-[#FF6900]">June 2017</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">
            ACTIVITIES AND INTERESTS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#181C1F] p-5 rounded-lg">
              <p className="text-gray-300">
                Tech review contributor at jeffrobertswrites.com
              </p>
            </div>
            <div className="bg-[#181C1F] p-5 rounded-lg">
              <p className="text-gray-300">
                Beta tester for mobile apps and smart devices
              </p>
            </div>
            <div className="bg-[#181C1F] p-5 rounded-lg">
              <p className="text-gray-300">
                Member of Online News Association (ONA)
              </p>
            </div>
            <div className="bg-[#181C1F] p-5 rounded-lg">
              <p className="text-gray-300">
                Member of Digital Writers Collective
              </p>
            </div>
            <div className="bg-[#181C1F] p-5 rounded-lg">
              <p className="text-gray-300">
                Volunteer mentor for freelance writers
              </p>
            </div>
            <div className="bg-[#181C1F] p-5 rounded-lg">
              <p className="text-gray-300">
                Panelist at 2023 Freelance Tech Writers Summit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}