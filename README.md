# Baobab Tree Showcase

> Technical Aspects - by Mahyar Jamalabadi

## How to start

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

- In the project directory run `yarn` to install dependencies, and after that, you can use
  `yarn start`
  to run the app in the development mode.

- Also, you can use the `yarn test` script to run tests of the project.

- The page will reload if you make edits.
  You will also see any lint errors in the console.
  Other scripts are the same as `create-react-app` documentation.

## Editor and Code Formatting

- Using the `.vscode` folder and underlying `settings.json` file, helps other developers to maintain and follow up the project easier in vscode.
  
- The [Prettier](https://www.npmjs.com/package/prettier) package can save a bunch of time for every developer in well-formating the code base and also it unifies spacing and indentations project-wide. So, we can edit the `.prettierrc` file anytime to make a change. 

## Design

- I used `Sass` styling to show that I'm completely aware of implementing styles separated from JS and in this small amount of work I preferred to use it as I'm feeling happy with that, but in real programs, it really depends on what project needs and what is going on there. In some cases that we need theming and integrated styling with front-end logic, we mostly need to use `styled-components` or similar experiences.

- Make things responsive as much as we could, can leads every part of our users to check the reports and visualizations on any type of device and screen.

## Code Quality

- I separate the components as much as they could make tests simpler and prevent complications.

- I tried to extract `reusable` custom hooks to make the inside component logic more simple and easy to understand.

- Using `.env` files to handle environment variables like APIs, can prevent hard code and make things more pre-configurable

- We should take care of `A11Y` and computer accessibility considerations and component implementations. So I tried to use `semantic` tags as much as I could but in real projects, we should take more actions on components and colors.

- Handling loading state in components and appropriate default values for props are too important to implement. Also, handling `loading` and `error` return values in hooks can lead us to a better status handling.

  > **ProTip:** Handling a loading state with a `Loading` component can make a better UX.  In real-world APIs, these loadings happen a million times.

## Test

- Assigning proper `data-testid` to components can help us find the components among a bunch of others.

- I tried to add some tests to show in a production-ready code-base and modules, we have to be fully proofed with appropriate tests and simplifying the code-review and merge flows.

- In real-world projects, I prefer to add more challenging unit tests, integration, and e2e testing to make more robust working software.
