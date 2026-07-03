# Audio assets

Drop **audio + text pairs** here. Anything in `public/` is served as-is by Vite
and copied into the build **without ever being wiped** — unlike `dist/`, which is
regenerated (and emptied) on every `npm run build`. So this is the safe home for
media; never put source assets in `dist/`.

## Pairing convention

Each clip is a pair that shares the **same base filename**:

```
public/audio/
  dec-briefing-01.mp3    ← the audio
  dec-briefing-01.txt    ← its paired text (transcript / caption / subtitle)
  probe-contact.ogg
  probe-contact.txt
```

- **Audio**: `.mp3`, `.ogg`, or `.wav` (mp3/ogg preferred for size).
- **Text**: `.txt` with the **same base name**. Use it for the transcript /
  on-screen caption / subtitle for that clip (whatever the hook-in needs).
- Base names should be lowercase kebab-case, no spaces (e.g. `sector-cleared.mp3`).

Subfolders are fine if you want to group them (e.g. `public/audio/vo/`,
`public/audio/sfx/`); the base-name pairing still applies within a folder.

## How it will be referenced (later)

At runtime, files here are reachable by URL from the site root — the `public/`
prefix is dropped:

```
/audio/dec-briefing-01.mp3
/audio/dec-briefing-01.txt
```

So the eventual audio hook-in can load a clip and its text by base name, e.g.
`new Audio('/audio/dec-briefing-01.mp3')` and `fetch('/audio/dec-briefing-01.txt')`.
No code needs to change here — just drop the pairs in and we wire playback when
it's time.
