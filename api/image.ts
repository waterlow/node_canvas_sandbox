import path from 'path';
import { createCanvas, registerFont } from 'canvas';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  const { name = '宮本哲', company = '住三商事株式会社', email = 'miyamoto@example.com' } = req.query;
  const filePath = path.join(process.cwd(), '/api/NotoSansJP-Bold.otf');
  registerFont(filePath, { family: 'NotoSansJP' });
  const width = 600;
  const height = 381;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#008b8b";
  context.fillRect(0, 0, width, height);

  context.fillStyle = "#fff";
  context.font = "bold 20pt 'NotoSansJP'";
  context.fillText(Array.isArray(company) ? company[0] : company, 20, 120);
  context.font = "bold 40pt 'NotoSansJP'";
  context.fillText(Array.isArray(name) ? name[0] : name, 20, 200);
  context.font = "bold 20pt 'NotoSansJP'";
  context.fillText(Array.isArray(email) ? email[0] : email, 20, 270);

  res.setHeader('Content-Type', 'image/jpeg');
  const buffer = canvas.toBuffer("image/png");
  res.send(buffer);
}
