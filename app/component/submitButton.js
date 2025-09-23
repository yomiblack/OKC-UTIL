"use client";
import Button from "./button";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ label, route, type, onClick }) {
  const { pending } = useFormStatus();

  return (
    <Button route={route} type={type} disabled={pending} onClick={onClick}>
      {pending ? "Submitting..." : label}
    </Button>
    // <button disabled={pending}>{pending ? "Submitting..." : label}</button>
  );
}
