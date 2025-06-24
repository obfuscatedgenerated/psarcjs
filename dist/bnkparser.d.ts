/// <reference types="node" />
import { Parser } from 'binary-parser';
export declare const HEADER: Parser.Next<{
    magic: string;
} & {
    chunkSize: number;
} & {
    soundbankVersion: number;
} & {
    soundbankID: number;
} & {
    languageID: number;
} & {
    hasFeedback: number;
}, "padding", Buffer>;
export declare const DIDX: Parser.Next<{
    magic: string;
} & {
    chunkSize: number;
} & {
    fileID: number;
} & {
    fileOffset: number;
}, "fileSize", number>;
export declare const DATA: Parser.Next<{
    magic: string;
} & {
    chunkSize: number;
}, "data", Buffer>;
export declare const HIRCSOUND: Parser.Next<{
    soundID: number;
} & {
    pluginID: number;
} & {
    streamType: number;
} & {
    fileID: number;
} & {
    sourceID: number;
} & {
    languageSpecific: number;
} & {
    overrideParent: number;
} & {
    numFX: number;
} & {
    parentBusID: number;
} & {
    directParentID: number;
} & {
    unkID1: number;
} & {
    mixerID: number;
} & {
    priorityOverrideParent: number;
} & {
    priorityApplyDist: number;
} & {
    overrideMidi: number;
} & {
    numParam: number;
} & {
    param1Type: number;
} & {
    param2Type: number;
} & {
    param3Type: number;
} & {
    param1Value: number;
} & {
    param2Value: number;
} & {
    param3Value: number;
} & {
    numRange: number;
} & {
    positionOverride: number;
} & {
    overrideGameAux: number;
} & {
    useGameAux: number;
} & {
    overrideUserAux: number;
} & {
    hasAux: number;
} & {
    virtualQueueBehavior: number;
} & {
    killNewest: number;
} & {
    useVirtualBehavior: number;
} & {
    maxNumInstance: number;
} & {
    isGlobalLimit: number;
} & {
    belowThresholdBehavior: number;
} & {
    isMaxNumInstOverrideParent: number;
} & {
    isVVoiceOptOverrideParent: number;
} & {
    stateGroupList: number;
} & {
    rtpcList: number;
}, "feedbackBus", number>;
export declare const HIRCACTORMIXER: Parser.Next<{
    mixerID: number;
} & {
    overrideParent: number;
} & {
    numFX: number;
} & {
    parentBusID: number;
} & {
    directParentID: number;
} & {
    unkID1: number;
} & {
    unkID2: number;
} & {
    priorityOverrideParent: number;
} & {
    priorityApplyDist: number;
} & {
    numParam: number;
} & {
    numRange: number;
} & {
    positionOverride: number;
} & {
    overrideGameAux: number;
} & {
    useGameAux: number;
} & {
    overrideUserAux: number;
} & {
    hasAux: number;
} & {
    virtualQueueBehavior: number;
} & {
    killNewest: number;
} & {
    useVirtualBehavior: number;
} & {
    maxNumInstance: number;
} & {
    isGlobalLimit: number;
} & {
    belowThresholdBehavior: number;
} & {
    isMaxNumInstOverrideParent: number;
} & {
    isVVoiceOptOverrideParent: number;
} & {
    stateGroupList: number;
} & {
    rtpcList: number;
} & {
    numchild: number;
}, "child1", number>;
export declare const HIRCACTION: Parser.Next<{
    actionID: number;
} & {
    actionType: number;
} & {
    objectID: number;
} & {
    isBus: number;
} & {
    numParam: number;
} & {
    numRange: number;
} & {
    fadeCurve: number;
}, "soundbankID", number>;
export declare const HIRCEVENT: Parser.Next<{
    eventID: number;
} & {
    numEvents: number;
}, "actionID", number>;
export declare const HIERARCHY: Parser.Next<{
    magic: string;
} & {
    chunkSize: number;
} & {
    numObjects: number;
} & {
    HIRC_SOUND: number;
} & {
    HIRC_SOUND_size: number;
} & {
    sound: {
        soundID: number;
    } & {
        pluginID: number;
    } & {
        streamType: number;
    } & {
        fileID: number;
    } & {
        sourceID: number;
    } & {
        languageSpecific: number;
    } & {
        overrideParent: number;
    } & {
        numFX: number;
    } & {
        parentBusID: number;
    } & {
        directParentID: number;
    } & {
        unkID1: number;
    } & {
        mixerID: number;
    } & {
        priorityOverrideParent: number;
    } & {
        priorityApplyDist: number;
    } & {
        overrideMidi: number;
    } & {
        numParam: number;
    } & {
        param1Type: number;
    } & {
        param2Type: number;
    } & {
        param3Type: number;
    } & {
        param1Value: number;
    } & {
        param2Value: number;
    } & {
        param3Value: number;
    } & {
        numRange: number;
    } & {
        positionOverride: number;
    } & {
        overrideGameAux: number;
    } & {
        useGameAux: number;
    } & {
        overrideUserAux: number;
    } & {
        hasAux: number;
    } & {
        virtualQueueBehavior: number;
    } & {
        killNewest: number;
    } & {
        useVirtualBehavior: number;
    } & {
        maxNumInstance: number;
    } & {
        isGlobalLimit: number;
    } & {
        belowThresholdBehavior: number;
    } & {
        isMaxNumInstOverrideParent: number;
    } & {
        isVVoiceOptOverrideParent: number;
    } & {
        stateGroupList: number;
    } & {
        rtpcList: number;
    } & {
        feedbackBus: number;
    };
} & {
    HIRC_ACTOR_MIXER: number;
} & {
    HIRC_ACTOR_MIXER_size: number;
} & {
    actor_mixer: {
        mixerID: number;
    } & {
        overrideParent: number;
    } & {
        numFX: number;
    } & {
        parentBusID: number;
    } & {
        directParentID: number;
    } & {
        unkID1: number;
    } & {
        unkID2: number;
    } & {
        priorityOverrideParent: number;
    } & {
        priorityApplyDist: number;
    } & {
        numParam: number;
    } & {
        numRange: number;
    } & {
        positionOverride: number;
    } & {
        overrideGameAux: number;
    } & {
        useGameAux: number;
    } & {
        overrideUserAux: number;
    } & {
        hasAux: number;
    } & {
        virtualQueueBehavior: number;
    } & {
        killNewest: number;
    } & {
        useVirtualBehavior: number;
    } & {
        maxNumInstance: number;
    } & {
        isGlobalLimit: number;
    } & {
        belowThresholdBehavior: number;
    } & {
        isMaxNumInstOverrideParent: number;
    } & {
        isVVoiceOptOverrideParent: number;
    } & {
        stateGroupList: number;
    } & {
        rtpcList: number;
    } & {
        numchild: number;
    } & {
        child1: number;
    };
} & {
    HIRC_ACTION: number;
} & {
    HIRC_ACTION_size: number;
} & {
    action: {
        actionID: number;
    } & {
        actionType: number;
    } & {
        objectID: number;
    } & {
        isBus: number;
    } & {
        numParam: number;
    } & {
        numRange: number;
    } & {
        fadeCurve: number;
    } & {
        soundbankID: number;
    };
} & {
    HIRC_EVENT: number;
} & {
    HIRC_EVENT_size: number;
}, "event", {
    eventID: number;
} & {
    numEvents: number;
} & {
    actionID: number;
}>;
export declare const STID: Parser.Next<{
    magic: string;
} & {
    chunkSize: number;
} & {
    stringType: number;
} & {
    numNames: number;
} & {
    soundbankID: number;
} & {
    len: number;
}, "soundbankName", string>;
export declare const BNKDATA: Parser.Next<{
    header: {
        magic: string;
    } & {
        chunkSize: number;
    } & {
        soundbankVersion: number;
    } & {
        soundbankID: number;
    } & {
        languageID: number;
    } & {
        hasFeedback: number;
    } & {
        padding: Buffer;
    };
} & {
    didx: {
        magic: string;
    } & {
        chunkSize: number;
    } & {
        fileID: number;
    } & {
        fileOffset: number;
    } & {
        fileSize: number;
    };
} & {
    data: {
        magic: string;
    } & {
        chunkSize: number;
    } & {
        data: Buffer;
    };
} & {
    hierarchy: {
        magic: string;
    } & {
        chunkSize: number;
    } & {
        numObjects: number;
    } & {
        HIRC_SOUND: number;
    } & {
        HIRC_SOUND_size: number;
    } & {
        sound: {
            soundID: number;
        } & {
            pluginID: number;
        } & {
            streamType: number;
        } & {
            fileID: number;
        } & {
            sourceID: number;
        } & {
            languageSpecific: number;
        } & {
            overrideParent: number;
        } & {
            numFX: number;
        } & {
            parentBusID: number;
        } & {
            directParentID: number;
        } & {
            unkID1: number;
        } & {
            mixerID: number;
        } & {
            priorityOverrideParent: number;
        } & {
            priorityApplyDist: number;
        } & {
            overrideMidi: number;
        } & {
            numParam: number;
        } & {
            param1Type: number;
        } & {
            param2Type: number;
        } & {
            param3Type: number;
        } & {
            param1Value: number;
        } & {
            param2Value: number;
        } & {
            param3Value: number;
        } & {
            numRange: number;
        } & {
            positionOverride: number;
        } & {
            overrideGameAux: number;
        } & {
            useGameAux: number;
        } & {
            overrideUserAux: number;
        } & {
            hasAux: number;
        } & {
            virtualQueueBehavior: number;
        } & {
            killNewest: number;
        } & {
            useVirtualBehavior: number;
        } & {
            maxNumInstance: number;
        } & {
            isGlobalLimit: number;
        } & {
            belowThresholdBehavior: number;
        } & {
            isMaxNumInstOverrideParent: number;
        } & {
            isVVoiceOptOverrideParent: number;
        } & {
            stateGroupList: number;
        } & {
            rtpcList: number;
        } & {
            feedbackBus: number;
        };
    } & {
        HIRC_ACTOR_MIXER: number;
    } & {
        HIRC_ACTOR_MIXER_size: number;
    } & {
        actor_mixer: {
            mixerID: number;
        } & {
            overrideParent: number;
        } & {
            numFX: number;
        } & {
            parentBusID: number;
        } & {
            directParentID: number;
        } & {
            unkID1: number;
        } & {
            unkID2: number;
        } & {
            priorityOverrideParent: number;
        } & {
            priorityApplyDist: number;
        } & {
            numParam: number;
        } & {
            numRange: number;
        } & {
            positionOverride: number;
        } & {
            overrideGameAux: number;
        } & {
            useGameAux: number;
        } & {
            overrideUserAux: number;
        } & {
            hasAux: number;
        } & {
            virtualQueueBehavior: number;
        } & {
            killNewest: number;
        } & {
            useVirtualBehavior: number;
        } & {
            maxNumInstance: number;
        } & {
            isGlobalLimit: number;
        } & {
            belowThresholdBehavior: number;
        } & {
            isMaxNumInstOverrideParent: number;
        } & {
            isVVoiceOptOverrideParent: number;
        } & {
            stateGroupList: number;
        } & {
            rtpcList: number;
        } & {
            numchild: number;
        } & {
            child1: number;
        };
    } & {
        HIRC_ACTION: number;
    } & {
        HIRC_ACTION_size: number;
    } & {
        action: {
            actionID: number;
        } & {
            actionType: number;
        } & {
            objectID: number;
        } & {
            isBus: number;
        } & {
            numParam: number;
        } & {
            numRange: number;
        } & {
            fadeCurve: number;
        } & {
            soundbankID: number;
        };
    } & {
        HIRC_EVENT: number;
    } & {
        HIRC_EVENT_size: number;
    } & {
        event: {
            eventID: number;
        } & {
            numEvents: number;
        } & {
            actionID: number;
        };
    };
}, "strings", {
    magic: string;
} & {
    chunkSize: number;
} & {
    stringType: number;
} & {
    numNames: number;
} & {
    soundbankID: number;
} & {
    len: number;
} & {
    soundbankName: string;
}>;
export interface BNKReturn {
    input: string;
    wem: string;
    bnk: string;
    fileID: number;
    soundbankID: number;
    soundID: number;
}
export declare function generate(dir: string, wemFile: string, tag: string, rename: boolean, preview: boolean): Promise<BNKReturn>;
export declare function getRandomInt(): number;
