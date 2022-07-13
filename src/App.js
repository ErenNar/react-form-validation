import { useState } from "react";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import * as Yup from "yup";
function App() {
  const [form, setForm] = useState({});
  return (
    <div className="App">
      <div className="container form-content">
        <div className="row justify-content-start align-items-start">
          <div className="col-6">
            <Formik
              initialValues={{
                name: "",
                mail: "",
                city: "",
                gender: "",
                password: "",
                repassword: "",
                agree: false,
              }}
              validationSchema={Yup.object({
                name: Yup.string()
                  .required("Boş Geçilmez")
                  .min(3, "en az 3 karakter olmalı"),
                mail: Yup.string()
                  .email("email olmalıdır")
                  .required("Boş Geçilmez"),
                gender: Yup.string()
                  .required("Boş Geçilmez")
                  .oneOf(["Kadın", "Erkek"]),
                city: Yup.string()
                  .oneOf(
                    ["Ankara", "İstanbul", "İzmir", "Bursa", "Adana"],
                    "Geçersiz değer"
                  )
                  .required("Boş Geçilmez"),
                password: Yup.string()
                  .required("Boş Geçilmez")
                  .min(5, "5 karakter olmalıdır"),
                repassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Şifreler Uyuşmuyor")
                  .required("Boş Geçilmez"),
                agree: Yup.boolean().required("Boş Geçilmez"),
              })}
              onSubmit={(values, { resetForm, setSubmitting }) => {
                setForm(values);
                setSubmitting(false);
                resetForm();
              }}
            >
              {({
                values,
                errors,
                handleSubmit,
                handleChange,
                dirty,
                isSubmitting,
                setFieldValue,
                handleBlur,
                touched,
              }) => {
                return (
                  <section>
                    <div className="row  ">
                      <div className="col-12">
                        <h3>Simple Form Validation</h3>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div className="col-12 my-3">
                          <input
                            className="form-control"
                            placeholder="isim alanı"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            id="name"
                          ></input>{" "}
                          {touched.name && errors.name ? (
                            <span className=" invalid-feedback d-flex justify-content-start">
                              {" "}
                              {errors.name}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-12 my-3">
                          <input
                            className="form-control"
                            placeholder="mail alanı"
                            value={values.mail}
                            id="mail"
                            onChange={handleChange}
                            onBlur={handleBlur}
                          ></input>
                          {touched.mail && errors.mail ? (
                            <span className=" invalid-feedback d-flex justify-content-start">
                              {" "}
                              {errors.mail}
                            </span>
                          ) : null}
                        </div>

                        <div className="col-12 my-3">
                          <select
                            value={values.city}
                            onChange={handleChange}
                            className="form-select"
                            id="city"
                            onBlur={handleBlur}
                          >
                            <option defaultValue="seciniz">Şehir Seç</option>
                            <option value="Ankara" label="Ankara"></option>
                            <option value="İstanbul" label="İstanbul"></option>
                            <option value="İzmir" label="İzmir"></option>
                            <option value="Bursa" label="Bursa"></option>
                            <option value="Adana" label="Adana"></option>
                          </select>
                          {touched.city && errors.city ? (
                            <span className=" invalid-feedback  d-flex justify-content-start">
                              {" "}
                              {errors.city}
                            </span>
                          ) : null}
                        </div>
                        <div className=" col-12 my-3">
                          <label className=" d-flex justify-content-start">
                            <input
                              type="radio"
                              name="test"
                              value="Kadın"
                              checked={values.gender === "Kadın"}
                              onChange={() => setFieldValue("gender", "Kadın")}
                              id="gender"
                              onBlur={handleBlur}
                            />
                            Kadın
                          </label>
                          <label className=" d-flex justify-content-start">
                            <input
                              id="gender"
                              type="radio"
                              name="gender"
                              value="Erkek"
                              checked={values.gender === "Erkek"}
                              onChange={() => setFieldValue("gender", "Erkek")}
                              onBlur={handleBlur}
                            />
                            Erkek
                          </label>
                          {touched.gender && errors.gender ? (
                            <span className=" invalid-feedback d-flex justify-content-start">
                              {" "}
                              {errors.gender}
                            </span>
                          ) : null}
                        </div>

                        <div className="col-12 my-3">
                          <input
                            onBlur={handleBlur}
                            id="password"
                            className="form-control"
                            placeholder="Şifre alanı"
                            value={values.password}
                            onChange={handleChange}
                          ></input>
                          {touched.password && errors.password ? (
                            <span className="  invalid-feedback d-flex justify-content-start">
                              {" "}
                              {errors.password}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-12 my-3">
                          <input
                            onBlur={handleBlur}
                            id="repassword"
                            className="form-control"
                            placeholder="Şİfre kontrol alanı"
                            value={values.repassword}
                            onChange={handleChange}
                          ></input>
                          {touched.repassword && errors.repassword ? (
                            <span className=" invalid-feedback  d-flex justify-content-start">
                              {" "}
                              {errors.repassword}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-12 my-3  d-flex justify-content-end">
                          <input
                            onBlur={handleBlur}
                            id="agree"
                            className="form-check-input"
                            type="checkbox"
                            value={values.agree}
                            onChange={handleChange}
                          ></input>
                          <label
                            className="form-check-label"
                            htmlFor="flexCheckDefault"
                          >
                            Sözleşmeyi Kabul Ediyorum
                          </label>
                          {touched.agree && errors.agree ? (
                            <span className="  invalid-feedback d-flex justify-content-start">
                              {" "}
                              {errors.agree}
                            </span>
                          ) : null}
                        </div>
                        <div className="col-12 my-3">
                          <button
                            className="btn btn-success"
                            type="submit"
                            disabled={
                              !dirty || isSubmitting || values.agree === false
                            }
                          >
                            Gönder
                          </button>
                        </div>
                      </form>
                    </div>
                  </section>
                );
              }}
            </Formik>
          </div>
          <div className="col-6">
            <h1>Form Verileri</h1>
            <div className="row">
              <div className="col-12">
                <strong>isim</strong>:<p>{form.name}</p>
                <strong>mail</strong>:<p>{form.mail}</p>
                <strong>Şehir</strong>:<p>{form.city}</p>
                <strong>Cinsiyet</strong>:<p>{form.gender}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
