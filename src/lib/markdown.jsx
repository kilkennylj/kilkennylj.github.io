import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import parse from 'remark-parse';

export async function getMarkdownContent(filename) {
  const filePath = path.join(process.cwd(), 'public/assets', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const processedContent = await remark()
    .use(parse)
    .process(fileContents);

  const processedText = processedContent.toString().split('##').filter(Boolean).map(content => '##' + content.trim());

  return processedText;
}
