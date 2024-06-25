import { theme } from "#styles/theme";

const minTablet = "@media only screen and (min-width: 768px)";

export const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: "100%",
    padding: `${theme.spacing(3)} ${theme.spacing(4.25)}`,
    borderRadius: theme.radii.field,
    border: `1px solid ${theme.colors.border}`,
    cursor: "pointer",
    boxShadow: "none",
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: theme.colors.border,
    },
    "& .css-tj5bde-Svg": {
      transform: state.menuIsOpen && "rotate(180deg)",
    },
    [minTablet]: {
      width: 220,
    },
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    color: theme.colors.primaryText,
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: theme.colors.secondaryText,
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    marginLeft: 0,
    marginRight: 0,
    color: "inherit",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0,
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
    height: 16,
    width: 16,
    color: theme.colors.primaryText,
    "&:hover": {
      color: theme.colors.primaryText,
    },
    "& .css-tj5bde-Svg": {
      width: "100%",
      height: "100%",
      transition: theme.transition("transform"),
    },
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    height: 140,
    marginTop: theme.spacing(1),
    marginBottom: 0,
    paddingTop: theme.spacing(3.25),
    paddingRight: theme.spacing(2),
    paddingBottom: theme.spacing(3.25),
    zIndex: 10,
    backgroundColor: theme.colors.green(),
    borderRadius: 15,
    boxShadow: "none",
    border: "none",
    [minTablet]: {
      marginTop: theme.spacing(2),
    },
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    height: "100%",
    paddingTop: 0,
    paddingBottom: 0,
    "&::-webkit-scrollbar": {
      width: 6,
    },
    "&::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 12,
      background: "rgba(255, 255, 255, 0.4)",
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    paddingTop: theme.spacing(0.75),
    paddingBottom: theme.spacing(0.75),
    paddingLeft: theme.spacing(4.25),
    paddingRight: theme.spacing(3.5),
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "-0.02em",
    color: [
      state.isSelected ? theme.colors.pageBg : "rgba(255, 255, 255, 0.5)",
    ],
    cursor: "pointer",
    backgroundColor: "transparent",
    transition: theme.transition("color"),
    "&:hover": {
      color: theme.colors.primaryBg,
    },
    "&:active": {
      backgroundColor: "transparent",
    },
    [minTablet]: {
      fontSize: 14,
      lineHeight: 1.28571,
    },
  }),
};
