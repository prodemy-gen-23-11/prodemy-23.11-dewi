import React from "react";
import FormStyle from "../component/form/FormStyle";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/reducer/authSlice";
import { Link, useNavigate } from "react-router-dom";

function Loginpage() {
  const schema = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
  });
  
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/login", data)
      .then((res) => {
        const { accessToken , user } = res.data
        dispatch(setToken(accessToken));
        dispatch(setUser(user)); 
        navigate('/');
        alert("berhasil login");
      })
      .catch((err) => {
        alert("gagal login");
        console.error(err.response);
      });
  };
  return (
    <div className=" m-34 p-10">
      <Link to={"/"}>
      <div className="text-3xl p-10"><i class="fa-solid fa-house"></i></div>
      </Link>
      
 <div className="flex justify-center items-center m-5  ">
      <FormStyle>
        <FormStyle.Title>Login</FormStyle.Title>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormStyle.Body>
            <label htmlFor="email" className="label-style">
              {" "}
              Email{" "}
            </label>
            <div>
              <input
                {...register("email")}
                id="email"
                placeholder="user@email.com"
                name="email"
                className="form-style"
              />
              <p className="error">{errors.email?.message}</p>
            </div>
          </FormStyle.Body>
          <FormStyle.Body>
            <label htmlFor="password" className="label-style">
              {" "}
              Password{" "}
            </label>
            <div>
              <input
                {...register("password")}
                placeholder="password"
                name="password"
                id="password"
                className="form-style"
                type="password"
              />
            </div>
            <p className="error">{errors.password?.message}</p>
          </FormStyle.Body>
          <FormStyle.Footer>
            <button className="btn " type="submit">
              Login
            </button>
          </FormStyle.Footer>
        </form>
      </FormStyle>
    </div>
    </div>
   
  );
}

export default Loginpage;
