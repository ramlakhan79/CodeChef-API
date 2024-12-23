# CodeChef Profile Scraper API

This is an Express.js-based API that scrapes and provides structured user profile data from the CodeChef website using **axios** and **cheerio**.

## Features

- Extracts detailed profile information, including:
  - Username
  - Profile Picture
  - Current Rating and Stars
  - Global and Country Ranks
  - Total Problems Solved
  - Contests Participated
  - Institution Details
  - Streak Information
  - Highest Rating Achieved
- Handles errors gracefully and returns meaningful messages when a profile is not found.

## Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ramlakhan79/CodeChef-API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd codechef-profile-scraper
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   node server.js
   ```

2. Make a GET request to the endpoint:

   ```plaintext
   GET /:username
   ```

   Replace `:username` with the CodeChef username you want to fetch details for.

3. Example request using `curl`:

   ```bash
   curl http://localhost:3000/john_doe
   ```

4. Example JSON response:

   ```json
   {
     "userDetails": {
       "userName": "John Doe",
       "profilePicture": "https://codechef.com/profile_image.jpg",
       "userNameRating": "1800",
       "country": "India",
       "institution": "XYZ University",
       "contestsParticipated": "25",
       "currentRating": "1800",
       "globalRank": "1200",
       "streakInfo": "Active Streak: 10 days",
       "totalProblemsSolved": "150",
       "ratingNumber": "1800",
       "ratingDivision": "Division 1",
       "ratingStars": "★★★★",
       "highestRating": "2000",
       "countryRank": "50"
     }
   }
   ```

## Project Structure

```plaintext
├── routes/
│   └── profile.js          # Contains the scraping logic
├── server.js               # Main entry point
├── package.json            # Project metadata and dependencies
└── README.md               # Documentation
```

## Dependencies

- **Express.js**: For building the API
- **Axios**: For making HTTP requests
- **Cheerio**: For parsing and extracting data from HTML

## Error Handling

- If a profile is not found or an error occurs during scraping, the API responds with a JSON error message:

  ```json
  {
    "error": "Profile Not Found"
  }
  ```

## Limitations

- This API relies on the structure of the CodeChef website. Any changes to the website's HTML may require updates to the scraper logic.
- The API is intended for educational and personal use only. Scraping websites without permission may violate their terms of service.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
