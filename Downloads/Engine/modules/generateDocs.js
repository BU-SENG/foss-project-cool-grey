// modules/generateDocs.js
const fs = require('fs');
const path = require('path');

/**
 * Generates a Markdown document for all portfolio entries in formData.json
 * @param {string} outputFile - the output Markdown file path
 */
function generateMarkdown(outputFile) {
  const dataPath = path.join(__dirname, '../formData.json');

  // Read JSON data
  const rawData = fs.readFileSync(dataPath, 'utf8');
  const portfolios = JSON.parse(rawData);

  let mdContent = '# Portfolios\n\n';

  portfolios.forEach((p) => {
    mdContent += `## ${p.name} (ID: ${p.id})\n\n`;
    mdContent += `**Bio:** ${p.bio}\n\n`;
    mdContent += `**Email:** ${p.email}\n\n`;
    mdContent += `**GitHub:** ${p.github}\n\n`;
    mdContent += `**Skills:** ${p.skills.join(', ')}\n\n`;
    mdContent += `**Projects:**\n`;
    p.projects.forEach((proj, index) => {
      mdContent += `${index + 1}. ${proj}\n`;
    });
    mdContent += '\n---\n\n';
  });

  // Write to output file
  fs.writeFileSync(outputFile, mdContent, 'utf8');
  console.log(`Markdown document generated at ${outputFile}`);
}

module.exports = { generateMarkdown };
