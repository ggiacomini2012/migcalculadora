/**
 * Módulo de botão para importação de arquivos de texto
 * Este módulo cria um botão HTML que permite importar arquivos de texto
 * e exibe o conteúdo no console.
 */

/**
 * Cria e adiciona um botão de importação de arquivos ao elemento especificado
 * @param {string|HTMLElement} container - ID do elemento ou elemento HTML onde o botão será adicionado
 * @param {Object} options - Opções de configuração
 * @param {string} [options.buttonText="Importar arquivo"] - Texto do botão
 * @param {string} [options.buttonClass=""] - Classes CSS adicionais para o botão
 * @param {string} [options.accept=".txt"] - Tipos de arquivo aceitos
 * @param {Function} [options.onFileLoaded] - Callback executado após carregar o arquivo (recebe o conteúdo como parâmetro)
 * @returns {HTMLElement} O botão criado
 */
function createFileImportButton(container, options = {}) {
  // Opções padrão
  const defaultOptions = {
    buttonText: "Importar arquivo",
    buttonClass: "",
    accept: ".txt",
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
      
      // Exibir o conteúdo no console
      console.log('Conteúdo do arquivo:', content);
      
      // Chamar o callback personalizado, se fornecido
      if (typeof config.onFileLoaded === 'function') {
        config.onFileLoaded(content);
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

// Exportar a função para uso com módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createFileImportButton };
} else {
  // Para uso em navegadores sem sistema de módulos
  window.createFileImportButton = createFileImportButton;
} 