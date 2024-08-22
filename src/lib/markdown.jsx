import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import parse from 'remark-parse';

export async function getMarkdownContent(filename) {
  const filePath = path.join(process.cwd(), 'content', filename);
  const fileContents = fs.readFileSync(filePath, 'utf8');

  const processedContent = await remark()
    .use(parse)
    .process(fileContents);
  
  return processedContent.toString();
}
