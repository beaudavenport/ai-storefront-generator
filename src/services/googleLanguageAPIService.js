const mockTextAnalysisResponse = {
  entities: [
    {
      mentions: [
        {
          text: {
            beginOffset: 27,
            content: 'boots',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'boots',
      salience: 0.27603653,
      type: 'CONSUMER_GOOD',
    },
    {
      mentions: [
        {
          text: {
            beginOffset: 9,
            content: 'cowboy store',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'cowboy store',
      salience: 0.27294502,
      type: 'LOCATION',
    },
    {
      mentions: [
        {
          text: {
            beginOffset: 34,
            content: 'jeans',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'jeans',
      salience: 0.25504735,
      type: 'CONSUMER_GOOD',
    },
    {
      mentions: [
        {
          text: {
            beginOffset: 45,
            content: 'hats',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'hats',
      salience: 0.19597109,
      type: 'OTHER',
    },
  ],
  language: 'en',
};

const mockEntitySentimentResponse = {
  entities: [
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.8,
            score: 0.8,
          },
          text: {
            beginOffset: 21,
            content: 'cook',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'cook',
      salience: 0.21646453,
      sentiment: {
        magnitude: 0.8,
        score: 0.8,
      },
      type: 'PERSON',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.7,
            score: 0.7,
          },
          text: {
            beginOffset: 82,
            content: 'cooking',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'cooking',
      salience: 0.2117088,
      sentiment: {
        magnitude: 0.7,
        score: 0.7,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.1,
            score: 0.1,
          },
          text: {
            beginOffset: 62,
            content: 'cir-cumstances',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'cir-cumstances',
      salience: 0.15872416,
      sentiment: {
        magnitude: 0.1,
        score: 0.1,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.9,
            score: 0.9,
          },
          text: {
            beginOffset: 171,
            content: 'equipment',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'equipment',
      salience: 0.13436073,
      sentiment: {
        magnitude: 1.5,
        score: 0.7,
      },
      type: 'CONSUMER_GOOD',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.6,
            score: 0.6,
          },
          text: {
            beginOffset: 159,
            content: 'tools',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'tools',
      salience: 0.062082466,
      sentiment: {
        magnitude: 0.6,
        score: 0.6,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.6,
            score: 0.6,
          },
          text: {
            beginOffset: 562,
            content: 'restaurant-supply house',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'restaurant-supply house',
      salience: 0.025723983,
      sentiment: {
        magnitude: 0.9,
        score: 0.4,
      },
      type: 'LOCATION',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.0,
            score: 0.0,
          },
          text: {
            beginOffset: 401,
            content: 'lamb',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'lamb',
      salience: 0.021890689,
      sentiment: {
        magnitude: 0.0,
        score: 0.0,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.5,
            score: 0.5,
          },
          text: {
            beginOffset: 287,
            content: 'casserole costs',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'casserole costs',
      salience: 0.02096509,
      sentiment: {
        magnitude: 0.5,
        score: 0.5,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.3,
            score: 0.3,
          },
          text: {
            beginOffset: 324,
            content: 'roast',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'roast',
      salience: 0.02096509,
      sentiment: {
        magnitude: 0.3,
        score: 0.3,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.0,
            score: 0.0,
          },
          text: {
            beginOffset: 394,
            content: 'leg',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'leg',
      salience: 0.019248392,
      sentiment: {
        magnitude: 0.0,
        score: 0.0,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.1,
            score: 0.1,
          },
          text: {
            beginOffset: 383,
            content: 'price',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'price',
      salience: 0.019248392,
      sentiment: {
        magnitude: 0.1,
        score: 0.1,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.1,
            score: 0.1,
          },
          text: {
            beginOffset: 353,
            content: 'skillet',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'skillet',
      salience: 0.019248392,
      sentiment: {
        magnitude: 0.1,
        score: 0.1,
      },
      type: 'CONSUMER_GOOD',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.9,
            score: 0.9,
          },
          text: {
            beginOffset: 493,
            content: 'places',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'places',
      salience: 0.014459225,
      sentiment: {
        magnitude: 0.9,
        score: 0.9,
      },
      type: 'LOCATION',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.6,
            score: 0.6,
          },
          text: {
            beginOffset: 530,
            content: 'kitchen-ware',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'kitchen-ware',
      salience: 0.014459225,
      sentiment: {
        magnitude: 0.6,
        score: 0.6,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.4,
            score: 0.4,
          },
          text: {
            beginOffset: 645,
            content: 'use',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'use',
      salience: 0.010136106,
      sentiment: {
        magnitude: 0.4,
        score: 0.4,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.5,
            score: 0.5,
          },
          text: {
            beginOffset: 592,
            content: 'objects',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'objects',
      salience: 0.009890562,
      sentiment: {
        magnitude: 0.5,
        score: 0.5,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.6,
            score: 0.6,
          },
          text: {
            beginOffset: 477,
            content: 'One',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'One',
      salience: 0.0076441187,
      sentiment: {
        magnitude: 0.6,
        score: 0.6,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.1,
            score: 0.1,
          },
          text: {
            beginOffset: 465,
            content: 'lamb chops',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'lamb chops',
      salience: 0.00639002,
      sentiment: {
        magnitude: 0.1,
        score: 0.1,
      },
      type: 'OTHER',
    },
    {
      mentions: [
        {
          sentiment: {
            magnitude: 0.3,
            score: 0.3,
          },
          text: {
            beginOffset: 430,
            content: 'knife',
          },
          type: 'COMMON',
        },
      ],
      metadata: {},
      name: 'knife',
      salience: 0.00639002,
      sentiment: {
        magnitude: 0.3,
        score: 0.3,
      },
      type: 'CONSUMER_GOOD',
    },
  ],
  language: 'en',
};

const getTextAnalysis = async () => {
  const { entities } = await Promise.resolve(mockEntitySentimentResponse);
  const entityNameAndTypes = entities.map((entity) => ({
    name: entity.name,
    type: entity.type,
    sentiment: entity.sentiment,
  }));
  return entityNameAndTypes;
};

module.exports = {
  getTextAnalysis,
};
