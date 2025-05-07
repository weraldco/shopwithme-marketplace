import { categoryData } from "@/utils/data";
import { CategoryType, ProductType } from "@/utils/types";
import { ReadonlyURLSearchParams } from "next/navigation";
import { create } from "zustand";

type ProductStore = {
  products: ProductType[] | null;
  product: ProductType | null;
  searchedProduct: ProductType[] | null;
  category: CategoryType[] | null;
  fetchAllProducts: () => Promise<void>;
  fetchSingleProduct: (id: number) => Promise<void>;
  getAllCategory: () => Promise<void>;
  // searchProductByQuery: (query: string) => Promise<void>;
  searchProduct: (query: ReadonlyURLSearchParams) => Promise<void>;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: null,
  product: null,
  searchedProduct: null,
  category: null,

  fetchAllProducts: async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=0&skip=0",
      );
      const data = await response.json();
      set({ products: data.products });
    } catch (error) {
      console.error("Failed fetching products", error);
    }
  },

  fetchSingleProduct: async (id: number) => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await response.json();
      set({ product: data });
    } catch (error) {
      console.error("Failed fetching product", error);
    }
  },

  getAllCategory: async () => {
    try {
      const testProd = categoryData.filter(Boolean) as CategoryType[];
      set({ category: testProd });
    } catch (error) {
      console.error("Failed fetching product", error);
    }
  },

  // searchProductByQuery: async (query: string | null) => {
  //   try {
  //     const response = await fetch(
  //       `https://dummyjson.com/products/search?q=${query}`,
  //     );
  //     const data = await response.json();
  //     // set({ searchedProduct: data.products });
  //   } catch (error) {
  //     console.error("Failed fetching data", error);
  //   }
  // },

  searchProduct: async (query: ReadonlyURLSearchParams | null) => {
    try {
      const q = query?.get("q");
      let result: ProductType[] = [];
      const products = get().products;

      if (products) {
        if (q) {
          result = products.filter(
            (product) =>
              product.category.toLowerCase().includes(q.toLowerCase()) ||
              product.title.toLowerCase().includes(q.toLowerCase()) ||
              (product.brand &&
                product.brand.toLowerCase().includes(q.toLowerCase())) ||
              (product.tags && product.tags.includes(q.toLowerCase())),
          );
        }

        set({ searchedProduct: result });
      }
    } catch (error) {
      console.error("Failed fetching data", error);
    }
  },
}));
