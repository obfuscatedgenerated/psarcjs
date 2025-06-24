/// <reference types="node" />
import { Arrangements, ArrangementType, ArrangementInfo, Toolkit, Platform } from './types/common';
export declare class PSARC {
    /**
     * Initialise psarc file instance
     *
     * @param {string} file path to psarc
     * @example
     * const psarc = new PSARC('test/test.psarc');
     * await psarc.parse();
     * console.log(psarc.getFiles());
     * @returns {this}
     */
    psarcFile: string;
    private psarcRawData;
    private BOMEntries;
    private listing;
    constructor(file: string | Buffer);
    /**
     * decrypt a psarc file and parse it, this function must be called first
     * before calling any other member functions
     */
    parse(): Promise<void>;
    /**
     * get all files in psarc
     *
     * @returns {Array} list of all files in the psarc
     */
    getFiles(): string[];
    /**
     * get all arrangements from file
     *
     * @returns {Object} json object representing an arrangement keyed with persistentID
     */
    getArrangements(): Promise<Arrangements>;
    /**
     * extract file from psarc
     *
     * @param {number} idx index of the file in file list (see getFiles())
     * @param {String} outfile path to output file
     * @param {Boolean}  tostring convert data to string before outputting
     * @returns {Boolean} true | false based on success / failure
     */
    extractFile(idx: number, outfile: string, tostring?: boolean): Promise<boolean>;
    /**
     * read file from psarc
     *
     * @param {number} idx index of the file in file list (see getFiles())
     * @returns {Buffer} file data
     */
    readFile(idx: number): Promise<Buffer | null>;
    /**
     * raw unencrypted psarc data
     *
     * @returns {Buffer} file raw data
     */
    getRawData(): Buffer | null;
    static existsAsync(path: string): Promise<unknown>;
    static generateDirectory(dir: string, tag: string, files: {
        xml: {
            [ArrangementType.LEAD]: string[];
            [ArrangementType.RHYTHM]: string[];
            [ArrangementType.BASS]: string[];
            [ArrangementType.SHOWLIGHTS]: string[];
            [ArrangementType.VOCALS]: string[];
        };
        tones: {
            [ArrangementType.LEAD]: string[];
            [ArrangementType.RHYTHM]: string[];
            [ArrangementType.BASS]: string[];
        };
        dds: {
            '256': string;
            '128': string;
            '64': string;
        };
        wem: {
            main: {
                wem: string;
                bnk: string;
            };
            preview: {
                wem: string;
                bnk: string;
            };
        };
    }, arrInfo: ArrangementInfo, toolkit: Toolkit, platform: Platform): Promise<string>;
    static packDirectory(packDir: string, outDir: string, tag: string, extra: string, platform: Platform): Promise<string | null>;
    static getFiles(dir: string): Promise<any[]>;
    static chunks(buffer: Buffer, chunkSize: number): Buffer[];
}
