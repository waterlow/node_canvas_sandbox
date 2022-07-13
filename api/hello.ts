// import path from 'path';
// import fs from 'fs';
import { createCanvas } from 'canvas';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  // const filePath = path.join(process.cwd(), `/api/150.jpeg`);
  // const imageBuffer = fs.readFileSync(filePath);
  const width = 1200;
  const height = 627;

  // Add post object with the content to render
  const post = {
    title: "Draw and save images with Canvas and Node"
  }

  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  context.fillStyle = "#764abc";
  context.fillRect(0, 0, width, height);

  // Set the style of the test and render it to the canvas
  context.font = "bold 70pt 'PT Sans'";
  context.textAlign = "center";
  context.fillStyle = "#fff";
  // 600 is the x value (the center of the image)
  // 170 is the y (the top of the line of text)
  context.fillText(post.title, 600, 170);

  const buffer = canvas.toBuffer("image/png");

  res.setHeader('Content-Type', 'image/jpeg');
  res.send(buffer);
}
