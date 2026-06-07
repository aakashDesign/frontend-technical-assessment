import { useId, type ReactNode } from 'react';
import { Field } from '@base-ui-components/react/field';
import { Select as BaseSelect } from '@base-ui-components/react/select';
import { cn } from '../../lib/cn';
import './select.css';

export type SelectOption = {
  value: string;
  label?: ReactNode;
};

export interface SelectProps {
  label?: ReactNode;
  labelIcon?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  options: SelectOption[];
  disabled?: boolean;
  name?: string;
  id?: string;
  className?: string;
}

const ChevronIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
    <path
      d="m3 4.5 3 3 3-3"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" width="12" height="12" aria-hidden="true">
    <path
      d="m2.5 6.5 2.25 2.25L9.5 4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Select({
  label,
  labelIcon,
  description,
  error,
  placeholder,
  value,
  defaultValue,
  onValueChange,
  options,
  disabled,
  name,
  id,
  className,
}: SelectProps) {
  const autoId = useId();
  const fieldId = id ?? autoId;

  return (
    <Field.Root
      name={name}
      disabled={disabled}
      invalid={error != null}
      className="ui-field"
    >
      {label && (
        <Field.Label htmlFor={fieldId} className="ui-field__label">
          {labelIcon && (
            <span className="ui-field__label-icon" aria-hidden="true">
              {labelIcon}
            </span>
          )}
          <span className="ui-field__label-text">{label}</span>
        </Field.Label>
      )}
      <BaseSelect.Root
        value={value}
        defaultValue={defaultValue}
        onValueChange={(next) => {
          if (next != null) onValueChange?.(next);
        }}
        disabled={disabled}
        name={name}
      >
        <BaseSelect.Trigger
          id={fieldId}
          className={cn('ui-select__trigger', className)}
        >
          <BaseSelect.Value>
            {(selected: string | null) => {
              const match = options.find((o) => o.value === selected);
              if (match) return match.label ?? match.value;
              if (selected) return selected;
              return <span className="ui-select__placeholder">{placeholder}</span>;
            }}
          </BaseSelect.Value>
          <BaseSelect.Icon className="ui-select__icon">
            <ChevronIcon />
          </BaseSelect.Icon>
        </BaseSelect.Trigger>
        <BaseSelect.Portal>
          <BaseSelect.Positioner sideOffset={4} className="ui-select__positioner">
            <BaseSelect.Popup className="ui-select__popup">
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  value={option.value}
                  className="ui-select__item"
                >
                  <BaseSelect.ItemText>{option.label ?? option.value}</BaseSelect.ItemText>
                  <BaseSelect.ItemIndicator className="ui-select__item-indicator">
                    <CheckIcon />
                  </BaseSelect.ItemIndicator>
                </BaseSelect.Item>
              ))}
            </BaseSelect.Popup>
          </BaseSelect.Positioner>
        </BaseSelect.Portal>
      </BaseSelect.Root>
      {description && !error && (
        <Field.Description className="ui-field__description">{description}</Field.Description>
      )}
      {error && (
        <Field.Error className="ui-field__error" match>
          {error}
        </Field.Error>
      )}
    </Field.Root>
  );
}
