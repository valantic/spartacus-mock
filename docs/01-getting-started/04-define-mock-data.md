# Define Mock Data

Out of the box, `spartacus-mock` comes with all\*\* mock-data needed to run the standard spartacus electronic sample store.
For your project, you probably want to define your own mock-data for the default Endpoints of spartacus and also add
custom Endpoints.

For every endpoint where you want to return custom data, you need to define a handler, which intercepts the call to the endpoint and
returns mock data. Every handler needs a route to intercept the call.

> \*\* "all" meaning all base commerce features. Check list of supported feature libs & roadmap to see which feature libs are planned to add

Look at the [examples](../02-examples/README.md) to see the different ways to define mock data.
