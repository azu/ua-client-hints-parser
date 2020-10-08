import { brands } from "./data/brands";

export const getBrowserName = (UAString: string): string => {
    const lowerCaseUAString = UAString.toLowerCase();
    for (let i = 0; i < brands.length; i++) {
        const [brandPattern, brandName] = brands[i];
        if (lowerCaseUAString.indexOf(brandPattern) !== -1) {
            return brandName;
        }
    }
    return "";
};
