import clsx from 'clsx'
import Link from 'next/link'
import { ComponentProps } from 'react'

type ButtonAndAnchorProps = ComponentProps<'button'> & ComponentProps<'a'>

interface ButtonProps extends ButtonAndAnchorProps {
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
  href,
  variant = 'primary',
  ...props
}: ButtonProps) {
  if (href && ButtonComponent === 'button') ButtonComponent = 'a'

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
      <Link href={href || ''} className={combinedClassName}>
        {props.children}
      </Link>
    )
  }

  return <ButtonComponent className={combinedClassName} {...props} />
}

export { Button }
