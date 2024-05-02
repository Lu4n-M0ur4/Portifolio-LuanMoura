import { useState } from "react";

export default function useForm(initialState: Record<string, "">) {
  const [form, setForm]: any = useState(initialState);

  const onChangeInputs = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
  };

  return { form, onChangeInputs, setForm };
}
