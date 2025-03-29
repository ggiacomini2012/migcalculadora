# Módulo de Botão para Importação de Arquivos

Este módulo JavaScript permite adicionar facilmente um botão para importação de arquivos de texto em qualquer projeto web. Uma vez que o usuário seleciona um arquivo, o conteúdo é exibido no console e pode ser manipulado através de um callback personalizado.

## Características

- Módulo reutilizável para qualquer projeto web
- Totalmente personalizável (texto, cores, classes)
- Suporta filtros de tipos de arquivo
- Exibe o conteúdo no console automaticamente
- Suporta callback personalizado para processamento adicional
- Compatível com sistemas de módulos e uso direto no navegador

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
| `onFileLoaded` | Function | null | Callback chamado após o carregamento do arquivo |

#### Retorno

- `HTMLElement`: O botão criado

## Exemplos de Uso

### Importar e Exibir Conteúdo

```javascript
createFileImportButton('container', {
  onFileLoaded: function(content) {
    document.getElementById('output').textContent = content;
  }
});
```

### Processar CSV

```javascript
createFileImportButton('container', {
  buttonText: 'Importar CSV',
  accept: '.csv',
  onFileLoaded: function(content) {
    const lines = content.split('\n');
    const data = lines.map(line => line.split(','));
    createTable(data); // Função personalizada para criar tabela
  }
});
```

### Botão Estilizado

```javascript
createFileImportButton('container', {
  buttonText: 'Carregar Arquivo',
  buttonClass: 'btn btn-primary custom-class',
  accept: '.txt,.json'
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