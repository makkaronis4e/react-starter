import Axios from 'axios';


const API_BASE_URL = 'http://api.icndb.com';
const RANDOM_JOKES_URL = `${API_BASE_URL}/jokes/random`;
const JOKE_CATEGORIES_URL = `${API_BASE_URL}/categories`;

const LOAD_START = 'App/AppState/LOAD_START';
const CAT_LOAD_SUCCESS = 'App/AppState/CAT_LOAD_SUCCESS';
const LOAD_SUCCESS = 'App/AppState/LOAD_SUCCESS';
const LOAD_ERROR = 'App/AppState/LOAD_ERROR';

const initialState = {
  isLoading: true,
  jokes: [],
  categories: []
};

export function loadCategories() {
  return async (dispatch) => {
    dispatch({ type: LOAD_START });

    try {
      const res = await Axios.get(`${JOKE_CATEGORIES_URL}`);
      const data = res.data || {};
      if (data.type !== 'success') {
        throw new Error('API returned an error.');
      }
      const categories = data.value || [];
      console.log('categories', categories);
      dispatch({ type: CAT_LOAD_SUCCESS, categories });
    } catch (error) {
      console.log(error);
      dispatch({ type: LOAD_ERROR });
    }
  };
}

export function loadData(jokesAmount) {
  return (dispatch) => {
    dispatch({ type: LOAD_START });

    const jokee = !jokesAmount ? 10 : jokesAmount;

    Axios.get(`${RANDOM_JOKES_URL}/${jokee}?escape=javascript`)
      .then(res => res.data || {})
      .then((data) => {
        if (data.type !== 'success') {
          throw new Error('API returned an error.');
        }
        return data;
      })
      .then(data => data.value || [])
      .then((jokes) => {
        console.log('jokes', jokes);
        dispatch({ type: LOAD_SUCCESS, jokes });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: LOAD_ERROR });
      });
  };
}

export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_START:
      return Object.assign({}, state, { isLoading: true });

    case CAT_LOAD_SUCCESS:
      return Object.assign({}, state, {
        categories: action.categories
      });

    case LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        jokes: action.jokes
      });

    default:
      return Object.assign({}, state);
  }
}

export function load(params) {
  return (dispatch) => {
    dispatch({ type: LOAD_START });
    const { number, explicit, nerdy } = params;

    let cat = '';

    if (!explicit && nerdy) {
      cat = '?exclude=[nerdy]';
    } else if (!nerdy && explicit) {
      cat = '?exclude=[explicit]';
    } else if (nerdy && explicit) {
      cat = '?exclude=[explicit, nerdy]';
    } else { cat = ''; }

    console.log('-----', cat);

    const url = `${RANDOM_JOKES_URL}/${number}?escape=javascript${cat}`;

    Axios.get(url)
      .then(res => res.data || {})
      .then((data) => {
        if (data.type !== 'success') {
          throw new Error('API returned an error.');
        }
        return data;
      })
      .then(data => data.value || [])
      .then((jokes) => {
        console.log('-=-=-=-=-=-=-==', jokes);
        dispatch({ type: LOAD_SUCCESS, jokes });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: LOAD_ERROR });
      });
  };
}
