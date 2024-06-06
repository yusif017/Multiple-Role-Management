import Header from "@/components/Header";
import { getRoles } from "@/private/getRoles";
import PrivateRoute from "@/private/PrivateRoute";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const requiredRoles = getRoles(Component);
  return (
    <PrivateRoute roles={requiredRoles}>
      <Header/>
    <Component {...pageProps} />
  </PrivateRoute>
  );

}
