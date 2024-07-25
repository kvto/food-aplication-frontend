import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button"

const MainNav = () => {
    const { loginWithRedirect } = useAuth0();
    return(
        <Button variant="ghost"
        className="text-xl font-bold text-orange-500 hover:bg-white"
        onClick={async () => await loginWithRedirect()}>
            Ingresar
        </Button>
    )
}

export default MainNav;