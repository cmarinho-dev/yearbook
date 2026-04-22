import { ChangeDetectionStrategy, Component, ViewEncapsulation, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { AppSidebar } from "./components/sidebar/sidebar";
import { Header } from "./components/header/header";
import { StudentsGrid } from "./components/students-grid/students-grid";
import { ClassPresentation } from "./components/class-presentation/class-presentation";
import { HlmSeparator } from "@spartan-ng/helm/separator";
import { HlmScrollAreaImports } from "@spartan-ng/helm/scroll-area";
import { HlmH2 } from "@spartan-ng/helm/typography";

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, HlmSidebarImports, HlmScrollAreaImports, AppSidebar, Header, StudentsGrid, ClassPresentation, HlmSeparator, HlmH2],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		class: 'block [--header-height:--spacing(14)]',
	},  
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('yearbook');
}