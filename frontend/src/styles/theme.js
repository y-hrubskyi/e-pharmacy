export const theme = Object.freeze({
  colors: {
    pageBg: "#f7f8fa",
    primaryBg: "#ffffff",
    backdrop: "rgba(29, 30, 33, 0.3)",
    primaryText: "#1d1e21",
    secondaryText: "rgba(29, 30, 33, 0.4)",
    green: (alpha = 1) => `rgba(89, 177, 122, ${alpha})`,
    red: (alpha = 1) => `rgba(232, 80, 80, ${alpha})`,
    hover: "#3f945f",
    border: "rgba(29, 30, 33, 0.1)",
    order: {
      completed: (alpha = 1) => `rgba(89, 177, 122, ${alpha})`,
      confirmed: (alpha = 1) => `rgba(128, 89, 228, ${alpha})`,
      pending: (alpha = 1) => `rgba(247, 144, 66, ${alpha})`,
      cancelled: (alpha = 1) => `rgba(232, 80, 80, ${alpha})`,
      processing: (alpha = 1) => `rgba(112, 166, 232, ${alpha})`,
    },
  },
  radii: {
    img: "30px",
    field: "60px",
    btn: "60px",
    modal: "12px",
    table: "8px",
  },
  transition: (prop = "") => `${prop} 250ms linear`,
  spacing: (value) => `${value * 4}px`,
});
