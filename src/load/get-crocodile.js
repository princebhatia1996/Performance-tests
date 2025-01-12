import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "1m", target: 50 }, // Ramp-up to 50 users over 1 minute
    { duration: "3m", target: 50 }, // Stay at 50 users for 3 minutes
    { duration: "1m", target: 100 }, // Ramp-up to 100 users over 1 minute
    { duration: "3m", target: 100 }, // Stay at 100 users for 3 minutes
    { duration: "1m", target: 0 }, // Ramp-down to 0 users over 1 minute
  ],
};

export default function () {
  const res = http.get("https://test-api.k6.io/public/crocodiles/1/");
  check(res, {
    "is status 200": (r) => r.status === 200,
    "response time is less than 500ms": (r) => r.timings.duration < 500,
    "response body contains id": (r) => r.json().hasOwnProperty("id"),
    "response body contains name": (r) => r.json().hasOwnProperty("name"),
    "response body contains age": (r) => r.json().hasOwnProperty("age"),
    "response body contains date_of_birth": (r) =>
      r.json().hasOwnProperty("date_of_birth"),
    "content-type is application/json": (r) =>
      r.headers["Content-Type"] === "application/json",
  });
  sleep(1);
}