import fs from 'fs';

export default function handler(req, res) {
  const files = fs.readdirSync('../blog');
  console.log(files);

}
