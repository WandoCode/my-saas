import clsx from 'clsx'
import { Herr_Von_Muellerhoff } from 'next/font/google'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

interface ButtonProps extends PropsWithChildren {
  as?: 'a' | 'button' | 'next-link'
  className?: string
  href?: string
  disabled?: boolean
  variant?:
    | 'primary'
    | 'secondary'
    | 'destructive-primary'
    | 'destructive-secondary'
}

function Button({
  as: ButtonComponent = 'button',
  className,
  disabled = false,
  variant = 'primary',
  ...props
}: ButtonProps) {
  if (props.href && ButtonComponent == 'button') ButtonComponent = 'a'

  const combinedClassName = clsx(
    className,
    'button',
    'center',
    {
      'button--disabled':
        variant === 'destructive-secondary' || variant === 'destructive-primary'
          ? false
          : disabled,
    },
    { 'button--primary': variant === 'primary' },
    { 'button--secondary': variant === 'secondary' },
    {
      'button--destructive-primary': variant === 'destructive-primary',
    },
    {
      'button--destructive-secondary': variant === 'destructive-secondary',
    }
  )

  if (ButtonComponent === 'next-link') {
    return (
      <Link href={props.href || ''} className={combinedClassName}>
        {props.children}
      </Link>
    )
  }

  return <ButtonComponent className={combinedClassName} {...props} />
}

export { Button }