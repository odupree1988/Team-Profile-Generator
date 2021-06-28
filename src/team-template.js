const generatePage = (userData) => {
  return `
    <h1>${userData}</h1>
    `;
};

module.exports = (userData) => generatePage(userData);
