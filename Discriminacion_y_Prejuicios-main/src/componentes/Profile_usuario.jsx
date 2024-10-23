import React from "react";
import { Link } from "react-router-dom";
import { RiGlobalFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

function Profile_usuario() {
  return (
    <section style={{ backgroundColor: "#9cd2d3" }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://i.pinimg.com/736x/bb/9f/d9/bb9fd9d00445e089690c5f494d3508b4.jpg"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3">David Becerra</h5>
                <p className="text-muted mb-1">Propietario de la página</p>
                <p className="text-muted mb-4">Medellín, Colombia</p>
                <div className="d-flex justify-content-center mb-2"></div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img
                    src="https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/oMAAJMEQIBQlT9sfYeFJlEFkSNjcD1DRDCvtAg~tplv-tej9nj120t-origin.webp"
                    alt="avatar"
                    className="rounded-circle img-fluid"
                    style={{ width: "150px" }}
                  />
                  <h5 className="my-3">Isabella Fonnegra</h5>
                  <p className="text-muted mb-1">Propietaria de la página</p>
                  <p className="text-muted mb-4">Medellín, Colombia</p>
                  <div className="d-flex justify-content-center mb-2"></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src="https://www.excelsior.com.mx/media/inside-the-note/pictures/2024/10/22/captura_de_pantalla_2024-10-22_a_las_2.17.24_p.m.png"
                      alt="avatar"
                      className="rounded-circle img-fluid"
                      style={{ width: "150px" }}
                    />
                    <h5 className="my-3">Sara Restrepo</h5>
                    <p className="text-muted mb-1">Porpietaria de la cuenta</p>
                    <p className="text-muted mb-4">Medellín, Colombia</p>
                    <div className="d-flex justify-content-center mb-2"></div>
                  </div>
                </div>
                <div className="card mb-4 mb-lg-0">
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush rounded-3">
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <RiGlobalFill />
                        <p className="mb-0">
                          https://discriminacionyprejuicios.com
                        </p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <BsGithub />
                        <p className="mb-0">mdprejuicios</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <IoLogoTwitter style={{ color: "#55acee" }} />
                        <p className="mb-0">@discriminacionyprejuicios</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <BsInstagram style={{ color: "#ac2bac" }} />
                        <p className="mb-0">discriminacionyprejuicios</p>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                        <BsFacebook style={{ color: "#3b5998" }} />
                        <p className="mb-0">Discriminacion y Prejuicios</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          Discriminacion y Prejuicios
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          discriminacionhyprejuicios@gmail.com
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5078</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">(098) 775-4451</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">Medellín, Colombia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile_usuario;
