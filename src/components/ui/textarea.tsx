import { forwardRef, useId, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { Field } from '@base-ui-components/react/field';
import { cn } from '../../lib/cn';
import './textarea.css';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  labelIcon?: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, labelIcon, description, error, className, id, name, disabled, ...props },
  ref,
) {
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
        <Field.Label className="ui-field__label">
          {labelIcon && (
            <span className="ui-field__label-icon" aria-hidden="true">
              {labelIcon}
            </span>
          )}
          <span className="ui-field__label-text">{label}</span>
        </Field.Label>
      )}
      <textarea
        id={fieldId}
        ref={ref}
        className={cn('ui-field__control ui-textarea nodrag nopan nowheel', className)}
        {...props}
      />
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
});
