<p align="center">
<a href="https://github/sandiz/psarcjs/"><img src="https://img.shields.io/github/workflow/status/sandiz/psarcjs/Github%20CI" /></a>
<a href="https://coveralls.io/github/sandiz/psarcjs?branch=master"><img src="https://coveralls.io/repos/github/sandiz/psarcjs/badge.svg?branch=master" /></a>
<img src="https://img.shields.io/github/license/sandiz/psarcjs.svg" />
</p>

# psarcjs
node.js v12 module to read/write Rocksmith PSARC and other related files

## Installation
    npm install https://github.com/obfuscatedgenerated/psarcjs.git

## Usage
```JavaScript
    const { PSARC } = require('psarcjs');
    const psarc = new PSARC('test/test.psarc');
    await psarc.parse(); /* parse file first before calling member functions */
    console.log(psarc.getFiles())
    /*
        [ 'gfxassets/album_art/album_butitrainedsong_64.dds',
          'gfxassets/album_art/album_butitrainedsong_128.dds',
          'gfxassets/album_art/album_butitrainedsong_256.dds',
          'flatmodels/rs/rsenumerable_root.flat',
        ...
    */
    console.log(await psarc.getArrangements());
    /*
        arrangements: { '00498E9999CD470BB7D310575BB85CAB':
        { ArrangementProperties:
            { bonusArr: 0,
              Metronome: 0,
              pathLead: 1,
              pathRhythm: 0,
              pathBass: 0,
    */
    await psarc.extractFile(
        psarc.getFiles().indexOf('manifests/songs_dlc_butitrainedsong/butitrainedsong_lead.json'), 
        '/tmp/lead.json', true);
    /*
        ~/P/psarcjs (master=) cat /tmp/lead.json | jq -r '.Entries | keys[] as $k | "\\($k), \\(.[$k] | .Attributes.SongName)"'
        00498E9999CD470BB7D310575BB85CAB, But It Rained
    */
```
```JavaScript
    const { SNG } = require("psarcjs");
    const util = require('util');

    async function fn() {
        const SNGER = new SNG('/path/to/3dooletm_lead.sng');
        await SNGER.parse();
        console.log(util.inspect(SNGER.sng, {
            depth: 2,
            maxArrayLength: 1,
            compact: false,
        }));
    }
    fn();

    /*
        {
            beats_length: 365,
            beats: [
                {
                  time: 10,
                  measure: 0,
                  beat: 0,
                  phraseIteration: 0,
                  mask: 3
                },
            ... 364 more items
            ],
            phrases_length: 9,
            phrases: [
              {
                solo: 0,
                disparity: 0,
                ignore: 0,
                maxDifficulty: 0,
                phraseIterationLinks: 1,
                name: 'default'
              },
              ... 8 more items
            ],
            ...
            metadata: {
                maxScores: 100000,
                maxNotes: 667,
                maxNotesNoIgnored: 656,
                pointsPerNote: 149.92503356933594,
                firstBeatLength: 0.6523332595825195,
                startTime: 10,
                capo: -1,
                lastConversionDateTime: '06-19-17 14:07',
                part: 1,
                songLength: 247.39199829101562,
                tuning_length: 6,
                tuning: [
                    0,
                    ... 5 more items
                ],
                firstNoteTime: 12.609000205993652,
                firstNoteTime2: 12.609000205993652,
                maxDifficulty: 21
            }
    */
```
```JavaScript
    const { WAAPI } = require("psarcjs");
    const util = require('util');

    async function fn() {
        /* WAAPI requires WWise to be installed and WWise Authoring API must be enabled (on by default) */
        /* more info here: https://www.audiokinetic.com/library/edge/?source=SDK&id=waapi_prepare.html */
        const f = await WAAPI.convert("/Users/sandi/Downloads/output.wav", "testTag", 1);
        console.log("Generated wem file", f);
    }
    fn();
    
    /*
    Found Wwise v2018.1.10!
    Project loaded Z:\var\folders\7s\d4104tx11fj3lyfk59687qzh0000gn\T\tmp-psarcjs
    Object created psarcjs-inputWav {169101CB-3ABF-4824-AE2E-525211365D23}
    Imported audio [ '{33A03605-A4EB-4B7C-9E2B-022AB5A8E183}' ]
    Waiting for conversion to finish...
    {
        platforms: [ '{FFF5CF3A-DF33-464D-ACB0-30013B91348C}' ],
        command: 'ConvertAllPlatform',
        objects: [
            {
                id: '{33A03605-A4EB-4B7C-9E2B-022AB5A8E183}',
                name: 'input',
                type: 'MusicTrack'
            }
        ]
    }
    Found wems in /var/folders/7s/d4104tx11fj3lyfk59687qzh0000gn/T/tmp-psarcjs/.cache/Windows/SFX [ 'output_CB1F3167.wem' ]
    Existing project closed!
    Disconnected!
    Generated wem file /var/folders/7s/d4104tx11fj3lyfk59687qzh0000gn/T/tmp-psarcjs/.cache/Windows/SFX/Song_testTag.wem
    */
```
```JavaScript
    const { BNK } = require("psarcjs");
    async function fn() {
        /* generate bnk and copy input wem to bnk-ready wem */
        const filesInfo: BNKReturn = await BNK.generate("/path/to/wem", "dlcName", true, "/tmp/");
        console.log(filesInfo);

         /* generate preview bnk but dont copy input wem */
        const filesInfo: BNKReturn = await BNK.generate("/path/to/wem", "dlcName", false, "/tmp/", true);
        console.log(filesInfo);
    }
    /*
    {
        input: '/path/to/wem',
        wem: '/tmp/1727797837.wem',
        bnk: '/tmp/Song_dlcName.bnk',
        fileID: 1727797837,
        soundbankID: 1040702684,
        soundID: 1885556048
    }
    {
        input: '/path/to/wem',
        wem: '/path/to/wem',
        bnk: '/tmp/Song_dlcName_Preview.bnk',
        fileID: 1799613382,
        soundbankID: 311679683,
        soundID: 230666728
    }
    */
    fn();
```

