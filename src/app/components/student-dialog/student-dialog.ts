import { Component, Input, type WritableSignal } from '@angular/core';
import { HlmDialogImports } from '@spartan-ng/helm/dialog';
import type { Student } from '../../interfaces/student';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'app-student-dialog',
  imports: [HlmDialogImports, HlmButtonImports],
  templateUrl: './student-dialog.html'
})
export class StudentDialog {
  @Input() selectedStudent: Student | null = null;
  @Input() _dialogState!: WritableSignal<'open' | 'closed'>;
}