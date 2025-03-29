# Integração do Botão de Importação de Catálogo na Calculadora

Este guia explica como adicionar o botão de importação de catálogo à sua calculadora MIG, permitindo que os usuários importem arquivos de catálogo diretamente pela interface web.

## Passo 1: Incluir o Módulo de Importação

Adicione o script do módulo `fileImportButton.js` no seu HTML, antes do fechamento da tag `</body>`:

```html
<script src="modulos/fileImportButton/fileImportButton.js"></script>
```

## Passo 2: Adicionar o Container para o Botão

Crie um elemento container onde o botão será inserido. Recomenda-se adicionar este elemento próximo aos controles de busca:

```html
<div class="controles-container">
  <!-- Outros controles existentes -->
  
  <!-- Container para o botão de importação de catálogo -->
  <div id="catalog-import-container"></div>
</div>
```

## Passo 3: Inicializar o Botão de Importação

Adicione o código JavaScript para criar o botão de importação de catálogo. Inclua este código no seu arquivo JavaScript principal ou em um script inline após a inclusão do módulo:

```javascript
document.addEventListener('DOMContentLoaded', function() {
  // Inicializar o botão de importação de catálogo
  createCatalogImportButton('catalog-import-container', {
    buttonText: 'Importar Catálogo',
    buttonClass: 'btn-catalog',
    onFileLoaded: function(products, catalogCode) {
      // Armazenar o catálogo na variável global window.catalog
      window.catalog = products;
      
      // Opcional: salvar na localStorage para persistência
      localStorage.setItem('mig_catalog', JSON.stringify(products));
      
      // Opcional: mostrar feedback ao usuário
      alert(`Catálogo importado com sucesso! ${products.length} produtos disponíveis para busca.`);
      
      // Opcional: atualizar elementos da interface, se necessário
      atualizarInterfaceComCatalogo();
    }
  });
  
  // Verificar se já existe um catálogo salvo na localStorage
  const savedCatalog = localStorage.getItem('mig_catalog');
  if (savedCatalog) {
    try {
      // Carregar o catálogo salvo
      window.catalog = JSON.parse(savedCatalog);
      console.log(`Catálogo carregado da localStorage: ${window.catalog.length} produtos`);
    } catch (error) {
      console.error('Erro ao carregar catálogo da localStorage:', error);
    }
  }
});

// Função para atualizar a interface após importar o catálogo
function atualizarInterfaceComCatalogo() {
  // Adicione aqui qualquer atualização necessária na interface
  // Por exemplo, atualizar contadores, mensagens, etc.
}
```

## Passo 4: Integrar o Catálogo com o Campo de Busca

Para que o catálogo importado esteja disponível no campo de busca (`searchInput`), modifique a função de busca existente para utilizar a variável global `window.catalog`:

```javascript
// Modificar a função de busca para usar o catálogo importado
function buscarProduto(termo) {
  // Se não houver catálogo importado, use o catálogo padrão
  const catalogoParaBusca = window.catalog || catalog;
  
  // Continuar com a lógica de busca existente
  if (!termo) return [];
  
  return catalogoParaBusca.filter(produto => {
    // Sua lógica de filtro existente...
    const ref = produto.ref.toLowerCase();
    const desc = produto.description.toLowerCase();
    const termoBusca = termo.toLowerCase();
    
    return ref.includes(termoBusca) || desc.includes(termoBusca);
  });
}
```

## Passo 5: Estilizar o Botão (Opcional)

Adicione estilos CSS para o botão de importação de catálogo:

```css
.btn-catalog {
  background-color: #2196F3;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin: 5px;
}

.btn-catalog:hover {
  background-color: #0b7dda;
}
```

## Exemplo Completo de Integração

Aqui está um exemplo completo mostrando como todos os componentes se integram:

