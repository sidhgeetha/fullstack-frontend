import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import userServices from "../services/userServices";

export async function loader() {
  // get the currently logged in user
  const user = await userServices.getUser();

  // return the user
  return { user };
}

const Logout = () => {
  const navigate = useNavigate();

  const { user } = useLoaderData();

  console.log(user.data.user);
  const handleLogout = () => {
    userServices
      .signout()
      .then((response) => {
        // if the request is successful, log the response
        console.log(response);

        // redirect to the login page
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <p>Welcome {user ? user.data.user.name : "Guest"}!</p>
        <button onClick={handleLogout}>Log Out</button>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Logout;
