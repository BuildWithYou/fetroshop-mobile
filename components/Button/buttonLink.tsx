import { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "../../utils/cn";
import { Link } from "expo-router";
import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    VariantProps<typeof textVariants> {
  className?: string;
  textClassName?: string;
  children: string | ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  href?: any;
}

export default function ButtonLink({
  children,
  className,
  textClassName,
  variant,
  size,
  pill,
  textStyle = variant,
  textSize,
  justify,
  onPress,
  href = "/uknow",
  ...props
}: ButtonProps) {
  return (
    <Link href={href} asChild>
      <TouchableOpacity
        className={cn(
          buttonVariants({ variant, size, pill, justify, className })
        )}
        onPress={onPress}
        {...props}
      >
        <Text
          className={cn(
            textVariants({ textStyle, textSize, className: textClassName })
          )}
        >
          {children}
        </Text>
      </TouchableOpacity>
    </Link>
  );
}

const buttonVariants = cva("flex flex-row items-center gap-1", {
  variants: {
    variant: {
      primary:
        "bg-primary border border-primary enabled:hover:bg-primaryDark focus:ring-2 focus:ring-primaryDark dark:bg-primaryDark dark:border-primary dark:enabled:hover:bg-primary dark:enabled:hover:border-primary dark:focus:ring-primary",
      secondary:
        "bg-secondary border border-secondary enabled:hover:bg-secondaryDark focus:ring-2 focus:ring-secondaryDark dark:bg-secondaryDark dark:border-secondary dark:enabled:hover:bg-secondary dark:enabled:hover:border-secondary dark:focus:ring-secondary",
      success:
        "bg-success border border-success enabled:hover:bg-successDark focus:ring-2 focus:ring-successDark dark:bg-successDark dark:border-success dark:enabled:hover:bg-success dark:enabled:hover:border-success dark:focus:ring-success",
      danger:
        "bg-danger border border-danger enabled:hover:bg-dangerDark focus:ring-2 focus:ring-dangerDark dark:bg-dangerDark dark:border-danger dark:enabled:hover:bg-danger dark:enabled:hover:border-danger dark:focus:ring-danger",
      warning:
        "bg-warning border border-warning enabled:hover:bg-warningDark focus:ring-2 focus:ring-warningDark dark:bg-warningDark dark:border-warning dark:enabled:hover:bg-warning dark:enabled:hover:border-warning dark:focus:ring-warning",
      info: "bg-info border border-info enabled:hover:bg-infoDark focus:ring-2 focus:ring-infoDark dark:bg-infoDark dark:border-info dark:enabled:hover:bg-info dark:enabled:hover:border-info dark:focus:ring-info",
      light:
        "bg-light border border-gray-200 enabled:hover:bg-gray-200 focus:ring-2 focus:ring-gray-200 dark:bg-gray-300 dark:border-light dark dark:enabled:hover:bg-light dark:enabled:hover:border-light dark:focus:ring-dark",
      dark: "bg-dark border border-dark enabled:hover:bg-gray-600 focus:ring-2 focus:ring-gray-600 dark:bg-dark dark:border-light dark:white dark:enabled:hover:bg-gray-900 dark:enabled:hover:border-light dark:focus:ring-info",
      outlinePrimary:
        "bg-transparent border-2 border-primary hover:border-primaryDark enabled:hover:bg-transparent focus:ring-2 focus:ring-primary dark:bg-transparent dark:border-primary dark:enabled:hover:bg-transparent dark:enabled:hover:border-primaryDark dark:focus:ring-primary",
      outlineSecondary:
        "bg-transparent border-2 border-secondary hover:border-secondaryDark enabled:hover:bg-transparent focus:ring-2 focus:ring-secondary dark:bg-transparent dark:border-secondary dark:enabled:hover:bg-transparent dark:enabled:hover:border-secondaryDark dark:focus:ring-secondary",
      outlineSuccess:
        "bg-transparent border-2 border-success hover:border-successDark enabled:hover:bg-transparent focus:ring-2 focus:ring-success dark:bg-transparent dark:border-success dark:enabled:hover:bg-transparent dark:enabled:hover:border-successDark dark:focus:ring-success",
      outlineDanger:
        "bg-transparent border-2 border-danger hover:border-dangerDark enabled:hover:bg-transparent focus:ring-2 focus:ring-danger dark:bg-transparent dark:border-danger dark:enabled:hover:bg-transparent dark:enabled:hover:border-dangerDark dark:focus:ring-danger",
      outlineWarning:
        "bg-transparent border-2 border-warning hover:border-warningDark enabled:hover:bg-transparent focus:ring-2 focus:ring-warning dark:bg-transparent dark:border-warning dark:enabled:hover:bg-transparent dark:enabled:hover:border-warningDark dark:focus:ring-warning",
      outlineInfo:
        "bg-transparent border-2 border-info hover:border-infoDark enabled:hover:bg-transparent focus:ring-2 focus:ring-info dark:bg-transparent dark:border-info dark:enabled:hover:bg-transparent dark:enabled:hover:border-infoDark dark:focus:ring-info",
      outlineLight:
        "bg-transparent border-2 border-light hover:border-gray-300 enabled:hover:bg-transparent focus:ring-2 focus:ring-light dark:bg-transparent dark:border-light dark:enabled:hover:bg-transparent dark:enabled:hover:border-gray-300 dark:focus:ring-light",
      outlineDark:
        "bg-transparent border-2 border-dark hover:border-gray-700 enabled:hover:bg-transparent focus:ring-2 focus:ring-dark dark:bg-transparent dark:border-dark dark:enabled:hover:bg-transparent dark:enabled:hover:border-gray-800 dark:focus:ring-dark",
      inlinePrimary:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-primary dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-primary",
      inlineSecondary:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-secondary dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-secondary",
      inlineSuccess:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-success dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-success",
      inlineDanger:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-danger dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-danger",
      inlineWarning:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-warning dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-warning",
      inlineInfo:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-info dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-info",
      inlineLight:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-light dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-gray-300",
      inlineDark:
        "bg-transparent enabled:hover:bg-transparent focus:ring-1 focus:ring-dark dark:bg-transparent dark:enabled:hover:bg-transparent dark:focus:ring-dark",
    },
    size: {
      xs: "px-1",
      sm: "px-1.5 py-0.5",
      md: "px-2 py-1",
      lg: "px-3 py-2",
      xl: "px-5 py-3",
    },
    pill: {
      full: "rounded-full",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      no: "",
    },
    justify: {
      center: "justify-center",
      around: "justify-around",
      evently: "justify-evently",
      between: "justify-between",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    pill: "md",
    justify: "center",
  },
});

const textVariants = cva("flex flex-row items-center gap-2", {
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
    justify: "center",
    textStyle: "primary",
    textSize: "md",
  },
});
