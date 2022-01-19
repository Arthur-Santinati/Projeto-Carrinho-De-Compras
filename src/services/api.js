export async function getCategories() {
  // Implementado por João e Thomaz
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  try {
    const retorno = await fetch(url);
    const resposta = await retorno.json();
    return resposta;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implementado por João e Thomaz
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}=${query}`;
  try {
    const retorno = await fetch(url);
    const resposta = await retorno.json();
    return resposta;
  } catch (error) {
    return error;
  }
}
