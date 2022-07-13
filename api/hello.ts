import path from 'path';
import { createCanvas, registerFont } from 'canvas';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  const filePath = path.join(process.cwd(), '/api/NotoSansJP-Bold.otf');
  registerFont(filePath, { family: 'NotoSansJP' });
  const width = 600;
  const height = 381;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#764abc";
  context.fillRect(0, 0, width, height);

  context.font = "bold 40pt 'NotoSansJP'";
  context.textAlign = "center";
  context.fillStyle = "#fff";
  context.fillText('宮本哲', 300, 200);

  res.setHeader('Content-Type', 'image/jpeg');
  const buffer = canvas.toBuffer("image/png");
  res.send(buffer);
}
