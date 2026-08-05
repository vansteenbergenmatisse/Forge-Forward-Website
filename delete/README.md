# delete/ — throwaway

Scratch work: the 12 structural design explorations for the `/booked` confirmation page.
Safe to delete this whole folder at any time. Nothing in the real app imports it.

- `Gallery.tsx` — client component: all 12 desktop (1440px) designs + the modal gallery. Design #2 (boxed steps) is interactive and responsive.
- `page.tsx` — the Next route wrapper it used to run under.

## To view it again
It stopped being a live route when it moved out of `src/app/`. To bring it back:

```
mv delete src/app/booked-designs
```

Then open http://localhost:3000/booked-designs
