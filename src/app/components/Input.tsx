'use client'

import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface Input extends PropsWithChildren {
  name: string
  type: 'text' | 'number' | 'password'
  isError: boolean
  className?: string
  infos?: string
  placeholder?: string
}

function Input({
  name,
  type,
  infos,
  className,
  isError,
  placeholder,
  children,
}: Input) {
  return (
    <div className={clsx('input', { className, 'input--error': isError })}>
      <label className="input__label" htmlFor={name}>
        {children}
      </label>
      <Field
        className="input__field"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
      />
      <div className="input__footer">
        {infos && <p className="input__infos">{infos}</p>}
        {isError && (
          <p className="input__error">
            <Image
              src={'/alert-triangle.svg'}
              height={15}
              width={15}
              aria-hidden={true}
              alt=""
              className="input__error-icon"
            />
            <ErrorMessage name={name} />
          </p>
        )}
      </div>
    </div>
  )
}
export { Input }
