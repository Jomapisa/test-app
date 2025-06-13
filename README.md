# Setup Steps
## 1 - Install node.js
Can be downloaded from [here]('https://nodejs.org/en/download').  

Verify the installation with:  
```
node -v
```
## 2 - Create a Next.js project

A quick way to do this is by using npx:
```
npx create-next-app@latest
```
Then you will be shown some options:
```
√ What is your project named? ... test-app
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
```
In this case we will use TypeScript, ESLint, Tailwind CSS, App Router. I also put the code inside the src directory.

## 3 - Initialize a git repo
Navigate into the created Next.js project and run:
```
git init -b master
```
(using the og branch name)

## 4 - Make the initial commit

First add all files:
```
git add .
```
Then commit:
```
git commit -m "Exercise 1 - init repo"
```
## 5 - Add the local repository to GitHub

Using the GitHub CLI:
```
gh repo create
```
You will be asked to fill some options:
```
? What would you like to do? Push an existing local repository to github.com
? Path to local repository (.) .                                                                                                                                                                                                                ? Path to local repository .
? Repository name (test-app)                                                                                            
? Repository name test-app
? Repository owner Jomapisa
? Description Expando Onboarding Test App                                                                                                                                                                                                       ? Description Expando Onboarding Test App
? Visibility Public
✓ Created repository Jomapisa/test-app on github.com
  https://github.com/Jomapisa/test-app
? Add a remote? Yes
? What should the new remote be called? (origin)                                                                        
? What should the new remote be called? origin
✓ Added remote https://github.com/Jomapisa/test-app.git
? Would you like to push commits from the current branch to "origin"? Yes
Enumerating objects: 22, done.
Counting objects: 100% (22/22), done.
Delta compression using up to 16 threads
Compressing objects: 100% (21/21), done.
Writing objects: 100% (22/22), 60.68 KiB | 4.04 MiB/s, done.
Total 22 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/Jomapisa/test-app.git
 * [new branch]      HEAD -> master
branch 'master' set up to track 'origin/master'.
✓ Pushed commits to https://github.com/Jomapisa/test-app.git
```
## All Done!

Now we have a basic Next.js project setup 😊