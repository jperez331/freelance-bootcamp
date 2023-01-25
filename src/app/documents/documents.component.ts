import { Component } from '@angular/core';
import { Document } from './documents';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent {
  pageTitle: string = 'Document Dashboard';
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'alsdhalsjd',
      file_url: 'http://google.com',
      updated_at: '11/11/11',
      image_url: 'http://youtube.com',
    },
    {
      title: 'My First Doc',
      description: 'alsdhalsjd',
      file_url: 'http://google.com',
      updated_at: '11/11/11',
      image_url: 'http://youtube.com',
    },
    {
      title: 'My First Doc',
      description: 'alsdhalsjd',
      file_url: 'http://google.com',
      updated_at: '11/11/11',
      image_url: 'http://youtube.com',
    },
  ];
}
