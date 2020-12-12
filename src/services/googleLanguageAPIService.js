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
      type: 'OTHER',
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

const getTextAnalysis = async () => {
  const { entities } = await Promise.resolve(mockTextAnalysisResponse);
  const entityNameAndTypes = entities.map((entity) => ({ name: entity.name, type: entity.type }));
  return entityNameAndTypes;
};

module.exports = {
  getTextAnalysis,
};
