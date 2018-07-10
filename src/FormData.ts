import * as formidable from 'formidable';

export interface FormData {
    fields: formidable.Fields;
    files: formidable.Files;
}
