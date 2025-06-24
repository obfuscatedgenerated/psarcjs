import { Platform } from './types/common';
export declare function Convert(file: string, tag: string, platform: Platform): Promise<string>;
export declare function getPlatforms(): Promise<any>;
export declare function Disconnect(): Promise<void>;
