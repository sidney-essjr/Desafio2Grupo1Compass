export function dynamicPageTitle(pathName) {
  console.log(pathName);
  let title = "";

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
    case "/userRegister/signin":
      title = "Sing In";
      break;
    default:
      title = "Plant Peace";
      break;
  }
  document.title = title;
}