```html
<!-- No HTML, adicione o container para o botão -->
<div class="search-container">
  <input type="text" id="searchInput" placeholder="Buscar produto...">
  <div id="catalog-import-container"></div>
  <div id="searchResults"></div>
</div>

<!-- No final do arquivo HTML, adicione o script -->
<script src="modulos/fileImportButton/fileImportButton.js"></script>
<script>
  // Inicialização ao carregar a página
  document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o botão de importação
    createCatalogImportButton('catalog-import-container', {
      buttonText: 'Importar Catálogo',
      buttonClass: 'btn-catalog',
      onFileLoaded: function(products) {
        window.catalog = products;
        localStorage.setItem('mig_catalog', JSON.stringify(products));
        alert(`Catálogo importado com sucesso! ${products.length} produtos disponíveis.`);
      }
    });
    
    // Carregar catálogo da localStorage, se existir
    const savedCatalog = localStorage.getItem('mig_catalog');
    if (savedCatalog) {
      window.catalog = JSON.parse(savedCatalog);
    }
    
    // Configurar o campo de busca
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    searchInput.addEventListener('input', function() {
      const termo = this.value.trim();
      if (termo.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      const resultados = buscarProduto(termo);
      exibirResultados(resultados, searchResults);
    });
  });
  
  // Função de busca adaptada para usar o catálogo importado
  function buscarProduto(termo) {
    const catalogoParaBusca = window.catalog || catalog;
    return catalogoParaBusca.filter(produto => {
      const ref = produto.ref.toLowerCase();
      const desc = produto.description.toLowerCase();
      const termoBusca = termo.toLowerCase();
      
      return ref.includes(termoBusca) || desc.includes(termoBusca);
    });
  }
  
  // Função para exibir os resultados
  function exibirResultados(resultados, container) {
    if (resultados.length === 0) {
      container.innerHTML = '<p>Nenhum produto encontrado</p>';
      return;
    }
    
    let html = '<ul>';
    resultados.slice(0, 10).forEach(produto => {
      html += `<li data-ref="${produto.ref}" class="resultado-item">
        ${produto.ref} - ${produto.description} (R$ ${produto.price.toFixed(2)})
      </li>`;
    });
    html += '</ul>';
    
    container.innerHTML = html;
    
    // Adicionar eventos de clique aos resultados
    document.querySelectorAll('.resultado-item').forEach(item => {
      item.addEventListener('click', function() {
        // Lógica para selecionar o produto
        const ref = this.getAttribute('data-ref');
        selecionarProduto(ref);
      });
    });
  }
  
  // Função para selecionar um produto da lista
  function selecionarProduto(ref) {
    const catalogoParaBusca = window.catalog || catalog;
    const produto = catalogoParaBusca.find(p => p.ref === ref);
    
    if (produto) {
      // Preencher os campos do formulário com os dados do produto
      document.getElementById('productRef').value = produto.ref;
      document.getElementById('productDescription').value = produto.description;
      document.getElementById('productPrice').value = produto.price.toFixed(2);
      document.getElementById('productDiscount').value = produto.discount.toFixed(2);
      // Outros campos conforme necessário
    }
  }
</script>
```

## Notas Importantes

1. **Persistência de Dados**: O exemplo utiliza localStorage para manter o catálogo entre recarregamentos da página. Para aplicações mais complexas, considere usar IndexedDB.

2. **Tamanho do Catálogo**: Catálogos muito grandes podem causar problemas de performance. Considere implementar paginação ou filtros adicionais para grandes conjuntos de dados.

3. **Feedback ao Usuário**: Sempre forneça feedback visual quando o catálogo for importado com sucesso ou quando ocorrer algum erro.

4. **Fallback**: O código está configurado para usar o catálogo padrão (variável `catalog`) se não houver um catálogo importado.

5. **Segurança**: Lembre-se que o processamento é feito no lado do cliente. Não processe arquivos sensíveis desta forma.

---

Com esta implementação, os usuários poderão importar tabelas de catálogo diretamente pela interface da calculadora, tornando a experiência mais integrada e amigável. 