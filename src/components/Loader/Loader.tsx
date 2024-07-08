import { Circles } from "react-loader-spinner";

const Loader = () => (
  <div>
    <Circles
      height="80"
      width="80"
      color="var( --primary-green-9FBAAE)"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);

export default Loader;
