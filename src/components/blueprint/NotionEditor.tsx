'use client';

import React, { useState, useRef, useEffect } from 'react';
import { 
  Type, 
  Hash, 
  List, 
  CheckSquare, 
  Quote, 
  Code, 
  Minus,
  Image,
  Table,
  Calendar,
  BarChart3,
  Sparkles,
  Lightbulb
} from 'lucide-react';

interface EditorCommand {
  id: string;
  label: string;
  description: string;
  icon: React.ReactNode;
  action: (editor: HTMLDivElement) => void;
  keywords: string[];
}

interface NotionEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  editable?: boolean;
}

// Template commands for blueprint sections
const EDITOR_COMMANDS: EditorCommand[] = [
  {
    id: 'heading1',
    label: 'Heading 1',
    description: 'Big section heading',
    icon: <Type className="w-4 h-4" />,
    action: (editor) => insertBlock(editor, 'h1', 'Heading 1'),
    keywords: ['h1', 'heading1', 'title', 'big']
  },
  {
    id: 'heading2', 
    label: 'Heading 2',
    description: 'Medium section heading',
    icon: <Hash className="w-4 h-4" />,
    action: (editor) => insertBlock(editor, 'h2', 'Heading 2'),
    keywords: ['h2', 'heading2', 'subtitle']
  },
  {
    id: 'heading3',
    label: 'Heading 3', 
    description: 'Small section heading',
    icon: <Hash className="w-4 h-4" />,
    action: (editor) => insertBlock(editor, 'h3', 'Heading 3'),
    keywords: ['h3', 'heading3', 'subheading']
  },
  {
    id: 'bullet-list',
    label: 'Bulleted List',
    description: 'Create a simple bulleted list',
    icon: <List className="w-4 h-4" />,
    action: (editor) => insertList(editor, 'ul'),
    keywords: ['bullet', 'list', 'ul', 'unordered']
  },
  {
    id: 'numbered-list',
    label: 'Numbered List', 
    description: 'Create a numbered list',
    icon: <List className="w-4 h-4" />,
    action: (editor) => insertList(editor, 'ol'),
    keywords: ['number', 'numbered', 'ol', 'ordered']
  },
  {
    id: 'todo-list',
    label: 'To-do List',
    description: 'Track tasks with a to-do list',
    icon: <CheckSquare className="w-4 h-4" />,
    action: (editor) => insertTodoList(editor),
    keywords: ['todo', 'task', 'checkbox', 'check']
  },
  {
    id: 'quote',
    label: 'Quote',
    description: 'Capture a quote or highlight text',
    icon: <Quote className="w-4 h-4" />,
    action: (editor) => insertBlock(editor, 'blockquote', 'Quote text here...'),
    keywords: ['quote', 'blockquote', 'citation']
  },
  {
    id: 'code',
    label: 'Code',
    description: 'Capture a code snippet',
    icon: <Code className="w-4 h-4" />,
    action: (editor) => insertCodeBlock(editor),
    keywords: ['code', 'snippet', 'programming']
  },
  {
    id: 'divider',
    label: 'Divider',
    description: 'Visually divide blocks',
    icon: <Minus className="w-4 h-4" />,
    action: (editor) => insertDivider(editor),
    keywords: ['divider', 'separator', 'hr', 'line']
  },
  {
    id: 'swot-template',
    label: 'SWOT Analysis',
    description: 'Generate SWOT analysis template',
    icon: <BarChart3 className="w-4 h-4" />,
    action: (editor) => insertSWOTTemplate(editor),
    keywords: ['swot', 'analysis', 'strengths', 'weaknesses', 'opportunities', 'threats']
  },
  {
    id: 'market-template',
    label: 'Market Analysis',
    description: 'Generate market analysis template',
    icon: <BarChart3 className="w-4 h-4" />,
    action: (editor) => insertMarketTemplate(editor),
    keywords: ['market', 'analysis', 'tam', 'sam', 'som', 'size']
  },
  {
    id: 'persona-template',
    label: 'User Persona',
    description: 'Generate user persona template',
    icon: <Lightbulb className="w-4 h-4" />,
    action: (editor) => insertPersonaTemplate(editor),
    keywords: ['persona', 'user', 'customer', 'target', 'audience']
  },
  {
    id: 'ai-generate',
    label: 'AI Generate',
    description: 'Generate content with AI',
    icon: <Sparkles className="w-4 h-4" />,
    action: (editor) => insertAIPlaceholder(editor),
    keywords: ['ai', 'generate', 'artificial', 'intelligence', 'auto']
  }
];

// Helper functions for inserting content
function insertBlock(editor: HTMLDivElement, tag: string, content: string) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  
  const range = selection.getRangeAt(0);
  const element = document.createElement(tag);
  element.textContent = content;
  
  range.deleteContents();
  range.insertNode(element);
  range.collapse(false);
}

