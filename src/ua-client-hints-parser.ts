export type NavigatorUABrandVersion = {
    brand: string; // "Google Chrome" aka. browser name
    version: string; // "84" aka. browser major version
};
export const getNavigatorUABrands = (): NavigatorUABrandVersion[] => {};

export type UADataValues = {
    platform: string; // "PhoneOS" aka. OS name
    platformVersion: string; // "10A" aka. OS version
    architecture: string; // "arm" or ""
    model: string; // "X644GTM" or ""
    uaFullVersion: string; // "73.32.AGX.5"
};
export const getHighEntropyValues = (): Promise<UADataValues[]> => {};
