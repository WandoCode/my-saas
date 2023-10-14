'use client'

import { Button, Input } from '@/app/components'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

const validationSchema = object({
  firstName: string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  BCE: string()
    .max(8, 'Must be 8 numbers')
    .min(8, 'Must be 8 numbers')
    .matches(/[0-9]{8,9}/i, 'Invalid BCE number')
    .required('Required'),
})

function WorkWithUs() {
  const handleSubmit = async (values: any) => {
    await new Promise((r) => setTimeout(r, 1500))
    alert(values)
  }

  return (
    <div className="container">
      <section className="work-with-us">
        <h1 className="heading h1 h1--small">
          Get access to unlimited missions!
        </h1>
        <Formik
          initialValues={{
            lastName: '',
            firstName: '',
            BCE: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-control">
                <label htmlFor="firstName">First name:</label>
                <Field type="text" name="firstName" id="firstName" />
                <ErrorMessage name="firstName" />
              </div>
              <div className="form-control">
                <label htmlFor="lastName">Last name:</label>
                <Field type="text" name="lastName" id="lastName" />
                <ErrorMessage name="lastName" />
              </div>
              <div className="form-control">
                <label htmlFor="BCE">BCE:</label>
                <Field type="text" name="BCE" id="BCE" />
                <ErrorMessage name="BCE" />
              </div>
              <Button type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  )
}

export default WorkWithUs
