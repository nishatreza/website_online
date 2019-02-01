import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.css']
})
export class CreateProjectModalComponent implements OnInit {
  createProjectForm: FormGroup;
  
    constructor(private fb:FormBuilder) { }


    createProject(createProjectForm){
      console.log('clicked');
      console.log(createProjectForm.value);
    }

  ngOnInit() {
    this.createProjectForm = this.fb.group({
      'name': ['', [
          Validators.required,
         
        ]
      ],
      'description': ['', [
        Validators.required,
        
        ]
      ],

      'requirements': ['', [
        Validators.required,
        
        ]
      ],
   

      
    });
  }
}
