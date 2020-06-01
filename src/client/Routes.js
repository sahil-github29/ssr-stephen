import UsersListPage from "./pages/UsersListPage";
import HomePage from "./pages/HomePage";

export default [
  {
    ...HomePage,
    path: "/",
    exact: true,
  },
  {
    ...UsersListPage,
    path: "/users",
  },
];
