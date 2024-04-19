import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { UseDispatch, useDispatch } from "react-redux";
import { changeTempUnit } from "@/redux/slices/global";

const UnitSwitch = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="degree" className="text-2xl font-semibold text-[rgb(47,93,138)]">
        C<sup>o</sup>
      </Label>
      <Switch
        id="degree"
        onCheckedChange={() => dispatch(changeTempUnit())}
      />
      <Label htmlFor="degree" className="text-2xl font-semibold text-[rgb(47,93,138)]">
        F<sup>&deg;</sup>
      </Label>
    </div>
  );
};

export default UnitSwitch;
