'use client';

import { EditorRoot, EditorContent, StarterKit, Command } from 'novel';
import { useState, useEffect } from 'react';

interface NotionEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  editable?: boolean;
}


export function NotionEditor({ content, onChange, placeholder = "Type '/' for commands...", editable = true }: NotionEditorProps) {
  const [initialContent, setInitialContent] = useState(content);

  useEffect(() => {
    setInitialContent(content);
  }, [content]);

  return (
    <div className="relative">
      <EditorRoot>
        <EditorContent
          className="min-h-[400px] prose prose-lg max-w-none focus:outline-none"
          editable={editable}
          initialContent={initialContent}
          immediatelyRender={false}
          extensions={[StarterKit]}
          editorProps={{
            attributes: {
              class: 'prose prose-lg focus:outline-none max-w-full min-h-[400px] p-4',
            },
          }}
          onUpdate={({ editor }) => {
            onChange(editor.getHTML());
          }}
        />
      </EditorRoot>
    </div>
  );
}