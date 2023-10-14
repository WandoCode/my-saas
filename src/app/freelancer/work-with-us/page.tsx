'use client'

import { Button, Input } from '@/app/components'
import { Form, Formik } from 'formik'
import { useState } from 'react'
import { object, string } from 'yup'
import { FormStepOne } from './FormStepOne'

function WorkWithUs() {
  const [currentFormStep, setCurrentFormStep] = useState<number>(0)

  const onShowNextStep = () => {
    setCurrentFormStep((curr) => curr + 1)
  }

  return (
    <div className="container">
      <section className="work-with-us">
        <h1 className="heading h1 h1--small">
          Get access to unlimited missions!
        </h1>
        <p>To use our app at its maximum, you have to subscribe.</p>
        <div className="form-steps">
          <div className="form-step">Identify</div>
          <div className="form-step">Payment</div>
        </div>
        {currentFormStep === 0 && <FormStepOne showNextStep={onShowNextStep} />}
        {currentFormStep === 1 && <p>test</p>}
      </section>
    </div>
  )
}

export default WorkWithUs
