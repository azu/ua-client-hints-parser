/**
 * Supported browser names.
 */
export const brands = [
    ["edge", "Microsoft Edge"],
    ["opera", "Opera"],
    ["firefox", "Mozilla Firefox"],
    ["chrome", "Google Chrome"],
    ["safari", "Apple Safari"],
    ["msie", "Internet Explorer"]
] as const;

type Brands = typeof brands;
type ValueOf<T> = T[keyof T];
export type BrandNames = ValueOf<
    {
        [K in keyof Brands]: Brands[K];
    }
>;
