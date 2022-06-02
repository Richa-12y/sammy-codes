//Actions

export const TITLE = "TITLE";
export const DATA_VALUE = "DATA_VALUE";
export const BUY_COFEE = "BUY_COFEE";
export const BUY_TEA = "BUY_TEA"; //step seven
export const BUY_SOMETHING = "BUY_SOMETHING";
export const BUY_FOOD = "BUY_FOOD";
export const BUY_FEED = "BUY_FEED";

//action creators
//new action creator
//data is arugment
export function parentThreeData(data) {
  //step eight
  return {
    type: BUY_TEA,
    contentP: data,
  };
}
export function domoData(data) {
  console.log("domoData", data);

  return {
    type: BUY_SOMETHING,
    contentD: data,
  };
}

export function initData(data) {
  console.log("initData", data);
  return {
    type: TITLE,
    payload: data,
  };
}
export function clickData(data) {
  console.log("clickData", data);
  return {
    type: DATA_VALUE,
    payload: data,
  };
}

//profile initial data
export function profileInitialData(data) {
  console.log("profileInitialData", data);
  return {
    type: BUY_COFEE,
    content: data,
  };
}

export function parentSixData(data) {
  console.log("parentSixData", data);
  return {
    type: BUY_FOOD,
    contentSix: data,
  };
}

export function parentSixDataNew(data) {
  console.log("parentSixDataNew", data);
  return {
    type: BUY_FEED,
    contentSeven: data,
  };
}
//initial state
const initialState = {
  content: [],
  dataVal: [],
  newDataVal: [],
  newDataForParentThree: [], //step-9
  dataForDomo: [],
  dataForParentSseven: [],
  dataForParentSsevenNew: [],
};

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TITLE:
      return {
        ...state,
        content: action.payload,
      };
    case DATA_VALUE:
      return {
        ...state,
        dataVal: action.payload,
      };
    case BUY_COFEE:
      return {
        ...state,
        newDataVal: action.content,
      };
    case BUY_TEA: //step-10
      return {
        ...state,
        newDataForParentThree: action.contentP, //here we have to change from intialState obje and after action we have to put contentP obje from parentThreeData function
      };
    case BUY_SOMETHING:
      return {
        ...state,
        dataForDomo: action.contentD,
      };
    case BUY_FOOD:
      return {
        ...state,
        dataForParentSseven: action.contentSix,
      };
    case BUY_FEED:
      return {
        ...state,
        dataForParentSsevenNew: action.contentSeven,
      };
    default:
      return state;
  }
};

export default reducer;
