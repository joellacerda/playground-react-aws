### Requirements

- [Node](https://nodejs.org/en)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)

### Steps taken:

- Create a new empty folder.
- Run `yarn init` to initialize the project.
- Copy the following lines into `package.json`:
  ```
  "workspaces": {
    "packages": [
      "frontend",
      "backend"
    ],
    "nohoist": [
      "**"
    ]
  }
  ```
- Create a file `turbo.json` to the root folder, with the following code:

  ```
  {
    "$schema": "https://turbo.build/schema.json",
    "pipeline": {
      "build": {
        "dependsOn": ["^build"],
        "outputs": ["dist/**"]
      },
      "lint": {
        "outputs": []
      },
      "dev": {
        "cache": false
      },
      "sls:deploy": {
        "cache": false
      },
      "sls:remove": {
        "cache": false
      },
      "sls:invoke": {
        "cache": false
      }
    }
  }
  ```

- Add the following lines to the `.gitignore` file:

  ```
  node_modules/
  build/
  .env
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log\*
  ```

- Create a `.env.example` file and add these lines:

  ```
  AWS_ACCESS_KEY_ID=your-access-key-id
  AWS_SECRET_ACCESS_KEY=your-secret-access-key
  REGION=us-east-1
  ```
