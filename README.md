# Performance-tests

- Performance test examples with K6 for REST API endpoints
- The example website we will be testing with is https://test-api.k6.io/

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/princebhatia1996/Performance-tests
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the tests:**

   ```
   npm run test:all
   ```

## Tools we are using

- K6 is the framework we are using to do our performance testing https://k6.io/
- JavaScript is the language we are doing our testing in.

## Types of testing we are doing

- To learn more about the different types of testing the tool can do please read this [testing guide](https://grafana.com/docs/k6/latest/testing-guides/test-types/)

### Load testing

- Load testing evaluates how an application performs under expected usage.
  It simulates multiple users accessing the application at the same time to see how well the system handles the load.
  This helps identify any performance issues, measure response times, and ensure the application can manage the anticipated user traffic effectively.

### Stress testing

- Stress testing checks how an application behaves under extreme conditions that are beyond normal usage.
  It involves testing the application by putting it under heavy workloads, high data volumes, or limited resources.
  The goal is to see how the application handles and recovers from tough situations, like sudden traffic spikes, memory leaks, or server failures.
  This helps identify performance limits, assess system stability, and understand how the application behaves in challenging scenarios.

## Making sense of the results

- To understand what the results mean please refer to this [guide](https://github.com/grafana/k6-learn/blob/main/Modules/II-k6-Foundations/03-Understanding-k6-results.md) on how to interpret them.
