import path from 'path';
import fs from 'fs';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  const filePath = path.join(process.cwd(), `/api/150.jpeg`);
  const imageBuffer = fs.readFileSync(filePath);
  res.setHeader('Content-Type', 'image/jpeg');
  res.send(imageBuffer);
}
