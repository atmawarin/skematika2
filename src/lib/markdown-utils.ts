/**
 * Simple markdown to HTML converter
 * Supports basic markdown elements commonly used in blueprints
 */

export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Convert bold and italic
  html = html.replace(/\*\*\*(.*)\*\*\*/gim, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/\*(.*)\*/gim, '<em>$1</em>');

  // Convert lists
  const lines = html.split('\n');
  let inList = false;
  let listType = '';
  const processedLines: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmedLine = line.trim();

    // Check for bullet list items
    if (trimmedLine.match(/^- /)) {
      if (!inList || listType !== 'ul') {
        if (inList) {
          processedLines.push(`</${listType}>`);
        }
        processedLines.push('<ul>');
        inList = true;
        listType = 'ul';
      }
      processedLines.push(`<li>${trimmedLine.substring(2)}</li>`);
    }
    // Check for numbered list items
    else if (trimmedLine.match(/^\d+\. /)) {
      if (!inList || listType !== 'ol') {
        if (inList) {
          processedLines.push(`</${listType}>`);
        }
        processedLines.push('<ol>');
        inList = true;
        listType = 'ol';
      }
      const content = trimmedLine.replace(/^\d+\. /, '');
      processedLines.push(`<li>${content}</li>`);
    }
    // Not a list item
    else {
      if (inList) {
        processedLines.push(`</${listType}>`);
        inList = false;
        listType = '';
      }
      
      // Convert paragraphs (non-empty lines that aren't headers)
      if (trimmedLine && !trimmedLine.match(/^<h[1-6]>/)) {
        processedLines.push(`<p>${line}</p>`);
      } else {
        processedLines.push(line);
      }
    }
  }

  // Close any open list
  if (inList) {
    processedLines.push(`</${listType}>`);
  }

  html = processedLines.join('\n');

  // Convert line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  
  // Clean up extra paragraph tags
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/<p>(<h[1-6]>.*<\/h[1-6]>)<\/p>/g, '$1');
  html = html.replace(/<p>(<ul>|<ol>|<\/ul>|<\/ol>)<\/p>/g, '$1');
  html = html.replace(/<p>(<li>.*<\/li>)<\/p>/g, '$1');

  return html.trim();
}

/**
 * Convert HTML back to markdown (for editing)
 */
export function htmlToMarkdown(html: string): string {
  let markdown = html;

  // Convert headers
  markdown = markdown.replace(/<h1>(.*?)<\/h1>/gi, '# $1\n\n');
  markdown = markdown.replace(/<h2>(.*?)<\/h2>/gi, '## $1\n\n');
  markdown = markdown.replace(/<h3>(.*?)<\/h3>/gi, '### $1\n\n');

  // Convert bold and italic
  markdown = markdown.replace(/<strong><em>(.*?)<\/em><\/strong>/gi, '***$1***');
  markdown = markdown.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  markdown = markdown.replace(/<em>(.*?)<\/em>/gi, '*$1*');

  // Convert lists
  markdown = markdown.replace(/<ul>/gi, '');
  markdown = markdown.replace(/<\/ul>/gi, '\n');
  markdown = markdown.replace(/<ol>/gi, '');
  markdown = markdown.replace(/<\/ol>/gi, '\n');
  markdown = markdown.replace(/<li>(.*?)<\/li>/gi, '- $1\n');

  // Convert paragraphs
  markdown = markdown.replace(/<p>(.*?)<\/p>/gi, '$1\n\n');

  // Clean up extra newlines
  markdown = markdown.replace(/\n{3,}/g, '\n\n');

  return markdown.trim();
}