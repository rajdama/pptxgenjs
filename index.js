import pptxgen from "pptxgenjs";
import { slide8back } from "./base64.js";

let jsonData = {
  title: "Creating Presentation with AI",
  points: [
    "AI can automate repetitive and mundane tasks, increasing efficiency and freeing up human workers for more complex activities ",
    "AI can automate repetitive and mundane tasks, increasing efficiency and freeing up human workers for more complex activities",
    "AI can automate repetitive and mundane tasks, increasing efficiency and freeing up human workers for more complex activities",
    "AI can automate repetitive and mundane tasks, increasing efficiency and freeing up human workers for more complex activities",
  ],
};

let dataChartAreaLine = [
  {
    name: "Actual Sales",
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    values: [
      1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123,
      15121,
    ],
  },
];

let pptx = new pptxgen();

let Slide = pptx.addSlide();

Slide.addImage({
  data: slide8back(),
  x: "0%",
  y: "0%",
  w: "100%",
  h: "100%",
});
Slide.addText(jsonData.title, {
  x: "6%",
  y: "26%",
  h: 0.3,
  fontSize: 23,
  color: "#000000",
  w: "43%",
  bold: true,
  fontFace: "Plus Jakarta Sans",
  valign: "bottom",
  lineSpacing: 35,
});

// Bar Graph
Slide.addChart(pptx.ChartType.bar, dataChartAreaLine, {
  x: 5,
  y: 1,
  w: 4,
  h: 4,
  chartColors: ["#0000FF"],
});
// Slide.addImage({
//   path: jsonData.image,
//   x: "65%",
//   y: "20%",
//   w: "27%",
//   h: "60%",
// });
const slideData1 = [
  {
    text: jsonData.points[0],
    options: { bullet: { type: "number" }, indentLevel: 0, paraSpaceAfter: 10 },
  },
  {
    text: jsonData.points[1],
    options: { bullet: { type: "number" }, indentLevel: 0, paraSpaceAfter: 10 },
  },
  {
    text: jsonData.points[2],
    options: { bullet: { type: "number" }, indentLevel: 0, paraSpaceAfter: 10 },
  },
  {
    text: jsonData.points[3],
    options: { bullet: { type: "number" }, indentLevel: 0, paraSpaceAfter: 10 },
  },
];
Slide.addText(slideData1, {
  color: "#000000",
  fontSize: 10,
  lineSpacing: 14,
  x: "6%",
  y: "35%",
  valign: "top",
  fontFace: "Plus Jakarta Sans Light",
  h: 3,
  w: "45%",
});

pptx.writeFile();
