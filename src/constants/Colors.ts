export type Color = keyof typeof AVAILABLE_COLORS;

export const AVAILABLE_COLORS = {
    "transparent": {
        "DEFAULT": "transparent",
    },
    "white": {
        "DEFAULT": "#ffffff",
    },
    "black": {
        "DEFAULT": "#000000",
    },
    gray: {
        "50": "#F6F6F6",
        "100": "#F2F2F2",
        "200": "#C6C6C6",
        "300": "#939393",
        "400": "#838383",
        "500": "#696969",
        "600": "#434343",
        "700": "#2C2C2C",
        "800": "#222222",
        "900": "#181818",
        "DEFAULT": "#838383",
    },
    blue: {
        "100": "#EEF4FF",
        "300": "#6CC6F8",
        "500": "#3F80F1",
        "700": "#3653E8",
        "900": "#1844A0",
        "DEFAULT": "#3F80F1",
    },
    violet: {
        "100": "#EFEAFD",
        "300": "#B9AAF9",
        "500": "#9B86F7",
        "700": "#816AF4",
        "900": "#5B43EA",
        "DEFAULT": "#9B86F7",
    },
    green: {
        "100": "#E2F8ED",
        "300": "#84E1B6",
        "500": "#3CD699",
        "700": "#00CC81",
        "900": "#00B161",
        "DEFAULT": "#3CD699",
    },
    pink: {
        "100": "#FFE7FA",
        "300": "#E9A2B6",
        "500": "#FF60E5",
        "700": "#D946EF",
        "900": "#B900C3",
        'DEFAULT': "#FF60E5",
    },
    yellow: {
        '100': "#FFF8C2",
        '300': "#FFE94E",
        '500': "#FFD62A",
        '700': "#FBA41C",
        '900': "#F87A10",
        'DEFAULT': "#FFD62A",
    },
    red: {
        '100': "#FFDEE4",
        '300': "#F8A0A2",
        '500': "#FF5C5C",
        '700': "#F74342",
        '900': "#C82728",
        'DEFAULT': "#FF5C5C",
    }
} as const;

export const get = (color: Color, shade: string = "DEFAULT") => {
    return AVAILABLE_COLORS ? AVAILABLE_COLORS[color] ? (AVAILABLE_COLORS[color] as any)[shade] ? (AVAILABLE_COLORS[color] as any)[shade] : false : false : false;
}

const hexToRgb = (hex: string) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export const getCssVariables = () => {
    const colors = Object.keys(AVAILABLE_COLORS);
    return colors.map(color => {
        const shades = Object.keys(AVAILABLE_COLORS[color as Color]);
        return shades.map(shade => {
            const value = get(color as Color, shade);
            const hexVar = shade !== "DEFAULT" ? `--${color}-${shade}: ${value};` : `--${color}: ${value};`;

            const rgbValue = hexToRgb(value);
            var rgbVar = shade !== "DEFAULT" ? `--${color}-${shade}-rgb: ${rgbValue?.r}, ${rgbValue?.g}, ${rgbValue?.b};` : `--${color}-rgb: ${rgbValue?.r}, ${rgbValue?.g}, ${rgbValue?.b};`;
            rgbVar = rgbValue ? rgbVar : "";

            return `${hexVar} ${rgbVar}`;
        });
    }).flat().join(" ");
}

export const getTailwindColors = () => {
    return AVAILABLE_COLORS;
}