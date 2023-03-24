import useFetch from "../../hooks/useFetch";

export default function Banner(props) {
  const { data, loading, error } = useFetch(
    `/categories/${props.catId}?populate=*`
  );

  return (
    <div>
      <img src={data?.attributes?.img?.data?.attributes?.url} alt="" />
    </div>
  );
}
