"use client";
import React, { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import Hidden from "./hidden";
import { SearchInputIcon } from "../atoms/icons/search-input-icon";

const SearchInput: FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
  name,
  placeholder,
  onChange,
  value,
  ...props
}) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  return (
    <div className="relative w-full">
      <Input
        autoComplete="off"
        name={name}
        value={value}
        type="search"
        onChange={onChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        variant="default"
        placeholder={placeholder ?? "Search location"}
        className="pl-[40px] h-[44px] rounded-[100px]"
        {...props}
      />
      {/* prefix Icon */}
      <span className="absolute top-[13px] left-[12px]">
        <SearchInputIcon focused={isFocus} />
      </span>
    </div>
  );
};

export default SearchInput;
