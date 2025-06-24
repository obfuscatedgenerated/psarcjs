/// <reference types="node" />
import * as SNGTypes from './types/sng';
import { Platform } from "./types/common";
export declare class SNG {
    sngFile: string;
    rawData: Buffer | null;
    packedData: Buffer | null;
    unpackedData: Buffer | null;
    sng: Partial<SNGTypes.SNGFORMAT> | null;
    packedSNG: SNGTypes.PackedSNG | null;
    private platform;
    constructor(file: string, platform: Platform);
    parse(): Promise<void>;
    pack(): Promise<void>;
    unpack(): Promise<void>;
}
