# network-speed

Calculate the most suitable station for a given device position.

## Requirements
- `node >= 16.0`

## Setup
1. Install dependencies: `npm install`
2. Create .env file based on .env.example
3. Build and preview: `npm run build && npm run serve`
4. Navigate to http://localhost:3000/

## Testing
1. Install dependencies: `npm install`
2. Rub ``npm run test`

## Heroku deployment
1. Create a new app on Heroku
2. In the app's 'Settings' tab, select `Add buildpack` and choose `nodejs`
3. If using the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli):
    1. Copy the `Heroku git URL` from `App information` under the 'Settings' tab.
    2. In a terminal in the project directory add the Heroku URL to to git: `git remote add heroku <heroku-git-url>`
    3. Deploy the project with the command: `git push heroku main`
4. Alternatively, connect the repository to the app under 'Deploy' tab:
    1. Select connect to GitHub, fill in the repository name and click search, and click connect when the repository appears.
    2. Once the connection is complete, click `Enabel Automatic Deploys` so a new deploy is made on each push to main on git.
    3. The project can be manually deployed by selecting the `main` branch under "Manual deploy" and clicking deploy branch
