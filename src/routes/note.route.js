import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as noteController from '../controllers/note.controller';

const router = express.Router();

router.post('/create', userAuth, noteController.createNote);
router.get('/getallnotes', userAuth, noteController.getAllNotes);
router.get('/getnotebyid/:id', userAuth, noteController.getNoteById);
router.put('/update/:id', userAuth, noteController.updateNote);
router.delete('/delete/:id', userAuth, noteController.deleteNote);
export default router;
