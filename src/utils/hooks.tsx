import { useEffect, useState } from "react";

export function useFormField(initialValue: string) {
  const [state, setState] = useState(initialValue);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setState(event.target.value);
  }

  return {
    value: state,
    onChange: handleChange,
  };
}

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function fetchData() {
    setError(null);
    setIsLoading(true);
    const response = await fetch(url);
    if (!response.ok) {
      setError("Failed");
      setIsLoading(false);
      return;
    }
    const result: T = await response.json();
    setData(result);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function refetch() {
    fetchData();
  }

  return {
    data,
    error,
    isLoading,
    refetch,
  };
}
