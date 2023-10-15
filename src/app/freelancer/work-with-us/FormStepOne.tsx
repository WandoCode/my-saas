'use client'

import { Button, Input } from '@/components'
import { showError } from '@/utils'
import { Form, Formik } from 'formik'
import { signIn } from 'next-auth/react'
import { object, string } from 'yup'

function FormStepOne() {
  const initialValues = {
    username: '',
    password: '',
  }

  const handleSubmit = async (values: any) => {
    const rep = await signIn('credentials', { ...values, redirect: false })
    console.log(rep)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form>
          <Input
            name="username"
            type="text"
            isError={showError(errors.username, touched.username)}
          >
            Username
          </Input>
          <Input
            name="password"
            type="password"
            isError={errors.password !== undefined && touched.password}
            infos="Use the same credentials than ones used on FlexiMed App"
          >
            Password
          </Input>
          <Button type="submit" disabled={isSubmitting}>
            Confirm
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export { FormStepOne }

const validationSchema = object({
  username: string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  password: string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
})
