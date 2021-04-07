import merge from "lodash.merge";
import defaultThemeColors from "@lekoarts/gatsby-theme-minimal-blog/src/gatsby-plugin-theme-ui/index"

export default merge({}, defaultThemeColors, {
    colors: {                
        primary: `#ff6732`,
        secondary: `#5f6c80`,
        toggleIcon: tailwind.colors.gray[8],
        heading: tailwind.colors.black,
        divide: tailwind.colors.gray[4],
        modes: {
          dark: {
            text: tailwind.colors.gray[4],
            primary: `#ff6733`,
            secondary: `#7f8ea3`,
            toggleIcon: tailwind.colors.gray[4],
            background: `#1A202C`,
            heading: tailwind.colors.white,
            divide: tailwind.colors.gray[8],
            muted: tailwind.colors.gray[8],
          },
        },
      }
})