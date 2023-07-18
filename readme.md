# Node-Express-Mongo Backend Template

This repository contains the source code for Your Application Name.

## Folder Structure

The folder structure of the application is as follows:

├── src
│ ├── app
│ │ ├── config
│ │ │ └── index.ts
│ │ ├── middlewares
│ │ │ └── (custom middlewares files)
│ │ └── routes
│ │ └── index.ts
│ ├── errors
│ │ └── (error-related classes and functions)
│ ├── helpers
│ │ └── (helper functions files)
│ ├── modules
│ │ ├── (module 1 folder)
│ │ │ ├── model
│ │ │ ├── const
│ │ │ ├── controller
│ │ │ ├── service
│ │ │ ├── router
│ │ │ └── interface
│ │ ├── (module 2 folder)
│ │ │ ├── model
│ │ │ ├── const
│ │ │ ├── controller
│ │ │ ├── service
│ │ │ ├── router
│ │ │ └── interface
│ │ └── ...
│ └── shared
│ └── (shared utility functions)
├── server.ts
├── .env
└── README.md

## Getting Started

To get started with the application, follow these steps:

1. Clone the repository: `git clone https://github.com/your/repo.git`
2. Install the dependencies: `yarn`
3. Update the `.env` file with the required configurations.
4. Start the server: `yarn start`

## Additional Information

### Configuration

The application's configuration can be found in the `src/app/config/index.ts` file.

### Middlewares

Custom middlewares for the application are located in the `src/app/middlewares` folder.

### Routes

The application's routes are defined in the `src/app/routes/index.ts` file.

### Errors

Error handling classes and functions can be found in the `src/errors` folder.

### Helpers

Helper functions, such as pagination helpers, are located in the `src/helpers` folder.

### Modules

The application is organized into modules, with each module having its own folder containing the following files:

- `model`: Model definitions for the module.
- `const`: Constant values related to the module.
- `controller`: Controllers handling the module's logic.
- `service`: Services implementing the module's business logic.
- `router`: Routers defining the module's routes.
- `interface`: Interfaces used within the module.

### Shared

The `src/shared` folder contains utility functions that are shared across the application.

## Feel Free to connect and contribute
