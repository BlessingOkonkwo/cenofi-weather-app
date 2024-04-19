export interface searchSuggestion {
  id: string;
  fullname: string;
  lat: number;
  long: number;
}

export interface IIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}

export interface IInputIconProps extends IIconProps {
  focused?: boolean; // input focus state
  togglePasswordInput?: boolean; // password input visible state
}
