# Olukotun Agura Family Foundation — public website

The public marketing site for the Olukotun Agura family: home, history, an interactive family
tree, the foundation, and membership. Built with React + Vite + React Router.

This implements the design in `../project/Family Website.dc.html` (see `../README.md` and
`../chats/chat1.md` for the design brief and history).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Notes

- "Member sign in" links are intentionally inert — the private member portal
  (`Family Dashboard.dc.html` in the design bundle) isn't implemented yet.
- Routes: `/`, `/history`, `/tree`, `/foundation`, `/membership`.
