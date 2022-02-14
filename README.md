# Component Library

## Getting Started

```bash
npm install
npm run storybook
```

Check out a new branch for any changes, push that branch to the main repo, and PR. Unlike `trefoil-web`, the component library does *not* follow a fork-based PR process, and you can/should open your branch/PR within the repo.

## Deploy and Review

### Deploying

To deploy:

- Make your change (including any relevant tests) in your branch.
  
  - Please provide useful human-readable commit messages, as they will be used for automated change logging.
  - If introducing a new component, make sure to add it to `src/index.ts`, so it can be built and imported into other repositories.

- Push the branch to Github.
- Label the PR on Github according to semantic versioning:

  - "Major" - Introduces a significant, breaking change.
  - "Minor" - Introduces new functionality (eg, a new component).
  - "Patch" - Fixes or refactors, in a way that will not break any previous behavior.

- If tests pass, a PR-specific Storybook should be published automatically, and the link made available in the PR.

### Review

Once a PR has been pushed, it is available for review on Chromatic. Each PR should be reviewed by both an engineer and a designer (unless changes do not affect design). To conduct a design review of a PR, click through to the build-specific review on Chromatic, where you can comment on and approve/deny changes on a story-by-story basis.

Once all changes have been approved on Chromatic, the PR is ready to merge.

### Merge and Deploy

On merge, the a new release will be prepared using the PR label for incrementing information.

## Best Practices

### Styling

Our component library is built on top of MUI v5. MUI provides a number of styling options. To maintain a pattern that isn't strictly dependent on MUI going forward, we prefer styling patterns in the following order:

#### SASS Modules

Styles in SCSS module files are the preferred styling pattern for the component library. Import a component-specific `component.module.scss` file for each component, and apply the styles via `className`:

```jsx
// Unfortunately, the webpack configuration right now makes the explicit loader syntax necessary
// Also note that in order to enable variable imports, the file needs to end in module.scss
import styles from '!style-loader!css-loader!sass-loader!./MyComponent.module.scss';

// ...

<MyComponent className={styles.myComponent} />
```

Any given style file can then import global variables internally:

```scss
@import '@sass/theme.scss';

.button {
  background-color: $primary-500;
}
```

These variables can be found in `src/shared/scss`.

#### Emotion

MUI v5 comes with Emotion (a CSS-in-JS library) built in. To use it, simply import it from `@mui/material`:

```jsx
import { styled, Button as MuiButton } from '@mui/material';

// ...

const Button = styled(MuiButton)`
  background-color: black;
`;
```

In the future, we may want to set a global theme, and provide it to child components via context, such that `styled` components have access to `theme`. At present, we are avoiding this to avoid style duplication between SCSS and JS, unnecessary MUI entanglement, and added complexity.

As such, `scss` files, which have access to the base `theme.scss` file, are more idiomatic and extensible.

#### SX

MUI v5 provides an `sx` prop to each component which allows for theme-aware styling. Because we are avoiding theming in this component library, and because the prop is MUI-specific, we advocate avoiding the prop within the component-library, and using `scss` styles instead.

### Documentation and Prop Types

Components should be documented using JSDoc syntax, but avoiding props within the component signature. Instead, props can be documented in accompanying TypeScript types, using the JSDoc comment syntax there as well. Both of these will get picked up and displayed in Storybook:

> Note the markdown in the component documentation. An H3 makes a reasonably sized component subtitle.

```jsx
import React, { ReactElement } from 'react';

/**
 * ### A helpful component
 *
 * Does something really cool and also really complicated:
 * - You can use markdown here.
 * - But prop descriptions go in interface below.
 **/
export const ComponentName = (props: ComponentProps) => {
  // ...
};

interface ComponentProps {
  /** Just your typical react child **/
  children: ReactElement;
  // ...
}
```

### Component Best Practices

Components should all be functional. They should also all be exported by name: `export const MyComponent = ...`.