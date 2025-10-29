const visualEditor = document.getElementById("visual-editor");
const htmlPreview = document.getElementById("html-preview");

visualEditor.addEventListener("input", updatePreview);

function updatePreview() {
  let text = visualEditor.value;

  text = text.replace(/^### (.*)$/gm, "<h3>$1</h3>");
  text = text.replace(/^## (.*)$/gm, "<h2>$1</h2>");
  text = text.replace(/^# (.*)$/gm, "<h1>$1</h1>");

  text = text.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  text = text.replace(/\*(.*?)\*/g, "<i>$1</i>");

  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

  text = text.replace(/^> (.*)$/gm, "<blockquote><p>$1</p></blockquote>");

  text = text.replace(/^\*\*\*$/gm, "<hr>");

  text = text.replace(/^\d+\.\s+(.*)$/gm, "<ol><li>$1</li></ol>");

  text = text.replace(/^\*\s+(.*)$/gm, "<ul><li>$1</li></ul>");

  text = text.replace(/\n{2,}/g, "<br><br>");

  htmlPreview.innerHTML = text;
}

visualEditor.value = `# Welcome
## Subtitle
### Small Header

**bold text** and *italic text*

[text link](https://example.com)

![alt text](/public/img/example.jpg)

> a quoted line

1. First
2. Second

* Bullet
* Another

***

skipping a line

end.
`;
updatePreview();
