"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SNGDATA = exports.METADATADATA = exports.LEVELSDATA = exports.ANCHORSDATA = exports.ANCHOREXTENSIONSDATA = exports.FINGERPRINTARRDATA = exports.FINGERPRINTDATA = exports.NOTESDATA = exports.SECTIONDATA = exports.TONEDATA = exports.ACTIONSDATA = exports.NEWLINKEDDIFFSDATA = exports.PHRASEEXTRAINFOSDATA = exports.PHRASEITERATIONSDATA = exports.SYMBOLSDATA = exports.DEFINITIONDATA = exports.RECTDATA = exports.TEXTUREDATA = exports.HEADERARRAYDATA = exports.VOCALSDATA = exports.CHORDNOTESDATA = exports.BENDSDATA = exports.BENDDATA = exports.CHORDTEMPLATESDATA = exports.PHRASEDATA = exports.BEATSDATA = void 0;
var binary_parser_1 = require("binary-parser");
exports.BEATSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .uint16("measure")
    .uint16("beat")
    .uint32("phraseIteration")
    .uint32("mask");
exports.PHRASEDATA = new binary_parser_1.Parser()
    .endianness("little")
    .int8("solo")
    .int8("disparity")
    .int8("ignore")
    .int8("padding")
    .uint32("maxDifficulty")
    .uint32("phraseIterationLinks")
    .string("name", {
    encoding: 'utf-8',
    length: 32,
    stripNull: true,
});
exports.CHORDTEMPLATESDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("mask")
    .array("frets", {
    length: 6,
    type: 'int8',
})
    .array("fingers", {
    length: 6,
    type: 'int8',
})
    .array("notes", {
    length: 6,
    type: 'int32le',
})
    .string("name", {
    encoding: 'utf-8',
    length: 32,
    stripNull: true,
});
exports.BENDDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .floatle("step")
    .skip(3)
    .int8("UNK");
exports.BENDSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .array("bendValues", {
    length: 32,
    type: exports.BENDDATA,
})
    .uint32("count");
exports.CHORDNOTESDATA = new binary_parser_1.Parser()
    .endianness("little")
    .array("mask", {
    length: 6,
    type: "int32le"
})
    .array("bends", {
    length: 6,
    type: exports.BENDSDATA,
})
    .array("slideTo", {
    length: 6,
    type: "int8"
})
    .array("slideUnpitchTo", {
    length: 6,
    type: "int8"
})
    .array("vibrato", {
    length: 6,
    type: "int16le"
});
exports.VOCALSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .int32("note")
    .floatle("length")
    .string("lyrics", {
    encoding: 'utf-8',
    length: 48,
    stripNull: true,
});
exports.HEADERARRAYDATA = new binary_parser_1.Parser()
    .endianness("little")
    .array("item", {
    type: "int32le",
    length: 8,
});
exports.TEXTUREDATA = new binary_parser_1.Parser()
    .endianness("little")
    .string("fontpath", {
    encoding: 'ascii',
    length: 128,
    stripNull: true,
})
    .int32("fontpathLength")
    .skip(4)
    .int32("width")
    .int32("height");
exports.RECTDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("y0")
    .floatle("x0")
    .floatle("y1")
    .floatle("x1");
exports.DEFINITIONDATA = new binary_parser_1.Parser()
    .endianness("little")
    .string("name", {
    encoding: 'utf-8',
    length: 12,
    stripNull: true,
})
    .nest("outerRect", {
    type: exports.RECTDATA
})
    .nest("innerRect", {
    type: exports.RECTDATA,
});
exports.SYMBOLSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("ha_length")
    .array("header", {
    type: exports.HEADERARRAYDATA,
    length: "ha_length"
})
    .uint32("texture_length")
    .array("texture", {
    type: exports.TEXTUREDATA,
    length: "texture_length"
})
    .uint32("def_length")
    .array("definition", {
    type: exports.DEFINITIONDATA,
    length: "def_length"
});
exports.PHRASEITERATIONSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("phraseId")
    .floatle("startTime")
    .floatle("nextPhraseTime")
    .array("difficulty", {
    type: "uint32le",
    length: 3
});
exports.PHRASEEXTRAINFOSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("phraseId")
    .uint32("difficulty")
    .uint32("empty")
    .int8("levelJump")
    .int16le("redundant")
    .skip(1);
exports.NEWLINKEDDIFFSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .int32le("levelBreak")
    .uint32("nld_phrase_length")
    .array("nld_phrase", {
    type: "int32le",
    length: "nld_phrase_length"
});
exports.ACTIONSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .string("name", {
    encoding: 'ascii',
    length: 256,
    stripNull: true,
});
exports.TONEDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .uint32("id");
exports.SECTIONDATA = new binary_parser_1.Parser()
    .endianness("little")
    .string("name", {
    encoding: 'utf-8',
    length: 32,
    stripNull: true,
})
    .uint32("number")
    .floatle("startTime")
    .floatle("endTime")
    .uint32("startPhraseIterationId")
    .uint32("endPhraseIterationId")
    .array("stringMask", {
    type: "int8",
    length: 36,
});
exports.NOTESDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("mask")
    .uint32("flags")
    .uint32("hash")
    .floatle("time")
    .int8("string")
    .int8("fret")
    .int8("anchorFret")
    .int8("anchorWidth")
    .uint32("chordId")
    .uint32("chordNoteId")
    .uint32("phraseId")
    .uint32("phraseIterationId")
    .array("fingerPrintId", {
    type: "uint16le",
    length: 2
})
    .uint16le("nextIterNote")
    .uint16le("prevIterNote")
    .uint16le("parentPrevNote")
    .int8("slideTo")
    .int8("slideUnpitchTo")
    .int8("leftHand")
    .int8("tap")
    .int8("pickDirection")
    .int8("slap")
    .int8("pluck")
    .int16le("vibrato")
    .floatle("sustain")
    .floatle("maxBend")
    .uint32("bend_length")
    .array("bends", {
    type: exports.BENDDATA,
    length: "bend_length"
});
exports.FINGERPRINTDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("chordId")
    .floatle("startTime")
    .floatle("endTime")
    .floatle("UNK_startTime")
    .floatle("UNK_endTime");
