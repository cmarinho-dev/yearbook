import { ChangeDetectionStrategy, Component, Input, type WritableSignal } from '@angular/core';
import { HlmCardImports } from "@spartan-ng/helm/card";
import type { Student } from '../../interfaces/student';

@Component({
  selector: 'app-students-grid-item',
  imports: [HlmCardImports],
	changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './students-grid-item.html',
})
export class StudentsGridItem {
  @Input() public student!: Student;
  @Input() _dialogState!: WritableSignal<'open' | 'closed'>;
}