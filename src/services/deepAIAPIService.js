const deepai = require('deepai');
const randomName = require('random-name');

// deepai.setApiKey(TODO: ENV VAR);

const getImageUrlFromText = async (text) => {
  const response = await deepai.callStandardApi('text2img', {
    text,
  });
  return response.output;
};

const createProductDescription = async (productName) => {
  const response = await deepai.callStandardApi('text-generator', {
    text: `${productName} are`,
  });
  return response.output;
};

const starsToSentiment = {
  1: 'negative',
  3: 'neutral',
  5: 'positive',
};

const createProductReview = async (productName, stars) => {
  const response = await deepai.callStandardApi('text-generator', {
    text: `A ${starsToSentiment[stars]} review of ${productName}`,
  });
  const reviewWithScore = {
    review: response.output,
    reviewer: randomName(),
  };
  return reviewWithScore;
};

const createAboutUs = async (storeName, locations) => {
  const prompt = `The story of ${storeName} begins in ${locations.length ? `${locations[0]}.` : ' a commitment to quality.'}`;
  const textResponse = await deepai.callStandardApi('text-generator', {
    text: prompt,
  });
  const imageResponse = await getImageUrlFromText(prompt);
  const aboutUs = {
    title: prompt,
    text: textResponse.output,
    imageUrl: imageResponse.output,
  };
  return aboutUs;
};

module.exports = {
  createProductReview,
  createProductDescription,
  createAboutUs,
  getImageUrlFromText,
};
