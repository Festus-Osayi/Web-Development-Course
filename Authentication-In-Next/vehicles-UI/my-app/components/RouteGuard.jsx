import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isAuthenticated } from "@/lib/authenticate";

const PUBLIC_PATHS = ["/login", "/", "/_error"];
function RouteGuard(props) {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  function authCheck(url) {
    // redirect to login page if accessing a private page and not logged in
    const path = url.split("?")[0];
    if (!isAuthenticated() && !PUBLIC_PATHS.includes(path)) {
      setAuthorized(false);
      router.push("/login");
    } else {
      setAuthorized(true);
    }
  }
  useEffect(() => {
    // on initial load - run auth check
    authCheck(router.pathname);

    // on route change complete - run auth check
    router.events.on("routeChangeComplete", authCheck);

    // unsubscribe from events in useEffect return function
    return () => {
      router.events.off("routeChangeComplete", authCheck);
    };
  }, []);

  return <>{authorized && props.children}</>;
}

export default RouteGuard;
