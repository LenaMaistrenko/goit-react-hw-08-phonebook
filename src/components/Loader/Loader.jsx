import { Watch } from 'react-loader-spinner';
export function Loader() {
  return (
    <Watch
      height="10"
      width="10"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
  //   return <Loader type="Watch" height={100} width={100} />;
}
