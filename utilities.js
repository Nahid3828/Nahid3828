/**
 * Nahid3828 - Simple Utility Library
 * A collection of useful JavaScript utilities
 */

/**
 * Generate a welcome message
 * @param {string} username - The username to greet
 * @returns {string} A personalized welcome message
 */
function welcomeMessage(username) {
  return `🎉 Welcome to Nahid3828, ${username}! Don't forget to ⭐ star this repo!`;
}

/**
 * Get project information
 * @returns {Object} Project metadata
 */
function getProjectInfo() {
  return {
    name: "Nahid3828",
    description: "An awesome open-source project",
    version: "1.0.0",
    author: "Nahid3828",
    repository: "https://github.com/Nahid3828/Nahid3828",
    features: [
      "Clean code structure",
      "Well documented",
      "Easy to extend",
      "Production ready"
    ],
    starMessage: "If you find this useful, please consider giving it a star! ⭐"
  };
}

/**
 * Display project features
 * @returns {void}
 */
function showFeatures() {
  const info = getProjectInfo();
  
  console.log("🌟 " + info.name + " 🌟");
  console.log("=====================================");
  console.log(info.description);
  console.log("Version:", info.version);
  console.log("\nFeatures:");
  
  info.features.forEach((feature, index) => {
    console.log(`  ${index + 1}. ✨ ${feature}`);
  });
  
  console.log("\n" + info.starMessage);
  console.log("Repository: " + info.repository);
  console.log("=====================================");
}

/**
 * Quick start guide
 * @returns {Array} Array of setup instructions
 */
function getQuickStart() {
  return [
    "1. Clone the repository",
    "2. Install dependencies",
    "3. Read the documentation",
    "4. Start building!",
    "5. ⭐ Don't forget to star the repo!"
  ];
}

// Example usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    welcomeMessage,
    getProjectInfo,
    showFeatures,
    getQuickStart
  };
}

// Browser console output
console.log(welcomeMessage("Developer"));
showFeatures();
