export function dynamicPageTitle() {
  const pathName = window.location.pathname;
  let title = "";
  console.log(pathName);

  switch (pathName) {
    case "/":
      title = "Home";
      break;
    case "/products":
      title = "Products";
      break;
    case "/plantRegistration":
      title = "Plant Register";
      break;
    case "/about":
      title = "About";
      break;
    case "/userRegister":
      title = "User Register";
      break;
    default:
      title = "Plant Peace";
      break;
  }
  document.title = title;
}
