# MIG Calculadora

Uma calculadora de descontos para gerenciamento de vendas e promoções.

## Funcionalidades

- Cálculo de descontos em produtos
- Aplicação de cashback
- Registro de vendas com dados do cliente
- Pesquisa de registros por CPF, nome, data ou ID de produto
- Gestão de produtos com preços e descontos

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Armazenamento local (localStorage)

## Como usar

1. Adicione informações do cliente (CPF, nome, WhatsApp, aniversário)
2. Busque produtos no catálogo ou adicione manualmente
3. Calcule descontos por percentual ou valor direto
4. Adicione cashback se necessário
5. Salve o registro para consultas futuras
6. Use a seção de busca para encontrar registros anteriores

## Módulo de Botão para Importação de Arquivos

Este projeto inclui um módulo reutilizável para importação de arquivos de texto. Para usar este módulo em qualquer parte do projeto ou em outros projetos:

```html
<!-- Incluir o script -->
<script src="fileImportButton.js"></script>

<!-- Definir um elemento container -->
<div id="meu-container"></div>

<script>
  // Criar o botão no container
  createFileImportButton('meu-container', {
    buttonText: 'Importar arquivo',
    onFileLoaded: function(content) {
      // Processar o conteúdo do arquivo
      console.log(content);
    }
  });
</script>
```

Veja `fileImportButton.html` para um exemplo completo de uso.

## Instalação

Clone o repositório e abra o arquivo `index.html` em qualquer navegador moderno.

```bash
git clone https://github.com/ggiacomini2012/migcalculadora.git
cd migcalculadora
```

## Contribuição

Contribuições são bem-vindas! Abra um issue ou envie um pull request.
