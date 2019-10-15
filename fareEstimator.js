// Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. It works by passing approximated ride distance and ride time through this formula:

// (Cost per minute) * (ride time) + (Cost per mile) * (ride distance)

// where Cost per minute and Cost per mile depend on the car type.

// You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, as well as ride distance and ride time, return the fare estimates for all car types.

// Example

// For
// ride_time = 30,
// ride_distance = 7,
// cost_per_minute = [0.2, 0.35, 0.4, 0.45], and
// cost_per_mile = [1.1, 1.8, 2.3, 3.5], the output should be
// fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) = [13.7, 23.1, 28.1, 38].

function fareEstimator(
  ride_time,
  ride_distance,
  cost_per_minute,
  cost_per_mile
) {
  var fare = [];

  for (let i = 0; i < cost_per_mile.length; i++) {
    fare.push(
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance
    );
    console.log(
      cost_per_minute[i] * ride_time + cost_per_mile[i] * ride_distance
    );
  }
  console.log(fare);
  return fare;
}

fareEstimator(30, 7, [0.2, 0.35, 0.4, 0.45], [1.1, 1.8, 2.3, 3.5]);
//Expected Output: [13.7, 23.1, 28.1, 38]
