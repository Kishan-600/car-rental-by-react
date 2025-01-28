import pic from "../Images/logo_pic.png";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg  "
        style={{
          background: "rgb(0, 204, 255)",
        }}
      >
        <div className="container-fluid">
          {/* Logo as Image */}
          <Link className="navbar-brand" to="#">
            <img src={pic} alt="Logo" style={{ height: "40px" }} />{" "}
            {/* Adjusted height */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link
                  className="nav-link active fw-bold"
                  aria-current="page"
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fw-bold" to='/blogs'>
                  Blogs
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fw-bold" to='/offer'>
                  OFFER
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className="nav-link fw-bold" to='/cars'>
                  car
                </Link>
              </li>

              <li className="nav-item mx-3">
                <Link className="nav-link active fw-bold" to="/Shops">
                  Shops
                </Link>
              </li>
            </ul>
          </div>

          {/* Right-aligned Login and Sign Up Buttons */}
          <div className="d-flex">
            <button
              className="btn btn-outline-light me-2"
              style={{ borderRadius: "20px" }}
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              Login
            </button>
            <div class="mb-3"></div>
            <button
              className="btn btn-light"
              style={{ borderRadius: "20px" }}
              data-bs-toggle="modal"
              data-bs-target="#signupModal"
            >
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Login Modal */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="loginModal"
        tabindex="-1"
        aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Login to Carwala
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Sign in modal */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Get an Carwala Account{" "}
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="cexampleInputPassword1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="cexampleInputPassword1"
                  />
                </div>
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" class="btn btn-primary">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
