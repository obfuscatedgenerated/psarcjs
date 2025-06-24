/// <reference types="node" />
import { SongEbeat, SongPhraseIteration, SongPhrase, SongChordTemplate, Tuning, SongNewLinkedDiff, SongEvent, SongTone, SongSection, SongLevel, ISong2014 } from "../song2014";
import { Vocals } from "./common";
export declare class BEND {
    time: number;
    step: number;
    UNK: number;
}
export declare class BENDS {
    count: number;
    bendValues: Array<BEND>;
}
export interface RECT {
    y0: number;
    x0: number;
    y1: number;
    x1: number;
}
export declare class BEATS {
    time: number;
    measure: number;
    beat: number;
    phraseIteration: number;
    mask: number;
    static fromSongEBeat(beats: SongEbeat[], pi: SongPhraseIteration[]): BEATS[];
}
export declare class PHRASES {
    solo: number;
    disparity: number;
    ignore: number;
    padding: number;
    maxDifficulty: number;
    phraseIterationLinks: number;
    name: string[32];
    static fromSongPhrase(phrases: SongPhrase[], pi: SongPhraseIteration[]): PHRASES[];
}
export declare class CHORDTEMPLATES {
    mask: number;
    frets: Array<number>;
    fingers: Array<number>;
    notes: Array<number>;
    name: string[32];
    static fromSongChordTemplate(ct: SongChordTemplate[], tuning: Tuning, arrangement: string, capo: number): CHORDTEMPLATES[];
}
export interface TEXTURE {
    fontpath: string[128];
    fontpathLength: number;
    width: number;
    height: number;
}
export interface DEFINITION {
    name: string[12];
    outerRect: RECT;
    innerRect: RECT;
}
export interface SYMBOLARR {
    item: Array<number>;
}
export interface SYMBOLS {
    header: Array<SYMBOLARR>;
    texture: Array<TEXTURE>;
    definition: Array<DEFINITION>;
}
export declare class VOCALS {
    time: number;
    note: number;
    length: number;
    lyrics: string[48];
    static fromVocals(vocals: Vocals[]): VOCALS[];
}
export declare class CHORDNOTES {
    mask: Array<number>;
    bends: Array<BENDS>;
    slideTo: Array<number>;
    slideUnpitchTo: Array<number>;
    vibrato: Array<number>;
}
export declare class PHRASEITERATIONS {
    phraseId: number;
    startTime: number;
    nextPhraseTime: number;
    difficulty: Array<number>;
    static fromPhraseIterations(pt: SongPhraseIteration[], sp: SongPhrase[], songLength: number): PHRASEITERATIONS[];
}
export interface PHRASEEXTRAINFOS {
    phraseId: number;
    difficulty: number;
    empty: number;
    levelJump: number;
    redundant: number;
}
export declare class NEWLINKEDDIFFS {
    levelBreak: number;
    nld_phrase_length: number;
    nld_phrase: number[];
    static fromNewLinkedDiffs(nld: SongNewLinkedDiff[]): NEWLINKEDDIFFS[];
}
export interface ACTIONS {
    time: number;
    name: string[256];
}
export declare class EVENTS {
    time: number;
    name: string[256];
    static fromEvents(evs: SongEvent[]): EVENTS[];
}
export declare class TONE {
    time: number;
    id: number;
    static fromTone(tones: SongTone[], toneObj: {
        tonebase: string;
        tonea: string;
        toneb: string;
        tonec: string;
        toned: string;
    }): TONE[];
}
export declare class DNA {
    time: number;
    id: number;
    static fromDNA(events: SongEvent[]): DNA[];
}
export declare class SECTIONS {
    name: string[32];
    number: number;
    startTime: number;
    endTime: number;
    startPhraseIterationId: number;
    endPhraseIterationId: number;
    stringMask: number[];
    static fromSections(sections: SongSection[], pi: SongPhraseIteration[], ph: SongPhrase[], levels: SongLevel[], ct: SongChordTemplate[], songLength: number): SECTIONS[];
}
export declare class METADATA {
    maxScores: number;
    maxNotesAndChords: number;
    maxNotesAndChords_Real: number;
    pointsPerNote: number;
    firstBeatLength: number;
    startTime: number;
    capo: number;
    lastConversionDateTime: string[32];
    part: number;
    songLength: number;
    tuningLength: number;
    tuning: number[];
    firstNoteTime: number;
    firstNoteTime2: number;
    maxDifficulty: number;
    static fromSong2014(song: ISong2014, PH: PHRASEITERATIONS[], levels: LEVELS[]): METADATA;
}
export interface ANCHORS {
    time: number;
    endTime: number;
    UNK_time: number;
    UNK_time2: number;
    fret: number;
    width: number;
    phraseIterationId: number;
}
export interface ANCHOREXTENSIONS {
    time: number;
    fret: number;
}
export interface FINGERPRINTS {
    chordId: number;
    startTime: number;
    endTime: number;
    UNK_startTime: number;
    UNK_endTime: number;
}
export declare class NOTES {
    mask: number;
    flags: number;
    hash: number;
    time: number;
    string: number;
    fret: number;
    anchorFret: number;
    anchorWidth: number;
    chordId: number;
    chordNoteId: number;
    phraseId: number;
    phraseIterationId: number;
    fingerPrintId: Array<number>;
    nextIterNote: number;
    prevIterNote: number;
    parentPrevNote: number;
    slideTo: number;
    slideUnpitchTo: number;
    leftHand: number;
    tap: number;
    pickDirection: number;
    slap: number;
    pluck: number;
    vibrato: number;
    sustain: number;
    maxBend: number;
    bend_length: number;
    bends: Array<BEND>;
}
export declare class FPW {
    item0_length: number;
    I0: FINGERPRINTS[];
}
export declare class LEVELS {
    difficulty: number;
    anchors_length: number;
    anchors: ANCHORS[];
    anchor_ext_length: number;
    anchor_extensions: ANCHOREXTENSIONS[];
    fingerprints: [FPW, FPW];
    notes_length: number;
    notes: NOTES[];
    anpi_length: number;
    averageNotesPerIter: number[];
    niicni_length: number;
    notesInIterCountNoIgnored: number[];
    niic_length: number;
    notesInIterCount: number[];
    static fromLevels(sl: SongLevel[], pi: SongPhraseIteration[], CT: CHORDTEMPLATES[], PH: PHRASEITERATIONS[], phrases: SongPhrase[]): LEVELS[];
}
export interface SNGFORMAT {
    beats_length: number;
    beats: BEATS[];
    phrases_length: number;
    phrases: PHRASES[];
    chord_templates_length: number;
    chordTemplates: CHORDTEMPLATES[];
    chord_notes_length: number;
    chordNotes: CHORDNOTES[];
    vocals_length: number;
    vocals: VOCALS[];
    symbols_length: number;
    symbols: SYMBOLS;
    phrase_iter_length: number;
    phraseIterations: PHRASEITERATIONS[];
    phrase_extra_info_length: number;
    phraseExtraInfos: PHRASEEXTRAINFOS[];
    new_linked_diffs_length: number;
    newLinkedDiffs: NEWLINKEDDIFFS[];
    actions_length: number;
    actions: ACTIONS[];
    events_length: number;
    events: EVENTS[];
    tone_length: number;
    tone: TONE[];
    dna_length: number;
    dna: DNA[];
    sections_length: number;
    sections: SECTIONS[];
    levels_length: number;
    levels: LEVELS[];
    metadata: METADATA;
}
export interface PackedSNG {
    magic: number;
    platformHeader: number;
    iv: Buffer;
    encryptedData: Buffer;
    signature: Buffer;
}
export interface UnpackedSNG {
    uncompressedLength: number;
    compressedData: Buffer;
}
export interface EncryptedSNG {
}
export declare function getChordNotes(): CHORDNOTES[];
export declare function getChordNotesDict(): {
    [key: number]: number;
};
export declare function getNoteCount(PH: PHRASEITERATIONS[], levels: LEVELS[], Level: number): number;
