# Motivation

When building Frontend application for SAP Commerce (former hybris), it was always a little bit annoying, as the frontend engineers needed to
run hybris on their local machines. Additionally, one needed to wait until new features where built by the backend to be able to build the
frontend for it.

In the new world of composable storefront (former spartacus), it already got easier as it is now possible to use a remote environment as backend.
The problem of features not being ready yet or not being deployed to the remote environment still exists.

Spartacus-mock tries to solve both problems since you don't need to wait anymore, until

- "...that dev system is ready"
- "...that feature has been merged & deployed by the backend"
- "...that page / component has been added in Smartedit by the backend"

It comes with the mock-data for the standard electronics store.

You can then define your own custom mock-data tailored to your custom spartacus project.
Adding new pages and components in no time helps you, developing your actual feature, without
waiting until the Backend has finished or the hassle of running a local hybris ;-).
