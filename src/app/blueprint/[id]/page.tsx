'use client';

import React, { useState } from 'react';
import { 
  ChevronDownIcon, 
  ChevronRightIcon,
  CheckIcon,
  ClockIcon,
  PlayIcon,
  ShareIcon,
  DownloadIcon,
  UndoIcon,
  RedoIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  LinkIcon,
  ListBulletIcon
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
  const [isExpanded, setIsExpanded] = useState(true);

  const getStatusIcon = (status: SectionStatus) => {
    switch (status) {
      case 'complete':
        return <CheckIcon className="w-4 h-4 text-green-600" />;
      case 'generating': 
        return (
          <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
        );
      case 'pending':
        return <ClockIcon className="w-4 h-4 text-gray-400" />;
      default:
        return <ClockIcon className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="mb-2">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 w-full p-2 text-left hover:bg-gray-50 rounded-lg group"
      >
        {isExpanded ? (
          <ChevronDownIcon className="w-4 h-4 text-gray-500" />
        ) : (
          <ChevronRightIcon className="w-4 h-4 text-gray-500" />
        )}
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </button>
      
      {isExpanded && (
        <div className="ml-6 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`flex items-center gap-3 w-full p-2 rounded-lg text-left transition-colors ${
                currentSectionId === section.id 
                  ? 'bg-blue-50 text-blue-900 border border-blue-200' 
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              {getStatusIcon(section.status)}
              <span className="text-sm">{section.content.title}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BlueprintPage({ params }: { params: { id: string } }) {
  const [currentSectionId, setCurrentSectionId] = useState(dummySections[0]?.id);
  const [content, setContent] = useState(
    dummySections.find(s => s.id === currentSectionId)?.content.body || ''
  );

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
      <aside className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
              <CheckIcon className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Business Plan</h1>
          </div>
          
          {/* Blueprint Title */}
          <div className="mb-4">
            <h2 className="text-lg font-medium text-gray-900 mb-1">
              {dummyBlueprint.title}
            </h2>
            <p className="text-sm text-gray-500">
              Last edited {dummyBlueprint.lastEditedAt.toLocaleDateString()}
            </p>
          </div>
        </div>
        
        {/* Section Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-1">
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
        
        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-100">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <PlayIcon className="w-4 h-4" />
              Generate Missing Sections
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors">
              <ShareIcon className="w-4 h-4" />
              Share Blueprint
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Toolbar */}
        <header className="h-16 border-b border-gray-200 flex items-center justify-between px-6 bg-white">
          <div className="flex items-center gap-4">
            {/* History Controls */}
            <div className="flex items-center gap-1">
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <UndoIcon className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <RedoIcon className="w-4 h-4 text-gray-600" />
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
                  <BoldIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <ItalicIcon className="w-4 h-4 text-gray-600" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                  <UnderlineIcon className="w-4 h-4 text-gray-600" />
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
              <DownloadIcon className="w-4 h-4 inline mr-2" />
              Export
            </button>
          </div>
        </header>

        {/* Editor Area */}
        <div className="flex-1 bg-gray-50 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            <div className="bg-white rounded-lg shadow-sm min-h-[600px]">
              <div className="p-12">
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
                    
                    {/* Section Status */}
                    {currentSection.status === 'generating' && (
                      <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <div className="w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                        <div>
                          <p className="text-blue-800 font-medium">Generating content...</p>
                          <p className="text-blue-600 text-sm">This usually takes 30-60 seconds.</p>
                        </div>
                      </div>
                    )}
                    
                    {/* AI Actions */}
                    {currentSection.status === 'complete' && (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}