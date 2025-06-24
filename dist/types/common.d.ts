/// <reference types="node" />
import { SNG } from '../sng';
import { ISong2014, Tuning, SongArrangementProperties } from '../song2014';
export interface PSARCHEADER {
    MAGIC: string[4];
    VERSION: number;
    COMPRESSION: string[4];
    header_size: number;
    ENTRY_SIZE: number;
    n_entries: number;
    BLOCK_SIZE: number;
    ARCHIVE_FLAGS: number;
    bom: Buffer;
}
export interface PSARCENTRY {
    md5: string[16];
    zindex: number;
    length: Buffer;
    offset: Buffer;
}
export interface PSARCBOM {
    entries: PSARCENTRY[];
    zlength: number[];
}
export interface ToolkitInfo {
    name: string;
    version: string;
}
export interface Toolkit {
    author: string;
    comment: string;
    version: string;
    tk: ToolkitInfo;
}
export declare enum Platform {
    Windows = 0,
    Mac = 1
}
export declare type Arrangements = {
    [persistentID: string]: object;
};
export declare enum ArrangementTypeInt {
    LEAD = 0,
    RHYTHM = 1,
    COMBO = 2,
    BASS = 3,
    VOCALS = 4,
    JVOCALS = 5,
    SHOWLIGHTS = 6
}
export declare enum ArrangementType {
    LEAD = "lead",
    RHYTHM = "rhythm",
    BASS = "bass",
    VOCALS = "vocals",
    SHOWLIGHTS = "showlights"
}
export declare enum RouteMask {
    None = 0,
    Lead = 1,
    Rhythm = 2,
    Any = 3,
    Bass = 4
}
export declare enum DNAId {
    None = 0,
    Solo = 1,
    Riff = 2,
    Chord = 3
}
export interface ArrangementDetails {
    [ArrangementType.LEAD]: number;
    [ArrangementType.RHYTHM]: number;
    [ArrangementType.BASS]: number;
    [ArrangementType.VOCALS]: number;
    [ArrangementType.SHOWLIGHTS]: number;
}
export interface Manifest {
    entries: {
        [key: string]: {
            [key: string]: Attributes | AttributesHeader | VocalAttributes | VocalAttributesHeader;
        };
    };
    modelName?: string;
    iterationVersion?: number;
    insertRoot: string;
}
export interface HSANManifest {
    entries: {
        [key: string]: {
            [key: string]: AttributesHeader | VocalAttributesHeader;
        };
    };
    insertRoot: string;
}
export declare class AttributesHeader {
    albumArt: string;
    albumName: string;
    albumNameSort: string;
    arrangementName: string;
    artistName: string;
    artistNameSort: string;
    bassPick: number;
    capoFret: number;
    centOffset: number;
    dLC: boolean;
    dLCKey: string;
    dnaChords: number;
    dnaRiffs: number;
    dnaSolo: number;
    easyMastery: number;
    leaderboardChallengeRating: number;
    manifestUrn: string;
    masterID_RDV: number;
    metronome: number;
    mediumMastery: number;
    notesEasy: number;
    notesHard: number;
    notesMedium: number;
    representative: number;
    routeMask: number;
    shipping: boolean;
    sKU: string;
    songDiffEasy: number;
    songDiffHard: number;
    songDiffMed: number;
    songDifficulty: number;
    songKey: string;
    songLength: number;
    songName: string;
    songNameSort: string;
    songYear: number;
    tuning: Tuning;
    persistentID: string;
}
export declare class Attributes {
    arrangementProperties: SongArrangementProperties;
    arrangementSort: number;
    arrangementType: ArrangementTypeInt;
    blockAsset: string;
    chords: {
        [key: string]: {
            [key: string]: number[];
        };
    };
    chordTemplates: Array<ManifestChordTemplate>;
    dynamicVisualDensity: Array<number>;
    fullName: string;
    lastConversionDateTime: string;
    masterID_PS3: number;
    masterID_XBox360: number;
    maxPhraseDifficulty: number;
    phraseIterations: Array<ManifestPhraseIteration>;
    phrases: Array<ManifestPhrase>;
    previewBankPath: string;
    relativeDifficulty: number;
    score_MaxNotes: number;
    score_PNV: number;
    sections: Array<ManifestSection>;
    showlightsXML: string;
    songAsset: string;
    songAverageTempo: number;
    songBank: string;
    songEvent: string;
    songOffset: number;
    songPartition: number;
    songXml: string;
    targetScore: number;
    techniques: {
        [key: string]: {
            [key: string]: number[];
        };
    };
    tone_A: string;
    tone_B: string;
    tone_Base: string;
    tone_C: string;
    tone_D: string;
    tone_Multiplayer: string;
    tones: Array<ManifestTone>;
    inputEvent: string;
    songVolume: number;
    previewVolume: number;
}
export interface ArrangementInfo {
    songName: string;
    albumName: string;
    persistentID?: string;
    year?: number;
    currentPartition: number;
    scrollSpeed: number;
    volume: number;
    previewVolume: number;
}
export interface ArrangementOptions {
    tag: string;
    sortOrder: number;
    volume: number;
    previewVolume: number;
    bassPicked?: boolean;
    represent?: boolean;
    details: ArrangementDetails;
    tones: ManifestTone[];
    info?: ArrangementInfo;
}
export declare type MetaArrangement = Arrangement | VocalArrangement;
export declare class Arrangement {
    song2014: ISong2014;
    arrType: ArrangementType;
    header: AttributesHeader;
    main: Attributes;
    constructor(song: ISong2014, sng: SNG, options: ArrangementOptions);
    private getSongDifficulty;
    private getMaxDifficulty;
    private getPhraseIterations;
    private getPhrases;
    private getSections;
    private getChordTemplates;
    private getChords;
    private getTechniques;
    private getNoteTech;
    private getDynamicDesnity;
    private getTones;
}
export declare class VocalAttributes {
    arrangementSort: number;
    blockAsset: string;
    dynamicVisualDensity: number[];
    fullName: string;
    masterID_PS3: number;
    masterID_XBox360: number;
    maxPhraseDifficulty: number;
    previewBankPath: string;
    relativeDifficulty: number;
    score_MaxNotes: number;
    score_PNV: number;
    showlightsXML: string;
    songAsset: string;
    songAverageTempo: number;
    songBank: string;
    songEvent: string;
    songPartition: number;
    songXml: string;
    targetScore: number;
    inputEvent: string;
    songVolume: number;
    previewVolume: number;
}
export declare class VocalAttributesHeader {
    albumArt: string;
    arrangementName: string;
    capoFret: number;
    DLC: boolean;
    DLCKey: string;
    leaderboardChallengeRating: number;
    manifestUrn: string;
    masterID_RDV: number;
    shipping: boolean;
    SKU: string;
    songKey: string;
    persistentID: string;
}
export declare class VocalArrangement {
    arrType: ArrangementType;
    header: VocalAttributesHeader;
    main: VocalAttributes;
    constructor(options: ArrangementOptions);
}
export interface ManifestChordTemplate {
    chordId: number;
    chordName: string;
    fingers: number[];
    frets: number[];
}
export interface ManifestPhraseIteration {
    phraseIndex: number;
    maxDifficulty: number;
    name: string;
    startTime: number;
    endTime: number;
}
export interface ManifestPhrase {
    iterationCount: number;
    maxDifficulty: number;
    name: string;
}
export interface ManifestSection {
    name: string;
    uIName: string;
    number: number;
    startTime: number;
    endTime: number;
    startPhraseIterationIndex: number;
    endPhraseIterationIndex: number;
    isSolo: boolean;
}
export interface ManifestTone {
    gearList: ToneGear;
    isCustom: boolean;
    volume: string;
    toneDescriptors: string[];
    key: string;
    nameSeparator: string;
    name: string;
    sortOrder: number;
}
export declare const ManifestToneReviver: (key: string, value: any) => any;
export declare const ManifestReplacer: (allKeys: string[], key: string, value: any) => any;
export interface ToneGear {
    rack1: TonePedal;
    rack2?: TonePedal;
    rack3?: TonePedal;
    rack4?: TonePedal;
    amp: TonePedal;
    cabinet: TonePedal;
    prePedal1: TonePedal;
    prePedal2?: TonePedal;
    prePedal3?: TonePedal;
    prePedal4?: TonePedal;
    postPedal1: TonePedal;
    postPedal2?: TonePedal;
    postPedal3?: TonePedal;
    postPedal4?: TonePedal;
}
export interface TonePedal {
    type: string;
    knobValues: {
        [key: string]: number;
    };
    key: string;
    category?: string;
    skin?: string;
    skinIndex?: number;
}
export declare class ShowLights {
    time: number;
    note: number;
    static fromXML(xmlFile: string): Promise<ShowLights[]>;
    static toXML(sl: ShowLights[]): string;
}
export declare class Vocals {
    time: number;
    note: number;
    length: number;
    lyric: string;
    static fromXML(xmlFile: string): Promise<Vocals[]>;
    static toXML(sl: Vocals[]): string;
    static generateSNG(dir: string, tag: string, vocals: Vocals[], platform: Platform): Promise<string>;
}
export interface PSARCOptions {
    tag: string;
    platform: Platform;
    toolkit: {
        author: string;
        comment: string;
        version: string;
        tk: ToolkitInfo;
    };
    arrDetails: ArrangementDetails;
    dds: {
        '256': string;
        '128': string;
        '64': string;
    };
    audio: {
        main: {
            wem: string;
            bnk: string;
        };
        preview: {
            wem: string;
            bnk: string;
        };
    };
    songs: {
        xmls: {
            [ArrangementType.LEAD]: string[];
            [ArrangementType.BASS]: string[];
            [ArrangementType.RHYTHM]: string[];
            [ArrangementType.VOCALS]: string[];
            [ArrangementType.SHOWLIGHTS]: string[];
        };
        sngs: {
            [ArrangementType.LEAD]: string[];
            [ArrangementType.BASS]: string[];
            [ArrangementType.RHYTHM]: string[];
            [ArrangementType.VOCALS]: string[];
        };
        manifests: {
            [ArrangementType.LEAD]: string[];
            [ArrangementType.BASS]: string[];
            [ArrangementType.RHYTHM]: string[];
            [ArrangementType.VOCALS]: string[];
        };
        hsan: string;
        arrangements: (Arrangement | VocalArrangement)[];
    };
}
