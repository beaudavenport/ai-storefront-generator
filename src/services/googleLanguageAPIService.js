const getTextAnalysis = async () => {
  // axios call to google analysis
  // set api key env var
  const { entities } = await Promise.resolve({ entities: [] });
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
