import type {
    ChainModifiers,
    Entry,
    EntryFieldTypes,
    EntrySkeletonType,
    LocaleCode,
} from "contentful"

export interface TypeProductMotorRentFields {
    title: EntryFieldTypes.Symbol
    brand: EntryFieldTypes.Symbol<"Honda" | "Kawasaki" | "Suzuki" | "Vespa" | "Yamaha">
    slug: EntryFieldTypes.Symbol
    image: EntryFieldTypes.AssetLink
    type: EntryFieldTypes.Symbol<"Hot" | "Regular">
    pricePerDay: EntryFieldTypes.Integer
    cc: EntryFieldTypes.Number
    transmission: EntryFieldTypes.Symbol<"Automatic" | "Manual">
    year: EntryFieldTypes.Integer
    gasTank: EntryFieldTypes.Integer
}

export type TypeProductMotorRentSkeleton = EntrySkeletonType<
    TypeProductMotorRentFields,
    "productMotorRent" | string
>
export type TypeProductMotorRent<
    Modifiers extends ChainModifiers,
    Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductMotorRentSkeleton, Modifiers, Locales>

export interface ContentfulImage {
    fields: {
        file: {
            url: string
            details: {
                image: {
                    height: number
                    width: number
                }
            }
        }
    }
}
