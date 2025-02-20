import Image from "next/image";

export const Description = () => {
  return (
    <section>
      <Image src="/images/description.jpeg" alt="products marketplace" width={400} height={400} />
      <h1>Descripción</h1>
      <p className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
        molestiae, officia debitis, possimus voluptatem provident sunt vero, est
        facere quis omnis. Sit suscipit quisquam itaque temporibus. Dolore,
        quibusdam tempora?
      </p>
    </section>
  );
};
