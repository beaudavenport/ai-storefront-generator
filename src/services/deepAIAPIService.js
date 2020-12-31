const axios = require('axios');
const randomName = require('random-name');
const FormData = require('form-data');

// The DeepAI API appears very sensitive to being overwhelmed. Add delays.
const sleep = () => new Promise((resolve) => setTimeout(resolve, 10000));

const postText2Image = async (text) => {
  console.log('getting image from text for ', text);
  try {
    const response = await axios.post('https://api.deepai.org/api/text2img', {
      text,
    }, {
      headers: {
        'Api-Key': process.env.DEEP_AI_API_KEY,
      },
    });
    await sleep();
    return response.data.output_url;
  } catch (ex) {
    console.log('Error calling to Deep AI API');
    throw ex;
  }
};

const postTextGeneration = async (text) => {
  console.log('generating text for ', text);
  try {
    const formData = new FormData();
    formData.append('text', text);
    const formHeaders = formData.getHeaders();
    const response = await axios.post('https://api.deepai.org/api/text-generator', formData, {
      headers: {
        'Api-Key': process.env.DEEP_AI_API_KEY,
        ...formHeaders,
      },
    });
    await sleep();
    return response.data.output;
  } catch (ex) {
    console.log('Error calling to Deep AI API');
    throw ex;
  }
};

const createProductDescription = async (productName) => {
  console.log('getting product description for ', productName);
  const response = await postTextGeneration(`${productName} are`);
  return response;
};

const starsToSentiment = {
  1: 'negative',
  3: 'neutral',
  5: 'positive',
};

const createProductReview = async (productName, stars, index) => {
  console.log('creating product review for ', productName);
  const prompt = `A ${starsToSentiment[stars]} review ${index} of ${productName}`;
  const generatedText = await postTextGeneration(prompt);
  const reviewWithScore = {
    review: generatedText.split(prompt)[1],
    reviewer: randomName(),
  };
  return reviewWithScore;
};

const createAboutUsDescription = async (storeName, prompt) => {
  console.log('creating about us page description for ', storeName);
  const generatedText = await postTextGeneration(prompt);
  return generatedText;
};

const createAboutUsImage = async (storeName, prompt) => {
  console.log('creating about us page image for ', storeName);
  const outputUrl = await postText2Image(prompt);
  return outputUrl;
};

module.exports = {
  createProductReview,
  createProductDescription,
  createAboutUsDescription,
  createAboutUsImage,
  postText2Image,
};
