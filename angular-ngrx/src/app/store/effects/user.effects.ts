import { inject } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { EUserActions, GetUserSuccess, GetUser, GetUsersSuccess, GetUsers } from '../actions/user.actions';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../state/app.state';

@Injectable()
export class UserEffects {

    constructor(private _userService: UserService,
        private _actions$: Actions,
        private _store: Store<IAppState>) { }

    @Effect()
    getUser$ = this._actions$.pipe(
        ofType<GetUser>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this._store.pipe(select(selectedUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccess(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this._actions$.pipe(
        ofType<GetUsers>(EUserActions.GetUsers),
        switchMap(() => this._userService.getUsers()),
        switchMap((userHttp: IUserHttp)) =>
        of(new GetUsersSuccess(userHttp.users)))
    );
}
