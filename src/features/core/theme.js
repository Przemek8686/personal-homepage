const colorName = {
    mineShaft: "#252525",
    slateGray: "#6E7E91",
    scienceBlue: "#0366D6",
    scienceBlueLighter: "#0366d633",
    scienceBlueDarker: "#0366d680",
    white: "#FFFFFF",
    mercury: "#E5E5E5",
    whiteLilac: "#FBFBFE",
    iron: "#D1D5DA",
    ironLighter: "#d1d5da4d",
    ironDarker: "#363636b8",
    dodgerBlue: "#2188FF",
    mineShaftLighter: "#313131",
    doveGray: "#686868",
    cornflowerBlue: "#6195ED",
    shipCove: "#6D93BE",
};

const commonTheme = {
    breakpoint: {
        mobileMax: 776,
        tabletMax: 1200,
        tabletMin: 777,
    },
};

export const lightTheme = {
    ...commonTheme,
    colors: {
        primary: colorName.scienceBlue,
        textPrimary: colorName.mineShaft,
        site: {
            background: colorName.whiteLilac,
            text: colorName.slateGray
        },
        buttonLink: {
            background: colorName.scienceBlue,
            text: colorName.white,
            border: colorName.cornflowerBlue
        },
        headerLine: colorName.mercury,
        boxBackground: colorName.white,
        themeSwitch: {
            background: colorName.mercury,
            backgroundIcon: colorName.slateGray,
            colorIcon: colorName.white,
            border: colorName.iron,
        },
        footerIcons: colorName.mineShaft,
        repositoriesList: {
            header: colorName.scienceBlue,
            text: colorName.slateGray,
            link: colorName.scienceBlue,
            border: colorName.ironLighter,
            borderHover: colorName.scienceBlueLighter,
            borderLink: colorName.scienceBlueLighter,
            linkHover: colorName.scienceBlue,
        },
        buttonErrorColor: colorName.white,
    },
};

export const darkTheme = {
    ...commonTheme,
    colors: {
        primary: colorName.dodgerBlue,
        textPrimary: colorName.white,
        site: {
            background: colorName.mineShaft,
            text: colorName.white,
        },
        buttonLink: {
            background: colorName.dodgerBlue,
            text: colorName.white,
            border: colorName.shipCove
        },
        headerLine: colorName.iron,
        boxBackground: colorName.mineShaftLighter,
        themeSwitch: {
            background: colorName.doveGray,
            backgroundIcon: colorName.white,
            colorIcon: colorName.mineShaft,
            border: colorName.iron,
        },
        footerIcons: colorName.white,
        repositoriesList: {
            header: colorName.white,
            text: colorName.white,
            link: colorName.dodgerBlue,
            border: colorName.ironDarker,
            borderHover: colorName.scienceBlueDarker,
            borderLink: colorName.scienceBlueDarker,
            linkHover: colorName.cornflowerBlue,
        },
        buttonErrorColor: colorName.white,
    },
};