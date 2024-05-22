import { Link, Outlet } from "react-router-dom";
import { Toaster } from "./ui/toaster";

export function RootLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/ui-demo">UI Demo</Link>
          </li>
        </ul>
      </nav>

      <div>
        <Outlet />
      </div>
      <Toaster />
    </div>
  );
}
