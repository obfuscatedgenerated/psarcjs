/// <reference types="node" />
import { Parser } from 'binary-parser';
import { PSARCHEADER, PSARCBOM, Platform, PSARCENTRY } from './types/common';
export declare const BLOCK_SIZE: number;
export declare const ARC_IV = "E915AA018FEF71FC508132E4BB4CEB42";
export declare const MAC_KEY = "9821330E34B91F70D0A48CBD625993126970CEA09192C0E6CDA676CC9838289D";
export declare const WIN_KEY = "CB648DF3D12A16BF71701414E69619EC171CCA5D2A142E3E59DE7ADDA18A3A30";
export declare const unzip: (data: Buffer) => Promise<Buffer>;
export declare const zip: (data: Buffer, level?: number) => Promise<Buffer>;
export declare const mod: (x: number, n: number) => number;
export declare function nextBlockSize(blockSize: number, mutipleOf?: number): number;
export declare function pad(buffer: Buffer, blocksize?: number): Buffer;
export declare function BOMDecrypt(buffer: Buffer): Uint8Array;
export declare function BOMEncrypt(buffer: Buffer): Uint8Array;
export declare function ENTRYDecrypt(data: Buffer, key: string): Promise<Buffer>;
export declare function ENTRYEncrypt(data: Buffer, platform: Platform): Promise<{
    buf: Buffer;
    iv: Buffer;
}>;
export declare function Decrypt(listing: string, contents: Buffer): Promise<Buffer>;
export declare function Encrypt(listing: string, contents: Buffer, platform: Platform): Promise<Buffer>;
export declare function readEntry(data: Buffer, idx: number, bomentries: PSARCBOM): Promise<Buffer>;
export declare const HEADER: Parser<PSARCHEADER>;
export declare const ENTRY: Parser<PSARCENTRY>;
export declare function BOM(entries: number): Parser<PSARCBOM>;
