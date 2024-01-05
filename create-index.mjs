import { promises as fs } from 'node:fs';
import * as path from 'node:path';

const generateIndexFile = async () => {
  try {
    // Use process.argv to get command line arguments
    const [, , svgFolderPath, iconsIndexPath] = process.argv;

    // Resolve paths
    const cwd = process.cwd();
    const resolvedSvgFolderPath = path.join(cwd, svgFolderPath);
    const resolvedIconsIndexPath = path.join(cwd, iconsIndexPath);

    // Read all SVG files in the folder (asynchronously)
    const svgFiles = await fs.readdir(resolvedSvgFolderPath);
    const filteredSvgFiles = svgFiles.filter(file => file.endsWith('.svg'));
    // Generate import and export statements
    const importStatements = filteredSvgFiles.map(file => {
      const itemName = file.replace('.svg', '');
      const relativePath = path.relative(path.dirname(resolvedIconsIndexPath), path.join(resolvedSvgFolderPath, file)).replace(/\\/g, '/');
      const imagePath = path.join('/images/icons', relativePath).replace(/\\/g, '/');
      return `const ${itemName} = '${imagePath}';`;
    });
    // const importStatements = filteredSvgFiles.map(file => `const ${file.replace('.svg', '')} = '${path.relative(process.cwd(), path.join(resolvedSvgFolderPath, file)).replace(/\\/g, '/')}';`);
    const exportStatements = filteredSvgFiles.map(file => `${file.replace('.svg', '')},`);
    // Write the generated code to the file
    const code = [
      ...importStatements,
      '',
      'export default {',
      ...exportStatements,
      '};',
    ].join('\n');

    await fs.writeFile(resolvedIconsIndexPath, code, 'utf-8');
    console.log('Index file generated successfully.');
  } catch (error) {
    console.error('Error generating index file:', error);
  }
};

generateIndexFile();
