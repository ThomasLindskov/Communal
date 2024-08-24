type themeType = {
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
    white: string;
    cta: string;
    risk: string;
    background: string;
  };
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
  fontWeight: {
    regular: string;
    semibold: string;
    bold: string;
  };
  padding: {
    small: string;
    medium: string;
    large: string;
    // xl: string;
    xxl: string;
  };
  utils: {
    borderRadius: string;
    buttonBorderRadius: string;
    dropShadow: string;
    minHeight: string;
  };
  avatarSize: {
    small: string;
    medium: string;
    large: string;
  };
  flexGap: {
    small: string;
    medium: string;
    large: string;
  };
};

export const theme: themeType = {
  colors: {
    primary: "hsl(130, 6%, 20%)",
    secondary: "hsl(14, 10%, 52%)",
    tertiary: "hsl(0,0%, 80%)",
    white: "hsl(0,0%,100%)",
    cta: "hsl(36, 57%, 47%)",
    risk: "hsl(0, 100%, 31%)",
    background: "hsl(20, 10%, 88%)",
  },
  utils: {
    borderRadius: "10px",
    buttonBorderRadius: "15px",
    dropShadow: "0px 4px 4px hsl(0, 0%, 0%, 0.25)",
    minHeight: "200px",
  },
  fontSize: {
    small: "12px",
    medium: "18px",
    large: "24px",
  },
  fontWeight: {
    regular: "normal",
    semibold: "500",
    bold: "bold",
  },
  padding: {
    small: "5px",
    medium: "10px",
    large: "15px",
    xxl: "30px",
  },
  avatarSize: {
    small: "2rem",
    medium: "3rem",
    large: "4rem",
  },
  flexGap: {
    small: "5px",
    medium: "10px",
    large: "20px",
  },
};
