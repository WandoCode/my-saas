import { Button, Input } from '@/components'
import { showError } from '@/app/utils'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'

interface FormStepOneProps {
  showNextStep: () => void
}

function FormStepOne({ showNextStep }: FormStepOneProps) {
  const initialValues = {
    firstName: '',
    password: '',
  }

  const handleSubmit = async (values: any) => {
    const rep = await new Promise((r) => setTimeout(r, 1500))
    console.log(rep)
    // TODO: If user is identified, connect user via redux => Pas utile a priori, utiliser un software d'authentification pour créer la session et utiliser les données de la session. Il faut prévoir une DB pour stoquer les data des user et autre..
    // Else
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
  firstName: string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  password: string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
})
