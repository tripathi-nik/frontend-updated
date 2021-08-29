import useSWR from 'swr';
const FetchSample = (url) =>{
  const fetcher = (...args)=>fetch(...args).then(res=>res.json());
  const {data}=useSWR(url,fetcher);
  return data;
}
export default FetchSample;
