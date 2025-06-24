import { ArrangementDetails, Platform } from "./types/common";
export declare enum TagType {
    tag = "tag",
    llid = "llid",
    canonical = "canonical",
    name = "name",
    relpath = "relpath",
    logpath = "logpath"
}
export declare enum TagValue {
    Database = "database",
    JsonDB = "json-db",
    HsanDB = "hsan-db",
    Application = "application",
    MusicgameSong = "musicgame-song",
    DDS = "dds",
    Image = "image",
    XML = "xml",
    Audio = "audio",
    WwiseSoundBank = "wwise-sound-bank",
    DX9 = "dx9",
    MacOS = "macos",
    EmergentWorld = "emergent-world",
    XWorld = "x-world",
    GamebryoSceneGraph = "gamebryo-scenegraph"
}
export declare class GraphItem {
    name: string;
    canonical: string;
    relpath: string;
    tags: string[];
    uuid: string;
    constructor();
    serialize: () => string;
}
export declare class GraphItemLLID {
    llid: string;
    name: string;
    canonical: string;
    relpath: string;
    logpath: string;
    tags: string[];
    uuid: string;
    constructor();
    serialize: () => string;
}
export declare function generate(dir: string, tag: string, details: ArrangementDetails, platform: Platform): Promise<string>;
export declare const getUuid: (a?: string) => string;
