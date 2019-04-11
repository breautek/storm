import * as formidable from 'formidable';
export interface IFormData {
    fields: formidable.Fields;
    files: formidable.Files;
}
