import { Arrangement, VocalArrangement } from "./types/common";
export declare class MANIFEST {
    static generateJSON(dir: string, tag: string, arr: Arrangement | VocalArrangement): Promise<string>;
    static generateHSAN(dir: string, tag: string, arrs: (Arrangement | VocalArrangement)[]): Promise<string>;
}
