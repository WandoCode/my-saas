'use client'

import clsx from 'clsx'
import { ErrorMessage, Field } from 'formik'
import { PropsWithChildren } from 'react'

interface Input extends PropsWithChildren {
  name: string
  type: 'text' | 'number' | 'password'
  className?: string
}

function Input({ name, type, className, children }: Input) {
  return (
    <div className={clsx('form-control', { className })}>
      <label htmlFor={name}>{children}</label>
      <Field type={type} name={name} id={name} />
      <ErrorMessage name={name} />
    </div>
  )
}
export { Input }
