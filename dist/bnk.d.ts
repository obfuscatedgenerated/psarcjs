/// <reference types="node" />
import * as BNKParser from './bnkparser';
export declare class BNK {
    static parse(bnkFile: string): Promise<{
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
    } & {
        strings: {
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
        };
    }>;
    static parseData(data: Buffer): Promise<{
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
    } & {
        strings: {
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
        };
    }>;
    static generate(wemFile: string, tag: string, copyWem: boolean, dir: string, preview?: boolean): Promise<BNKParser.BNKReturn>;
}