function insertList(editor: HTMLDivElement, type: 'ul' | 'ol') {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  
  const range = selection.getRangeAt(0);
  const list = document.createElement(type);
  const listItem = document.createElement('li');
  listItem.textContent = 'List item';
  
  list.appendChild(listItem);
  
  range.deleteContents();
  range.insertNode(list);
  range.collapse(false);
}

function insertTodoList(editor: HTMLDivElement) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  
  const range = selection.getRangeAt(0);
  const div = document.createElement('div');
  div.className = 'todo-item flex items-center gap-2 my-2';
  div.innerHTML = `
    <input type="checkbox" class="w-4 h-4 rounded border-gray-300">
    <span contenteditable="true">Todo item</span>
  `;
  
  range.deleteContents();
  range.insertNode(div);
  range.collapse(false);
}

function insertCodeBlock(editor: HTMLDivElement) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  
  const range = selection.getRangeAt(0);
  const pre = document.createElement('pre');
  pre.className = 'bg-gray-100 p-4 rounded-lg font-mono text-sm';
  const code = document.createElement('code');
  code.textContent = '// Your code here';
  pre.appendChild(code);
  
  range.deleteContents();
  range.insertNode(pre);
  range.collapse(false);
}

function insertDivider(editor: HTMLDivElement) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  
  const range = selection.getRangeAt(0);
  const hr = document.createElement('hr');
  hr.className = 'my-6 border-t border-gray-200';
  
  range.deleteContents();
  range.insertNode(hr);
  range.collapse(false);
}

// Blueprint-specific templates
function insertSWOTTemplate(editor: HTMLDivElement) {
  const template = `
<h2>SWOT Analysis</h2>

<h3>Strengths</h3>
<ul>
  <li>Internal advantage 1</li>
  <li>Internal advantage 2</li>
  <li>Internal advantage 3</li>
</ul>

<h3>Weaknesses</h3>
<ul>
  <li>Internal limitation 1</li>
  <li>Internal limitation 2</li>
  <li>Internal limitation 3</li>
</ul>

<h3>Opportunities</h3>
<ul>
  <li>External opportunity 1</li>
  <li>External opportunity 2</li>
  <li>External opportunity 3</li>
</ul>

<h3>Threats</h3>
<ul>
  <li>External threat 1</li>
  <li>External threat 2</li>
  <li>External threat 3</li>
</ul>
  `;
  
  insertHTMLTemplate(editor, template);
}

function insertMarketTemplate(editor: HTMLDivElement) {
  const template = `
<h2>Market Analysis</h2>

<h3>Market Size</h3>
<ul>
  <li><strong>TAM (Total Addressable Market):</strong> $X billion - [Description]</li>
  <li><strong>SAM (Serviceable Addressable Market):</strong> $X million - [Description]</li>
  <li><strong>SOM (Serviceable Obtainable Market):</strong> $X million - [Description]</li>
</ul>

<h3>Market Trends</h3>
<ul>
  <li>Trend 1: [Impact and relevance]</li>
  <li>Trend 2: [Impact and relevance]</li>
  <li>Trend 3: [Impact and relevance]</li>
</ul>

<h3>Growth Drivers</h3>
<ul>
  <li>Driver 1: [Explanation]</li>
  <li>Driver 2: [Explanation]</li>
  <li>Driver 3: [Explanation]</li>
</ul>
  `;
  
  insertHTMLTemplate(editor, template);
}

function insertPersonaTemplate(editor: HTMLDivElement) {
  const template = `
<h2>User Persona: [Persona Name]</h2>

<h3>Demographics</h3>
<ul>
  <li><strong>Age:</strong> [Age range]</li>
  <li><strong>Location:</strong> [Geographic location]</li>
  <li><strong>Role:</strong> [Job title/position]</li>
  <li><strong>Industry:</strong> [Industry/sector]</li>
</ul>

<h3>Goals & Motivations</h3>
<ul>
  <li>Primary goal: [Main objective]</li>
  <li>Secondary goal: [Supporting objective]</li>
  <li>Motivation: [What drives them]</li>
</ul>

<h3>Pain Points</h3>
<ul>
  <li>Challenge 1: [Description of problem]</li>
  <li>Challenge 2: [Description of problem]</li>
  <li>Challenge 3: [Description of problem]</li>
</ul>

<h3>Preferred Solutions</h3>
<ul>
  <li>Feature preference: [What they value]</li>
  <li>Communication style: [How they prefer to be contacted]</li>
  <li>Decision factors: [What influences their choices]</li>
</ul>
  `;
  
  insertHTMLTemplate(editor, template);
}

