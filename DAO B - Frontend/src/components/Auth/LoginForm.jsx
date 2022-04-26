import { Link } from "react-router-dom";
import Submit from '../../elements/Submit';
import PageTitle from '../../components/Auth/PageTitle';
import { Form, Formik, Field } from 'formik';
import CustomFormikInput from '../../elements/CustomFormikInput';
import { loginValidation } from '../../utils/FormValidations';

export default function LoginForm() {

    const handleSubmit = (values) => {
        console.log(values);
        // login(loginState.email, loginState.password);
    };

    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
            }}
            validationSchema={loginValidation}
            onSubmit={values => {
                handleSubmit(values);
            }}
        >
            {(formik) => (
                <section>
                    <PageTitle>Sign In</PageTitle>
                    <Form>
                        <Field as={CustomFormikInput} type="email" name="email" label="Email" icons="fa-solid fa-envelope" placeholder="Enter email" />
                        <Field as={CustomFormikInput} type="password" name="password" label="Password" icons="fa-solid fa-lock" placeholder="Enter password" />
                        <Link to="/auth/restore" className="text-sm capitalize font-medium">Forgot password?</Link><br />
                        <Submit classes="mt-10">Sign In</Submit>
                    </Form>
                </section>
            )}
        </Formik>
    )
}
