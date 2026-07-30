type MarkdownContentProps = { content: string };

// A focused renderer for portfolio write-ups: headings, paragraphs, and unordered lists.
export const MarkdownContent = ({ content }: MarkdownContentProps) => {
  const lines = content.trim().split("\n");
  const elements: JSX.Element[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }
    if (line.startsWith("# ")) { elements.push(<h1 key={index}>{line.slice(2)}</h1>); index += 1; continue; }
    if (line.startsWith("## ")) { elements.push(<h2 key={index}>{line.slice(3)}</h2>); index += 1; continue; }
    if (line.startsWith("- ")) {
      const list: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith("- ")) {
        list.push(lines[index].trim().slice(2)); index += 1;
      }
      elements.push(<ul key={index}>{list.map((item) => <li key={item}>{item}</li>)}</ul>);
      continue;
    }
    elements.push(<p key={index}>{line}</p>);
    index += 1;
  }
  return <div className="markdown-content">{elements}</div>;
};
