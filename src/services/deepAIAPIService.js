const deepai = require('deepai');

const fakeJeansReviewResponse = {
  output: 'A positive review of jeans found that they "fit fine, quality of shoes did not last over a year and wore well. On the whole, shoes are noticeably heavier and much more expensive than a khaki."\n'
    + '\n'
    + 'But the product was a perfect size because it fits people.\n'
    + '\n'
    + "For instance, I was among those who was outraged that I was walking out for lunch when they were sitting in McDonald's. That wasn't being shocking, it was the immediate reaction of my friends.\n"
    + '\n'
    + `"I said, 'No, I'm afraid I'll lose my money,'" another guy said. "They said, 'Oh I need 
to go to jail.' And I was very wrong, that's what I did.\n`
    + '\n'
    + '"If people get their heads around saying, \'You really need to go buy a pair of shoes,\' they should know better."\n'
    + '\n'
    + 'In the end, I was left with a good reason.\n'
    + '\n'
    + '"A lot of people might not agree with it," said Decca. She believes that people feel guilty for buying a pair of shoes because they\'re putting so much stress in their feet because they don\'t fit the shoe.\n'
    + '\n'
    + "Other prominent people with the same belief also agree that it shouldn't matter. Decca is in the process of moving her business to Boston. She had to go to court because she could not afford to pay for her own shoe repair.\n"
    + '\n'
    + 'A decade ago, she could afford a shoe repair shop. Now, her shoes are in stores in Boston, Philadelphia, Los Angeles, Chicago and a few other locations. The company has an in-house repair team that is responsible for her work in the kitchen, the barbershops, the theater, and the restaurant scene.\n'
    + '\n'
    + 'The problem is that many of the people Decca believes are just plain underachievers who think the best way to live is to work the way they are.\n'
    + '\n'
    + '"You want to wear a sweater for a job," she said. "You want to wear a tie with something nice to wear."\n'
    + '\n'
    + 'The idea of dressing as someone who has an advantage in these situations is completely ludicrous. Being in the person of a wealthy person, you just want to have an edge.\n'
    + '\n'
    + 'It worked for Decca at some point. Her business began as a small boutique in Seattle that had a long list of retail stores that were in-store and had a wide variety of products and services. It was a small niche that gave Decca a unique business and the opportunity to expand the brand to a network of companies across the country.\n'
    + '\n'
    + '"People have to go in to shop and choose between a personal and corporate type of shopping," she said. "Like everything else, they have to go into a business."\n'
    + '\n'
    + 'But Decca was not always the buyer.\n'
    + '\n'
    + '"You could sit inside the store and have some kind of experience," she said. "Just looking at it, you knew there was a possibility you might find it. But it wasn\'t always a fun thing to put yourself on.\n'
    + '\n'
    + `"There weren't people of different personalities to play with. I don't know what people 
thought of me," she added.\n`
    + '\n'
    + "Even Decca's friends are upset that someone didn't pick up Decca's shoes just because he was wearing a tie with a white tuxedo in it. But she believes this particular shoe has become a selling point and a way to have customers discover the brand's products and are used, even if the clothes themselves aren't.\n"
    + '\n'
    + '"People are really shocked and upset by this phenomenon," her mom said.\n'
    + '\n'
    + '"You have to live with it," her dad said. "I am an avid shopper, but I think it\'s a little scary for me to sit outside the store when I have an idea of what other people think of me."\n'
    + '\n'
    + "What is perhaps most concerning to those in the community is that they aren't alone.\n"
+ '\n'
    + '"It\'s about a whole lot of people who are really struggling under pressure," said Don Taylor, an artist who runs the Boston Seesaw clothing line. "It shows that the people we\'ve been around from the beginning of the business are not ready to accept that there are certain aspects of life that they still have to live. They want to be accepted and protected."\n'
    + '\n'
    + "But Taylor has no idea who these people are. His wife, Loretta Taylor, is the co-owner of the Boston Seesaw Shophouse. Loretta, a Boston writer who lives in Boston, doesn't know why her mother would want to sell her shoe.\n"
    + '\n'
    + '"I didn\'t know her first name," Loretta said. "She\'s so sweet, so funny. She lives in Boston, right now. She\'s had two kids. She has two children. She loves to cook a little. I love to listen to music, listen to kids, but there\'s something wonderful about living in Boston."\n'
    + '\n'
    + 'Taylor was born June 12, 2007, in Boston. She was the fourth of a number of people who bought',
  id: 'b4eb4ab0-659f-4eb2-8846-f1330a458df4',
};

