import Input from "./Input";
import Label from "./Label";

export default function InputForm({label, type, name, placeholder}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={name}>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </div>
  );
}
