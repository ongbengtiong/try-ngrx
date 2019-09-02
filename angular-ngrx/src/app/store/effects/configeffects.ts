import { Injectable } from '@angular/core';
import { EConfigActions, GetConfigSuccess, GetConfig } from '../actions/config.actions';
import { of } from 'rxjs';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { IConfig } from 'src/app/models/config.interface';

@Injectable()
export class ConfigEffects {

    constructor(private _configService: ConfigService,
        private _actions$: Actions) { }

    @Effect()
    getConfig$ = this._actions$.pipe(
        ofType<GetConfig>(EConfigActions.GetConfig),
        switchMap(() => this._configService.getConfig()),
        switchMap((config: IConfig) => {
            return of(new GetConfigSuccess(config));
        });
    );
}
