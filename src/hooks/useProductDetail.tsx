import Product from "../types/Product";

export default function useProductDetail() {
  function handleInsertProduct(product: Product) {
    localStorage.setItem('current-product', JSON.stringify(product))
  }

  function handleGetProduct(): Product | null {
    const currentProduct =
      localStorage.getItem('current-product')
        ? JSON.parse(localStorage.getItem('current-product')!)
        : null

    return currentProduct
  }

  return {
    handleInsertProduct,
    handleGetProduct
  }
}