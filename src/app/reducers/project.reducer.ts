import {Action} from '@ngrx/store'
import {Project} from '../models/project.model'
import * as ProjectActions from '../actions/project.actions'

const initialState :Project = {
        name: 'Bulgari Apartment, Dubai',
        company: 'Fam interiors',
        industry: 'Apartment',
        start_date: 2 / 1 / 18,
        end_date: 2 / 3 / 19,
        status: 'Done',
        address: 'Dubai',
        contractors: ['Fam interiors'],
        designers: ['Fam interiors'],
        clients: ['Fam interiors'],
        architects: ['Fam interiors'],
        thumbnail_img_url:"string"
}

export function reducer(state: Project[] = [initialState],action: ProjectActions.Actions)
{
    switch(action.type)
    {
        case ProjectActions.GET_DATA:
            return [...state,action.payload]
        default:
            return state;
    }
}