```JavaScript
    const { PSARC, Song2014 } = require("psarcjs");
    async function fn () {
        const tag = "cdlcTag";
        const toolkit: Toolkit = {
            author: 'author',
            comment: 'comment',
            version: '1',
            tk: {
                name: 'application_using_psarcjs',
                version: "0.0.1"
            }
        }
        
        const leadXMLs = [Song2014LeadObj.generateXML("/tmp/", tag, toolkit.tk)];
        const leadTones = ["test/blinktest/bwab1anthem_lead_tones.json"];
        
        const rhythmXMLs = [Song2014RhythmObj.generateXML("/tmp/", tag, toolkit.tk)];
        const rhythmTones = ["test/blinktest/bwab1anthem_rhythm_tones.json"];
        
        const bassXMLs = [Song2014BassObj.generateXML("/tmp/", tag, toolkit.tk)];
        const bassTones = ["test/blinktest/bwab1anthem_bass_tones.json"];
        
        const slightXMLs = [ShowLights.toXML(showlightsArray)];
        const vocalXMLs = [Vocals.toXML(vocalsArray)];
        
        const info: ArrangementInfo = {
            songName: "SONG_NAME",
            albumName: "ALBUM_NAME",
            year: 1999,
            currentPartition: 0,
            scrollSpeed: DEFAULT_VALUES.SCROLL_SPEED,
            volume: DEFAULT_VALUES.VOLUME,
            previewVolume: DEFAULT_VALUES.PREVIEW_VOLUME,
        }
        const dds = {
            '256': 'test/dds/album_poster_256.dds',
            '128': 'test/dds/album_poster_128.dds',
            '64': 'test/dds/album_poster_64.dds',
        }   
        const wem = {
            main: { wem: 'test/blinktest/1224431012.wem', bnk: 'test/blinktest/song_bwab1anthem.bnk' },
            preview: { wem: 'test/blinktest/376327087.wem', bnk: 'test/blinktest/song_bwab1anthem_preview.bnk' }
        }
        
        const pt = Platform.Mac;
        const outDir = await PSARC.generateDirectory(
            dir,
            tag, {
                xml: {
                    [ArrangementType.LEAD]: leadXMLs,
                    [ArrangementType.RHYTHM]: rhythmXMLs,
                    [ArrangementType.BASS]: bassXMLs,
                    [ArrangementType.SHOWLIGHTS]: slightXMLs,
                    [ArrangementType.VOCALS]: vocalXMLs,
                },
                tones: {
                    [ArrangementType.LEAD]: leadTones,
                    [ArrangementType.RHYTHM]: rhythmTones,
                    [ArrangementType.BASS]: bassTones,
                },
                dds,
                wem,
            },
            info,
            toolkit,
            pt,
        );
        const out = await PSARC.packDirectory(outDir, "/tmp/", tag, "", pt);
        console.log(out); 
        /* /tmp/cdlcTag_m.psarc */
    }
    fn();
```

## Features
- [X] PSARC read/write support
- [x] SNG read/write support
- [x] DDS read/write support
- [x] WEM read/write support (requires WWise to be installed)
- [x] BNK read/write support
- [x] SNG read/write support
- [x] SNG encryption/decryption support
- [x] VOCALS SNG support
- [x] MANIFEST read/write support (json, hsan)
- [X] GENERIC write support (aggregrategraph, xblock)

## TODO
 - [ ] Tones Generator
## Tests
  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

# Projects using psarcjs
- [rs-manager](https://github.com/sandiz/rs-manager)
- [rs-designer](https://github.com/sandiz/rs-designer)

# Alternatives
- [0x0L/rs-utils](https://github.com/0x0L/rs-utils) - python module
- [BuongiornoTexas/rsr-tools](https://github.com/BuongiornoTexas/rsrtools/blob/master/rsrtools/files/welder.py) - python module 

# Thanks
- [0x0L](https://github.com/0x0L) for the original python implementation (pyrocksmith)
- [rscustom-devs](https://github.com/rscustom/rocksmith-custom-song-toolkit) psarcjs sng implmentation is derived from the c# implemention. mocha tests for sng is using rstk to check for validity and compatibility. 
