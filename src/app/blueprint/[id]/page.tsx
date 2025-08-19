'use client';

import React, { useState } from 'react';
import { 
  ChevronDownIcon, 
  ChevronRightIcon,
  CheckIcon,
  ClockIcon,
  PlayIcon,
  ShareIcon,
  ArrowDownTrayIcon,
  ArrowUturnLeftIcon,
  ArrowUturnRightIcon,
  LinkIcon,
  ListBulletIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { dummyBlueprint, dummySections, sectionGroups } from '@/lib/dummy-blueprint';
import { NotionEditor } from '@/components/blueprint/NotionEditor';

type SectionStatus = 'pending' | 'generating' | 'complete';

interface BlueprintSection {
  id: string;
  sectionType: string; 
  title: string;
  status: SectionStatus;
  content: {
    title: string;
    subtitle?: string;
    body: string;
  };
}

interface SectionGroupProps {
  title: string;
  sections: BlueprintSection[];
  currentSectionId?: string;
  onSectionSelect: (sectionId: string) => void;
}

function SectionGroup({ title, sections, currentSectionId, onSectionSelect }: SectionGroupProps) {
  const getStatusIcon = (status: SectionStatus) => {
    switch (status) {
      case 'complete':
        return <CheckIcon className="w-3 h-3 text-green-600" />;
      case 'generating': 
        return (
          <div className="w-3 h-3 border border-blue-400 border-t-transparent rounded-full animate-spin" />
        );
      case 'pending':
        return <ClockIcon className="w-3 h-3 text-gray-400" />;
      default:
        return <ClockIcon className="w-3 h-3 text-gray-400" />;
    }
  };

  return (
    <div className="mb-1">
      <div className="flex items-center gap-2 w-full py-1 px-2">
        <span className="text-xs font-medium text-gray-900">{title}</span>
      </div>
      
      <div className="ml-3 space-y-0.5 mt-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => onSectionSelect(section.id)}
            className={`flex items-center gap-2 w-full py-1.5 px-2 rounded text-left transition-colors ${
              currentSectionId === section.id 
                ? 'bg-blue-50 text-blue-900 border border-blue-200' 
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            {getStatusIcon(section.status)}
            <span className="text-xs truncate">{section.content.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function BlueprintPage({ params }: { params: { id: string } }) {
  const [currentSectionId, setCurrentSectionId] = useState(dummySections[0]?.id);
  const [content, setContent] = useState(
    dummySections.find(s => s.id === currentSectionId)?.content.body || ''
  );
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const currentSection = dummySections.find(s => s.id === currentSectionId);

  const handleSectionSelect = (sectionId: string) => {
    const section = dummySections.find(s => s.id === sectionId);
    if (section) {
      setCurrentSectionId(sectionId);
      setContent(section.content.body);
    }
  };

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    // Here you would normally save to backend
  };

  return (
    <div className="h-screen flex bg-white">
      {/* Left Sidebar - Section Navigation */}
      <aside className={`${sidebarCollapsed ? 'w-12' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out`}>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              {!sidebarCollapsed && (
                <h1 className="text-sm font-medium text-gray-900">{dummyBlueprint.title}</h1>
              )}
            </div>
            <button 
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {sidebarCollapsed ? (
                <Bars3Icon className="w-4 h-4 text-gray-600" />
              ) : (
                <XMarkIcon className="w-4 h-4 text-gray-600" />
              )}
            </button>
          </div>
          
          {/* Compact Status */}
          {!sidebarCollapsed && (
            <div className="text-xs text-gray-500">
              Last edited {dummyBlueprint.lastEditedAt.toLocaleDateString()}
            </div>
          )}
        </div>
        
        {/* Section Navigation */}
        {!sidebarCollapsed && (
          <nav className="flex-1 p-3 overflow-y-auto">
            <div className="space-y-0.5">
              {sectionGroups.map((group, index) => (
                <SectionGroup
                  key={index}
                  title={group.title}
                  sections={group.sections}
                  currentSectionId={currentSectionId}
                  onSectionSelect={handleSectionSelect}
                />
              ))}
            </div>
          </nav>
        )}
        
        {/* Bottom Actions */}
        {!sidebarCollapsed && (
          <div className="p-3 border-t border-gray-100">
            <div className="space-y-1">
              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
                <PlayIcon className="w-3 h-3" />
                Generate Missing
              </button>
              <button className="w-full flex items-center gap-2 px-2 py-1.5 text-xs text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded transition-colors">
                <ShareIcon className="w-3 h-3" />
                Share Blueprint
              </button>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Toolbar */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-4">
            {/* History Controls */}
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <ArrowUturnLeftIcon className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <ArrowUturnRightIcon className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            {/* Text Formatting */}
            <div className="flex items-center gap-2 border-l pl-4 ml-2">
              <select className="text-sm border border-gray-200 rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent">
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Body</option>
              </select>
              
              <div className="flex items-center gap-1">
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <span className="w-4 h-4 text-gray-600 text-sm font-bold">B</span>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <span className="w-4 h-4 text-gray-600 text-sm italic">I</span>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <span className="w-4 h-4 text-gray-600 text-sm underline">U</span>
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <LinkIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <ListBulletIcon className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500">
              Auto-saved 2 min ago
            </div>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <ShareIcon className="w-4 h-4 text-gray-600" />
            </button>
            <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800 transition-colors font-medium">
              <ArrowDownTrayIcon className="w-4 h-4 inline mr-2" />
              Export
            </button>
          </div>
        </header>

        {/* Editor Area - Google Docs Style */}
        <div className="flex-1 bg-gray-100 overflow-y-auto">
          <div className="py-8">
            {/* Page 1 */}
            <div className="max-w-[8.5in] mx-auto mb-6">
              <div className="w-full h-[11in] bg-white shadow-lg border border-gray-200">
                <div className="p-16">
                  {currentSection && (
                    <div className="space-y-6">
                      {/* Section Header */}
                      <div className="border-b border-gray-100 pb-6">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                          {currentSection.content.title}
                        </h1>
                        {currentSection.content.subtitle && (
                          <p className="text-lg text-gray-600">
                            {currentSection.content.subtitle}
                          </p>
                        )}
                      </div>
                      
                      {/* Notion-style Editor */}
                      <NotionEditor 
                        content={content}
                        onChange={handleContentChange}
                        placeholder="Type '/' for commands, or start writing..."
                        editable={currentSection.status !== 'generating'}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Page 2 */}
            <div className="max-w-[8.5in] mx-auto mb-6">
              <div className="w-full h-[11in] bg-white shadow-lg border border-gray-200">
                <div className="p-16">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Continued Content</h2>
                    <p className="text-gray-700 leading-relaxed">
                      This is the second page of the document. Content flows naturally from the previous page,
                      just like in Google Docs. You can continue writing here and the content will span
                      multiple pages as needed.
                    </p>
                    
                    {/* Section Status */}
                    {currentSection?.status === 'generating' && (
                      <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        <div>
                          <p className="text-blue-800 font-medium">Generating content...</p>
                          <p className="text-blue-600 text-sm">This usually takes 30-60 seconds.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Page 3 */}
            <div className="max-w-[8.5in] mx-auto mb-6">
              <div className="w-full h-[11in] bg-white shadow-lg border border-gray-200">
                <div className="p-16">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Analysis & Data</h2>
                    <p className="text-gray-700 leading-relaxed">
                      This third page could contain charts, graphs, and detailed analysis.
                      The page-based layout ensures content is print-ready and follows
                      standard document formatting.
                    </p>
                    
                    {/* AI Actions - moved to page 3 */}
                    {currentSection?.status === 'complete' && (
                      <div className="flex gap-3 pt-4 border-t border-gray-100">
                        <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          ✨ Regenerate Section
                        </button>
                        <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          📝 Improve Writing
                        </button>
                        <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors">
                          📊 Add Data & Charts
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Page 4 */}
            <div className="max-w-[8.5in] mx-auto mb-6">
              <div className="w-full h-[11in] bg-white shadow-lg border border-gray-200">
                <div className="p-16">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-gray-900">Implementation Plan</h2>
                    <p className="text-gray-700 leading-relaxed">
                      The fourth and final page contains implementation details, next steps,
                      and action items. This page-based approach ensures the document
                      maintains professional formatting and is ready for printing or PDF export.
                    </p>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800">Key Action Items:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Review and validate market assumptions</li>
                        <li>Develop minimum viable product</li>
                        <li>Establish key performance indicators</li>
                        <li>Create go-to-market strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}