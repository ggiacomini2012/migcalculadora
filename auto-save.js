// Função para salvamento automático (substitui os botões manual)
let autoSaveTimeout = null;
function autoSave() {
  // Limpar timeout anterior para evitar múltiplos salvamentos
  if (autoSaveTimeout) {
    clearTimeout(autoSaveTimeout);
  }
  
  // Aguardar 1 segundo antes de salvar para evitar chamadas excessivas
  autoSaveTimeout = setTimeout(() => {
    // Se não houver produtos, não salvar
    if (products.length === 0) {
      return;
    }
    
    // Verificar e preencher campos obrigatórios
    if (!cpfInput.value.trim()) {
      cpfInput.value = "-";
    }

    if (!nomeInput.value.trim()) {
      nomeInput.value = "-";
    }

    if (!whatsInput.value.trim()) {
      whatsInput.value = "-";
    }

    if (!aniversarioInput.value) {
      aniversarioInput.value = "-";
    }

    // Mapear produtos com IDs
    const enhancedProducts = products.map(product => {
      return {
        ...product,
        productId: product.productId || ''
      };
    });

    // Obter informações do cliente
    const customerInfo = {
      cpf: cpfInput.value.trim(),
      nome: nomeInput.value.trim(),
      whats: whatsInput.value.trim(),
      aniversario: aniversarioInput.value
    };

    // Criar objeto de registro
    const record = {
      id: Date.now(),
      date: new Date().toISOString(),
      customerInfo: customerInfo,
      products: enhancedProducts,
      totals: {
        originalTotal: totalOriginal,
        discountTotal: totalDiscount,
        cashbackTotal: totalCashback,
        finalTotal: Math.max(0, totalFinal - totalCashback)
      }
    };

    // Adicionar aos registros salvos
    savedRecords.push(record);

    // Salvar no localStorage
    localStorage.setItem('discountCalculatorRecords', JSON.stringify(savedRecords));

    // Atualizar a exibição
    updateSavedRecordsList();
    
    // Mostrar notificação rápida de salvamento automático
    showAutoSaveNotification();
  }, 1000);
}

// Configurar listeners para detecção de mudanças nos produtos
function setupAutoSaveListeners() {
  // Encontrar todos os inputs de productId
  const productIdInputs = document.querySelectorAll('.product-id');
  
  // Adicionar listener para cada input de ID
  productIdInputs.forEach((input, index) => {
    // Remover listener anterior, se existir
    input.removeEventListener('change', handleProductIdChange);
    
    // Adicionar novo listener
    input.addEventListener('change', handleProductIdChange);
  });
}

// Handler para mudanças no ID do produto
function handleProductIdChange(e) {
  const inputElement = e.target;
  const productItem = inputElement.closest('.product-item');
  const productIndex = Array.from(productItem.parentNode.children).indexOf(productItem);
  
  // Atualizar o productId no array products
  if (productIndex >= 0 && productIndex < products.length) {
    products[productIndex].productId = inputElement.value;
    autoSave();
  }
}

// Mostrar notificação de salvamento automático
function showAutoSaveNotification() {
  // Criar notificação se não existir
  let notification = document.getElementById('autoSaveNotification');
  if (!notification) {
    notification = document.createElement('div');
    notification.id = 'autoSaveNotification';
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--accent-color)';
    notification.style.color = 'var(--bg-primary)';
    notification.style.padding = '10px';
    notification.style.borderRadius = 'var(--border-radius)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    document.body.appendChild(notification);
  }
  
  // Atualizar texto e mostrar
  notification.textContent = 'Registro salvo automaticamente';
  notification.style.opacity = '1';
  
  // Esconder após 2 segundos
  setTimeout(() => {
    notification.style.opacity = '0';
  }, 2000);
}

// Adicionar listeners para os dados do cliente
function setupCustomerInfoListeners() {
  const customerInputs = [cpfInput, nomeInput, whatsInput, aniversarioInput];
  
  customerInputs.forEach(input => {
    // Remover listener anterior, se existir
    input.removeEventListener('change', autoSave);
    
    // Adicionar novo listener
    input.addEventListener('change', autoSave);
  });
}

// Modificando as funções existentes para adicionar auto-save
const originalCalculateDiscount = calculateDiscount;
calculateDiscount = function() {
  originalCalculateDiscount();
  autoSave();
};

const originalDeleteProduct = deleteProduct;
deleteProduct = function(id) {
  originalDeleteProduct(id);
  autoSave();
};

const originalApplyCashback = applyCashback;
applyCashback = function() {
  originalApplyCashback();
  autoSave();
};

// Modificando a função updateProductList para configurar auto-save listeners
const originalUpdateProductList = updateProductList;
updateProductList = function() {
  originalUpdateProductList();
  if (products.length > 0) {
    setupAutoSaveListeners();
  }
};

// Inicializar auto-save quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', function() {
  // Configurar listeners para dados do cliente
  setupCustomerInfoListeners();
}); 