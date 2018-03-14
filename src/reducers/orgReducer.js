const SET_CURRENT_ORG = 'SET_CURRENT_ORG';

const initialState = {
  currentOrg: {
    name: 'Org 1',
    someOtherStuff: 'Blabla',
    id: '123',
  },
  myOrgs: [
    {
      name: 'Org 1',
      someOtherStuff: 'Blabla',
      id: '123',
    },
    {
      name: 'Org 2',
      someOtherStuff: 'Wubaluba dub dub',
      id: '456',
    },
    {
      name: 'Org 3',
      someOtherStuff: 'Wubaluba dub dub',
      id: '456',
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ORG:
      return {
        ...state,
        currentOrg: action.payload,
      };
    default:
      return state;
  }
};
