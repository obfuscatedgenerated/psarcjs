import { Parser } from 'binary-parser';
export declare const HEADER: Parser.Next<{
    MAGIC: string;
} & {
    header_length: number;
} & {
    flags: number;
} & {
    height: number;
} & {
    width: number;
} & {
    pitch: number;
} & {
    depth: number;
} & {
    mipmapCount: number;
} & {
    reserved: number[];
} & {
    pf_size: number;
} & {
    pf_flags: number;
} & {
    pf_fourcc: string;
} & {
    pf_rgbbitcount: number;
} & {
    pf_rbitmmask: number;
} & {
    pf_gbitmmask: number;
} & {
    pf_bbitmmask: number;
} & {
    pf_abitmmask: number;
} & {
    caps: number;
} & {
    caps2: number;
} & {
    caps3: number;
} & {
    caps4: number;
}, "reserved2", number>;
export declare function convert(image: string, tag: string): Promise<string[]>;
