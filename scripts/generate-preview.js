const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

async function createPreview() {
    const inputPath = path.join(__dirname, '../public/Book/The Power of Ignoring Everyone.pdf');
    const outputPath = path.join(__dirname, '../public/Book/preview.pdf');

    try {
        const existingPdfBytes = fs.readFileSync(inputPath);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        const previewDoc = await PDFDocument.create();

        // Copy first 5 pages (index 0 to 4)
        // If the book has fewer than 5 pages, it will copy all of them.
        const pageCount = pdfDoc.getPageCount();
        const pagesToCopy = Math.min(pageCount, 5);

        const copiedPages = await previewDoc.copyPages(pdfDoc, Array.from({length: pagesToCopy}, (_, i) => i));
        copiedPages.forEach((page) => previewDoc.addPage(page));

        const pdfBytes = await previewDoc.save();
        fs.writeFileSync(outputPath, pdfBytes);
        console.log(`Preview PDF created successfully with ${pagesToCopy} pages at ${outputPath}`);
    } catch (error) {
        console.error('Error creating preview PDF:', error);
        process.exit(1);
    }
}

createPreview();
