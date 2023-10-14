'use client'

import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

interface Input extends PropsWithChildren {
  name: string
  type: 'text' | 'number' | 'password'
  isError: boolean | undefined
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
          <ErrorMessage name={name}>
            {(msg) => (
              <p className="input__error">
                <Image
                  src={'/alert-triangle.svg'}
                  height={14}
                  width={14}
                  aria-hidden={true}
                  alt=""
                  className="input__error-icon"
                />
                {msg}
              </p>
            )}
          </ErrorMessage>
        )}
      </div>
    </div>
  )
}
export { Input }
