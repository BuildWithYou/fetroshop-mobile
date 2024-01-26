import { Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "nativewind";
import { useState } from "react";
import { cva } from "class-variance-authority";
import cn from "../../utils/cn";

export default function Select({ title, className, textSize }: any) {
  const { colorScheme } = useColorScheme();
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }

  return (
    <TouchableOpacity
      className={cn(selectVariants({ textSize, className }))}
      onPress={handleClick}
    >
      <Text className="dark:text-white">{title}</Text>
      {/* <Ionicons
        name={open ? "chevron-up" : "chevron-down"}
        size={18}
        color={colorScheme == "dark" ? "white" : "black"}
      /> */}
    </TouchableOpacity>
  );
}

const selectVariants = cva(
  "flex flex-row items-center bg-slate-200 dark:bg-slate-700 rounded-md border border-primary px-2",
  {
    variants: {
      justify: {
        center: "justify-center",
        around: "justify-around",
        evently: "justify-evently",
        between: "justify-between",
      },
      textStyle: {
        primary: "text-white",
        secondary: "text-white",
        success: "text-white",
        danger: "text-white",
        warning: "text-white",
        info: "text-white",
        light: "text-white",
        dark: "text-white",
        outlinePrimary: "text-primary",
        outlineSecondary: "text-secondary",
        outlineSuccess: "text-success",
        outlineDanger: "text-danger",
        outlineWarning: "text-warning",
        outlineInfo: "text-info",
        outlineLight: "text-light",
        outlineDark: "text-dark",
        inlinePrimary: "text-primary",
        inlineSecondary: "text-secondary",
        inlineSuccess: "text-success",
        inlineDanger: "text-danger",
        inlineWarning: "text-warning",
        inlineInfo: "text-info",
        inlineLight: "text-light",
        inlineDark: "text-dark",
      },
      textSize: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-base",
        xl: "text-base",
      },
    },
    defaultVariants: {
      justify: "between",
      textStyle: "primary",
      textSize: "md",
    },
  }
);
