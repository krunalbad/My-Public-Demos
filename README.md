# GitPractice


Youtube 1: https://www.youtube.com/watch?v=HVsySz-h9r4


Check Git version <br />
`git --version` - To check the current version of the git installed in your local machine
 

Set Git global config <br />
`git config --global user.name "Krunal Badami"` <br />
`git config --global user.email "krunalbadami@gmail.com"`
 
 
Check Git global configuration <br />
`git config --list`


Get help <br />
`git help config` <br />
`git config --help`


Tracking non-git project <br />
`git init`


Track changes <br />
`git status`
 
 
Create gitignore file <br />
`touch .gitignore`


Stage changes <br />
`git add .gitignore` <br />
`git add -A`

 
Un-stage changes <br />
`git reset .gitignore` <br />
`git reset`


Commit  <br />
`git commit -m "Your custom message"`
 
 
Get Latest commit <br />
`git log`


Clone Repo <br />
`git clone <url>` <br />
`git clone <https://username@git-url.git>` <br />
`git clone <url> <where-to-clone>`


Get difference <br />
`git diff`


Pull <br />
`git pull origin <branch-name>` <br />
`git pull`


Push <br />
`git push origin <branch-name>` <br />
`git push -u origin <branch-name>` <br />
`git push`


Create Branch <br />
`git branch <branch-name>`


Checkout branch (Change your local branch) <br />
`git checkout <branch-name>`


List all local branches <br />
`git branch`


List all local/remote branches <br />
`git branch -a`


List merge branches <br />
`git branch --merged`


Merge branche <br />
`git merge <branch-name>`


Delete local branch <br />
`git branch -d <branch-name>`



Delete remote branch <br />
`git push origin --delete <branch-name>`







