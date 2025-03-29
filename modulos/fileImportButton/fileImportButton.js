/**
 * Módulo de botão para importação de arquivos de texto
 * Este módulo cria um botão HTML que permite importar arquivos de texto
 * e exibe o conteúdo no console.
 */

/**
 * Converte o conteúdo de uma tabela de catálogo para um array de objetos
 * @param {string} fileContent - Conteúdo do arquivo de tabela
 * @returns {Array} Array de objetos com os produtos do catálogo
 */
function convertCatalogToObjects(fileContent) {
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

/**
 * Cria e adiciona um botão de importação de arquivos ao elemento especificado
 * @param {string|HTMLElement} container - ID do elemento ou elemento HTML onde o botão será adicionado
 * @param {Object} options - Opções de configuração
 * @param {string} [options.buttonText="Importar arquivo"] - Texto do botão
 * @param {string} [options.buttonClass=""] - Classes CSS adicionais para o botão
 * @param {string} [options.accept=".txt"] - Tipos de arquivo aceitos
 * @param {string} [options.mode="raw"] - Modo de processamento: "raw" ou "catalog"
 * @param {Function} [options.onFileLoaded] - Callback executado após carregar o arquivo (recebe o conteúdo como parâmetro)
 * @returns {HTMLElement} O botão criado
 */
function createFileImportButton(container, options = {}) {
  // Opções padrão
  const defaultOptions = {
    buttonText: "Importar arquivo",
    buttonClass: "",
    accept: ".txt",
    mode: "raw", // Pode ser "raw" ou "catalog"
    onFileLoaded: null
  };
  
  // Mesclar opções padrão com as fornecidas
  const config = { ...defaultOptions, ...options };
  
  // Encontrar o elemento container
  const targetContainer = typeof container === 'string' 
    ? document.getElementById(container) 
    : container;
  
  if (!targetContainer) {
    console.error(`Container "${container}" não encontrado`);
    return null;
  }
  
  // Criar o elemento de input de arquivo (oculto)
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.accept = config.accept;
  fileInput.style.display = 'none';
  
  // Criar o botão visível
  const button = document.createElement('button');
  button.textContent = config.buttonText;
  button.className = config.buttonClass;
  
  // Adicionar evento de clique ao botão
  button.addEventListener('click', () => {
    fileInput.click();
  });
  
  // Adicionar evento de mudança ao input de arquivo
  fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (!file) return;
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const content = e.target.result;
      
      if (config.mode === "catalog") {
        try {
          // Processar o conteúdo como um catálogo
          const products = convertCatalogToObjects(content);
          
          // Exibir o catálogo processado no console
          console.log('Catálogo processado:', products);
          console.log('Número de produtos:', products.length);
          
          // Criar variável global catalog
          window.catalog = products;
          
          // Gerar código para arquivo catalog.js
          const catalogCode = `const catalog = ${JSON.stringify(products, null, 2)};`;
          console.log('Código para catalog.js gerado. Copie o seguinte código ou use o objeto window.catalog:');
          console.log(catalogCode);
          
          // Chamar o callback personalizado, se fornecido
          if (typeof config.onFileLoaded === 'function') {
            config.onFileLoaded(products, catalogCode);
          }
        } catch (error) {
          console.error('Erro ao processar o catálogo:', error);
        }
      } else {
        // Modo padrão - exibir o conteúdo bruto
        console.log('Conteúdo do arquivo:', content);
        
        // Chamar o callback personalizado, se fornecido
        if (typeof config.onFileLoaded === 'function') {
          config.onFileLoaded(content);
        }
      }
      
      // Limpar o input para permitir selecionar o mesmo arquivo novamente
      fileInput.value = '';
    };
    
    reader.onerror = () => {
      console.error('Erro ao ler o arquivo');
      fileInput.value = '';
    };
    
    reader.readAsText(file);
  });
  
  // Adicionar elementos ao container
  targetContainer.appendChild(fileInput);
  targetContainer.appendChild(button);
  
  // Retornar o botão para permitir personalização adicional
  return button;
}

/**
 * Cria um botão específico para importação de catálogo
 * @param {string|HTMLElement} container - ID do elemento ou elemento HTML onde o botão será adicionado
 * @param {Object} options - Opções de configuração (mesmo que createFileImportButton)
 * @returns {HTMLElement} O botão criado
 */
function createCatalogImportButton(container, options = {}) {
  const catalogOptions = {
    buttonText: options.buttonText || "Importar Catálogo",
    buttonClass: options.buttonClass || "",
    accept: options.accept || ".txt",
    mode: "catalog",
    onFileLoaded: options.onFileLoaded
  };
  
  return createFileImportButton(container, catalogOptions);
}

// Exportar as funções para uso com módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    createFileImportButton,
    createCatalogImportButton,
    convertCatalogToObjects
  };
} else {
  // Para uso em navegadores sem sistema de módulos
  window.createFileImportButton = createFileImportButton;
  window.createCatalogImportButton = createCatalogImportButton;
  window.convertCatalogToObjects = convertCatalogToObjects;
} 