import useFetch from '../../hooks/useFetch';

export default function Banner(props) {
  const { data, loading, error } = useFetch(
    `/categories?populate=*&[filter][categories][id][$eq]=${props.catId}`
  );

  console.log(data);
  return (
    <div className={props.classAttrName}>
      <img 
      src={data?.attributes?.img?.data?.attributes?.url} 
      alt="" />
    </div>
  );
}
