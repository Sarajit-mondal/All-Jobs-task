// reviews json
const reviews = [
  {
    comment: "Very unhappy with my purchase!",
    date: "2024-05-23T08:56:21.618Z",
    rating: 2,
    reviewerEmail: "john.doe@x.dummyjson.com",
    reviewerName: "John Doe",
  },
  {
    comment: "Not what I expected, very disappointed.",
    date: "2024-06-01T12:34:21.618Z",
    rating: 2,
    reviewerEmail: "jane.smith@x.dummyjson.com",
    reviewerName: "Jane Smith",
  },
  {
    comment: "The product quality is poor.",
    date: "2024-07-15T10:15:21.618Z",
    rating: 2,
    reviewerEmail: "mike.brown@x.dummyjson.com",
    reviewerName: "Mike Brown",
  },
  {
    comment: "I regret buying this product.",
    date: "2024-07-20T14:45:21.618Z",
    rating: 2,
    reviewerEmail: "susan.jones@x.dummyjson.com",
    reviewerName: "Susan Jones",
  },
  {
    comment: "The item arrived damaged.",
    date: "2024-07-29T16:23:21.618Z",
    rating: 2,
    reviewerEmail: "tom.clark@x.dummyjson.com",
    reviewerName: "Tom Clark",
  },
  {
    comment: "Not worth the money.",
    date: "2024-08-01T09:12:21.618Z",
    rating: 2,
    reviewerEmail: "emma.wilson@x.dummyjson.com",
    reviewerName: "Emma Wilson",
  },
  {
    comment: "Expected more from this brand.",
    date: "2024-08-03T11:45:21.618Z",
    rating: 2,
    reviewerEmail: "daniel.miller@x.dummyjson.com",
    reviewerName: "Daniel Miller",
  },
  {
    comment: "Product broke after one use.",
    date: "2024-08-05T14:30:21.618Z",
    rating: 2,
    reviewerEmail: "linda.martin@x.dummyjson.com",
    reviewerName: "Linda Martin",
  },
  {
    comment: "Quality is not as advertised.",
    date: "2024-08-08T17:50:21.618Z",
    rating: 2,
    reviewerEmail: "james.taylor@x.dummyjson.com",
    reviewerName: "James Taylor",
  },
  {
    comment: "This product is a waste of money.",
    date: "2024-08-10T19:22:21.618Z",
    rating: 2,
    reviewerEmail: "patricia.moore@x.dummyjson.com",
    reviewerName: "Patricia Moore",
  },
  {
    comment: "Disappointed with the purchase.",
    date: "2024-08-12T08:45:21.618Z",
    rating: 2,
    reviewerEmail: "robert.jackson@x.dummyjson.com",
    reviewerName: "Robert Jackson",
  },
  {
    comment: "Definitely not worth it.",
    date: "2024-08-13T09:11:21.618Z",
    rating: 2,
    reviewerEmail: "mary.thompson@x.dummyjson.com",
    reviewerName: "Mary Thompson",
  },
  {
    comment: "Very low quality product.",
    date: "2024-08-15T10:30:21.618Z",
    rating: 2,
    reviewerEmail: "chris.lewis@x.dummyjson.com",
    reviewerName: "Chris Lewis",
  },
  {
    comment: "Not satisfied with the purchase.",
    date: "2024-08-17T12:45:21.618Z",
    rating: 2,
    reviewerEmail: "karen.lee@x.dummyjson.com",
    reviewerName: "Karen Lee",
  },
  {
    comment: "Would not recommend this product.",
    date: "2024-08-19T13:55:21.618Z",
    rating: 2,
    reviewerEmail: "mark.hall@x.dummyjson.com",
    reviewerName: "Mark Hall",
  },
  {
    comment: "Definitely not as described.",
    date: "2024-08-20T15:30:21.618Z",
    rating: 2,
    reviewerEmail: "nancy.young@x.dummyjson.com",
    reviewerName: "Nancy Young",
  },
  {
    comment: "Poor performance and quality.",
    date: "2024-08-22T16:45:21.618Z",
    rating: 2,
    reviewerEmail: "steven.king@x.dummyjson.com",
    reviewerName: "Steven King",
  },
  {
    comment: "Not what I expected, disappointed.",
    date: "2024-08-24T18:12:21.618Z",
    rating: 2,
    reviewerEmail: "laura.scott@x.dummyjson.com",
    reviewerName: "Laura Scott",
  },
  {
    comment: "The product was underwhelming.",
    date: "2024-08-26T19:45:21.618Z",
    rating: 2,
    reviewerEmail: "kevin.green@x.dummyjson.com",
    reviewerName: "Kevin Green",
  },
  {
    comment: "The product did not meet expectations.",
    date: "2024-08-28T20:55:21.618Z",
    rating: 2,
    reviewerEmail: "sarah.harris@x.dummyjson.com",
    reviewerName: "Sarah Harris",
  },
  {
    comment: "I wish I hadn't purchased this.",
    date: "2024-08-30T22:30:21.618Z",
    rating: 2,
    reviewerEmail: "paul.robinson@x.dummyjson.com",
    reviewerName: "Paul Robinson",
  },
];

// Function to convert date to a readable format
function formatDate(dateStr) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateStr).toLocaleDateString(undefined, options);
}

// Function to render reviews dynamically
function renderReviews() {
  const reviewsContainer = document.getElementById("reviews-container");

  reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    const reviewerName = document.createElement("h3");
    reviewerName.textContent = review.reviewerName;
    reviewCard.appendChild(reviewerName);

    const reviewDate = document.createElement("p");
    reviewDate.className = "review-date";
    reviewDate.textContent = formatDate(review.date);
    reviewCard.appendChild(reviewDate);

    const reviewRating = document.createElement("p");
    reviewRating.className = "review-rating";
    reviewRating.textContent = `Rating: ${review.rating} Stars`;
    reviewCard.appendChild(reviewRating);

    const reviewComment = document.createElement("p");
    reviewComment.textContent = review.comment;
    reviewCard.appendChild(reviewComment);

    reviewsContainer.appendChild(reviewCard);
  });
}

// Call the renderReviews function on page load
renderReviews();
