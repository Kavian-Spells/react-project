# React Checklist

Checklist for setting up you your React App.

## Start App

- [ ] Created Git repo
- [ ] Cloned repo
- [ ] cd into repo and run `npx create-react-app .`

## React Router

- [ ] Design App URLs
- [ ] Wrapped app in `BrowserRouter` component
- [ ] Added routes `Switch` component
- [ ] Added 404 to `Switch`

## Redux Setup

- [ ] Created a data store (`store.js`)
- [ ] Created a reducer with an initial state (`reducer.js`)
- [ ] Wrapped app in `Provider` component
- [ ] Connect a component to the data store with `connect()`, `mapStateToProps`, and `mapDispatchToProps`
- [ ] Created an action (`action.js`)
- [ ] In Reducer: created a switch for the action type
  - [ ] deepcopy state
  - [ ] modify data
  - [ ] return new state
