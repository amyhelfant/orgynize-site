let fakePartyData = [
  {name: 'Fetish Tribe'},
  {name: 'Chemistry'},
  {name: 'Lady Euphoria'},
  {name: 'The Wink'},
  {name: 'NSFW'},
  {name: 'Hacienda House'},
  {name: 'Playscapes'},
  {name: 'Wonderland'},
  {name: 'Skirt Club'},
  {name: 'Inferno'},
];

fakePartyData = fakePartyData.map(party => ({
  ...party,
  company: 'Sex Inc.',
  date: '10/10',
  neighborhood: 'Manhattan',
  privateAddress: '24 Hollow Drive, New York, NY 10011',
  policyLinks: [1, 2],
  alcoholPolicy: 'BYOB',
  playType: 'Hardcore',
}));

type AlcoholPolicy = 'byob' | 'for_sale' | 'none';

type Party = {|
  name: string,
|};

type PartiesState = {|
  parties: Array<Party>,
|};

const INITIAL_STATE: PartiesState = {
  parties: fakePartyData,
};

export default function parties(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  };
};