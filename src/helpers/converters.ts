import type { ComplexAttributeConverter } from 'lit';

/**
 * Boolean converter for lit properties.
 * 
 * @returns A converter that converts the string "false" to false and undefined to true.
 */
export const booleanConverter: ComplexAttributeConverter<boolean> = {
    fromAttribute(value) {
        if (value === "false" || value === undefined) return false;
        return true;
    },
}
