import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

export default function List({ subCategories, maxPrice, sort, categoryId }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${categoryId}${subCategories.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  // console.log(data);

  return (
    <section className="list">
      {loading
        ? <div className="list__loading"></div>
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </section>
  );
}
