import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // lowercase 'f'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 bg-gray-50">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
