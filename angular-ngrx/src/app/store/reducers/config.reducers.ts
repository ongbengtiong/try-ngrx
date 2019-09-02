import { initialConfigState, IConfigState } from '../state/Config.state';
import { EConfigActions, ConfigActions } from '../actions/Config.actions';

export const configReducers = (
    state = initialConfigState,
    action: ConfigActions
): IConfigState => {
    switch (action.type) {
        case EConfigActions.GetConfigSuccess: {
            return {
                ...state,
                config: action.payload
            };
        }
        default:
            return state;
    }
};