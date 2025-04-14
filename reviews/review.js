const reviews = [
  // iPhone 15
  { product: "iPhone 15", source: "Amazon", rating: 5, text: "Amazing phone. Screen is sharp and battery life is great!" },
  { product: "iPhone 15", source: "Best Buy", rating: 4, text: "Camera quality is impressive but a bit overpriced." },
  { product: "iPhone 15", source: "Amazon", rating: 3, text: "The phone is good, but not much different from the 14." },
  { product: "iPhone 15", source: "Best Buy", rating: 2, text: "The iPhone 15 overheats quickly during gaming." },
  { product: "iPhone 15", source: "Amazon", rating: 1, text: "Battery drains too fast. Very disappointed." },

  // iPhone 14 Pro
  { product: "iPhone 14 Pro", source: "Amazon", rating: 5, text: "Love the ProMotion display and the new Dynamic Island!" },
  { product: "iPhone 14 Pro", source: "Best Buy", rating: 4, text: "Great phone but the price is too high for what it offers." },
  { product: "iPhone 14 Pro", source: "Amazon", rating: 3, text: "Solid phone but doesn’t feel as revolutionary as advertised." },
  { product: "iPhone 14 Pro", source: "Best Buy", rating: 2, text: "The camera is not as good as expected for the price." },
  { product: "iPhone 14 Pro", source: "Amazon", rating: 1, text: "Screen cracked very easily. Poor build quality." },

  // MacBook Pro 16"
  { product: "MacBook Pro 16", source: "Amazon", rating: 5, text: "Perfect for video editing and graphic design. The screen is huge!" },
  { product: "MacBook Pro 16", source: "Best Buy", rating: 4, text: "Fast and powerful. Battery could be better." },
  { product: "MacBook Pro 16", source: "Amazon", rating: 3, text: "Works fine, but the price tag is pretty high for basic usage." },
  { product: "MacBook Pro 16", source: "Best Buy", rating: 2, text: "Had issues with heating after prolonged use." },
  { product: "MacBook Pro 16", source: "Amazon", rating: 1, text: "It crashed on the first day. Very unreliable." },

  // MacBook Air M2
  { product: "MacBook Air M2", source: "Amazon", rating: 5, text: "Light and powerful. Perfect for daily tasks and entertainment!" },
  { product: "MacBook Air M2", source: "Best Buy", rating: 4, text: "Great for students. Would have liked more ports." },
  { product: "MacBook Air M2", source: "Amazon", rating: 3, text: "It’s good, but doesn’t handle intense apps very well." },
  { product: "MacBook Air M2", source: "Best Buy", rating: 2, text: "The laptop froze multiple times in the first week." },
  { product: "MacBook Air M2", source: "Amazon", rating: 1, text: "Screen started flickering after a month. Not worth it." },

  // iPad 9th Gen
  { product: "iPad 9th Gen", source: "Best Buy", rating: 5, text: "Fantastic value for money. A great device for reading and media consumption." },
  { product: "iPad 9th Gen", source: "Amazon", rating: 4, text: "Good device but lacks the Pro’s power and features." },
  { product: "iPad 9th Gen", source: "Best Buy", rating: 3, text: "Fine for casual use but not suitable for heavy tasks." },
  { product: "iPad 9th Gen", source: "Amazon", rating: 2, text: "Screen resolution is lower than I expected." },
  { product: "iPad 9th Gen", source: "Best Buy", rating: 1, text: "Lags too much. It’s not worth the price." },

  // AirPods Max
  { product: "AirPods Max", source: "Amazon", rating: 5, text: "Incredible sound quality and noise cancellation." },
  { product: "AirPods Max", source: "Best Buy", rating: 4, text: "Expensive, but they sound amazing and the build quality is superb." },
  { product: "AirPods Max", source: "Amazon", rating: 3, text: "Good sound, but they’re too heavy for long listening sessions." },
  { product: "AirPods Max", source: "Best Buy", rating: 2, text: "Disappointed. The price is not justified." },
  { product: "AirPods Max", source: "Amazon", rating: 1, text: "Poor value for money. Too bulky and uncomfortable." },

  // Apple Watch Series 8
  { product: "Apple Watch Series 8", source: "Amazon", rating: 5, text: "Absolutely love it! Great for fitness tracking and daily use." },
  { product: "Apple Watch Series 8", source: "Best Buy", rating: 4, text: "Very smooth performance. Battery life could be better." },
  { product: "Apple Watch Series 8", source: "Amazon", rating: 3, text: "Okay watch, but nothing groundbreaking." },
  { product: "Apple Watch Series 8", source: "Best Buy", rating: 2, text: "Doesn't sync properly with my iPhone." },
  { product: "Apple Watch Series 8", source: "Amazon", rating: 1, text: "After a few days, it started freezing. Wouldn’t recommend." },

  // AirPods Pro 2nd Gen
  { product: "AirPods Pro 2nd Gen", source: "Amazon", rating: 5, text: "Superb noise-cancellation and crystal-clear sound!" },
  { product: "AirPods Pro 2nd Gen", source: "Best Buy", rating: 4, text: "Nice upgrades over the first generation. A little on the expensive side." },
  { product: "AirPods Pro 2nd Gen", source: "Amazon", rating: 3, text: "The noise cancellation is good, but the fit is uncomfortable." },
  { product: "AirPods Pro 2nd Gen", source: "Best Buy", rating: 2, text: "The sound cuts out randomly. Not happy with the quality." },
  { product: "AirPods Pro 2nd Gen", source: "Amazon", rating: 1, text: "I returned them. They wouldn’t stay in my ears." },

  // HomePod 2nd Gen
  { product: "HomePod 2nd Gen", source: "Amazon", rating: 5, text: "Great sound and Siri integration. Highly recommended!" },
  { product: "HomePod 2nd Gen", source: "Best Buy", rating: 4, text: "Good quality sound, but limited without an Apple device." },
  { product: "HomePod 2nd Gen", source: "Amazon", rating: 3, text: "It’s okay, but it’s not as good as other smart speakers in this price range." },
  { product: "HomePod 2nd Gen", source: "Best Buy", rating: 2, text: "Sound quality doesn’t justify the high price." },
  { product: "HomePod 2nd Gen", source: "Amazon", rating: 1, text: "Very disappointing. Sound is weak and clunky." },

  // iMac M1
  { product: "iMac M1", source: "Amazon", rating: 5, text: "Excellent display and performance. Perfect for creatives." },
  { product: "iMac M1", source: "Best Buy", rating: 4, text: "Fast and sleek design. I wish it had more ports." },
  { product: "iMac M1", source: "Amazon", rating: 3, text: "Good computer, but doesn’t handle video editing very well." },
  { product: "iMac M1", source: "Best Buy", rating: 2, text: "It’s fine for basic work, but not for high-end software." },
  { product: "iMac M1", source: "Amazon", rating: 1, text: "Had issues with the screen flickering. Unreliable." },

  // Mac Mini M2
  { product: "Mac Mini M2", source: "Amazon", rating: 5, text: "Incredible performance for the price. Great for home offices." },
  { product: "Mac Mini M2", source: "Best Buy", rating: 4, text: "Great specs for a compact size, but I expected more ports." },
  { product: "Mac Mini M2", source: "Amazon", rating: 3, text: "Good for casual use, but doesn’t excel in high-demand tasks." },
  { product: "Mac Mini M2", source: "Best Buy", rating: 2, text: "Not powerful enough for my needs. Returned it." },
  { product: "Mac Mini M2", source: "Amazon", rating: 1, text: "Kept freezing during use. Very disappointed." },
];



