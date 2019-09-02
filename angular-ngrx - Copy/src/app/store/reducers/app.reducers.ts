import { initialConfigState, IConfigState } from '../state/Config.state';
import { EConfigActions, ConfigActions } from '../actions/Config.actions';
import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducers';
import { configReducers } from './config.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    users: userReducers,
    config: configReducers
};