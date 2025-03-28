const fs = require('fs');

function convertCatalogToObjects(filePath) {
    // Read the file content
    const fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Split the content by table breaks and get the first table (women's clothing)
    const tables = fileContent.split('---TABLE_BREAK---');
    const mainTable = tables[0];
    
    // Split into lines and remove empty lines
    const lines = mainTable.split('\n').filter(line => line.trim());
    
    // Remove the header line
    lines.shift();
    
    // Convert each line into an object
    const products = lines.map(line => {
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