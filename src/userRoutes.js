const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const router = express.Router();

// Helper function to extract user details from the HTML response
const extractUserDetails = ($) => {
  // Extract the contest data 

  return {
    userName: $("h1.h2-style").text().trim(),
    profilePicture: $(".profileImage").attr("src") || "",
    userNameRating: $(".rating").text().trim(),
    country: $(".user-country-name").text().trim(),
    institution: $("li:contains('Institution:') span").text().trim(),
    contestsParticipated: $("div.contest-participated-count b").text().trim(),
    currentRating: $("#rating-box-all .rating").text().trim(),
    globalRank: $("#global-rank-all .global-rank").text().trim(),
    streakInfo: $("li:contains('CodeChef Pro Plan') span").text().trim(),
    totalProblemsSolved: $("h3:contains('Total Problems Solved:')")
      .text()
      .replace("Total Problems Solved:", "")
      .trim(),

    // New data from the additional HTML structure
    ratingNumber: $(".rating-number").text().trim(),
    ratingDivision: $(".rating-header div:nth-child(2)").text().trim(),
    ratingStars: $(".rating-star span")
      .map((i, el) => $(el).html())
      .get()
      .join(""),
    highestRating: $(".rating-header small")
      .text()
      .replace("Highest Rating ", "")
      .trim(),
    globalRank: $(".rating-ranks a[href='/ratings/all'] strong").text().trim(),
    countryRank: $(".rating-ranks a[href*='Country=India'] strong")
      .text()
      .trim(),
  };
};

// Route to get CodeChef user profile data
router.get("/:username", async (req, res) => {
  const { username } = req.params;
  const BASE_URL = `https://www.codechef.com/users/${username}`;

  try {
    const profilePage = await axios.get(BASE_URL);
    const $ = cheerio.load(profilePage.data);

    // Extract user data using the helper function
    const userDetails = extractUserDetails($);

    // Send the structured data as JSON
    res.json({
      userDetails,
    });
  } catch (error) {
    console.error("Error fetching CodeChef profile:", error);
    res.status(500).json({ error: "Profile Not Found" });
  }
});

module.exports = router;
