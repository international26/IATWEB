import React from "react";
import Link from "next/link";

const RegisterArea = () => {
  return (
    <>
      <section className="Login-wrap pt-100 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="login-form">
                <div className="login-header bg-minsk">
                  <h2 className="text-left">Register</h2>
                  <span>Get Start With Us</span>
                </div>

                <div className="login-body">
                  <form className="form-wrap" action="#">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Name*"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email Address*"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            id="pwd"
                            name="pwd"
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            id="pwd_2"
                            name="pwd_2"
                            type="password"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="btn v6">Register</button>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group text-center">
                          <span className="or">Or Register With</span>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <ul className="social-profile v3 text-center mt-0">
                            <li>
                              <a target="_blank" href="https://instagram.com">
                                <i className="lab la-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="https://twitter.com">
                                <i className="lab la-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a target="_blank" href="https://facebook.com">
                                <i className="lab la-facebook-f"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="col-md-12 text-center">
                        <p className="mb-0">
                          Already Have An Account?{" "}
                          <Link href="/log-in" className="link">
                            Login
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterArea;
