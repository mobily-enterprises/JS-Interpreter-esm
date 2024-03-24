const fs = require('fs');

const originalFilePath = 'JS-Interpreter.js';
const newFilePath = 'JS-Interpreter-esm.js';
const contentToAddBefore = '// Your content to add before\n';

// Read the original file content
const originalContent = fs.readFileSync(originalFilePath, 'utf8');

// Find the index of the line to insert before
const insertionIndex = originalContent.indexOf('(function (root, factory) {');

if (insertionIndex !== -1) {
    // Insert the content before the line
    const newContent = originalContent.slice(0, insertionIndex) + contentToAddBefore + originalContent.slice(insertionIndex);

    // Write the new content to the new file
    fs.writeFileSync(newFilePath, newContent);
} else {
    console.error('Line not found');
}
