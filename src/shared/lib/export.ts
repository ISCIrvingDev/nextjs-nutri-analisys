import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { MealAnalysisResponse } from "@/shared/models/meal-analysis.models";
import { Language, translations } from "./i18n";

export function exportToExcel(data: MealAnalysisResponse, language: Language) {
  const t = translations[language].results;
  const { output } = data;

  const foodData = output.food.map((item) => ({
    [t.name]: item.name,
    [t.quantity]: item.quantity,
    [t.calories]: item.calories,
    [t.protein]: item.protein,
    [t.carbs]: item.carbs,
    [t.fat]: item.fat,
    [t.fiber]: item.fiber,
  }));

  const totalsData = [
    {
      [t.name]: "TOTAL",
      [t.calories]: output.total.calories,
      [t.protein]: output.total.protein,
      [t.carbs]: output.total.carbs,
      [t.fat]: output.total.fat,
      [t.fiber]: output.total.fiber,
    },
  ];

  const wb = XLSX.utils.book_new();

  const ws1 = XLSX.utils.json_to_sheet(foodData);
  XLSX.utils.book_append_sheet(wb, ws1, "Food Items");

  const ws2 = XLSX.utils.json_to_sheet(totalsData);
  XLSX.utils.book_append_sheet(wb, ws2, "Totals");

  XLSX.writeFile(wb, `nutri-analysis-${Date.now()}.xlsx`);
}

export function exportToPDF(data: MealAnalysisResponse, language: Language) {
  const t = translations[language].results;
  const { output } = data;

  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.setTextColor(46, 172, 63);
  doc.text("Nutri Analysis", 14, 20);

  doc.setFontSize(12);
  doc.setTextColor(30, 30, 30);
  doc.text(t.summary, 14, 30);

  doc.setFontSize(10);
  doc.setTextColor(85, 85, 85);
  const summaryLines = doc.splitTextToSize(output.summary, 180);
  doc.text(summaryLines, 14, 38);

  const foodRows = output.food.map((item) => [
    item.name,
    item.quantity,
    item.calories,
    item.protein,
    item.carbs,
    item.fat,
  ]);

  autoTable(doc, {
    head: [[t.name, t.quantity, t.calories, t.protein, t.carbs, t.fat]],
    body: foodRows,
    startY: 38 + summaryLines.length * 5 + 10,
    theme: "grid",
    headStyles: {
      fillColor: [46, 172, 63],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const finalY = (doc as any).lastAutoTable.finalY + 10;

  autoTable(doc, {
    head: [[t.totals]],
    body: [
      [t.calories, output.total.calories],
      [t.protein, output.total.protein],
      [t.carbs, output.total.carbs],
      [t.fat, output.total.fat],
      [t.fiber, output.total.fiber],
    ],
    startY: finalY,
    theme: "grid",
    headStyles: {
      fillColor: [29, 126, 43],
      textColor: [255, 255, 255],
      fontStyle: "bold",
    },
  });

  doc.save(`nutri-analysis-${Date.now()}.pdf`);
}
