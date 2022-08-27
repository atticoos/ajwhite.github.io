import fs from 'fs';

export function getPosts() {
  const files = fs.readdirSync(process.cwd() + '/src/pages/blog');
  return files.filter(file => file.endsWith('.mdx'));
}
