import { createNoteService, getAllNotesService, getNoteByIdService, updateNoteService, deleteNoteService, forgotPasswordService, resetPasswordService } from "../services/note.service";

export async function createNote(req, res) {
  try {
    const note = await createNoteService(req.body);
    return res.status(201).json({
      message: "Note created successfully",
      data: note,
      statusCode: 201
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getAllNotes(req, res) {
  try {
    const note = await getAllNotesService(req.body.userId);
    return res.status(201).json({
      message: "All notes fetched successfully",
      data: note,
      statusCode: 201
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function getNoteById(req, res) {
  try {
    const note = await getNoteByIdService(req.params.id);
    return res.status(201).json({
      message: "Note fetched successfully",
      data: note,
      statusCode: 201
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function updateNote(req, res) {
  try {
    const note = await updateNoteService(req.params.id, req.body);
    return res.status(201).json({
      message: "Note updated successfully",
      data: note,
      statusCode: 200
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export async function deleteNote(req, res) {
  try {
    const note = await deleteNoteService(req.params.id);
    return res.status(200).json({
      message: "Note deleted successfully",
      data: note,
      statusCode: 200
    });
  }
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

