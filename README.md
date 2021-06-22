# MSCS Hub + MSDS Hub

<!--- These are examples. See https://shields.io for others or to customize this set of shields. You might want to include dependencies, project status and licence info here --->
![GitHub repo size](https://img.shields.io/github/repo-size/MSCSHub/MSCSHub)
![GitHub contributors](https://img.shields.io/github/contributors/MSCSHub/MSCSHub)
![Github Issues](https://img.shields.io/github/issues/MSCSHub/MSCSHub)
![GitHub stars](https://img.shields.io/github/stars/MSCSHub/MSCSHub)
![GitHub forks](https://img.shields.io/github/forks/MSCSHub/MSCSHub)
![License](https://img.shields.io/github/license/MSCSHub/MSCSHub)

The Hub is a website that allows students in UT's MSCS and MSDS to review courses and connect to student-run communities.

Computer Science - [MSCSHub.com](https://mscshub.com)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data Science - [MSDSHub.com](https://msdshub.com)

Each website is tailored to the indivual program but is all run using the same frontend and backend codebase. The entire frontend is built using Angular v11. The backend is serverless and runs off of firebase with node.js functions.

## Prerequisites

Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of `Node.js`
* You have web browser with JavaScript enabled. This project has been tested on Windows, Mac, and Linux.
* You are familiar with general web development techniques and technologies.

## Installing MSCS Hub

To install `MSCSHub`, follow these steps:

```
git clone https://github.com/MSCSHub/MSCSHub.git
cd MSCSHub
npm install
ng serve
```

## Using MSCS Hub

### Local Development
After running `ng serve` you will have a local version of `MSCSHub.com` running on your machine. Open your favorite browser and navigate to [localhost:4200](http://localhost:4200) to begin

### Deploying to MSCSHub.com and MSDSHub.com
Use the command `npm run deploy` to run the deployment script that will update both MSCSHub.com and MSDSHub.com. If you want to see more about what's happening behind the scenes when you run this command, take a look at the `scripts` section of `package.json`.

## Documentation
The documentation for MSCSHub.com is hosted at https://mscshub.github.io/MSCSHub-documentation/. This is generated automatically using `compodoc`. It works by automatically parsing the files in the codebase and uses the inline comments to create a fully functional website for documentation.

## Contributing to The Hub
<!--- If your README is long or you have some specific process or steps you want contributors to follow, consider creating a separate CONTRIBUTING.md file--->
To contribute to MSCSHub, follow these steps:

1. Create an issue on the repo https://github.com/MSCSHub/MSCSHub/issues
2. Assign yourself (or someone else) to the new issue.
3. Branch Bot will automatically create a new branch
3. On your local machine, first `git pull` then switch to the new branch: `git checkout -b <branch_name>`.
4. Make your changes and commit them: `git commit -m '<commit_message>'`
5. Push your changes to the MSCSHub repo: `git push`
6. Create the pull request.
7. Get signoff from the required reviewers and merge the changes
8. The repo owner (@EricPryzant or @estraw1059) will deploy the changes once the PR is merged

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

* [@EricPryzant](https://github.com/EricPryzant) 💻
* [@estraw1059](https://github.com/estraw1059) 🔧
* All of the #koolkidz that helped beta test this 🐛
* All of the students that have created reviews 👀
* Everyone who has donated to this project to keep it running! 💸

## Contact

If you want to contact the owners of this repo you can reach us at <mscshub@gmail.com>.

## License

This project uses the following license: [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.html).