const fakeBootsReviewResponse = {
  output: 'A positive review of boots found that they "will keep Mr. Woud too much of an ear out and his head up".\n'
    + '\n'
    + 'In his defense, the Army spokesman also said that "the injuries he reportedly suffered when he was attacked are not consistent with an ISIL combat mission as described in our reports".\n'
    + '\n'
    + 'Eight additional Iraqi soldiers were sent to support the air strikes, he said.\n'
    + '\n'
    + "A woman, six children and four military members of the Army were destroyed by fire at Baghdad's U.N. headquarters, forcing officials inside to evacuate their families from a few neighborhoods in Baghdad, as reported by Haftar on Saturday night.\n"
    + '\n'
    + 'A security source said it had been hit by an improvised explosive device as it was pressed into an intersection with the main road at Thar, which contains about 50,000 people.\n'
    + '\n'
    + 'An image provided by a U.S. aerial vehicle shows damaged buildings, damaged cars, debris and damaged communications tower behind the Humvees destroyed by attack, after an Iraqi escort group penetrated al-Hukr, Iraq May 7, 2017. REUTERS/Ahmed Abedini/Pool\n'
    + '\n'
    + "The U.S. forces' presence in Baghdad is expected to be a crucial factor in the upcoming Iraqi elections.\n"
    + '\n'
    + 'In a statement on Sunday evening, U.S. Special Representative for Near East Policy Jim Mattis said the operation was also a "tough, robust and effective move" "for the international community to secure Iraq\'s transition to a democratic system of governance, and restore security and stability".\n'
    + '\n'
    + '"As we look ahead to elections that will give the Iraqi people the sense of security they deserve in their country, the U.S. has a responsibility to do just that," he said.\n'
    + '\n'
    + 'But the Pentagon had no immediate plans for a briefing of the top U.S. officials, he wrote.\n'
    + '\n'
    + '"We expect them to present a clear choice in the form of an urgent joint statement to the Iraqi government," Mattis wrote. "As such, we are deeply committed to working with the Iraqi government to restore basic security and stability to this country, and we will have a wide range of activities in the event of a prompt, successful, and successful response."\n'
    + '\n'
    + 'The U.S. has been using force to bolster its support for the government in Baghdad for at least two years. It is also negotiating with Iran to stop its nuclear programs.\n'
    + '\n'
    + 'Some of the more than 5,000 troops, advisers and personnel deployed in the fight against ISIS, were taken over by the Islamic State group, but the group has taken to attacking other coalition-savvy localities and areas including Iraq itself.\n'
    + '\n'
    + 'U.S. officials declined to discuss what that operation might mean for the Iraqi peace effort, and what military advice the U.S. administration receives from Iraqi officials.<|endoftext|>The Senate Finance Committee on Thursday approved a bill that would force major tech companies to provide tax codes for the companies to take advantage of tax law changes they have implemented.\n'
    + '\n'
    + 'The legislation, Senate Bill 1107, which was approved on Thursday by the House Finance Committee, would force tech giants, including Alphabet, Google, Uber, Xandr, Amazon, and Apple to provide tax rules for tech companies using tax havens to avoid collecting tax returns.\n'
    + '\n'
    + 'The bill also would prohibit companies from getting in-house tax-coddling lawmakers using the tax code to tax companies. A provision to bolster the legislation was amended.\n'
    + '\n'
    + 'The bill was widely supported in the tech world, although it was blocked in April by the Senate, according to a letter from House Finance Chairman Peter Navarro of New York.\n'
    + '\n'
    + '"The House bill repeals the federal subsidy rule and eliminates the rule which permits the federal government to pay tax on any amount of business tax deduction (EITC) for the tax deduction to be paid in accordance with law," Navarro said in the letter to the committee. "This legislation will create even more loopholes in the tax deduction and allow these industries to operate under a taxable, more equitable, regulatory or tax free set of rules."\n'
    + '\n'
    + 'The bill contains two provisions that are expected to have been advanced to the Senate. These are known as the Tax Section 1535 and the exemption for companies that "exceed the income tax rate or dividends set by the tax department under this section to be paid on earnings not earned in excess of that taxable income." The new provision would require a specific tax rate of 12 percent that is paid annually.\n'
    + '\n'
    + 'The bill is aimed at reducing the rate set by manufacturers and retailers but would also allow businesses to use existing rules for paying sales tax at a lower rate than they are paid in existing EITC exemptions.\n'
    + '\n'
    + 'Companies would not be able to spend up to $10 billion over five years to implement tax changes they want to make to the new tax code. The bill states that manufacturers could now use the new exemption to pay wages as a percentage of income. Instead of doing that, they would be required to pay income taxes as a percentage. The bill would also ensure that corporations',
  id: '38745339-0eee-48f4-b3c2-af86ae27e006',
};

const createProductReview = async (productName) => {
  // deepai.setApiKey(TODO: ENV VAR);
  // const resp = await deepai.callStandardApi('text2img', {
  //   text: `A positive review of ${productName}`,
  // });
  // const resp = await deepai.callStandardApi('text-generator', {
  //   text: `A positive review of ${productName}`,
  // });
  const reviewToProvide = productName === 'jeans' ? fakeJeansReviewResponse : fakeBootsReviewResponse;
  return Promise.resolve(reviewToProvide.output);
};

module.exports = {
  createProductReview,
};
