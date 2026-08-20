type ExampleChipProps = {
  label: string;
};

export function ExampleChip({ label }: ExampleChipProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-brand-border bg-brand-surface-elevated px-3.5 py-1.5 text-sm font-medium text-brand-text shadow-sm transition-colors hover:border-brand-primary/40 hover:bg-brand-surface-warm">
      {label}
    </span>
  );
}
