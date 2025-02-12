import Note from '../models/note.model'

export async function createNoteService(body) {
    try {
        let note = await Note.create(body);
        return note;
    }
    catch (error) {
        throw error;
    }
}

export async function getAllNotesService() {
    try {
        const data = await Note.find();
        return data;

    } catch (error) {
        throw error;
    }
}

export async function getNoteByIdService(id) {
    try {
        const data = await Note.findById(id);
        return data;

    } catch (error) {
        throw error;
    }
}

export async function updateNoteService(id, body) {
    try {
        const data = await Note.findByIdAndUpdate(id, body, { new: true });
        return data;

    } catch (error) {
        throw error;
    }
}

export async function deleteNoteService(id) {
    try {
        const note = await Note.findById(id);
        console.log("note before: " , note);
        
       let data = note.isTrashed ? await Note.findByIdAndUpdate(id, {isTrashed: false}) : 
        await Note.findByIdAndUpdate(id, {isTrashed: true});
        return data;

    } catch (error) {
        throw error;
    }
}

