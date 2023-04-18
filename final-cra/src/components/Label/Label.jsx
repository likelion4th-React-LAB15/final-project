import { A11yHidden } from 'components/A11yHidden/A11yHidden';

export function Label({
  className,
  htmlFor,
  invisibleLabel,
  children,
  ...restProps
}) {
  if (!invisibleLabel) {
    return (
      <label
        className={className}
        htmlFor={htmlFor}
        {...restProps}
      >
        {children}
      </label>
    );
  }

  return (
    <A11yHidden as="label" className={className} htmlFor={htmlFor}>
      {htmlFor}
    </A11yHidden>
  );
}