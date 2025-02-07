interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: { [key: string]: string };
}

export default async function Category({
  params,
  searchParams,
}: CategoryProps) {
  const { categories } = await params;
  const search = searchParams ? await searchParams['search'] : undefined;

  return (
    <h1>
      Categoria: {categories} - {search}
    </h1>
  );
}
