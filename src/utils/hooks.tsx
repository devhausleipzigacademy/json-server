import { useState } from "react";

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
