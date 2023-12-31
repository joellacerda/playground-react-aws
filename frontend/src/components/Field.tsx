type Props = {
  label: string;
  errorMessage?: string;
  invalid: boolean;
  children: React.ReactNode;
};
export const Field = ({ label, errorMessage, invalid, children }: Props) => {
  return (
    <label className="block">
      {label && <span className="mb-2 block text-sm">{label}</span>}
      {children}
      {invalid && <span className="text-xs text-red-500">{errorMessage}</span>}
    </label>
  );
};
