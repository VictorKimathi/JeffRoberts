import React from 'react';
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-[#0F1112] border-t border-[#22272B] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold tracking-wider">
              JEFF ROBERTS<span className="text-[#FF6900]">.</span>
            </span>
          </div>
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} Jeff Roberts | Tech Writer & Journalist
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6900] transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6900] transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#FF6900] transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>;
}