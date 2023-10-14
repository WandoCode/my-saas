'use client'

import { Button, Input } from '@/app/components'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { object, string } from 'yup'

function WorkWithUs() {
  const initialValues = {
    lastName: '',
    firstName: '',
    BCE: '',
  }
  // const [currentFormStep, setCurrentFormStep] = useState<number>(0)

  const handleSubmit = async (values: any) => {
    const rep = await new Promise((r) => setTimeout(r, 1500))
    console.log(rep)
    alert(values)
  }

  return (
    <div className="container">
      <section className="work-with-us">
        <h1 className="heading h1 h1--small">
          Get access to unlimited missions!
        </h1>
        {/* <p>To use our app at its maximum, you have to subscribe.</p>
        <div className="form-steps">
          <div className="form-step">Identify</div>
          <div className="form-step">Payment</div>
        </div> */}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form>
              <Input
                name="firstName"
                type="text"
                isError={showError(errors.firstName, touched.firstName)}
              >
                First name
              </Input>
              <Input
                name="lastName"
                type="text"
                isError={errors.lastName !== undefined && touched.lastName}
              >
                Last name
              </Input>
              <Input
                name="BCE"
                type="text"
                infos="This must match the BCE number in your FlexiMed App profil"
                isError={errors.BCE !== undefined && touched.BCE}
              >
                BCE
              </Input>

              <Button type="submit" disabled={isSubmitting}>
                Confirm
              </Button>
            </Form>
          )}
        </Formik>
      </section>
    </div>
  )
}

export default WorkWithUs

const showError = (error?: string, touched?: boolean) =>
  error !== undefined && touched

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
