import { RotatingLines } from "react-loader-spinner";

export const LoadingDelete = () => {
  return (
    <RotatingLines
      strokeColor="red"
      strokeWidth="5"
      animationDuration="0.75"
      width="20px"
      visible={true}
    />
  );
};
