import { useEffect } from "react";
import NavLink from "./nav-link";
// app/dashboard/page.tsx
export default function Dashboard() {

    useEffect(() => {
        throw new Error('error')
    },[])
    
    return <div>
        Dashboard Page.
        <NavLink />
        </div>;
  }
  