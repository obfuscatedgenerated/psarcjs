export declare class DDS {
    imageFile: string;
    ddsFiles: string[];
    constructor(file: string);
    convert(tag?: string): Promise<string[]>;
    parse(): Promise<object>;
}
