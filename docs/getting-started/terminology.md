# Terminology

Out of the box, `spartacus-mock` comes with all\*\* mock-data needed to run the spartacus electronics [sample store](https://spartacus-demo.eastus.cloudapp.azure.com/electronics-spa/en/USD/).
For your project, you probably want to define your own mock-data for the default endpoints of spartacus and also add custom Endpoints.

For every endpoint where you want to return custom data, you need to define a handler, which intercepts the call to the endpoint by listening for and matching to the route and
returning mock-data. Every handler needs a route to intercept the call.

> \*\* "all" meaning all base commerce features. Check the [Roadmap](https://valantic.gitbook.io/spartacus-mock/roadmap) to see which feature libs are planned to add

| Terminology | Explanation                                                                                                                                                                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Spartacus   | The Angular Frontend Framework to Run SAP Commerce Websites. More information can be found [here](https://github.com/SAP/spartacus)                                                                                                                           |
| MSW         | The underlying Tool doing the heavy work. More information can be found [here](https://mswjs.io/)                                                                                                                                                             |
| Endpoint    | An API URL of SAP Commerce to be called by spartacus. Default Endpoints are defined as part of Spartacus Core, Custom Endpoints an be added via `endpoints.config`                                                                                            |
| Route       | A string representing the url of an Endpoint. The route get's used by MSW to map Calls to handlers. The route string can be static or contain parameters or use a regex. More information can be found [here](https://mswjs.io/docs/basics/request-matching). |
| Handler     | A javascript function to return the mock-data for a certain endpoint listening on a certain route. More information can be found [here](https://mswjs.io/docs/basics/request-handler).                                                                        |
| mock-data   | The mock-data to be returned by the Handler. The mock-date represents the data normally being returned by SAP Commerce                                                                                                                                        |

Look at the [examples](../examples/README.md) to see the different ways to define mock-data.
