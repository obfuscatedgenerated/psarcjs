import { ToolkitInfo, Platform } from "./types/common";
export declare class Song2014 {
    song: ISong2014;
    constructor(song: ISong2014);
    static fromXML(xmlFile: string): Promise<Song2014>;
    xmlize(): {
        title: string;
        arrangement: string;
        part: number;
        offset: number;
        centOffset: number;
        songLength: number;
        startBeat: number;
        averageTempo: number;
        tuning: Tuning;
        capo: number;
        artistName: string;
        artistNameSort: string;
        albumName: string;
        albumNameSort: string;
        albumYear: string;
        crowdSpeed: string;
        arrangementProperties: SongArrangementProperties;
        lastConversionDateTime: string;
        phrases: SongPhrase[];
        phraseIterations: SongPhraseIteration[];
        newLinkedDiffs: SongNewLinkedDiff[];
        linkedDiffs: SongLinkedDiff[];
        phraseProperties: SongPhraseProperty[];
        chordTemplates: SongChordTemplate[];
        fretHandMuteTemplates: SongFretHandMuteTemplate[];
        ebeats: SongEbeat[];
        tonebase: string;
        tonea: string;
        toneb: string;
        tonec: string;
        toned: string;
        tones: SongTone[];
        sections: SongSection[];
        events: SongEvent[];
        controls: SongPhraseProperty[];
        transcriptionTrack: TranscriptionTrack;
        levels: SongLevel[];
    };
    generateXML(dir: string, tag: string, tk: ToolkitInfo): Promise<string>;
    generateSNG(dir: string, tag: string, platform: Platform): Promise<string>;
}
export declare class SongEbeat {
    time: number;
    measure?: number;
    static fromBeatData(beats: string[]): SongEbeat[];
    static fromXML(xmlData: object[]): SongEbeat[];
}
export declare class SongPhrase {
    disparity: number;
    ignore: number;
    maxDifficulty: number;
    name: string;
    solo: number;
    static fromXML(xmlData: object[]): SongPhrase[];
}
export declare class SongTone {
    time: number;
    name: string;
    static fromXML(xmlData: object[]): SongTone[];
}
export declare class SongSection {
    name: string;
    number: number;
    startTime: number;
    static fromXML(xmlData: object[]): SongSection[];
}
export declare class SongNote {
    time: number;
    string: number;
    fret: number;
    linkNext?: number;
    accent?: number;
    bend?: number;
    hammerOn?: number;
    harmonic?: number;
    hopo?: number;
    ignore?: number;
    leftHand?: number;
    mute?: number;
    palmMute?: number;
    pluck?: number;
    pullOff?: number;
    slap?: number;
    slideTo?: number;
    sustain?: number;
    tremolo?: number;
    harmonicPinch?: number;
    pickDirection?: number;
    rightHand?: number;
    slideUnpitchTo?: number;
    tap?: number;
    vibrato?: number;
    bendValues?: BendValue[];
    static fromNoteData(noteData: NoteData): SongNote[];
    static fromXML(xmlData: object[], chordNote?: boolean): SongNote[];
}
export declare class SongEvent {
    time: number;
    code: string;
    static fromXML(xmlData: object[]): SongEvent[];
}
export declare class SongChordTemplate {
    displayName: string;
    chordName: string;
    fret0: number;
    fret1: number;
    fret2: number;
    fret3: number;
    fret4: number;
    fret5: number;
    finger0: number;
    finger1: number;
    finger2: number;
    finger3: number;
    finger4: number;
    finger5: number;
    static fromXML(xmlData: object[]): SongChordTemplate[];
}
export declare class SongPhraseProperty {
    phraseId: number;
    redundant: number;
    levelJump: number;
    empty: number;
    difficulty: number;
    static fromXML(xmlData: object[]): SongPhraseProperty[];
}
export declare class SongLinkedDiff {
    parentId: number;
    childId: string;
    static fromXML(xmlData: object[]): SongLinkedDiff[];
}
export declare class SongNld_Phrase {
    id: number;
    static fromXML(xmlData: object[]): SongNld_Phrase[];
}
export declare class SongNewLinkedDiff {
    phraseCount: number;
    ratio: string;
    levelBreak: number;
    nld_phrase: SongNld_Phrase[];
    static fromXML(xmlData: object[]): SongNewLinkedDiff[];
}
export declare class HeroLevel {
    difficulty: number;
    hero: number;
    static fromXML(xmlData: object[]): HeroLevel[];
}
export declare class SongPhraseIteration {
    time: number;
    phraseId: number;
    variation: string;
    heroLevels: HeroLevel[];
    static fromXML(xmlData: object[]): SongPhraseIteration[];
}
export declare class BendValue {
    time: number;
    step: number;
    unk5: number;
    static fromXML(xmlData: object[]): BendValue[];
}
export interface Tuning {
    string0: number;
    string1: number;
    string2: number;
    string3: number;
    string4: number;
    string5: number;
}
export declare class SongArrangementProperties {
    bonusArr: number;
    Metronome: number;
    pathLead: number;
    pathRhythm: number;
    pathBass: number;
    routeMask: number;
    represent: number;
    standardTuning: number;
    nonStandardChords: number;
    barreChords: number;
    powerChords: number;
    dropDPower: number;
    openChords: number;
    fingerPicking: number;
    pickDirection: number;
    doubleStops: number;
    palmMutes: number;
    harmonics: number;
    pinchHarmonics: number;
    hopo: number;
    tremolo: number;
    slides: number;
    unpitchedSlides: number;
    bends: number;
    tapping: number;
    vibrato: number;
    fretHandMutes: number;
    slapPop: number;
    twoFingerPicking: number;
    fifthsAndOctaves: number;
    syncopation: number;
    bassPick: number;
    sustain: number;
}
export interface SongFretHandMuteTemplate {
}
export declare class SongHandShape {
    chordId: number;
    startTime: number;
    endTime: number;
    static fromXML(xmlData: object[]): SongHandShape[];
}
export declare class SongAnchor {
    time: number;
    fret: number;
    width: number;
    static fromXML(xmlData: object[]): SongAnchor[];
}
export declare class SongChord {
    time: number;
    linkNext: number;
    accent: number;
    chordId: number;
    fretHandMute?: number;
    highDensity?: number;
    ignore?: number;
    palmMute?: number;
    hopo?: number;
    strum?: number;
    chordNote: SongNote[];
    static fromXML(xmlData: object[]): SongChord[];
}
export declare class TranscriptionTrack {
    difficulty: number;
    notes: SongNote[];
    chords: SongChord[];
    anchors: SongAnchor[];
    handShapes: SongHandShape[];
    fretHandMutes: SongFretHandMuteTemplate[];
    static fromXML(xmlData: object[]): TranscriptionTrack;
}
export declare class SongLevel {
    difficulty: number;
    notes: SongNote[];
    chords: SongChord[];
    anchors: SongAnchor[];
    handShapes: SongHandShape[];
    static fromXML(xmlData: object[]): SongLevel[];
}
export interface ISong2014 {
    version: string;
    title: string;
    arrangement: string;
    part: number;
    offset: number;
    centOffset: number;
    songLength: number;
    startBeat: number;
    averageTempo: number;
    tuning: Tuning;
    capo: number;
    artistName: string;
    artistNameSort: string;
    albumName: string;
    albumNameSort: string;
    albumYear: string;
    crowdSpeed: string;
    arrangementProperties: SongArrangementProperties;
    lastConversionDateTime: string;
    phrases: SongPhrase[];
    phraseIterations: SongPhraseIteration[];
    newLinkedDiffs: SongNewLinkedDiff[];
    linkedDiffs: SongLinkedDiff[];
    phraseProperties: SongPhraseProperty[];
    chordTemplates: SongChordTemplate[];
    fretHandMuteTemplates: SongFretHandMuteTemplate[];
    ebeats: SongEbeat[];
    tonebase: string;
    tonea: string;
    toneb: string;
    tonec: string;
    toned: string;
    tones: SongTone[];
    sections: SongSection[];
    events: SongEvent[];
    controls: SongPhraseProperty[];
    transcriptionTrack: TranscriptionTrack;
    levels: SongLevel[];
}
export interface NoteData {
    version: string;
    notes: NoteTime[];
}
export interface NoteTime {
    string: number;
    fret: number;
    type: number;
    startTime: number;
    endTime: number;
}
export declare const getI: (item: string[]) => number;
export declare const getF: (item: string[]) => number;
export declare const getS: (item: string[]) => string;
