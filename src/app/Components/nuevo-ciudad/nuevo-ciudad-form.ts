import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class NuevoCiudadForm {
    public form: FormGroup;
    private formBuilder: any;

    constructor() {
        this.formBuilder = new FormBuilder();
        this.buildForm();
    }

    buildForm() {
        this.form = this.formBuilder.group({
            descripcion: ['',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
        });
    }

    getForm(): FormGroup {
        return this.form;
    }

    getFormValues() {
        return this.form.value;
    }

    isValid() {
        return this.form.valid;
    }

}