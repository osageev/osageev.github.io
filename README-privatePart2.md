Making the Repo Private (Future Option)
This repo is currently public because it's a fork, and GitHub won't let you change that.

To make it private in the future:

Create a new private GitHub repo (not a fork)

Copy all files from this repo into the new one

Remove .git and reinitialize:

bash
Copy
Edit
rm -rf .git
git init
git remote add origin git@github.com:your-username/new-repo.git
git add .
git commit -m "Initial commit of clean private blog"
git push -u origin master
Configure GitHub Pages from the new repo’s settings

Optionally rename the new repo to osageev.github.io to retain your current site URL

Notes
The README-private.md file is just for your reference — it's safe to leave in the repo unless you later make it public and want to clean it up.

Do not place sensitive personal data in drafts/ unless you’re absolutely sure the repo stays local or private.