exports.FINGERPRINTARRDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("item0_length")
    .array("I0", {
    type: exports.FINGERPRINTDATA,
    length: "item0_length"
});
exports.ANCHOREXTENSIONSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .int8("fret")
    .skip(7);
exports.ANCHORSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .floatle("time")
    .floatle("endTime")
    .floatle("UNK_time")
    .floatle("UNK_time2")
    .int32("fret")
    .int32("width")
    .int32("phraseIterationId");
/* @ts-ignore TODO fix this properly */
exports.LEVELSDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("difficulty")
    .uint32("anchors_length")
    .array("anchors", {
    type: exports.ANCHORSDATA,
    length: "anchors_length"
})
    .uint32("anchor_ext_length")
    .array("anchor_extensions", {
    type: exports.ANCHOREXTENSIONSDATA,
    length: "anchor_ext_length"
})
    .array("fingerprints", {
    type: exports.FINGERPRINTARRDATA,
    length: 2,
})
    .uint32("notes_length")
    .array("notes", {
    type: exports.NOTESDATA,
    length: "notes_length"
})
    .uint32("anpi_length")
    .array("averageNotesPerIter", {
    type: "floatle",
    length: "anpi_length"
})
    .uint32("niicni_length")
    .array("notesInIterCountNoIgnored", {
    type: "int32le",
    length: "niicni_length"
})
    .uint32("niic_length")
    .array("notesInIterCount", {
    type: "int32le",
    length: "niic_length"
});
exports.METADATADATA = new binary_parser_1.Parser()
    .endianness("little")
    .doublele("maxScores")
    .doublele("maxNotesAndChords")
    .doublele("maxNotesAndChords_Real")
    .doublele("pointsPerNote")
    .floatle("firstBeatLength")
    .floatle("startTime")
    .int8("capo")
    .string("lastConversionDateTime", {
    encoding: 'ascii',
    length: 32,
    stripNull: true,
})
    .int16le("part")
    .floatle("songLength")
    .uint32("tuningLength")
    .array("tuning", {
    type: "int16le",
    length: "tuningLength"
})
    .floatle("firstNoteTime")
    .floatle("firstNoteTime2")
    .int32le("maxDifficulty");
/* @ts-ignore TODO fix this properly */
exports.SNGDATA = new binary_parser_1.Parser()
    .endianness("little")
    .uint32("beats_length")
    .array("beats", {
    type: exports.BEATSDATA,
    length: "beats_length"
})
    .uint32("phrases_length")
    .array("phrases", {
    type: exports.PHRASEDATA,
    length: "phrases_length"
})
    .uint32("chord_templates_length")
    .array("chordTemplates", {
    type: exports.CHORDTEMPLATESDATA,
    length: "chord_templates_length"
})
    .uint32("chord_notes_length")
    .array("chordNotes", {
    type: exports.CHORDNOTESDATA,
    length: "chord_notes_length"
})
    .uint32("vocals_length")
    .array("vocals", {
    type: exports.VOCALSDATA,
    length: "vocals_length"
})
    .choice("symbols", {
    tag: "vocals_length",
    choices: {
        0: new binary_parser_1.Parser().skip(0),
    },
    defaultChoice: exports.SYMBOLSDATA
})
    .uint32("phrase_iter_length")
    .array("phraseIterations", {
    type: exports.PHRASEITERATIONSDATA,
    length: "phrase_iter_length"
})
    .uint32("phrase_extra_info_length")
    .array("phraseExtraInfos", {
    type: exports.PHRASEEXTRAINFOSDATA,
    length: "phrase_extra_info_length"
})
    .uint32("new_linked_diffs_length")
    .array("newLinkedDiffs", {
    type: exports.NEWLINKEDDIFFSDATA,
    length: "new_linked_diffs_length"
})
    .uint32("actions_length")
    .array("actions", {
    type: exports.ACTIONSDATA,
    length: "actions_length"
})
    .uint32("events_length")
    .array("events", {
    type: exports.ACTIONSDATA,
    length: "events_length"
})
    .uint32("tone_length")
    .array("tone", {
    type: exports.TONEDATA,
    length: "tone_length"
})
    .uint32("dna_length")
    .array("dna", {
    type: exports.TONEDATA,
    length: "dna_length"
})
    .uint32("sections_length")
    .array("sections", {
    type: exports.SECTIONDATA,
    length: "sections_length"
})
    .uint32("levels_length")
    .array("levels", {
    type: exports.LEVELSDATA,
    length: "levels_length"
})
    .nest("metadata", {
    type: exports.METADATADATA,
});
