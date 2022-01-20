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

export async function getProductsFromCategoryAndQuery(categoryId, query = '') {
  let url = 'https://api.mercadolibre.com/sites/MLB/search?';

  if (categoryId && query) {
    url = `${url}category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    url = `${url}category=${categoryId}`;
  } else {
    url = `${url}q=${query}`;
  }
  try {
    const retorno = await fetch(url);
    const resposta = await retorno.json();
    return resposta;
  } catch (error) {
    return error;
  }
}
