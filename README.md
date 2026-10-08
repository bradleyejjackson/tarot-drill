# Tarot Correspondence Drill

A study tool for learning the correspondences of the **Thoth** and **Rider–Waite–Smith** tarot decks: titles, numbers, elements, planets, signs, decans, Hebrew letters and Sephiroth.

It doesn't interpret cards. It helps you memorise the system behind them, so you can read a spread without reaching for the book.

**▶ Open the app:** `https://bradleyejjackson.github.io/tarot-drill/`

It runs entirely in your browser. There's nothing to sign up for, it installs to your phone's home screen, and it works offline.

---

## Features

### Spread
- Draw 1, 3, 4, 5, 7 or 10 (Celtic Cross) cards, or any number up to 22, with optional reversals.
- Choose what each card shows: name, number, suit, element, planet, sign, Thoth title, Hebrew letter, Sephirah, decan dates, esoteric title, or the other deck's name.
- Hidden fields can be tapped to reveal, so you can test yourself on a spread.

### Quiz
- **Smart review:** spaced repetition. Weak and overdue items come first, and items you know come back at growing intervals (1 day, 3 days, 1 week, 2 weeks, 5 weeks). After a correct answer you mark **Knew it** or **Guessed**, and guesses are reviewed again soon.
- **Shuffled rounds:** every question once per round, in random order.
- **Daily ten:** ten due items a day, with a day streak.
- **Speed round:** as many as you can in 60 seconds.
- Questions go both ways (card → fact and fact → card). Answer by multiple choice or by typing; typed answers accept common variants and small typos ("4 cups", "Pentacles", "Tiferet", "King of Cups" for the Thoth Knight).
- **Hints** give the rule rather than the answer, for example the Chaldean order of the decan planets.
- **Pattern questions** test the structure: which planet rules the next decan, which three cards make up a sign, which card doesn't belong, which court card rules a decan.
- Every answer is followed by a short explanation that places the card in the system.

### Read
- **Elemental dignities:** practise how neighbouring cards strengthen or weaken each other, in pairs or in rows of three, using the modern Thoth rules (Fire–Air and Water–Earth friendly, Fire–Water and Air–Earth contrary, Fire–Earth and Air–Water neutral). Each answer shows the relationship between every pair of cards.
- **Practice reading:** draw two or three cards (or use your last spread), write your own reading, then reveal each card's Thoth keywords, Waite's RWS meaning (reversed when the card is), its dignity, and the patterns in the spread: dominant element, trumps, courts, repeated numbers, shared planets and signs.
- **Journal:** save your readings and reopen them later.

### Meanings
- **Thoth keywords:** a starter set of short keywords for every card, written to be rewritten. Edit them on the Reference tab and the quiz, spreads and readings use your words.
- **RWS meanings:** A. E. Waite's divinatory meanings, upright and reversed, from *The Pictorial Key to the Tarot* (1910, public domain).
- Quiz yourself on both: card → meaning is self-checked (Missed / Close / Got it); meaning → card is multiple choice. Both feed the spaced repetition.

### Wheel & Tree
- **Zodiac wheel:** all 36 decans. Tap any decan, sign, court card or Ace to see what it covers, or switch to *Find it* and locate cards on the wheel.
- **Tree of Life:** the ten Sephiroth and the 22 lettered paths, with the same *Explore* and *Find it* modes.

### Match
- Pair cards with their titles, planets, Hebrew letters and more, six pairs per board, with a best clean time for each topic.

### Progress
- A mastery map of every card and topic, shaded by how well you know it. Tap any square to be quizzed on it.
- Progress bars for four study stages: numbered cards; courts and Majors; astrology and decans; meanings.

### Reference
- A full table of all 78 cards and their attributions.

You can show **Thoth names, RWS names, or both**. Switching handles the differences between the decks: Lust/Strength and Adjustment/Justice numbering, Disks/Pentacles, Knight–Queen–Prince–Princess vs King–Queen–Knight–Page, and Crowley's Tzaddi/Heh swap.

---

## Your progress

Progress, your edited keywords and your journal are saved in your browser on each device and never leave it.

- **Progress → Save progress file** downloads a `.json` backup.
- **Progress → Load progress file** merges a backup into the current device, keeping the more recent result for each item, so nothing is lost.

Use these to back up your work or to move it between your phone and computer.

---

## Install on your phone

Open the app's address in Chrome on Android and tap **Install app** next to the subtitle, or use ⋮ → **Add to Home screen**. On an iPhone, use Safari's Share → **Add to Home Screen**.

After the first visit it works without a connection.

---

## Sources

RWS divinatory meanings are from A. E. Waite, *The Pictorial Key to the Tarot* (1910), which is in the public domain. The Thoth keywords are original starter summaries, meant to be replaced with your own.

## Correspondences

Attributions follow the Hermetic Order of the Golden Dawn's *Book T* as used in Aleister Crowley's Thoth deck: decans and their Thoth titles, court card zodiac spans, Book T esoteric titles, and the Hebrew letter paths on the Tree of Life. Decan dates are approximate and shift by a day or so each year.

If you find an attribution that doesn't match your sources, please open an issue.

---

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app: one self-contained page |
| `manifest.webmanifest` | App name and icons, so it can be installed |
| `sw.js` | Offline support |
| `icon-*.png`, `apple-touch-icon.png`, `favicon.png` | App icons |

To update the app, replace `index.html` and commit. GitHub Pages republishes it within a minute or two, and installed copies pick up the change the next time they open online. If you edit `sw.js`, change its `VERSION` line too.

## License

See [`LICENSE`](LICENSE).
