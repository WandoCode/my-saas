import { Button, Input } from '@/app/components'
import { showError } from '@/app/utils'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'

interface FormStepOneProps {
  showNextStep: () => void
}

function FormStepOne({ showNextStep }: FormStepOneProps) {
  const initialValues = {
    lastName: '',
    firstName: '',
    BCE: '',
  }

  const handleSubmit = async (values: any) => {
    const rep = await new Promise((r) => setTimeout(r, 1500))
    console.log(rep)

    showNextStep()
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
  )
}

export { FormStepOne }

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
