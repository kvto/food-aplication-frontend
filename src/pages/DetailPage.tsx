import { useParams } from "react-router-dom"
import { useGetRestaurant } from "../api/RestaurantApi";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const DetailPage = () => {
    const { restaurantId } = useParams();
    const { restaurant, isLoading} = useGetRestaurant(restaurantId);

    if(isLoading || !restaurant){
        return "Loading..."
    }

    
return (
    <div className="flex flex-col gap-10">
        <AspectRatio ratio={16/5}>
            <img 
            src={restaurant.lastUpdated}
            className="rounded-md object-cover h-full w-full"/>
        </AspectRatio>
    </div>
)
}

export default DetailPage; 