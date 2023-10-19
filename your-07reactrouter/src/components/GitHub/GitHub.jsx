import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export const GitHub = () => {
  const data = useLoaderData();
  // const [data, setData] = useState();
  // useEffect(() => {
  //   fetch("https://api.github.com/users/pandit986")
  //     .then((Response) => Response.json())
  //     .then((data) => setData(data));
  //   console.log(data);
  // }, []);

  //when the componebt get mount useEffect will get call
  return (
    <div className="text-center p-4 text-4xl m-4 bg-orange-300">
      GitHub Followers {data?.followers}
    </div>
  );
};

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/pandit986");
  return response.json();
};
