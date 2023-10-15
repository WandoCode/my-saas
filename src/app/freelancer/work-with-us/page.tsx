import { FormStepOne } from './FormStepOne'
function WorkWithUs() {
  return (
    <div className="container">
      <section className="work-with-us">
        <h1 className="heading h1 h1--small">
          Get access to unlimited missions!
        </h1>
        <p>To use our app at its maximum, you have to subscribe.</p>
        <FormStepOne />
      </section>
    </div>
  )
}

export default WorkWithUs
// TODO: pour afficher le form de paiement, il faut vérifier que l'utilisateur est bien identifié.
