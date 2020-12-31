const axios = require('axios');

const getTextAnalysis = async (text) => {
  const response = await axios.post(`https://language.googleapis.com/v1/documents:analyzeEntitySentiment?key=${process.env.GOOGLE_NLP_API_KEY}`, {
    document: {
      type: 'PLAIN_TEXT',
      content: text,
    },
  });
  const { entities } = response.data;
  const entityNameAndTypes = [];
  entities.forEach((entity) => {
    if (!entityNameAndTypes.find((entry) => entry.name === entity.name)) {
      entityNameAndTypes.push({
        name: entity.name,
        type: entity.type,
        sentiment: entity.sentiment,
      });
    }
  });
  return entityNameAndTypes;
};

module.exports = {
  getTextAnalysis,
};
