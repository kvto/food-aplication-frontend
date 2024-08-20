import {
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
  } from "../../components/ui/form";
  import { cuisineList } from "../../../src/config/restaurant-options-config";
  import { useFormContext } from "react-hook-form";
  import CuisineCheckbox from "../manage-restaurant-form/CuisineCheckbox";
  
  const CuisinesSection = () => {
    const { control } = useFormContext();
  
    return (
      <div className="space-y-2">
        <div>
          <h2 className="text-2xl font-bold">Platillos</h2>
          <FormDescription>
            Seleccione los platillos que sirven en su restaurant
          </FormDescription>
        </div>
        <FormField
          control={control}
          name="cuisines"
          render={({ field }) => (
            <FormItem>
              <div className="grid md:grid-cols-5 gap-1">
                {cuisineList.map((cuisineItem, key) => (
                  <CuisineCheckbox key={key} cuisine={cuisineItem} field={field} />
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    );
  };
  
  export default CuisinesSection;