function insertAIPlaceholder(editor: HTMLDivElement) {
  const template = `
<div class="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
  <div class="flex items-center gap-2 mb-2">
    <div class="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    <span class="text-blue-800 font-medium">AI Content Generation</span>
  </div>
  <p class="text-blue-600 text-sm">Click "Generate" to create content for this section using AI.</p>
  <button class="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
    Generate Content
  </button>
</div>
  `;
  
  insertHTMLTemplate(editor, template);
}

function insertHTMLTemplate(editor: HTMLDivElement, template: string) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;
  
  const range = selection.getRangeAt(0);
  const div = document.createElement('div');
  div.innerHTML = template.trim();
  
  range.deleteContents();
  range.insertNode(div);
  range.collapse(false);
}

export function NotionEditor({ content, onChange, placeholder, editable = true }: NotionEditorProps) {
  const [showCommands, setShowCommands] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const [commandPosition, setCommandPosition] = useState({ top: 0, left: 0 });
  const editorRef = useRef<HTMLDivElement>(null);
  const commandsRef = useRef<HTMLDivElement>(null);

  // Filter commands based on search query
  const filteredCommands = EDITOR_COMMANDS.filter(cmd =>
    cmd.label.toLowerCase().includes(commandQuery.toLowerCase()) ||
    cmd.description.toLowerCase().includes(commandQuery.toLowerCase()) ||
    cmd.keywords.some(keyword => keyword.toLowerCase().includes(commandQuery.toLowerCase()))
  );

  // Handle key events for command menu
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '/' && editorRef.current) {
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        
        setCommandPosition({
          top: rect.bottom + window.scrollY + 5,
          left: rect.left + window.scrollX
        });
        setCommandQuery('');
        setShowCommands(true);
      }
    } else if (e.key === 'Escape') {
      setShowCommands(false);
    }
  };

  // Handle input changes
  const handleInput = () => {
    if (editorRef.current) {
      const newContent = editorRef.current.innerHTML;
      onChange(newContent);
      
      // Check for command trigger
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const text = range.startContainer.textContent || '';
        const cursorPos = range.startOffset;
        
        // Look for '/' followed by text
        const beforeCursor = text.slice(0, cursorPos);
        const lastSlashIndex = beforeCursor.lastIndexOf('/');
        
        if (lastSlashIndex !== -1 && lastSlashIndex === cursorPos - commandQuery.length - 1) {
          const query = beforeCursor.slice(lastSlashIndex + 1);
          setCommandQuery(query);
        }
      }
    }
  };

  // Execute command
  const executeCommand = (command: EditorCommand) => {
    if (editorRef.current) {
      // Remove the / and query text
      const selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0);
        const textNode = range.startContainer;
        if (textNode && textNode.nodeType === Node.TEXT_NODE) {
          const text = textNode.textContent || '';
          const cursorPos = range.startOffset;
          const beforeCursor = text.slice(0, cursorPos);
          const lastSlashIndex = beforeCursor.lastIndexOf('/');
          
          if (lastSlashIndex !== -1) {
            range.setStart(textNode, lastSlashIndex);
            range.setEnd(textNode, cursorPos);
            range.deleteContents();
          }
        }
      }
      
      command.action(editorRef.current);
      handleInput();
    }
    setShowCommands(false);
  };

  // Set initial content
  useEffect(() => {
    if (editorRef.current && content) {
      editorRef.current.innerHTML = content;
    }
  }, [content]);

  // Handle clicks outside command menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (commandsRef.current && !commandsRef.current.contains(event.target as Node)) {
        setShowCommands(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <div
        ref={editorRef}
        contentEditable={editable}
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        className={`min-h-[400px] p-4 prose prose-lg max-w-none focus:outline-none ${
          editable ? 'cursor-text' : 'cursor-default'
        }`}
        style={{ 
          lineHeight: '1.6',
          fontSize: '16px',
          color: '#374151'
        }}
        data-placeholder={placeholder}
        suppressContentEditableWarning={true}
      />

      {/* Command Menu */}
      {showCommands && (
        <div
          ref={commandsRef}
          className="absolute z-50 w-80 bg-white border border-gray-200 rounded-lg shadow-lg"
          style={{
            top: commandPosition.top,
            left: commandPosition.left,
          }}
        >
          <div className="p-2 border-b border-gray-100">
            <div className="text-xs text-gray-500 px-2 py-1">
              Type to filter, ↑↓ to navigate, ↵ to select
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {filteredCommands.slice(0, 10).map((command, index) => (
              <button
                key={command.id}
                onClick={() => executeCommand(command)}
                className="w-full flex items-center gap-3 px-3 py-2 hover:bg-gray-50 text-left transition-colors"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded">
                  {command.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 text-sm">
                    {command.label}
                  </div>
                  <div className="text-gray-500 text-xs truncate">
                    {command.description}
                  </div>
                </div>
              </button>
            ))}
            {filteredCommands.length === 0 && (
              <div className="px-3 py-6 text-center text-gray-500 text-sm">
                No commands found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}