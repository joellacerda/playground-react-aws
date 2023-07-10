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
