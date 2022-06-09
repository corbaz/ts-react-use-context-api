# Vite - Typescript - React - useContext (hook context-api)

### Repo:

https://github.com/corbaz/ts-react-use-context-api.git

### vite.config.ts:

```cmd
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// esta base se de usar para el deploy github pages
// base: "/ts-react-use-context-api/",

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
```

---

### package.json:

```cmd
{
  "name": "ts-react-use-context-api",
  "private": true,
  "version": "0.0.0",
  "scripts": {
    "git-create-repo": "gh repo create ts-react-use-context-api --public --source=. --remote=upstream",
    "git-add-remote": "git remote add origin https://github.com/corbaz/ts-react-use-context-api.git && git branch -M main && git push -u origin main",
    "git-remote-view": "git remote -v",
    "git-remote-remove": "git remote rm upstream && git remote remove origin",
    "git": "git add -A && git commit -m \"update\" && git push -u origin main",
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "npm run build && vite preview",
    "ncu": "cls && ncu && ncu u && npm i",
    "deploy-surge-sh": "npm run build && surge dist ts-react-use-context-api.surge.sh && start msedge.exe https://ts-react-use-context-api.surge.sh",
    "deploy-gh-pages": "npm run build && gh-pages -d dist && start msedge.exe https://corbaz.github.io/ts-react-use-context-api"
  },
  "dependencies": {
    "axios": "^0.27.2",
    "react": "^18.1.0",
    "react-dom": "^18.1.0",
    "toastify-js": "^1.11.2"
  },
  "devDependencies": {
    "@types/react": "^18.0.12",
    "@types/react-dom": "^18.0.5",
    "@vitejs/plugin-react": "^1.3.2",
    "gh-pages": "^4.0.0",
    "npm-check-updates": "^13.1.2",
    "typescript": "^4.7.3",
    "vite": "^2.9.10"
  }
}

```
