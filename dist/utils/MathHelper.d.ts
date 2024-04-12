export declare type Coordinate = {
    x: number;
    y: number;
};
/**
 * Adapted from https://nyxo.app/creating-a-clock-face-in-react-native-with-svg
 */
export declare const polarToCartesian: (centerX: number, centerY: number, radius: number, angleInDegrees: number) => Coordinate;
/**
 * Calculate angle between 3 given points
 * @param center center point in the 3-point angle
 * @param start start point (0deg reference point)
 * @param end end point
 * @returns angle between 3 given points
 */
export declare const calcAngle: (center: Coordinate, start: Coordinate, end: Coordinate) => number;
/**
 * Round off a value to nearest given step
 * @param value Target value
 * @param step range of one increment
 * @returns value rounded off to nearest step
 */
export declare const roundByStep: (value: number, step: number) => number;
