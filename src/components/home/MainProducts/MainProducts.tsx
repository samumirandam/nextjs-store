import Image from "next/image";

const getProducts = async () => {
  try {
    const response = await fetch(
      `${process.env.SHOPIFY_HOST_NAME}/admin/api/2023-10/products.json`,
      {
        method: "GET",
        headers: new Headers({
          "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
        }),
      },
    );
    const data = await response.json();

    return data.products;
  } catch (error) {
    console.error("Error fetching products", error);
  }
};

export const MainProducts = async () => {
  const products = await getProducts();

  return (
    <section>
      <h3 className="text-center text-3xl">New products released!</h3>
      <div className="grid w-full grid-cols-2 grid-rows-[400px_400px] gap-4">
        {products?.map(
          (product: {
            id: number;
            title: string;
            images: { src: string }[];
          }) => {
            const imageSrc = product.images[0].src;
            return (
              <article key={product.id} className="relative z-10 min-h-[400px]">
                <p className="absolute top-0 right-1.5 z-20 text-xl font-bold">
                  {product.title}
                </p>
                <Image
                  src={imageSrc}
                  alt={product.title}
                  fill
                  loading="eager"
                  className="h-[400px] object-cover opacity-40"
                />
              </article>
            );
          },
        )}
      </div>
    </section>
  );
};
