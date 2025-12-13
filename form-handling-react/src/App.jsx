import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm.jsx'
import FormikForm from './components/formikForm.jsx'

function App() {
    const [showFormik, setShowFormik] = useState(false)

    return (
        <div>
            <div className="fixed top-4 right-4 z-10">
                <button
                    onClick={() => setShowFormik(!showFormik)}
                    className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-gray-700 transition"
                >
                    {showFormik ? 'Show Controlled Form' : 'Show Formik Form'}
                </button>
            </div>

            {showFormik ? <FormikForm /> : <RegistrationForm />}
        </div>
    )
}

export default App