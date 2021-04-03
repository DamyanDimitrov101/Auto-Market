import { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [value, setValue] = useState(initialValue);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setValue(Object.values(res));
        setIsLoading(false);
      })
  }, [url]);

  return [
    value,
    setValue,
    isLoading
  ];
};

export default useFetch;