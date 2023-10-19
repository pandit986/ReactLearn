import { useParams } from "react-router-dom";

export const User = () => {
  const { userid } = useParams();
  return (
    <div className="bg-gray-700 text-justify p-5 text-4xl">
      User : {userid} on the bases of the user ka data we show in this page{" "}
    </div>
  );
};
