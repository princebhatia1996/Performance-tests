import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 10 }, // Ramp-up to 10 users over 30 seconds
    { duration: "1m", target: 10 }, // Stay at 10 users for 1 minute
    { duration: "30s", target: 0 }, // Ramp-down to 0 users over 30 seconds
  ],
};

export default function () {
  const res = http.get("https://test-api.k6.io/public/crocodiles/");
  check(res, {
    "is status 200": (r) => r.status === 200,
    "response time is less than 500ms": (r) => r.timings.duration < 500,
    "response body is not empty": (r) => r.json().length > 0,
    "response body contains id": (r) =>
      r.json().every((croc) => croc.hasOwnProperty("id")),
    "response body contains name": (r) =>
      r.json().every((croc) => croc.hasOwnProperty("name")),
    "response body contains age": (r) =>
      r.json().every((croc) => croc.hasOwnProperty("age")),
    "response body contains date_of_birth": (r) =>
      r.json().every((croc) => croc.hasOwnProperty("date_of_birth")),
    "content-type is application/json": (r) =>
      r.headers["Content-Type"] === "application/json",
  });
  sleep(1);
}
