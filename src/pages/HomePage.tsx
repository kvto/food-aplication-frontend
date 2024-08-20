import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"
import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "../components/SearchBar";

const HomePage = () => {

    const navigate = useNavigate();

    const handleSearchSubmit = (searchFormValues: SearchForm) => {
      navigate({
        pathname: `/search/${searchFormValues.searchQuery}`,
      });
    };
    return(
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Sumérgete en una comida para llevar hoy mismo
                </h1>
                <span className="text-xl">¡La comida está a solo un clic de distancia!</span>
                <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} alt="" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                    ¡Ordene comida para llevar aún más rápido!
                    </span>
                    <span>
                    Descargue la aplicación KMeats para realizar pedidos más rápido y recomendaciones personalizadas
                    </span>
                    <img src={appDownloadImage} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomePage;