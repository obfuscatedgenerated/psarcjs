export declare class WEM {
    static convert(file: string, tag?: string): Promise<string>;
    static parse(wemFile: string): Promise<any>;
}