const reviewContainer = document.getElementById("reviewContainer");
const sourceFilter = document.getElementById("sourceFilter");
const ratingFilter = document.getElementById("ratingFilter");
const productFilter = document.getElementById("productFilter");

function renderReviews() {
  const selectedSource = sourceFilter.value;
  const selectedRating = ratingFilter.value;
  const selectedProduct = productFilter.value;

  reviewContainer.innerHTML = '';

  const filtered = reviews.filter(review => {
    const matchSource = selectedSource === "all" || review.source === selectedSource;
    const matchRating = selectedRating === "all" || review.rating === parseInt(selectedRating);
    const matchProduct = selectedProduct === "all" || review.product === selectedProduct;
    return matchSource && matchRating && matchProduct;
  });

  if (filtered.length === 0) {
    reviewContainer.innerHTML = "<p>No reviews found for selected filters.</p>";
    return;
  }

  filtered.forEach(review => {
    const card = document.createElement("div");
    card.className = "review-card";

    card.innerHTML = `
      <div class="source-tag">${review.source}</div>
      <h3>${review.product}</h3>
      <div class="stars">${'⭐'.repeat(review.rating)}</div>
      <div class="review-text">${review.text}</div>
    `;

    reviewContainer.appendChild(card);
  });
}

sourceFilter.addEventListener("change", renderReviews);
ratingFilter.addEventListener("change", renderReviews);
productFilter.addEventListener("change", renderReviews);

// Initial load
renderReviews();
