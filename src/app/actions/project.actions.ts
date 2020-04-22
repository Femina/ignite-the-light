import { Injectable } from '@angular/core';
import {Action} from '@ngrx/store';
import {Project} from '../models/project.model'

export const GET_DATA           = '[PROJECT] Get'
export const GET_SIZE           = '[PROJECT] Size'

export class GetProjectData implements Action
{
    readonly type = GET_DATA

    constructor(public payload: Project[]){}
}

export class GetSize implements Action
{
    readonly type = GET_SIZE

    constructor(public payload: number){}
}

export type Actions = GetProjectData | GetSize ;


/**
 * @author Femina
 * This is the sample action method to show the implementation strategy
 * If it is needed, CRUD operations and other action methods we can as it goes by.
 */