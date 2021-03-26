function checkToggle() {
  const element = document.getElementById("toggle");
  element.classList.toggle("active");
  calculateRange();
}

// sets pageviews based on scale value; passes value into
// getDiscount() to calculate pricing
function calculateRange() {
  const r = document.getElementById("myRange");
  const currentVal = r.value;
  if (currentVal <= 17) {
    const amount = 8;
    const value = "10K PAGEVIEWS";
    const renderPgViews = (document.getElementById(
      "pageviews"
    ).innerHTML = value);
    getDiscount(amount);
  } else if (currentVal <= 34) {
    const amount = 12;
    const value = "50K PAGEVIEWS";
    const renderPgViews = (document.getElementById(
      "pageviews"
    ).innerHTML = value);
    getDiscount(amount);
  } else if (currentVal <= 50) {
    const amount = 16;
    const value = "100K PAGEVIEWS";
    const renderPgViews = (document.getElementById(
      "pageviews"
    ).innerHTML = value);
    getDiscount(amount);
  } else if (currentVal <= 75) {
    const amount = 24;
    const value = "500K PAGEVIEWS";
    const renderPgViews = (document.getElementById(
      "pageviews"
    ).innerHTML = value);
    getDiscount(amount);
  } else if (currentVal <= 100) {
    const amount = 36;
    const value = "1M PAGEVIEWS";
    const renderPgViews = (document.getElementById(
      "pageviews"
    ).innerHTML = value);
    getDiscount(amount);
  }
}

// Passes in amount and calculates discount
function getDiscount(amount) {
  const element = document.getElementById("toggle");
  if (element.classList.contains("active")) {
    const amountToSubtract = amount / 4;
    const disAmount = amount - amountToSubtract;
    const renderAmount = "$" + disAmount.toString() + ".00";
    const adjPricing = (document.getElementById(
      "dollar-amount"
    ).innerHTML = renderAmount);
    return adjPricing;
  } else {
    const renderAmount = "$" + amount.toString() + ".00";
    const adjPricing = (document.getElementById(
      "dollar-amount"
    ).innerHTML = renderAmount);
    return adjPricing;
  }
}
