import { State, StateContext, Selector, Action, createSelector } from '@ngxs/store';
import { NotesDetailsStateModel } from './notes.model';
import { Notes } from './notes.actions';

const INITIAL_STATE_DETAILS: NotesDetailsStateModel = {
  PDFs: [],
  Excel: []
};

@State<NotesDetailsStateModel>({
  name: 'notes',
  defaults: INITIAL_STATE_DETAILS
})
export class NoteDetailsState {
  constructor() {}

  @Selector()
  public static getPDFs(state: NotesDetailsStateModel) {
    return state.PDFs;
  }

  @Selector()
  public static getExcel(state: NotesDetailsStateModel) {
    return state.Excel;
  }

  @Action(Notes.PDF)
  public getNoteList(ctx: StateContext<NotesDetailsStateModel>, action: Notes.PDF) {
    const state = ctx.getState();
    return ctx.patchState({
      PDFs: [...state.PDFs, action.fileDetails]
    });
  }

  @Action(Notes.Excel)
  public createNote(ctx: StateContext<NotesDetailsStateModel>, action: Notes.Excel) {
    const state = ctx.getState();

    return ctx.patchState({
      Excel: [...state.Excel, action.noteDetails]
    });
  }
}
