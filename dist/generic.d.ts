import { ArrangementDetails, Platform, ToolkitInfo, MetaArrangement } from "./types/common";
export declare class GENERIC {
    static generateToolkit(dir: string, author: string, comment: string, v2: string, tk: ToolkitInfo): Promise<string>;
    static generateAppid(dir: string): Promise<string>;
    static generateAggregateGraph(dir: string, tag: string, arrDetails: ArrangementDetails, platform: Platform): Promise<string>;
    static generateXBlock(arrs: Partial<MetaArrangement>[], tag: string, dir: string): Promise<string>;
}
