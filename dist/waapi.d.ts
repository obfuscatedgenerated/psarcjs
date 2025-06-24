import { Platform } from './types/common';
export declare class WAAPI {
    static convert(file: string, tag: string, platform: Platform): Promise<string>;
}
