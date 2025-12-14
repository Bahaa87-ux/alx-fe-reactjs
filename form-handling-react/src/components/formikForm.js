import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const validationSchema = Yup.object({
        username: Yup.string().required('Username is required').min(3, 'Username must be at least 3 characters'),
        email: Yup.string().required('Email is required').email('Invalid email address'),
        password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters')
    });

    const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        setTimeout(() => {
            console.log('Form submitted:', values);
            setStatus({ success: true });
            setSubmitting(false);

            setTimeout(() => {
                resetForm();
                setStatus({ success: false });
            }, 3000);
        }, 400);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    User Registration
                </h2>
                <p className="text-sm text-gray-600 mb-6 text-center">
                    Formik + Yup Validation
                </p>

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ handleSubmit, isSubmitting, status }) => (
                        <div>
                            {status && status.success && (
                                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                                    Registration successful!
                                </div>
                            )}

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                                        Username
                                    </label>
                                    <Field
                                        type="text"
                                        id="username"
                                        name="username"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your username"
                                    />
                                    <ErrorMessage
                                        name="username"
                                        component="p"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your email"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="p"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Password
                                    </label>
                                    <Field
                                        type="password"
                                        id="password"
                                        name="password"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                                        placeholder="Enter your password"
                                    />
                                    <ErrorMessage
                                        name="password"
                                        component="p"
                                        className="text-red-500 text-sm mt-1"
                                    />
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    type="button"
                                    className={`w-full py-2 px-4 rounded-lg transition duration-200 font-medium ${
                                        isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-purple-600 hover:bg-purple-700 text-white'
                                    }`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Register'}
                                </button>
                            </div>
                        </div>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormikForm;