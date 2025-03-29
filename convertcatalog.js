const fs = require('fs');

function convertCatalogToObjects(filePath) {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Remove table break markers
    const cleanContent = fileContent.replace(/---TABLE_BREAK---/g, '');
    
    // Split into lines and remove empty lines
    const lines = cleanContent.split('\n').filter(line => line.trim());
    
    // Identify header pattern (Ref. Mig, Descrição do produto, etc.)
    const headerPattern = /^Ref\.\s*Mig\s*\t\s*Descrição\s*do\s*produto/;
    
    // Filter out header lines and keep only product lines
    const productLines = lines.filter(line => !headerPattern.test(line));
    
    // Convert each line into an object
    const products = productLines.map(line => {
        // Split the line by tabs
        const [ref, description, size, colors, price, discount] = line.split('\t');
        
        return {
            ref: ref.trim(),
            description: description.trim(),
            size: size.trim(),
            colors: colors.trim(),
            price: parseFloat(price.trim()),
            discount: parseFloat(discount.trim())
        };
    });
    
    return products;
}

// Example usage:
const products = convertCatalogToObjects('tabela_dados.txt');
console.log(JSON.stringify(products, null, 2));

// Optionally save to a new file
fs.writeFileSync(
    'catalog.js',
    `const catalog = ${JSON.stringify(products, null, 2)};`
); 