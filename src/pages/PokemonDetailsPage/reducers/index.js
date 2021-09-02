import { handleActions } from "redux-actions";

import * as actions from '../actions';

const defaultState = {
   isLoading: false,
   errors: null,
   pokemonInfo: {},
}

const pokemonDetailsReducer = handleActions(
   {
      [actions.GET_DETAILS_REQUEST]: (state) => ({
         ...state,
         isLoading: true,
      }),
      [actions.GET_DETAILS_SUCCESS]: (state, {payload}) => ({
         ...state,
         isLoading: false,
         pokemonInfo: {...payload.response},
      }),
      [actions.GET_DETAILS_FAIL]: (state, {payload}) => ({
         ...state,
         isLoading: false,
         errors: payload.response,
      }),
   }, defaultState
);

export default pokemonDetailsReducer;