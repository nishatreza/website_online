import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.css']
})
export class CreateTaskModalComponent implements OnInit {
  changeRequestForm: FormGroup;
  
    constructor(private fb:FormBuilder) { }
 
    changeRequest(changeRequestForm){
      console.log('clicked');
      console.log(changeRequestForm.value);
    }

  ngOnInit(){
    this.changeRequestForm = this.fb.group({
      'project': ['', [
          Validators.required,
         
        ]
      ],
      'requestType': ['', [
        Validators.required,
        
        ]
      ],

      'summary': ['', [
        Validators.required,
        
        ]
      ],
      'description': ['', [
        Validators.required,
       
      ]
    ],
    'priority': ['', [
      Validators.required,
      
      ]
    ],

    'assignee': ['', [
      Validators.required,
      
      ]
    ],
    'status': ['', [
      Validators.required,
      
      ]
    ],
   

      
    });
  }

}
