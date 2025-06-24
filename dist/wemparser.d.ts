/// <reference types="node" />
import { Parser } from 'binary-parser';
export declare const HEADER: Parser.Next<{
    magic: string;
} & {
    fileSize: number;
}, "riffType", string>;
export declare const DATA: Parser<undefined>;
export declare const PACKET: Parser.Next<{
    packet_size: number;
} & {
    first: {
        mode_number: number;
    } & {
        remainder: number;
    };
}, "rest", Buffer>;
export declare const SETUPPACKET: Parser.Next<{
    codebook_count: number;
}, "codebook_ids", Buffer>;
export declare const FORMAT: Parser.Next<{
    fmtMagic: string;
} & {
    fmtSize: number;
} & {
    formatTag: number;
} & {
    channels: number;
} & {
    sampleRate: number;
} & {
    avgBPS: number;
} & {
    sampleFrameSize: number;
} & {
    bitsPerSample: number;
} & {
    fmtSizeMinus0x12: number;
} & {
    unk1: number;
} & {
    subtype: number;
} & {
    sampleCount: number;
} & {
    modSignal: number;
} & {
    unk2: number[];
} & {
    setup_packet_offset: number;
} & {
    first_audio_packet_offset: number;
} & {
    unk3: number[];
} & {
    uid: number;
} & {
    bs_0: number;
} & {
    bs_1: number;
} & {
    bs_2: number;
} & {
    bs_3: number;
} & {
    unk4: number[];
} & {
    dataMagic: string;
} & {
    dataSize: number;
} & {
    unk5: Buffer;
} & {
    setup_packet_size: number;
} & {
    setup_package_data: Buffer;
}, "packets", ({
    packet_size: number;
} & {
    first: {
        mode_number: number;
    } & {
        remainder: number;
    };
} & {
    rest: Buffer;
})[]>;
export declare const WEMDATA: Parser<any>;
export declare function convert(wavFile: string, tag: string): Promise<string>;
