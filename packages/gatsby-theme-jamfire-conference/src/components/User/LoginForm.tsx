// import libs
import React, { useContext, useCallback, useState } from "react"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import { FormValues } from "./_props"

// import components
import { Context } from "../Context"
import { FirebaseContext } from "../../services"
import { Formik, FormikHelpers } from "formik"
import Error from "../Site/Error/Error"

// import form elements
import {
  LoginForm,
  FieldWrapper,
  FormError,
  Input,
  Button,
  Toggle,
} from "./_styles"

export default () => {
  const [register, setRegister] = useState(false)

  const [loginError, setLoginError] = useState(null)

  const { firebase, setAuthToken } = useContext(FirebaseContext)

  const { setToggleLogin } = useContext(Context)

  const { t } = useTranslation()

  // create user
  const onRegister = useCallback(
    async (
      { email, password }: FormValues,
      actions: FormikHelpers<FormValues>
    ) => {
      try {
        if (!firebase) return

        const { user } = await firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
        if (user) {
          const { refreshToken } = user
          setAuthToken(refreshToken)
          setToggleLogin(false)
        }

        actions.setStatus({ errors: [], success: true })
      } catch (error) {
        console.log(error)
        setLoginError(error.message)
      } finally {
        actions.setSubmitting(false)
      }
    },
    [firebase, setAuthToken]
  )

  // sign in user
  const onSignIn = useCallback(
    async (
      { email, password }: FormValues,
      actions: FormikHelpers<FormValues>
    ) => {
      try {
        if (!firebase) return

        const { user } = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
        if (user) {
          const { refreshToken } = user
          setAuthToken(refreshToken)
          setToggleLogin(false)
        }

        actions.setStatus({ errors: [], success: true })
      } catch (error) {
        console.log(error)
        setLoginError(error.message)
      } finally {
        actions.setSubmitting(false)
      }
    },
    [firebase, setAuthToken]
  )

  // signin form schema
  const SignInValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("auth.emailInvalid"))
      .required(t("auth.emailRequired")),
    password: Yup.string()
      .min(8, t("auth.passwordShort"))
      .required(t("auth.passwordRequired")),
  })

  // register form schema
  const RegisterValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("auth.emailInvalid"))
      .required(t("auth.emailRequired")),
    password: Yup.string()
      .min(8, t("auth.passwordShort"))
      .required(t("auth.passwordRequired")),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      t("auth.passwordMatch")
    ),
  })

  return (
    <LoginForm>
      <Formik
        initialValues={{ email: "", password: "", passwordConfirmation: "" }}
        initialStatus={{ errors: [], success: false }}
        validationSchema={
          register ? RegisterValidationSchema : SignInValidationSchema
        }
        onSubmit={register ? onRegister : onSignIn}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <p>{t("auth.loginEmail")}</p>
            <FieldWrapper>
              <Input
                type="email"
                name="email"
                placeholder={t("auth.email")}
                aria-placeholder={t("auth.email")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <FormError className="form-error">{errors.email}</FormError>
              )}
            </FieldWrapper>
            <FieldWrapper>
              <Input
                type="password"
                name="password"
                placeholder={t("auth.password")}
                aria-placeholder={t("auth.password")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <FormError className="form-error">{errors.password}</FormError>
              )}
            </FieldWrapper>
            {register && (
              <FieldWrapper>
                <Input
                  type="password"
                  name="passwordConfirmation"
                  placeholder={t("auth.passwordConfirm")}
                  aria-placeholder={t("auth.passwordConfirm")}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirmation}
                />
                {errors.passwordConfirmation &&
                  touched.passwordConfirmation && (
                    <FormError className="form-error">
                      {errors.passwordConfirmation}
                    </FormError>
                  )}
              </FieldWrapper>
            )}
            {loginError && <Error>{loginError}</Error>}
            <FieldWrapper>
              {register && (
                <>
                  <Button type="submit" disabled={isSubmitting}>
                    {t("auth.register")}
                  </Button>
                  <Toggle onClick={() => setRegister(false)}>
                    {t("auth.existingAccount")}
                  </Toggle>
                </>
              )}
              {!register && (
                <>
                  <Button
                    className="email-login"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {t("auth.login")}
                  </Button>
                  <Toggle onClick={() => setRegister(true)}>
                    {t("auth.registerAccount")}
                  </Toggle>
                </>
              )}
            </FieldWrapper>
          </form>
        )}
      </Formik>
    </LoginForm>
  )
}
