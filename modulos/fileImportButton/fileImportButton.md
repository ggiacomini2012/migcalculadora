# Módulo de Botão para Importação de Arquivos

Este módulo JavaScript permite adicionar facilmente um botão para importação de arquivos de texto em qualquer projeto web. Uma vez que o usuário seleciona um arquivo, o conteúdo é exibido no console e pode ser manipulado através de um callback personalizado.

## Características

- Módulo reutilizável para qualquer projeto web
- Totalmente personalizável (texto, cores, classes)
- Suporta filtros de tipos de arquivo
- Exibe o conteúdo no console automaticamente
- Suporta callback personalizado para processamento adicional
- Compatível com sistemas de módulos e uso direto no navegador
- **Novo**: Funcionalidade integrada para converter tabelas de catálogo em objetos JavaScript

## Como Usar

### Básico

```html
<!-- Incluir o script -->
<script src="fileImportButton.js"></script>

<!-- Definir um elemento container -->
<div id="meu-container"></div>

<script>
  // Criar o botão no container
  createFileImportButton('meu-container');
</script>
```

### Personalizado

```html
<script src="fileImportButton.js"></script>

<div id="meu-container"></div>

<script>
  createFileImportButton('meu-container', {
    buttonText: 'Selecionar arquivo TXT',
    buttonClass: 'minha-classe-css',
    accept: '.txt,.csv',
    onFileLoaded: function(content) {
      // Fazer algo com o conteúdo
      processarArquivo(content);
    }
  });
</script>
```

### Importação de Catálogo

```html
<script src="fileImportButton.js"></script>

<div id="meu-container"></div>

<script>
  // Usar o botão específico para importação de catálogo
  createCatalogImportButton('meu-container', {
    buttonText: 'Importar Catálogo',
    buttonClass: 'btn-catalog',
    onFileLoaded: function(products, catalogCode) {
      // products contém o array de objetos do catálogo
      console.log('Total de produtos:', products.length);
      
      // catalogCode contém o código JavaScript para salvar em um arquivo
      // Você pode mostrar na tela, copiar para o clipboard, etc.
      document.getElementById('catalog-code').textContent = catalogCode;
      
      // O catálogo também está disponível globalmente
      console.log(window.catalog);
    }
  });
</script>
```

## API

### `createFileImportButton(container, options)`

Cria e adiciona um botão de importação de arquivos ao elemento especificado.

#### Parâmetros

- `container` (String|HTMLElement): ID do elemento ou elemento HTML onde o botão será adicionado
- `options` (Object, opcional): Opções de configuração

#### Opções

| Opção | Tipo | Padrão | Descrição |
|-------|------|--------|-----------|
| `buttonText` | String | "Importar arquivo" | Texto exibido no botão |
| `buttonClass` | String | "" | Classes CSS adicionais para o botão |
| `accept` | String | ".txt" | Tipos de arquivo aceitos (ex: ".txt,.csv") |
| `mode` | String | "raw" | Modo de processamento: "raw" ou "catalog" |
| `onFileLoaded` | Function | null | Callback chamado após o carregamento do arquivo |

#### Retorno

- `HTMLElement`: O botão criado

### `createCatalogImportButton(container, options)`

Cria um botão específico para importação de arquivos de catálogo. Este é um atalho para `createFileImportButton` com `mode: "catalog"`.

#### Parâmetros

- `container` (String|HTMLElement): ID do elemento ou elemento HTML onde o botão será adicionado
- `options` (Object, opcional): Mesmas opções de `createFileImportButton`, exceto `mode` que é sempre "catalog"

#### Callback onFileLoaded

Quando usado no modo "catalog", o callback `onFileLoaded` recebe dois parâmetros:
- `products` (Array): Array de objetos do catálogo processado
- `catalogCode` (String): Código JavaScript para salvar em um arquivo catalog.js

### `convertCatalogToObjects(fileContent)`

Converte o conteúdo de uma tabela de catálogo para um array de objetos.

#### Parâmetros

- `fileContent` (String): Conteúdo do arquivo de tabela

#### Retorno

- `Array`: Array de objetos com os produtos do catálogo

## Exemplo de Uso do Importador de Catálogo

```javascript
createCatalogImportButton('importador', {
  onFileLoaded: function(products, catalogCode) {
    // Exibir estatísticas
    console.log(`Catálogo importado: ${products.length} produtos`);
    
    // Calcular total de produtos por categoria
    const categorias = {};
    products.forEach(produto => {
      const prefixo = produto.ref.substring(0, 3);
      categorias[prefixo] = (categorias[prefixo] || 0) + 1;
    });
    
    console.log('Produtos por categoria:', categorias);
    
    // Salvar catálogo na localStorage
    localStorage.setItem('catalog', JSON.stringify(products));
  }
});
```

## Compatibilidade

Funciona em todos os navegadores modernos com suporte a ES6 e FileReader API:

- Chrome 49+
- Firefox 45+
- Safari 10+
- Edge 12+
- Opera 36+

## Limitações

- Não suporta carregamento de múltiplos arquivos
- Não processa arquivos binários
- Não tem suporte integrado para arrastar e soltar arquivos 