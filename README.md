# resume-site

Hugo site for the Error404 online resume. Digital mode on screen (Neon/NFO/Light toggle), Print/Corporate mode at `/print/` and in the PDF.

```sh
./update.sh          # copy latest resume.md from the private source, rebuild site + PDF
hugo server          # preview at http://localhost:1313
```

Content lives in `content/_index.md`, generated from the private career-facts repo. Do not edit it here.
Build output is `public/`. URLs are relative, so any hostname can serve it.
