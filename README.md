# resume-site

Hugo site for the Error404 online resume. Digital mode on screen (Neon/NFO/Light toggle), Print/Corporate mode at `/print/` and in the PDF.

```sh
./update.sh          # rebuild site + PDF from content/_index.md
hugo server          # preview at http://localhost:1313
```

Content lives in `content/_index.md`. It is a manual copy of the generated resume.md from the private Jobs repo: replace it by hand, then run `./update.sh`.
Build output is `public/`. URLs are relative, so any hostname can serve it.
