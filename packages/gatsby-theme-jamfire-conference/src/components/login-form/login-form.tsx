// import libs
import React, { useContext, useCallback, useState } from "react"
import * as Yup from "yup"
import { useTranslation } from "react-i18next"
import { FormValues } from "./login-form.d"
import cx from "classnames"

// import components
import { ThemeContext } from "../../services/theme"
import { FirebaseContext } from "../../services"
import { Formik, FormikHelpers } from "formik"
import Error from "../error"

// import styles
import * as styles from "./login-form.module.scss"

export default () => {
  const [register, setRegister] = useState(false)

  const [loginError, setLoginError] = useState(null)

  const { firebase, setAuthToken } = useContext(FirebaseContext)

  const { setToggleLogin } = useContext(ThemeContext)

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
    <div className={styles.loginForm}>
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
            <div className={styles.fieldWrapper}>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder={t("auth.email")}
                aria-placeholder={t("auth.email")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && (
                <div className={styles.error}>{errors.email}</div>
              )}
            </div>
            <div className={styles.fieldWrapper}>
              <input
                className={styles.input}
                type="password"
                name="password"
                placeholder={t("auth.password")}
                aria-placeholder={t("auth.password")}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && (
                <div className={styles.error}>{errors.password}</div>
              )}
            </div>
            {register && (
              <div className={styles.fieldWrapper}>
                <input
                  className={styles.input}
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
                    <div className={styles.error}>
                      {errors.passwordConfirmation}
                    </div>
                  )}
              </div>
            )}
            {loginError && <Error>{loginError}</Error>}
            <div className={styles.fieldWrapper}>
              {register && (
                <>
                  <button
                    className={styles.button}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {t("auth.register")}
                  </button>
                  <button
                    className={styles.toggle}
                    onClick={() => setRegister(false)}
                  >
                    {t("auth.existingAccount")}
                  </button>
                </>
              )}
              {!register && (
                <>
                  <button
                    className={cx(styles.button, "email-login")}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {t("auth.login")}
                  </button>
                  <button
                    className={cx(styles.toggle, "register")}
                    onClick={() => setRegister(true)}
                  >
                    {t("auth.registerAccount")}
                  </button>
                </>
              )}
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
