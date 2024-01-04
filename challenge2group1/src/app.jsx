import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { useEffect } from "react";
import { queryClient } from "./data/https";
import router from "./router/router";
import { dynamicPageTitle } from "./util/util";

export function App() {
  useEffect(() => {
    dynamicPageTitle();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
